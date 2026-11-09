"use strict";
const crypto = require("node:crypto");
const { get, put } = require("@vercel/blob");

const COOKIE = "nirvo_account";
const SESSION_SECONDS = 7 * 24 * 60 * 60;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (res, status, data) => {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store, private");
  res.end(JSON.stringify(data));
};

const secret = () => process.env.NIRVO_SESSION_SECRET || "";
const signature = payload => crypto.createHmac("sha256", secret()).update(payload).digest("base64url");
const safeEqual = (a, b) => {
  const x = Buffer.from(String(a || ""));
  const y = Buffer.from(String(b || ""));
  return x.length === y.length && crypto.timingSafeEqual(x, y);
};
const accountPath = email => "accounts/" + crypto.createHash("sha256").update(email).digest("hex") + ".json";
const ipOf = req => String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "unknown";

function originAllowed(req) {
  const origin = req.headers.origin;
  if (!origin) return true;
  try {
    const expected = String(req.headers["x-forwarded-host"] || req.headers.host || "").toLowerCase();
    return new URL(origin).host.toLowerCase() === expected;
  } catch { return false; }
}
function cookieValue(req) {
  const item = String(req.headers.cookie || "").split(";").map(x => x.trim()).find(x => x.startsWith(COOKIE + "="));
  return item ? decodeURIComponent(item.slice(COOKIE.length + 1)) : "";
}
function createSession(user) {
  const payload = Buffer.from(JSON.stringify({
    sub: user.id, email: user.email, name: user.name,
    exp: Math.floor(Date.now() / 1000) + SESSION_SECONDS
  })).toString("base64url");
  return payload + "." + signature(payload);
}
function readSession(req) {
  if (!secret()) return null;
  const parts = cookieValue(req).split(".");
  if (parts.length !== 2 || !safeEqual(parts[1], signature(parts[0]))) return null;
  try {
    const data = JSON.parse(Buffer.from(parts[0], "base64url").toString("utf8"));
    if (!data.sub || !data.email || !data.exp || data.exp < Math.floor(Date.now() / 1000)) return null;
    return data;
  } catch { return null; }
}
function setSession(res, user) {
  res.setHeader("Set-Cookie", COOKIE + "=" + encodeURIComponent(createSession(user)) +
    "; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=" + SESSION_SECONDS);
}
function clearSession(res) {
  res.setHeader("Set-Cookie", COOKIE + "=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0");
}
async function readAccount(email) {
  try {
    const blob = await get(accountPath(email), { access: "private" });
    if (!blob) return null;
    return JSON.parse(await new Response(blob.stream).text());
  } catch (error) {
    if (error?.status === 404 || error?.code === "BLOB_NOT_FOUND") return null;
    throw error;
  }
}
function passwordHash(password, salt) {
  return new Promise((resolve, reject) => {
    crypto.scrypt(password, salt, 64, { N: 16384, r: 8, p: 1, maxmem: 64 * 1024 * 1024 },
      (error, key) => error ? reject(error) : resolve(key.toString("base64url")));
  });
}
function publicUser(user) {
  return { id: user.id, name: user.name, email: user.email, createdAt: user.createdAt };
}
function tooMany(req, res) {
  const now = Date.now();
  global.__nirvoAccountAttempts ||= new Map();
  const key = ipOf(req), entry = global.__nirvoAccountAttempts.get(key) || { count: 0, reset: now + 15 * 60 * 1000 };
  if (entry.reset <= now) { entry.count = 0; entry.reset = now + 15 * 60 * 1000; }
  entry.count++;
  global.__nirvoAccountAttempts.set(key, entry);
  if (entry.count > 12) {
    json(res, 429, { error: "Too many attempts. Please wait a little and try again." });
    return true;
  }
  return false;
}

module.exports = async function account(req, res) {
  if (req.method === "GET") {
    if (!secret()) return json(res, 503, { error: "Account sign-in is being configured. Please try again shortly." });
    const session = readSession(req);
    if (!session) return json(res, 200, { signedIn: false });
    try {
      const user = await readAccount(session.email);
      if (!user || user.id !== session.sub) { clearSession(res); return json(res, 200, { signedIn: false }); }
      return json(res, 200, { signedIn: true, user: publicUser(user) });
    } catch { return json(res, 503, { error: "Account storage is temporarily unavailable." }); }
  }
  if (req.method !== "POST") return json(res, 405, { error: "Method not allowed." });
  if (!originAllowed(req)) return json(res, 403, { error: "Request origin could not be verified." });
  if (!secret() || !process.env.BLOB_READ_WRITE_TOKEN) return json(res, 503, { error: "Account services are not configured yet." });

  const body = req.body && typeof req.body === "object" ? req.body : {};
  const action = String(body.action || "");
  if (action === "logout") { clearSession(res); return json(res, 200, { ok: true }); }
  if (tooMany(req, res)) return;
  const email = String(body.email || "").trim().toLowerCase();
  const password = String(body.password || "");
  if (!emailPattern.test(email) || email.length > 254) return json(res, 400, { error: "Enter a valid email address." });
  if (password.length < 10 || password.length > 128) return json(res, 400, { error: "Password must be between 10 and 128 characters." });

  try {
    let user;
    if (action === "signup") {
      const name = String(body.name || "").trim().replace(/\s+/g, " ");
      if (name.length < 2 || name.length > 60) return json(res, 400, { error: "Enter your name (2–60 characters)." });
      const salt = crypto.randomBytes(16).toString("base64url");
      const record = {
        id: crypto.randomUUID(), name, email, salt,
        passwordHash: await passwordHash(password, salt),
        createdAt: new Date().toISOString()
      };
      const path = accountPath(email);
      if (await readAccount(email)) return json(res, 409, { error: "An account with this email already exists. Sign in instead." });
      try {
        await put(path, JSON.stringify(record), {
          access: "private", contentType: "application/json",
          addRandomSuffix: false, allowOverwrite: false
        });
      } catch (error) {
        if (error?.status === 409 || error?.code === "BLOB_ALREADY_EXISTS") return json(res, 409, { error: "An account with this email already exists. Sign in instead." });
        throw error;
      }
      user = record;
    } else if (action === "login") {
      user = await readAccount(email);
      const candidate = user ? await passwordHash(password, user.salt) : await passwordHash(password, "nirvo-invalid-account-salt");
      if (!user || !safeEqual(candidate, user.passwordHash)) return json(res, 401, { error: "Email or password is incorrect." });
    } else {
      return json(res, 400, { error: "Choose sign in or create account." });
    }
    global.__nirvoAccountAttempts?.delete(ipOf(req));
    setSession(res, user);
    return json(res, 200, { ok: true, user: publicUser(user), message: action === "signup" ? "Your NIRVO account has been created." : "Welcome back to NIRVO." });
  } catch (error) {
    return json(res, 500, { error: "We could not complete this request. Please try again." });
  }
};

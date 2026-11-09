(() => {
 const $ = id => document.getElementById(id);
 const form = $("accountForm"), forms = $("accountForms"), dashboard = $("accountDashboard");
 let mode = "login", busy = false;
 const message = (el, text, kind = "") => { el.textContent = text; el.className = "account-message" + (kind ? " " + kind : ""); };
 function setMode(next) {
  mode = next;
  const signup = mode === "signup";
  $("loginTab").classList.toggle("active", !signup);
  $("signupTab").classList.toggle("active", signup);
  $("loginTab").setAttribute("aria-selected", String(!signup));
  $("signupTab").setAttribute("aria-selected", String(signup));
  $("nameField").hidden = !signup;
  $("accountName").required = signup;
  $("accountPassword").autocomplete = signup ? "new-password" : "current-password";
  $("accountTitle").innerHTML = signup ? 'Start something <em>new.</em>' : 'Welcome <em>back.</em>';
  $("accountSubtitle").textContent = signup ? "Create your NIRVO account in a moment." : "Sign in to your NIRVO account.";
  $("accountSubmit").querySelector("span").textContent = signup ? "Create my account" : "Sign in to NIRVO";
  $("passwordNote").textContent = signup ? "Choose at least 10 characters. A longer, unique password is safer." : "Use the password you created for NIRVO.";
  message($("accountMessage"), "");
 }
 function showDashboard(user) {
  forms.hidden = true; dashboard.hidden = false;
  $("dashboardName").innerHTML = 'You’re <em>connected.</em>';
  $("dashboardEmail").textContent = user.email;
  $("accountAvatar").textContent = (user.name || "N").trim().charAt(0).toUpperCase();
  $("accountAvatar").setAttribute("aria-label", "Account for " + user.name);
  $("dashboardName").setAttribute("data-name", user.name);
  $("dashboardName").innerHTML = 'Welcome, <em>' + escapeText(user.name.split(" ")[0]) + '.</em>';
 }
 function escapeText(value) {
  return String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 }
 async function checkSession() {
  try {
   const r = await fetch("/api/account", { credentials: "same-origin", cache: "no-store" });
   const data = await r.json();
   if (r.ok && data.signedIn && data.user) showDashboard(data.user);
  } catch {}
 }
 $("loginTab").addEventListener("click", () => setMode("login"));
 $("signupTab").addEventListener("click", () => setMode("signup"));
 form.addEventListener("submit", async event => {
  event.preventDefault();
  if (busy) return;
  const name = $("accountName").value.trim();
  const email = $("accountEmail").value.trim();
  const password = $("accountPassword").value;
  if (mode === "signup" && name.length < 2) return message($("accountMessage"), "Please enter your name.", "error");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return message($("accountMessage"), "Enter a valid email address.", "error");
  if (password.length < 10) return message($("accountMessage"), "Password must be at least 10 characters.", "error");
  busy = true;
  const button = $("accountSubmit"); button.disabled = true;
  button.querySelector("span").textContent = mode === "signup" ? "Creating your account…" : "Signing you in…";
  message($("accountMessage"), "Connecting securely…");
  try {
   const response = await fetch("/api/account", {
    method: "POST", credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: mode, name, email, password })
   });
   const data = await response.json();
   if (!response.ok) throw new Error(data.error || "Could not complete your request.");
   showDashboard(data.user);
  } catch (error) {
   message($("accountMessage"), error.message || "Connection failed. Please try again.", "error");
   button.querySelector("span").textContent = mode === "signup" ? "Create my account" : "Sign in to NIRVO";
  } finally { busy = false; button.disabled = false; }
 });
 $("accountSignout").addEventListener("click", async () => {
  const button = $("accountSignout"); button.disabled = true; button.textContent = "Signing out…";
  try {
   const response = await fetch("/api/account", { method: "POST", credentials: "same-origin", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "logout" }) });
   if (!response.ok) throw new Error();
   dashboard.hidden = true; forms.hidden = false; form.reset(); setMode("login");
  } catch { message($("dashboardMessage"), "Could not sign out. Please retry.", "error"); }
  finally { button.disabled = false; button.textContent = "Sign out"; }
 });
 $("accountYear").textContent = new Date().getFullYear();
 setMode("login");
 checkSession();
})();
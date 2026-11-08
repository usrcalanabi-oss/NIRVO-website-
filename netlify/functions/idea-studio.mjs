export default async (request) => {
  if (request.method !== "POST") return Response.json({ error: "Use POST to generate a concept." }, { status: 405 });
  const apiKey = Netlify.env.get("OPENAI_API_KEY");
  if (!apiKey) return Response.json({ error: "NIRVO AI needs its secure API connection. Add OPENAI_API_KEY in Netlify → Site configuration → Environment variables, with Functions scope, then redeploy." }, { status: 503 });
  let body;
  try { body = await request.json(); } catch { return Response.json({ error: "Please send a valid idea description." }, { status: 400 }); }
  const idea = String(body.idea || "").trim().slice(0, 3000);
  if (idea.length < 12) return Response.json({ error: "Please describe the idea in at least 12 characters." }, { status: 400 });
  const domain = String(body.domain || "Surprise me").slice(0, 80);
  const level = String(body.level || "Practical prototype").slice(0, 80);
  const system = "You are NIRVO's product innovation engineer. Create original, practical technology product concepts. Do not merely answer enquiries. Convert the user's prompt into a structured concept suitable for early-stage engineering. Be honest: clearly label assumptions, avoid claiming validation, certifications, supplier quotes, or guaranteed performance. Prefer modular, repairable, safe designs. For electronics include sensible components and note power/safety concerns. Return ONLY valid JSON with keys name, summary, problem, features (array), architecture (array), components (array), roadmap (array), validation (array), next_step. Give concrete detail, no markdown fences.";
  const user = "Idea: " + idea + "\nTechnology direction: " + domain + "\nBuild ambition: " + level + "\nCreate a differentiated product concept and a staged prototype plan. Include plausible components but do not invent exact prices.";
  try {
    const upstream = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Authorization": "Bearer " + apiKey, "Content-Type": "application/json" },
      body: JSON.stringify({ model: "gpt-4o-mini", temperature: 0.85, response_format: { type: "json_object" }, messages: [{ role: "system", content: system }, { role: "user", content: user }] })
    });
    const result = await upstream.json();
    if (!upstream.ok) return Response.json({ error: "The AI provider could not complete the request. Check the API key, account access and billing configuration." }, { status: 502 });
    const raw = result.choices?.[0]?.message?.content;
    if (!raw) return Response.json({ error: "The AI returned an empty response. Please try again." }, { status: 502 });
    return Response.json({ idea: JSON.parse(raw) });
  } catch {
    return Response.json({ error: "Could not reach the AI service. Please try again." }, { status: 502 });
  }
};
export const config = { path: "/.netlify/functions/idea-studio", method: "POST", rateLimit: { action: "rate_limit", aggregateBy: ["ip"], windowSize: 60, windowLimit: 8 } };

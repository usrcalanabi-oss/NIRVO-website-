export default async (request) => {
  if (request.method !== "POST") return Response.json({ error: "Use POST to send an enquiry." }, { status: 405 });
  const apiKey = Netlify.env.get("OPENAI_API_KEY");
  if (!apiKey) return Response.json({ error: "NIRVO Assistant is temporarily offline. Please contact usrcalanabi@gmail.com or WhatsApp +91 94476 82486." }, { status: 503 });
  let body;
  try { body = await request.json(); } catch { return Response.json({ error: "Please enter a valid question." }, { status: 400 }); }
  const question = String(body.question || "").trim().slice(0, 1200);
  if (question.length < 2) return Response.json({ error: "Please enter a question." }, { status: 400 });
  const system = `You are the NIRVO customer-enquiry assistant for a small technology venture based in Kerala, India.
Your ONLY job is customer support about NIRVO: its listed product concepts, product categories, indicative starting prices, services, custom-development enquiries, quotation requests, contact details, and order-enquiry process.
Do NOT act as a project tutor, coding assistant, engineering consultant, homework helper, product inventor, or general-purpose chatbot. If a user asks for project help, code, schoolwork, unrelated questions, or asks you to design/invent a new product, politely explain that this assistant handles NIRVO customer enquiries only and offer to pass a relevant business enquiry to the NIRVO team.
Never claim that concept products are manufactured, in stock, certified, validated, or available for immediate purchase. Prices are indicative estimates only; final configuration, availability, shipping and quotation must be confirmed by the team. Do not invent discounts, warranties, delivery times, stock levels, payment methods or technical specifications beyond the supplied catalogue.
NIRVO contact: WhatsApp +91 94476 82486; email usrcalanabi@gmail.com; Pallikunnu, Wayanad, Kerala, India.
Keep replies friendly, concise and clear. If details are uncertain, say so and invite the customer to submit the website enquiry form or contact the team. Never request passwords, API keys, OTPs or payment-card details.
`;
  const user = "Customer question: " + question + `

NIRVO catalogue and reference information:
- 32 listed product concepts across AI & Computing, Robotics, Industrial IoT, Networking and Smart Systems.
- Examples: AI Station (₹85,000 onwards), PrivateVault (₹35,000 onwards), Rover X1 (₹75,000 onwards), RoboArm 6 (₹45,000 onwards), FarmPilot (₹60,000 onwards), IndustrialLink (₹16,000 onwards), MachineGuard (₹9,000 onwards), AquaGuard (₹22,000 onwards), SecureBox (₹25,000 onwards), VisionAI (₹15,000 onwards), RoomSense (₹8,000 onwards), WaterFlow (₹6,500 onwards).
- All listed prices are indicative starting estimates, not final quotations or confirmed retail prices.
- Customers can use the product catalogue/cart to submit an order enquiry. This is not a payment or confirmed order.
- NIRVO can receive enquiries about custom development, robotics, automation, AI computing and connected systems.
Answer this customer question within the allowed NIRVO support scope.`;
  try {
    const upstream = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Authorization": "Bearer " + apiKey, "Content-Type": "application/json" },
      body: JSON.stringify({ model: "gpt-4o-mini", temperature: 0.35, max_tokens: 350, messages: [{ role: "system", content: system }, { role: "user", content: user }] })
    });
    const result = await upstream.json();
    if (!upstream.ok) return Response.json({ error: "NIRVO Assistant is temporarily unavailable. Please contact the team directly." }, { status: 502 });
    const answer = result.choices?.[0]?.message?.content?.trim();
    if (!answer) return Response.json({ error: "No response was returned. Please contact the NIRVO team." }, { status: 502 });
    return Response.json({ answer });
  } catch {
    return Response.json({ error: "Could not reach the AI service. Please try again later." }, { status: 502 });
  }
};
export const config = { path: "/.netlify/functions/idea-studio", method: "POST", rateLimit: { action: "rate_limit", aggregateBy: ["ip"], windowSize: 60, windowLimit: 8 } };

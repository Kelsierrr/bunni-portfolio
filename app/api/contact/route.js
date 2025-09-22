import { NextResponse } from "next/server";

// Minimal email send via Resend REST API (no SDK)
// Set RESEND_API_KEY in your Vercel env (Server-side only)
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "kylenni701@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "portfolio@your-domain.dev"; // must be a Resend-verified domain/sender

export async function POST(request) {
  try {
    const body = await request.json();
    const { name = "", email = "", message = "", website = "" } = body || {};

    // Honeypot check
    if (website) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // Basic validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    if (!RESEND_API_KEY) {
      return NextResponse.json({ error: "Resend API key not configured." }, { status: 500 });
    }

    // Build simple HTML email
    const subject = `New portfolio message from ${name}`;
    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; line-height:1.5;">
        <h2 style="margin:0 0 8px 0;">New Contact Message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;background:#f7f7f7;padding:12px;border-radius:8px;">${escapeHtml(message)}</pre>
      </div>
    `;

    // Send email via Resend REST
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const err = await safeJson(res);
      return NextResponse.json({ error: err?.message || "Failed to send email." }, { status: 502 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}

// Helpers
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (m) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[m]));
}
async function safeJson(r) { try { return await r.json(); } catch { return null; } }

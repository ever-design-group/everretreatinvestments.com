import { NextResponse } from "next/server";
import { Resend } from "resend";

const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

// Re-verifies the Turnstile token server-side rather than trusting the
// client's earlier /api/verify-turnstile call — a request straight to this
// route (skipping the browser flow entirely) would otherwise sail through
// with no token check at all.
async function isHuman(token: unknown): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  // No secret configured means Turnstile isn't set up for this deployment
  // (matches EnquiryForm's own TURNSTILE_SITE_KEY-gated behavior) — treat
  // as verified rather than blocking every enquiry email.
  if (!secret) return true;
  if (!token || typeof token !== "string") return false;

  const params = new URLSearchParams();
  params.append("secret", secret);
  params.append("response", token);
  const verifyRes = await fetch(VERIFY_URL, { method: "POST", body: params });
  const outcome = await verifyRes.json().catch(() => null);
  return outcome?.success === true;
}

// Sends every enquiry-form submission straight to a real inbox via Resend,
// alongside the existing WhatsApp deep-link (which still depends on the
// visitor manually hitting send there). This route is the one path that
// guarantees Ever Retreat actually receives the message even if the visitor
// never completes the WhatsApp step.
export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.ENQUIRY_FROM_EMAIL;
  const toEmail = process.env.ENQUIRY_TO_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    return NextResponse.json(
      { success: false, error: "Email delivery is not configured on the server." },
      { status: 500 }
    );
  }

  const body = await request.json().catch(() => null);
  const context = typeof body?.context === "string" ? body.context : "Website Enquiry";
  const fields = body?.fields;
  const turnstileToken = body?.turnstileToken;
  // Sent separately from `fields` (whose keys are translated form labels,
  // e.g. French on a French-language submission) so reply-to works
  // regardless of which language the visitor filled the form in.
  const replyToEmail = typeof body?.replyToEmail === "string" ? body.replyToEmail : undefined;

  if (!fields || typeof fields !== "object") {
    return NextResponse.json({ success: false, error: "Missing form fields." }, { status: 400 });
  }

  if (!(await isHuman(turnstileToken))) {
    return NextResponse.json({ success: false, error: "Verification failed." }, { status: 403 });
  }

  // Renders each label/value pair the same way buildWhatsAppUrl does, so the
  // inbox copy of an enquiry matches the WhatsApp copy exactly.
  const rows = Object.entries(fields as Record<string, string | undefined>)
    .filter(([, value]) => value && value.trim().length > 0)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#666;white-space:nowrap;vertical-align:top;">${escapeHtml(
          label
        )}</td><td style="padding:4px 0;">${escapeHtml(value ?? "")}</td></tr>`
    )
    .join("");

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: replyToEmail,
    subject: context,
    html: `<table style="font-family:sans-serif;font-size:14px;">${rows}</table>`,
  });

  if (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

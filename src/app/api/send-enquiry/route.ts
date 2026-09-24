import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { EMAIL_REGEX, WHATSAPP_NUMBER } from "@/lib/forms";

const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

// Fixed, server-owned copy — never built from client-supplied text. The
// client already controls the recipient address (replyToEmail), which is
// inherent to any "we'll get back to you" auto-reply; letting it also
// control the *content* would turn this endpoint into an open relay for
// arbitrary email bodies sent from Ever Retreat's own mailbox. Only the
// visitor's name and language selection come from the client, and both are
// only ever inserted as escaped text, never as markup.
const AUTO_REPLY_COPY: Record<
  "en" | "fr",
  { subject: string; greeting: (name: string) => string; intro: string; enquiryLabel: string; footerNote: string; signoff: string; tagline: string }
> = {
  en: {
    subject: "Thanks — we've received your enquiry",
    greeting: (name) => `Hi ${name},`,
    intro:
      "Thanks for getting in touch. The Ever Retreat team has been notified and will get back to you within 24 hours. Below is a copy of what you submitted for your records.",
    enquiryLabel: "YOUR ENQUIRY",
    footerNote: "If anything looks off or you have an urgent question, just reply to this email or message us on WhatsApp.",
    signoff: "The Ever Retreat Team",
    tagline: "Rwandan-owned architecture, development, and villa management.",
  },
  fr: {
    subject: "Merci — nous avons bien reçu votre demande",
    greeting: (name) => `Bonjour ${name},`,
    intro:
      "Merci de nous avoir contactés. L'équipe Ever Retreat a été notifiée et vous répondra sous 24 heures. Voici une copie de ce que vous avez soumis, pour vos dossiers.",
    enquiryLabel: "VOTRE DEMANDE",
    footerNote: "Si quelque chose semble incorrect ou pour toute question urgente, répondez simplement à cet e-mail ou contactez-nous sur WhatsApp.",
    signoff: "L'équipe Ever Retreat",
    tagline: "Architecture, développement et gestion de villas, basés au Rwanda.",
  },
};

function buildAutoReplyHtml(
  language: "en" | "fr",
  visitorName: string | undefined,
  enquiryRowsHtml: string
): { subject: string; html: string } {
  const copy = AUTO_REPLY_COPY[language];
  const name = visitorName?.trim() ? escapeHtml(visitorName.trim()) : language === "fr" ? "" : "there";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  const html = `
    <div style="font-family:sans-serif;color:#1a1a1a;max-width:520px;margin:0 auto;">
      <div style="padding:20px 24px;background:#124341;">
        <img
          src="https://everretreatinvestments-com.vercel.app/images/logos/Ever_retreat_logo__2_-removebg-preview.png"
          alt="Ever Retreat"
          height="40"
          style="height:40px;width:auto;display:block;"
        />
      </div>
      <p style="margin-top:24px;">${copy.greeting(name)}</p>
      <p style="line-height:1.6;">${copy.intro}</p>
      <div style="margin-top:20px;padding:20px;background:#f4f4f4;border-radius:6px;">
        <p style="margin:0 0 12px;font-size:11px;letter-spacing:0.1em;color:#777;">${copy.enquiryLabel}</p>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">${enquiryRowsHtml}</table>
      </div>
      <p style="margin-top:24px;line-height:1.6;">${copy.footerNote.replace(
        "WhatsApp",
        `<a href="${whatsappUrl}" style="color:#124341;font-weight:600;">WhatsApp</a>`
      )}</p>
      <p style="margin-top:24px;font-weight:700;">${copy.signoff}</p>
      <hr style="margin-top:24px;border:none;border-top:1px solid #ddd;" />
      <p style="margin-top:16px;font-size:12px;color:#777;">
        everretreatinvestments.com &middot;
        WhatsApp <a href="${whatsappUrl}" style="color:#777;">+${WHATSAPP_NUMBER}</a> &middot;
        <a href="mailto:info@everretreatinvestments.com" style="color:#777;">info@everretreatinvestments.com</a>
      </p>
      <p style="margin-top:4px;font-size:12px;color:#aaa;">${copy.tagline}</p>
    </div>
  `;

  return { subject: copy.subject, html };
}

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

// Sends every enquiry-form submission straight to a real inbox over SMTP
// (the same mailbox that already exists on Ever Retreat's own domain — no
// separate email-service signup or DNS changes needed), alongside the
// existing WhatsApp deep-link (which still depends on the visitor manually
// hitting send there). This route is the one path that guarantees Ever
// Retreat actually receives the message even if the visitor never
// completes the WhatsApp step.
export async function POST(request: Request) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;
  const fromEmail = process.env.ENQUIRY_FROM_EMAIL;
  const toEmail = process.env.ENQUIRY_TO_EMAIL;

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPassword || !fromEmail || !toEmail) {
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
  const visitorName = typeof body?.visitorName === "string" ? body.visitorName : undefined;
  const language = body?.language === "fr" ? "fr" : "en";
  // Friendly display name instead of the raw mailbox address — inboxes
  // otherwise show the sender as "admin" (the mailbox's own username).
  const fromHeader = `"Ever Retreat" <${fromEmail}>`;

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

  // Port 465 is implicit TLS (secure: true); 587/others use STARTTLS
  // (secure: false, then upgraded) — this matches what any "connect your
  // mail client" page from a hosting control panel documents.
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort),
    secure: Number(smtpPort) === 465,
    auth: { user: smtpUser, pass: smtpPassword },
  });

  try {
    await transporter.sendMail({
      from: fromHeader,
      to: toEmail,
      replyTo: replyToEmail,
      subject: context,
      html: `<table style="font-family:sans-serif;font-size:14px;">${rows}</table>`,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to send email.";
    return NextResponse.json({ success: false, error: message }, { status: 502 });
  }

  // Best-effort: the enquiry has already reached Ever Retreat at this point
  // (the send above succeeded), so a failed auto-reply shouldn't turn the
  // whole request into a reported failure for the visitor.
  if (replyToEmail && EMAIL_REGEX.test(replyToEmail)) {
    const { subject, html } = buildAutoReplyHtml(language, visitorName, rows);
    try {
      // replyTo: toEmail (info@) rather than the sending mailbox (admin@) —
      // if the visitor hits "Reply" on this auto-reply, it should reach the
      // same inbox their original enquiry landed in, not the sender account.
      await transporter.sendMail({ from: fromHeader, to: replyToEmail, replyTo: toEmail, subject, html });
    } catch {
      // Swallowed intentionally — see comment above.
    }
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

// Ever Retreat's real, already-published WhatsApp business number (used sitewide
// on every existing WhatsApp CTA button/link).
export const WHATSAPP_NUMBER = "250787524298";

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Builds a wa.me deep link with a prefilled, readable message so submitting a
// form actually reaches Ever Retreat through their real contact channel,
// instead of a submit button that does nothing.
export function buildWhatsAppUrl(context: string, fields: Record<string, string | undefined>): string {
  const lines = [
    context,
    ...Object.entries(fields)
      .filter(([, value]) => value && value.trim().length > 0)
      .map(([label, value]) => `${label}: ${value}`),
  ];
  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

// Asks the server to check the Turnstile token against Cloudflare's real
// verification endpoint — a client-only check can be bypassed entirely,
// so this round-trip is what actually makes the bot check meaningful.
export async function verifyTurnstileToken(token: string): Promise<boolean> {
  try {
    const res = await fetch("/api/verify-turnstile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });
    const data = await res.json();
    return data.success === true;
  } catch {
    return false;
  }
}

// Delivers an enquiry straight to a real inbox via the /api/send-enquiry
// route (plain SMTP) — this is now every form's only delivery channel, so
// its actual result determines what the form shows the visitor (unlike an
// earlier version of this function that fired-and-forgot alongside a
// WhatsApp redirect that always "succeeded" regardless of email delivery).
// WhatsApp remains on the site only as its own standalone button/link, not
// something a form submission triggers.
export async function sendEnquiryEmail(
  context: string,
  fields: Record<string, string | undefined>,
  replyToEmail: string | undefined,
  turnstileToken: string | null
): Promise<boolean> {
  try {
    const res = await fetch("/api/send-enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ context, fields, replyToEmail, turnstileToken }),
    });
    const data = await res.json();
    return data.success === true;
  } catch {
    return false;
  }
}

// Every form used to call `window.open(url, ...)` and immediately mark
// itself "success" regardless of what window.open actually returned — a
// popup blocked by the browser (or the user's own settings) still showed
// "message sent" even though nothing was sent. window.open reliably returns
// null (or, in some browsers, a window that's already closed) when it's
// blocked, which is what this checks so every form can show a real fallback
// (a manual link to the same WhatsApp URL) instead of a false success state.
export type WhatsAppOpenResult = "opened" | "blocked";

export function openWhatsApp(url: string): WhatsAppOpenResult {
  const win = window.open(url, "_blank", "noopener,noreferrer");
  if (!win || win.closed) {
    return "blocked";
  }
  return "opened";
}

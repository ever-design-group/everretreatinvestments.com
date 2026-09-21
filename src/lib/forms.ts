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

import { NextResponse } from "next/server";

const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

// Server-side verification is required — a Turnstile widget that only
// checks the token client-side can be bypassed entirely. The secret key
// used here must never be exposed to the browser (no NEXT_PUBLIC_ prefix).
export async function POST(request: Request) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    return NextResponse.json({ success: false, error: "Turnstile is not configured on the server." }, { status: 500 });
  }

  const body = await request.json().catch(() => null);
  const token = body?.token;
  if (!token || typeof token !== "string") {
    return NextResponse.json({ success: false, error: "Missing verification token." }, { status: 400 });
  }

  const params = new URLSearchParams();
  params.append("secret", secret);
  params.append("response", token);

  const verifyRes = await fetch(VERIFY_URL, { method: "POST", body: params });
  const outcome = await verifyRes.json();

  return NextResponse.json({ success: outcome.success === true });
}

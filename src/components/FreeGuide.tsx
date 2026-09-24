"use client";

import { useState, type FormEvent } from "react";
import { FormSuccess } from "@/components/FormSuccess";
import { TurnstileWidget, TURNSTILE_SITE_KEY } from "@/components/TurnstileWidget";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { EMAIL_REGEX, buildWhatsAppUrl, sendEnquiryEmail, verifyTurnstileToken } from "@/lib/forms";

export function FreeGuide() {
  const { t, language } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "verifying" | "success" | "failed">("idle");
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  function validate(): boolean {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = t.forms.errorRequired;
    if (!email.trim()) next.email = t.forms.errorRequired;
    else if (!EMAIL_REGEX.test(email)) next.email = t.forms.errorEmail;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    if (TURNSTILE_SITE_KEY) {
      if (!turnstileToken) {
        setErrors((prev) => ({ ...prev, turnstile: t.forms.errorVerification }));
        return;
      }
      setStatus("verifying");
      const verified = await verifyTurnstileToken(turnstileToken);
      if (!verified) {
        setStatus("idle");
        setErrors((prev) => ({ ...prev, turnstile: t.forms.errorVerification }));
        return;
      }
    }

    setStatus("submitting");
    const fields = {
      [t.forms.fullName]: name,
      [t.forms.emailAddress]: email,
    };
    setWhatsappUrl(buildWhatsAppUrl(t.freeGuide.heading, fields));
    const sent = await sendEnquiryEmail(t.freeGuide.heading, fields, email, turnstileToken, language, name);
    setStatus(sent ? "success" : "failed");
  }

  return (
    <section className="relative overflow-hidden bg-brand-teal py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-white/70">
              {t.freeGuide.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl md:leading-tight">
              {t.freeGuide.heading}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              {t.freeGuide.paragraph}
            </p>
            <ul className="mt-8 space-y-3">
              {t.freeGuide.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="mt-1 text-white/40">&middot;</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-sm bg-white/5 p-8">
            {status === "success" || status === "failed" ? (
              status === "success" ? (
                <FormSuccess theme="dark" title={t.forms.successTitle} body={t.forms.successBody} />
              ) : (
                <FormSuccess
                  theme="dark"
                  variant="blocked"
                  title={t.forms.sendFailedTitle}
                  body={t.forms.sendFailedBody}
                  action={
                    <a
                      href={whatsappUrl ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-brand-gray-200"
                    >
                      {t.forms.messageUsOnWhatsApp}
                    </a>
                  }
                />
              )
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label className="mb-1 block text-xs font-medium text-white/70">
                    {t.forms.fullName} *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-sm border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name}</p>}
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-white/70">
                    {t.forms.emailAddress} *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-sm border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-300">{errors.email}</p>}
                </div>
                {TURNSTILE_SITE_KEY && (
                  <div>
                    <TurnstileWidget theme="dark" onVerify={setTurnstileToken} />
                    {errors.turnstile && <p className="mt-1 text-xs text-red-300">{errors.turnstile}</p>}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={status === "submitting" || status === "verifying"}
                  className="w-full rounded-sm bg-white px-8 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90 disabled:opacity-60"
                >
                  {status === "verifying" ? t.forms.verifying : status === "submitting" ? t.forms.sending : t.freeGuide.sendGuide}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

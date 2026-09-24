"use client";

import { useState, type FormEvent } from "react";
import { FormSuccess } from "@/components/FormSuccess";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { EMAIL_REGEX, buildWhatsAppUrl, sendEnquiryEmail } from "@/lib/forms";

export function Newsletter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "failed">("idle");
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim() || !EMAIL_REGEX.test(email)) {
      setError(t.forms.errorEmail);
      return;
    }
    setError("");
    const fields = { [t.forms.emailAddress]: email };
    setWhatsappUrl(buildWhatsAppUrl(t.newsletter.heading, fields));
    const sent = await sendEnquiryEmail(t.newsletter.heading, fields, email, null);
    setStatus(sent ? "success" : "failed");
  }

  return (
    <section className="bg-brand-teal py-16 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
            {t.newsletter.eyebrow}
          </p>
          <h2 className="text-2xl uppercase tracking-wide text-white md:text-3xl">
            <span className="font-light">{t.newsletter.headingLight}</span>{" "}
            <span className="font-bold">{t.newsletter.headingBold}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/40">
            {t.newsletter.paragraph}
          </p>
          {status === "success" || status === "failed" ? (
            <div className="mt-8">
              {status === "success" ? (
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
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mx-auto mt-8 flex w-full max-w-lg flex-col gap-3 md:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address for Rwanda property investment newsletter
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.newsletter.placeholder}
                className="flex-1 rounded-sm border border-white/15 bg-white/10 px-5 py-3.5 text-sm text-white placeholder:text-white/30 transition-colors focus:border-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-sm bg-white px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-black transition-all duration-300 hover:bg-brand-gray-200"
              >
                {t.newsletter.cta}
              </button>
              {error && <p className="mt-2 w-full text-left text-xs text-red-300 md:text-center">{error}</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

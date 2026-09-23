"use client";

import { useState, type FormEvent } from "react";
import { isValidPhoneNumber } from "react-phone-number-input";
import { PhoneInput } from "@/components/PhoneInput";
import { FormSuccess } from "@/components/FormSuccess";
import { TurnstileWidget, TURNSTILE_SITE_KEY } from "@/components/TurnstileWidget";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { EMAIL_REGEX, buildWhatsAppUrl, openWhatsApp, verifyTurnstileToken } from "@/lib/forms";

const fieldClass =
  "mt-2 w-full rounded border border-brand-gray-100 bg-white px-4 py-3 text-base text-black focus:border-brand-teal focus:outline-none";
const labelClass = "block text-sm font-medium text-black";
const errorClass = "mt-1 text-xs text-red-600";

export function ContactForm() {
  const { t } = useLanguage();
  const interestedInOptions = [
    t.forms.interestedInOptions.villaBuild,
    t.forms.interestedInOptions.landSourcing,
    t.forms.interestedInOptions.villaInvestment,
    t.forms.interestedInOptions.villaManagement,
    t.forms.interestedInOptions.general,
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [interestedIn, setInterestedIn] = useState(interestedInOptions[0]);
  const [message, setMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "verifying" | "success" | "blocked">("idle");
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  function validate(): boolean {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = t.forms.errorRequired;
    if (!email.trim()) next.email = t.forms.errorRequired;
    else if (!EMAIL_REGEX.test(email)) next.email = t.forms.errorEmail;
    if (!phone) next.phone = t.forms.errorRequired;
    else if (!isValidPhoneNumber(phone)) next.phone = t.forms.errorPhone;
    if (!message.trim()) next.message = t.forms.errorRequired;
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
    const url = buildWhatsAppUrl("New Contact Form Enquiry — Ever Retreat", {
      [t.forms.fullName]: name,
      [t.forms.emailAddress]: email,
      [t.forms.whatsappNumber]: phone,
      [t.forms.interestedIn]: interestedIn,
      [t.forms.message]: message,
    });
    setWhatsappUrl(url);
    setStatus(openWhatsApp(url) === "blocked" ? "blocked" : "success");
  }

  if (status === "success" || status === "blocked") {
    return (
      <div className="rounded-sm border border-brand-gray-100 bg-white p-8">
        {status === "success" ? (
          <FormSuccess theme="light" title={t.forms.successTitle} body={t.forms.successBody} />
        ) : (
          <FormSuccess
            theme="light"
            variant="blocked"
            title={t.forms.popupBlockedTitle}
            body={t.forms.popupBlockedBody}
            action={
              <a
                href={whatsappUrl ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-brand-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-teal/90"
              >
                {t.forms.openWhatsAppManually}
              </a>
            }
          />
        )}
      </div>
    );
  }

  return (
    <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass}>{t.forms.fullName}</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={fieldClass}
          />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>
        <div>
          <label className={labelClass}>{t.forms.emailAddress}</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className={fieldClass}
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>
      </div>
      <div>
        <label className={labelClass}>{t.forms.whatsappNumber}</label>
        <div className="mt-2">
          <PhoneInput
            value={phone}
            onChange={setPhone}
            theme="light"
            hasError={!!errors.phone}
          />
        </div>
        {errors.phone && <p className={errorClass}>{errors.phone}</p>}
      </div>
      <div>
        <label className={labelClass}>{t.forms.interestedIn}</label>
        <select
          value={interestedIn}
          onChange={(e) => setInterestedIn(e.target.value)}
          className={fieldClass}
        >
          {interestedInOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelClass}>{t.forms.message}</label>
        <textarea
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your project..."
          className={fieldClass}
        />
        {errors.message && <p className={errorClass}>{errors.message}</p>}
      </div>
      {TURNSTILE_SITE_KEY && (
        <div>
          <TurnstileWidget theme="light" onVerify={setTurnstileToken} />
          {errors.turnstile && <p className={errorClass}>{errors.turnstile}</p>}
        </div>
      )}
      <button
        type="submit"
        disabled={status === "submitting" || status === "verifying"}
        className="rounded-sm bg-brand-teal px-10 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-teal/90 disabled:opacity-60"
      >
        {status === "verifying" ? t.forms.verifying : status === "submitting" ? t.forms.sending : t.forms.sendMessage}
      </button>
    </form>
  );
}

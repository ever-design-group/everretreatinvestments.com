"use client";

import { useState, type FormEvent } from "react";
import { isValidPhoneNumber } from "react-phone-number-input";
import { PhoneInput } from "@/components/PhoneInput";
import { FormSuccess } from "@/components/FormSuccess";
import { TurnstileWidget, TURNSTILE_SITE_KEY } from "@/components/TurnstileWidget";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { EMAIL_REGEX, buildWhatsAppUrl, verifyTurnstileToken } from "@/lib/forms";

interface ReservationFormProps {
  context: string;
  className?: string;
}

// Same 3 real, active developments listed in src/components/Developments.tsx —
// repeated here (not invented) since the dropdown needs plain id/name pairs.
const developmentOptions = [
  { id: "nara-villas", name: "B&P Ever Retreat Villa" },
  { id: "solas-uluwatu", name: "Cottage" },
  { id: "suku-residences", name: "Virunga Villas" },
];

// Adapted from EnquiryForm.tsx with a development selector + unit field added
// for the reservation/deposit-request flow on /buy. Still forwards through the
// same real WhatsApp deep-link mechanism in lib/forms.ts — no fake "Pay" button.
export function ReservationForm({ context, className = "" }: ReservationFormProps) {
  const { t } = useLanguage();
  const b = t.buyPage;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [development, setDevelopment] = useState("");
  const [unit, setUnit] = useState("");
  const [message, setMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "verifying" | "success">("idle");

  const fieldClass =
    "w-full rounded border border-brand-gray-200 bg-white px-4 py-3 text-sm text-black placeholder:text-brand-gray-400 focus:border-black focus:outline-none";
  const labelClass = "mb-1 block text-xs font-medium text-brand-gray-600";
  const errorClass = "mt-1 text-xs text-red-600";

  function validate(): boolean {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = t.forms.errorRequired;
    if (!email.trim()) next.email = t.forms.errorRequired;
    else if (!EMAIL_REGEX.test(email)) next.email = t.forms.errorEmail;
    if (!phone) next.phone = t.forms.errorRequired;
    else if (!isValidPhoneNumber(phone)) next.phone = t.forms.errorPhone;
    if (!development) next.development = t.forms.errorRequired;
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
    const developmentName = developmentOptions.find((d) => d.id === development)?.name ?? development;
    const url = buildWhatsAppUrl(context, {
      [t.forms.fullName]: name,
      [t.forms.emailAddress]: email,
      [t.forms.whatsappNumber]: phone,
      [b.developmentLabel]: developmentName,
      [b.unitLabel]: unit,
      [t.forms.tellUsMore]: message,
    });
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className={className}>
        <FormSuccess theme="light" title={t.forms.successTitle} body={t.forms.successBody} />
      </div>
    );
  }

  return (
    <form className={className} onSubmit={handleSubmit} noValidate>
      <div className="space-y-4">
        <div>
          <label className={labelClass}>{t.forms.fullName} *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldClass}
          />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>
        <div>
          <label className={labelClass}>{t.forms.emailAddress} *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={fieldClass}
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>
        <div>
          <label className={labelClass}>{t.forms.whatsappNumber} *</label>
          <PhoneInput
            value={phone}
            onChange={setPhone}
            theme="light"
            hasError={!!errors.phone}
          />
          {errors.phone && <p className={errorClass}>{errors.phone}</p>}
        </div>
        <div>
          <label className={labelClass}>{b.developmentLabel}</label>
          <select
            value={development}
            onChange={(e) => setDevelopment(e.target.value)}
            className={fieldClass}
          >
            <option value="">{b.developmentPlaceholder}</option>
            {developmentOptions.map((dev) => (
              <option key={dev.id} value={dev.id}>
                {dev.name}
              </option>
            ))}
          </select>
          {errors.development && <p className={errorClass}>{errors.development}</p>}
        </div>
        <div>
          <label className={labelClass}>{b.unitLabel}</label>
          <input
            type="text"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            placeholder={b.unitPlaceholder}
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass}>{t.forms.tellUsMore}</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t.forms.tellUsMore}
            rows={3}
            className={fieldClass}
          />
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
          className="w-full rounded-sm bg-brand-teal px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-teal/90 disabled:opacity-60"
        >
          {status === "verifying" ? t.forms.verifying : status === "submitting" ? t.forms.sending : t.forms.sendEnquiry}
        </button>
      </div>
    </form>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { isValidPhoneNumber } from "react-phone-number-input";
import { PhoneInput } from "@/components/PhoneInput";
import { FormSuccess } from "@/components/FormSuccess";
import { TurnstileWidget, TURNSTILE_SITE_KEY } from "@/components/TurnstileWidget";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { EMAIL_REGEX, buildWhatsAppUrl, openWhatsApp, sendEnquiryEmail, verifyTurnstileToken } from "@/lib/forms";

interface EnquiryFormProps {
  /** Message header sent to WhatsApp, e.g. "Pricing Enquiry — Homepage". */
  context: string;
  showMessage?: boolean;
  className?: string;
}

// Shared enquiry form used by every dark/teal "Interested?" style CTA block
// across the site (InterestedInInvesting, PricingForm, FinalCTA, GetPricesCTA).
// Validates every field for real (including the phone number via
// libphonenumber-js) and, on success, opens WhatsApp with a prefilled message
// to Ever Retreat's real business number — no more decorative submit buttons.
export function EnquiryForm({ context, showMessage = true, className = "" }: EnquiryFormProps) {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [message, setMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "verifying" | "success" | "blocked">("idle");
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  const fieldClass =
    "w-full rounded border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none";
  const labelClass = "mb-1 block text-xs font-medium text-white/70";
  const errorClass = "mt-1 text-xs text-red-300";

  function validate(): boolean {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = t.forms.errorRequired;
    if (!email.trim()) next.email = t.forms.errorRequired;
    else if (!EMAIL_REGEX.test(email)) next.email = t.forms.errorEmail;
    if (!phone) next.phone = t.forms.errorRequired;
    else if (!isValidPhoneNumber(phone)) next.phone = t.forms.errorPhone;
    if (showMessage && !message.trim()) next.message = t.forms.errorRequired;
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
      [t.forms.whatsappNumber]: phone,
      [t.forms.tellUsMore]: showMessage ? message : undefined,
    };
    // Fired in parallel, not awaited — email delivery is a best-effort
    // addition, not a gate on the WhatsApp flow that already works.
    void sendEnquiryEmail(context, fields, email, turnstileToken);
    const url = buildWhatsAppUrl(context, fields);
    setWhatsappUrl(url);
    setStatus(openWhatsApp(url) === "blocked" ? "blocked" : "success");
  }

  if (status === "success" || status === "blocked") {
    return (
      <div className={className}>
        {status === "success" ? (
          <FormSuccess theme="dark" title={t.forms.successTitle} body={t.forms.successBody} />
        ) : (
          <FormSuccess
            theme="dark"
            variant="blocked"
            title={t.forms.popupBlockedTitle}
            body={t.forms.popupBlockedBody}
            action={
              <a
                href={whatsappUrl ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-brand-gray-200"
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
            theme="dark"
            hasError={!!errors.phone}
          />
          {errors.phone && <p className={errorClass}>{errors.phone}</p>}
        </div>
        {showMessage && (
          <div>
            <label className={labelClass}>{t.forms.tellUsMore}</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className={fieldClass}
            />
            {errors.message && <p className={errorClass}>{errors.message}</p>}
          </div>
        )}
        {TURNSTILE_SITE_KEY && (
          <div>
            <TurnstileWidget theme="dark" onVerify={setTurnstileToken} />
            {errors.turnstile && <p className={errorClass}>{errors.turnstile}</p>}
          </div>
        )}
        <button
          type="submit"
          disabled={status === "submitting" || status === "verifying"}
          className="w-full rounded-sm bg-white px-8 py-3 text-sm font-semibold text-black transition-colors hover:bg-brand-gray-200 disabled:opacity-60"
        >
          {status === "verifying" ? t.forms.verifying : status === "submitting" ? t.forms.sending : t.forms.sendEnquiry}
        </button>
      </div>
    </form>
  );
}

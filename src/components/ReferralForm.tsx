"use client";

import { useState, type FormEvent } from "react";
import { isValidPhoneNumber } from "react-phone-number-input";
import { PhoneInput } from "@/components/PhoneInput";
import { FormSuccess } from "@/components/FormSuccess";
import { TurnstileWidget, TURNSTILE_SITE_KEY } from "@/components/TurnstileWidget";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { EMAIL_REGEX, buildWhatsAppUrl, verifyTurnstileToken } from "@/lib/forms";

const fieldClass =
  "mt-2 w-full rounded border border-brand-gray-100 bg-white px-4 py-3 text-base text-black focus:border-brand-teal focus:outline-none";
const labelClass = "block text-sm font-medium text-black";
const errorClass = "mt-1 text-xs text-red-600";

export function ReferralForm() {
  const { t } = useLanguage();
  const [yourName, setYourName] = useState("");
  const [yourEmail, setYourEmail] = useState("");
  const [yourPhone, setYourPhone] = useState<string | undefined>(undefined);
  const [friendsName, setFriendsName] = useState("");
  const [friendsEmail, setFriendsEmail] = useState("");
  const [friendsPhone, setFriendsPhone] = useState<string | undefined>(undefined);
  const [message, setMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "verifying" | "success">("idle");

  function validate(): boolean {
    const next: Record<string, string> = {};
    if (!yourName.trim()) next.yourName = t.forms.errorRequired;
    if (!yourEmail.trim()) next.yourEmail = t.forms.errorRequired;
    else if (!EMAIL_REGEX.test(yourEmail)) next.yourEmail = t.forms.errorEmail;
    if (!yourPhone) next.yourPhone = t.forms.errorRequired;
    else if (!isValidPhoneNumber(yourPhone)) next.yourPhone = t.forms.errorPhone;
    if (!friendsName.trim()) next.friendsName = t.forms.errorRequired;
    if (!friendsEmail.trim()) next.friendsEmail = t.forms.errorRequired;
    else if (!EMAIL_REGEX.test(friendsEmail)) next.friendsEmail = t.forms.errorEmail;
    if (!friendsPhone) next.friendsPhone = t.forms.errorRequired;
    else if (!isValidPhoneNumber(friendsPhone)) next.friendsPhone = t.forms.errorPhone;
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
    const url = buildWhatsAppUrl("Referral — Ever Retreat", {
      [t.forms.yourName]: yourName,
      [t.forms.yourEmail]: yourEmail,
      [t.forms.yourPhone]: yourPhone,
      [t.forms.friendsName]: friendsName,
      [t.forms.friendsEmail]: friendsEmail,
      [t.forms.friendsWhatsapp]: friendsPhone,
      [t.forms.message]: message,
    });
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-brand-gray-100 bg-white p-8">
        <FormSuccess theme="light" title={t.forms.successTitle} body={t.forms.successBody} />
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gray-500">Your Details</h3>
      </div>
      <div>
        <label className={labelClass}>{t.forms.yourName}</label>
        <input
          type="text"
          value={yourName}
          onChange={(e) => setYourName(e.target.value)}
          className={fieldClass}
          placeholder="Your full name"
        />
        {errors.yourName && <p className={errorClass}>{errors.yourName}</p>}
      </div>
      <div>
        <label className={labelClass}>{t.forms.yourEmail}</label>
        <input
          type="email"
          value={yourEmail}
          onChange={(e) => setYourEmail(e.target.value)}
          className={fieldClass}
          placeholder="your@email.com"
        />
        {errors.yourEmail && <p className={errorClass}>{errors.yourEmail}</p>}
      </div>
      <div>
        <label className={labelClass}>{t.forms.yourPhone}</label>
        <div className="mt-2">
          <PhoneInput
            value={yourPhone}
            onChange={setYourPhone}
            theme="light"
            hasError={!!errors.yourPhone}
          />
        </div>
        {errors.yourPhone && <p className={errorClass}>{errors.yourPhone}</p>}
      </div>
      <div className="border-t border-brand-gray-100 pt-6">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gray-500">Who You&apos;re Referring</h3>
      </div>
      <div>
        <label className={labelClass}>{t.forms.friendsName}</label>
        <input
          type="text"
          value={friendsName}
          onChange={(e) => setFriendsName(e.target.value)}
          className={fieldClass}
          placeholder="Your friend's full name"
        />
        {errors.friendsName && <p className={errorClass}>{errors.friendsName}</p>}
      </div>
      <div>
        <label className={labelClass}>{t.forms.friendsEmail}</label>
        <input
          type="email"
          value={friendsEmail}
          onChange={(e) => setFriendsEmail(e.target.value)}
          className={fieldClass}
          placeholder="friend@email.com"
        />
        {errors.friendsEmail && <p className={errorClass}>{errors.friendsEmail}</p>}
      </div>
      <div>
        <label className={labelClass}>{t.forms.friendsWhatsapp}</label>
        <div className="mt-2">
          <PhoneInput
            value={friendsPhone}
            onChange={setFriendsPhone}
            theme="light"
            hasError={!!errors.friendsPhone}
          />
        </div>
        {errors.friendsPhone && <p className={errorClass}>{errors.friendsPhone}</p>}
      </div>
      <div>
        <label className={labelClass}>{t.forms.messageOptional}</label>
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={fieldClass}
          placeholder="What would you like us to know?"
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
        className="w-full rounded-sm bg-brand-teal px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-teal/90 disabled:opacity-60"
      >
        {status === "verifying" ? t.forms.verifying : status === "submitting" ? t.forms.sending : t.forms.submitReferral}
      </button>
    </form>
  );
}

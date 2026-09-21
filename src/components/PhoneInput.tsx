"use client";

import PhoneInputBase from "react-phone-number-input";
import "react-phone-number-input/style.css";
import enLabels from "react-phone-number-input/locale/en.json";
import frLabels from "react-phone-number-input/locale/fr.json";
import { CountrySelect } from "@/components/CountrySelect";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface PhoneInputProps {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
  id?: string;
  placeholder?: string;
  theme?: "dark" | "light";
  hasError?: boolean;
}

const localeLabels = { en: enLabels, fr: frLabels };

// Real country-code selector (flag dropdown + searchable, translated country
// list) backed by libphonenumber-js, so the value produced is always a valid
// E.164 phone number instead of a plain, unvalidated text string. The dropdown
// itself is a custom component (CountrySelect) styled to match the site's own
// menus rather than the browser's plain native <select> list.
export function PhoneInput({
  value,
  onChange,
  id,
  placeholder,
  theme = "dark",
  hasError = false,
}: PhoneInputProps) {
  const { language, t } = useLanguage();

  return (
    <div
      className={`phone-input-field ${theme === "dark" ? "phone-input-dark" : "phone-input-light"} ${
        hasError ? "phone-input-error" : ""
      }`}
    >
      <PhoneInputBase
        id={id}
        international
        defaultCountry="RW"
        countryCallingCodeEditable={false}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        labels={localeLabels[language]}
        countrySelectComponent={CountrySelect}
        countrySelectProps={{ theme, searchPlaceholder: t.forms.searchCountry }}
        numberInputProps={{ "aria-invalid": hasError }}
      />
    </div>
  );
}

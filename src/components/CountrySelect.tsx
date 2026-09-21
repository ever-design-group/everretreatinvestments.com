"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { getCountryCallingCode } from "react-phone-number-input";
import type { Country } from "react-phone-number-input";

interface CountryOption {
  value?: Country;
  label: string;
  divider?: boolean;
}

interface CountrySelectProps {
  value?: Country;
  onChange: (value: Country | undefined) => void;
  options: CountryOption[];
  theme?: "dark" | "light";
  searchPlaceholder: string;
}

// Replaces the browser's plain native <select> country list with a custom
// dropdown that matches the site's own menu styling (same teal/blurred panel
// used by the header nav dropdowns), and lets people search by country name.
// The closed button shows only the flag — the calling code isn't repeated
// here since the phone input itself already displays it as a locked prefix
// (e.g. "+250"), and showing it in both places read as a duplicate.
export function CountrySelect({ value, onChange, options, theme = "dark", searchPlaceholder }: CountrySelectProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const isDark = theme === "dark";

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  useEffect(() => {
    if (open) searchRef.current?.focus();
  }, [open]);

  const countryOptions = useMemo(() => options.filter((o) => !o.divider && o.value), [options]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return countryOptions;
    return countryOptions.filter(
      (o) => o.label.toLowerCase().includes(q) || `+${getCountryCallingCode(o.value!)}`.includes(q)
    );
  }, [countryOptions, query]);

  return (
    <div ref={containerRef} className="relative flex-shrink-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`PhoneInputCountry ${isDark ? "phone-country-dark" : "phone-country-light"}`}
      >
        {value ? (
          <span className="text-base leading-none">{getUnicodeFlagIcon(value)}</span>
        ) : (
          <span>+...</span>
        )}
        <svg
          className={`h-2.5 w-2.5 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          className={`absolute left-0 top-full z-20 mt-2 w-72 overflow-hidden rounded-sm border ${
            isDark
              ? "border-white/10 bg-brand-teal/95 backdrop-blur-sm"
              : "border-brand-gray-200 bg-white"
          }`}
        >
          <div className={`p-2 ${isDark ? "border-b border-white/10" : "border-b border-brand-gray-100"}`}>
            <input
              ref={searchRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={searchPlaceholder}
              className={`w-full rounded-sm px-3 py-2 text-sm outline-none ${
                isDark
                  ? "bg-white/5 text-white placeholder:text-white/40"
                  : "bg-brand-off-white text-black placeholder:text-brand-gray-400"
              }`}
            />
          </div>
          <ul role="listbox" className="max-h-64 overflow-y-auto py-1">
            {filtered.map((option) => (
              <li key={option.value}>
                <button
                  type="button"
                  role="option"
                  aria-selected={option.value === value}
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                    setQuery("");
                  }}
                  className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm whitespace-nowrap transition-colors ${
                    isDark
                      ? `text-white/70 hover:bg-white/5 hover:text-white ${option.value === value ? "bg-white/10 text-white" : ""}`
                      : `text-brand-gray-700 hover:bg-brand-off-white hover:text-black ${option.value === value ? "bg-brand-off-white text-black" : ""}`
                  }`}
                >
                  <span className="text-base leading-none">{getUnicodeFlagIcon(option.value!)}</span>
                  <span className="flex-1 truncate">{option.label}</span>
                  <span className={isDark ? "text-white/40" : "text-brand-gray-400"}>
                    +{getCountryCallingCode(option.value!)}
                  </span>
                </button>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className={`px-4 py-3 text-sm ${isDark ? "text-white/40" : "text-brand-gray-400"}`}>
                No matches
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

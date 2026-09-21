"use client";

import { EnquiryForm } from "@/components/EnquiryForm";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function PricingForm() {
  const { t } = useLanguage();
  const p = t.pricingFormSection;
  return (
    <section className="bg-brand-teal py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-white/70">
              {p.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
              {p.heading}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              {p.paragraph}
            </p>
            <div className="mt-6 space-y-3">
              {[p.feature1, p.feature2, p.feature3].map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-green"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm text-white/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <EnquiryForm context="Which One Fits You — Ever Retreat" className="rounded-sm bg-white/5 p-8" />
        </div>
      </div>
    </section>
  );
}

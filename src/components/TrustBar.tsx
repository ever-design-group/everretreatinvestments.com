"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export function TrustBar() {
  const { t } = useLanguage();

  const stats = [
    { value: "2", label: t.trustBar.stat1Label },
    { value: "8", label: t.trustBar.stat2Label },
  ];

  return (
    <section className="bg-brand-teal py-8 md:py-12">
      <div className="mx-auto max-w-[1440px] px-5 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xs">
            <p className="text-sm font-semibold text-white/70">{t.trustBar.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-white/60">
              {t.trustBar.subtitle}
            </p>
          </div>

          <div className="flex items-center justify-between gap-6 md:justify-end md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl font-bold tabular-nums text-white md:text-3xl">
                  {stat.value}
                </div>
                <p className="mt-0.5 text-[11px] uppercase tracking-[0.12em] text-white/55">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

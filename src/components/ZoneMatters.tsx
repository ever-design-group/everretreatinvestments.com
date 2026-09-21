"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

// Explains the real "Residential / Tourism Designated" zoning already stated
// in each development's "At a Glance" table (see naraVillasPage.glanceZoneValue
// and siblings) — not a new claim, just expanding on why that zoning actually
// matters for a short-term-rental investment. Only states what's directly true
// of tourism-designated zoning under Rwanda's own land-use rules (see
// src/app/rwanda-land-zoning/page.tsx) — no invented licensing/resale claims.
export function ZoneMatters() {
  const { t } = useLanguage();
  const z = t.zoneMattersSection;

  const benefits = [
    { title: z.benefit1Title, description: z.benefit1Desc },
    { title: z.benefit2Title, description: z.benefit2Desc },
    { title: z.benefit3Title, description: z.benefit3Desc },
  ];

  return (
    <section className="bg-brand-off-white py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
            {z.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
            {z.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-gray-600">
            {z.paragraph}
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="border border-brand-gray-200 bg-brand-white p-6">
              <svg
                className="h-5 w-5 text-brand-teal"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <h3 className="mt-3 text-sm font-bold uppercase tracking-wide text-black">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

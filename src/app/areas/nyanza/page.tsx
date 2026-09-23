"use client";

import { PageLayout } from "@/components/PageLayout";
import { AreaHero } from "@/components/AreaHero";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { ALL_AREAS } from "@/lib/areasList";
import Link from "next/link";

const AREA_KEY = "nyanza";

export default function NyanzaAreaPage() {
  const { t } = useLanguage();
  const p = t.areaNyanzaPage;
  const m = t.areaMetricLabels;
  const areaItems = t.areasSection.items;
  const otherAreas = ALL_AREAS.filter((a) => a.key !== AREA_KEY);

  const metrics = [
    { value: "$20-50/sqm", label: m.landPrice },
    { value: "13-17%", label: m.grossYield },
    { value: "72%", label: m.avgOccupancy },
    { value: "6-11%", label: m.appreciation },
  ];

  return (
    <PageLayout
      showCta={false}
      hero={
        <AreaHero
          name="Nyanza"
          subtitle={areaItems.nyanza.description}
          image="/images/areas/kigali-area.webp"
          imageAlt="Nyanza, former royal capital - Ever Retreat area guide"
        />
      }
    >
      <section className="bg-brand-teal">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
            {metrics.map((stat) => (
              <div key={stat.label} className="bg-brand-teal px-4 py-6 md:px-6">
                <p className="text-xs uppercase tracking-wider text-white/50">{stat.label}</p>
                <p className="mt-1 text-sm font-semibold text-white md:text-base">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="space-y-10 lg:col-span-2">
              <div>
                <h2 className="text-2xl font-bold uppercase tracking-wide text-black md:text-4xl">
                  {p.marketHeading}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-brand-gray-700 md:text-lg">
                  <p>{p.marketParagraph1}</p>
                  <p>{p.marketParagraph2}</p>
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-semibold uppercase tracking-wide text-black md:text-xl">
                  {p.whyInvestHeading}
                </h3>
                <ul className="space-y-3">
                  {[
                    [p.whyInvestItem1Title, p.whyInvestItem1Description],
                    [p.whyInvestItem2Title, p.whyInvestItem2Description],
                    [p.whyInvestItem3Title, p.whyInvestItem3Description],
                    [p.whyInvestItem4Title, p.whyInvestItem4Description],
                  ].map(([title, desc]) => (
                    <li key={title} className="flex items-start gap-3 text-sm leading-relaxed text-brand-gray-700 md:text-base">
                      <span className="mt-0.5 flex-shrink-0 text-xs font-bold text-black">✓</span>
                      <span>
                        <strong className="text-black">{title}</strong> — {desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-5 bg-brand-teal p-8 text-white">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  {m.heading}
                </h3>
                <div className="space-y-4 divide-y divide-white/10">
                  {metrics.map((stat, index) => (
                    <div key={stat.label} className={index === 0 ? "pt-0" : "pt-4"}>
                      <p className="text-xs uppercase tracking-wider text-white/50">{stat.label}</p>
                      <p className="mt-1 text-sm font-semibold">{stat.value}</p>
                    </div>
                  ))}
                  <div className="pt-4">
                    <p className="text-xs uppercase tracking-wider text-white/50">Best For</p>
                    <p className="mt-1 text-sm font-semibold">{areaItems.nyanza.description}</p>
                  </div>
                  <div className="pt-4">
                    <p className="text-xs uppercase tracking-wider text-white/50">Status</p>
                    <p className="mt-1 text-sm font-semibold">Investment Opportunity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InvestmentMarket />

      <section className="bg-brand-off-white py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold uppercase tracking-wide text-black md:text-xl">
              {t.relatedAreasSection.heading}
            </h2>
            <Link href="/areas" className="text-sm text-brand-gray-500 transition-colors hover:text-black">
              {t.areasSection.viewAll} →
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            {otherAreas.map((area) => (
              <Link
                key={area.key}
                href={`/areas/${area.key}`}
                className="rounded-sm border border-brand-gray-200 bg-brand-white px-4 py-2.5 text-sm font-semibold uppercase tracking-wide text-black transition-colors hover:border-brand-teal hover:bg-brand-teal hover:text-white"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InterestedInInvesting />
    </PageLayout>
  );
}

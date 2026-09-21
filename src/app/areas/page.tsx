"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import { InvestmentGuides } from "@/components/InvestmentGuides";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Image from "next/image";
import Link from "next/link";

// Qualitative market-position badges derived from each area's already-published
// yield range and description (not new/invented figures) — mirrors the
// "High Growth" / "Proven Market" style badges balitecture.com/areas uses.
const areaMeta = [
  { key: "kigali" as const, name: "Kigali", image: "/images/areas/kigali-area.webp", href: "/areas/kigali", bestForKey: "bestForKigali" as const, badge: "Capital Market" },
  { key: "musanze" as const, name: "Musanze", image: "/images/areas/musanze-area.webp", href: "/areas/musanze", bestForKey: "bestForMusanze" as const, badge: "High Demand" },
  { key: "rubavu" as const, name: "Rubavu", image: "/images/areas/rubavu-area.webp", href: "/areas/rubavu", bestForKey: "bestForRubavu" as const, badge: "Highest Yield" },
  { key: "nyungwe" as const, name: "Nyungwe", image: "/images/areas/nyungwe-area.webp", href: "/areas/nyungwe", bestForKey: "bestForNyungwe" as const, badge: "Eco Investment" },
  { key: "huye" as const, name: "Huye", image: "/images/areas/huye-area.webp", href: "/areas/huye", bestForKey: "bestForHuye" as const, badge: "Affordable Entry" },
  { key: "evane" as const, name: "Evane", image: "/images/areas/lake-kivu-area.webp", href: "/areas/evane", bestForKey: "bestForEvane" as const, badge: "Scenic Growth" },
  { key: "nyanza" as const, name: "Nyanza", image: "/images/areas/kigali-area.webp", href: "/areas/nyanza", bestForKey: "bestForNyanza" as const, badge: "Emerging Market" },
  { key: "akagera" as const, name: "Akagera", image: "/images/areas/huye-area.webp", href: "/areas/akagera", bestForKey: "bestForAkagera" as const, badge: "Exclusive Lodges" },
];

// Pre-existing, unverified per-area figures (land price/yield/occupancy) —
// translated labels only; the numbers themselves are flagged separately as
// needing real confirmation, not something to invent fresh values for here.
const metricsData = [
  { key: "kigali" as const, landPrice: "$50-120/sqm", yield: "8-12%", occupancy: "75%" },
  { key: "musanze" as const, landPrice: "$30-60/sqm", yield: "12-18%", occupancy: "80%" },
  { key: "rubavu" as const, landPrice: "$40-80/sqm", yield: "15-20%", occupancy: "85%" },
  { key: "nyungwe" as const, landPrice: "$15-30/sqm", yield: "10-15%", occupancy: "70%" },
  { key: "akagera" as const, landPrice: "$10-25/sqm", yield: "12-16%", occupancy: "65%" },
  { key: "huye" as const, landPrice: "$15-35/sqm", yield: "10-15%", occupancy: "70%" },
  { key: "evane" as const, landPrice: "$20-45/sqm", yield: "12-16%", occupancy: "75%" },
  { key: "nyanza" as const, landPrice: "$20-50/sqm", yield: "13-17%", occupancy: "72%" },
];

export default function AreasPage() {
  const { t } = useLanguage();
  const ap = t.areasPage;
  const areaItems = t.areasSection.items;
  const hubStats = t.areasHubExtras;

  const hubStatCells = [
    { value: String(areaMeta.length), label: hubStats.statAreasLabel },
    { value: "10+", label: hubStats.statYearsLabel },
    { value: "120+", label: t.statsBarSection.villasBuiltLabel },
    { value: "8-20%", label: hubStats.statYieldLabel },
  ];

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Plain text hero on solid brand background — matches balitecture.com/areas,
            which is a text-only intro section, not a full-bleed image carousel. */}
        <section className="bg-brand-teal pb-16 pt-32 md:pb-20 md:pt-40">
          <div className="mx-auto max-w-[1440px] px-5 md:px-6">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-brand-gray-400">
              {ap.sectionEyebrow}
            </p>
            <h1 className="font-body text-4xl uppercase text-white md:text-6xl lg:text-7xl">
              {ap.sectionHeading}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-gray-200 md:text-lg">
              {ap.sectionParagraph}
            </p>
          </div>
        </section>

        <section className="border-b border-brand-gray-100 bg-brand-white">
          <div className="mx-auto max-w-[1440px] px-5 md:px-6">
            <div className="grid grid-cols-2 gap-px bg-brand-gray-100 md:grid-cols-4">
              {hubStatCells.map((stat) => (
                <div key={stat.label} className="bg-brand-white px-6 py-8 text-center">
                  <p className="font-body text-3xl text-black md:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-brand-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-white py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-5 md:px-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {areaMeta.map((area) => {
                const metrics = metricsData.find((m) => m.key === area.key);
                return (
                  <div key={area.key}>
                    <Link href={area.href} className="group block">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                        <Image
                          src={area.image}
                          alt={`${area.name}, Rwanda - property investment guide`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute left-4 top-4">
                          <span className="bg-brand-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-black">
                            {area.badge}
                          </span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <h2 className="text-2xl font-semibold uppercase tracking-wide text-white">{area.name}</h2>
                          <p className="mt-1 text-sm text-brand-gray-200">
                            {areaItems[area.key].description}
                          </p>
                        </div>
                      </div>
                      {metrics && (
                        <div className="flex items-center justify-between border-b border-brand-gray-100 pb-2 pt-4">
                          <span className="text-xs uppercase tracking-wider text-brand-gray-500">
                            {ap.tableAvgYield}: <span className="font-semibold text-black">{metrics.yield}</span>
                          </span>
                          <span className="text-sm text-brand-gray-500 transition-colors group-hover:text-black">
                            {t.relatedAreasSection.viewLabel} →
                          </span>
                        </div>
                      )}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-brand-off-white py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-5 md:px-6">
            <div className="mx-auto max-w-4xl">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-gray-500">{ap.metricsHeading}</p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-gray-700">{ap.metricsParagraph}</p>
              <div className="mt-8 border-t border-brand-gray-200">
                {metricsData.map((row) => {
                  const meta = areaMeta.find((a) => a.key === row.key)!;
                  return (
                    <div
                      key={row.key}
                      className="flex flex-col gap-2 border-b border-brand-gray-200 py-4 sm:flex-row sm:items-baseline sm:justify-between"
                    >
                      <div className="flex-1">
                        <p className="text-sm font-semibold uppercase tracking-wide text-black">{meta.name}</p>
                        <p className="mt-1 text-xs text-brand-gray-500">{ap[meta.bestForKey]}</p>
                      </div>
                      <div className="flex shrink-0 gap-6 text-sm sm:text-right">
                        <span>
                          <span className="text-brand-gray-500">{ap.tableLandPrice}: </span>
                          <span className="font-semibold text-black tabular-nums">{row.landPrice}</span>
                        </span>
                        <span>
                          <span className="text-brand-gray-500">{ap.tableAvgYield}: </span>
                          <span className="font-semibold text-black tabular-nums">{row.yield}</span>
                        </span>
                        <span>
                          <span className="text-brand-gray-500">{ap.tableOccupancy}: </span>
                          <span className="font-semibold text-black tabular-nums">{row.occupancy}</span>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <InvestmentMarket />

        <InvestmentGuides />

        <InterestedInInvesting />
      </main>
      <FinalCTA />
      <Footer />
    </>
  );
}

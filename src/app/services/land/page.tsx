"use client";

import { useState } from "react";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { ServiceHero } from "@/components/ServiceHero";
import { ServicesSubNav } from "@/components/ServicesSubNav";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const moreServicesLinks = [
  { key: "architecture", href: "/services/architecture" },
  { key: "construction", href: "/services/construction" },
  { key: "villaManagement", href: "/services/villa-management" },
] as const;

// Real, already-established per-area land price and rental-yield ranges,
// matching src/app/areas/page.tsx's metricsData exactly (not new/invented
// figures) — reused here for the "Rwanda Land Prices" and "Best Areas to Buy
// Land" sections, per the reference's price-table and area-card layout.
const areaData = [
  { key: "kigali" as const, name: "Kigali", href: "/areas/kigali", landPrice: "$50-120/sqm", yield: "8-12%" },
  { key: "musanze" as const, name: "Musanze", href: "/areas/musanze", landPrice: "$30-60/sqm", yield: "12-18%" },
  { key: "rubavu" as const, name: "Rubavu", href: "/areas/rubavu", landPrice: "$40-80/sqm", yield: "15-20%" },
  { key: "nyungwe" as const, name: "Nyungwe", href: "/areas/nyungwe", landPrice: "$15-30/sqm", yield: "10-15%" },
  { key: "huye" as const, name: "Huye", href: "/areas/huye", landPrice: "$15-35/sqm", yield: "10-15%" },
  { key: "evane" as const, name: "Evane", href: "/areas/evane", landPrice: "$20-45/sqm", yield: "12-16%" },
  { key: "nyanza" as const, name: "Nyanza", href: "/areas/nyanza", landPrice: "$20-50/sqm", yield: "13-17%" },
  { key: "akagera" as const, name: "Akagera", href: "/areas/akagera", landPrice: "$10-25/sqm", yield: "12-16%" },
] as const;

const CheckIcon = () => (
  <svg
    className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-teal"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function LandServicePage() {
  const { t } = useLanguage();
  const p = t.serviceLandPage;
  const ap = t.areasPage;
  const areaItems = t.areasSection.items;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Real, established figures reused for the hero stats row, matching
  // balitecture.com/services/land, which puts a stats row directly in the
  // hero instead of a separate bar.
  const heroStats = [
    { value: String(areaData.length), label: "Investment Areas" },
    { value: "99-Year", label: "Leasehold Terms" },
    { value: "50%", label: "Off Architecture Design" },
  ];

  const tenureLeaseholdFacts = [
    p.tenureRowTermLeasehold,
    p.tenureRowAccessLeasehold,
    p.tenureRowAdminLeasehold,
    p.tenureRowRentalLeasehold,
  ];

  const tenureFreeholdFacts = [
    p.tenureRowTermFreehold,
    p.tenureRowAccessFreehold,
    p.tenureRowAdminFreehold,
    p.tenureRowRentalFreehold,
  ];

  const whyBuyItems = [
    { title: p.whyBuyItem1Title, desc: p.whyBuyItem1Desc },
    { title: p.whyBuyItem2Title, desc: p.whyBuyItem2Desc },
    { title: p.whyBuyItem3Title, desc: p.whyBuyItem3Desc },
    { title: p.whyBuyItem4Title, desc: p.whyBuyItem4Desc },
    { title: p.whyBuyItem5Title, desc: p.whyBuyItem5Desc },
  ];

  const acquisitionSteps = [
    { title: p.acquisitionStep1Title, desc: p.acquisitionStep1Desc },
    { title: p.acquisitionStep2Title, desc: p.acquisitionStep2Desc },
    { title: p.acquisitionStep3Title, desc: p.acquisitionStep3Desc },
    { title: p.acquisitionStep4Title, desc: p.acquisitionStep4Desc },
    { title: p.acquisitionStep5Title, desc: p.acquisitionStep5Desc },
    { title: p.acquisitionStep6Title, desc: p.acquisitionStep6Desc },
  ];

  const dueDiligenceItems = [
    { title: p.dueDiligenceItem1Title, desc: p.dueDiligenceItem1Desc },
    { title: p.dueDiligenceItem2Title, desc: p.dueDiligenceItem2Desc },
    { title: p.dueDiligenceItem3Title, desc: p.dueDiligenceItem3Desc },
    { title: p.dueDiligenceItem4Title, desc: p.dueDiligenceItem4Desc },
  ];

  const mistakeItems = [
    { title: p.mistakesItem1Title, desc: p.mistakesItem1Desc },
    { title: p.mistakesItem2Title, desc: p.mistakesItem2Desc },
    { title: p.mistakesItem3Title, desc: p.mistakesItem3Desc },
  ];

  const crossSellChecklist = [
    p.crossSellChecklistItem1,
    p.crossSellChecklistItem2,
    p.crossSellChecklistItem3,
    p.crossSellChecklistItem4,
  ];

  // Real, page-specific Q&As already established sitewide in the shared
  // investment FAQ (foreigners buying, freehold vs leasehold, and which areas
  // Ever Retreat covers) — reused here rather than inventing new questions,
  // matching the reference's page-specific "Land FAQs" accordion.
  const landFaqs = [t.faqSection.items[0], t.faqSection.items[1], t.faqSection.items[6]];

  const nextSteps = [
    { eyebrow: "Design Your Villa", title: t.services.items.architecture.title, href: "/services/architecture" },
    { eyebrow: "Build It", title: t.services.items.construction.title, href: "/services/construction" },
    { eyebrow: "Already Own Land?", title: t.services.partnershipsTitle, href: "/services/development-partnerships" },
  ];

  // Reuse the two already-existing, real blog posts most relevant to buying
  // land (rather than inventing new "land guide" articles).
  const relatedPosts = [
    { ...t.blogSection.posts[1], href: "/blog/best-area-to-invest-in-rwanda" },
    { ...t.blogSection.posts[2], href: "/blog/can-foreigners-buy-property-in-rwanda" },
  ];

  return (
    <PageLayout
      showCta={false}
      hero={
        <ServiceHero
          name={p.heroSlide1Title}
          subtitle={p.heroSlide1Subtitle}
          image="/images/services/land-aerial.webp"
          imageAlt="Aerial view of land in Rwanda"
          eyebrow="Land Services"
          twoTone
          minHeightClass="min-h-[85vh]"
          stats={heroStats}
          hideCta
        />
      }
    >
      <ServicesSubNav />

      {/* 1. Buy Land in Rwanda — intro + Quick Reference sidebar */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_380px] lg:gap-24">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-wider text-brand-gray-500">
                Land Investment in Rwanda
              </p>
              <h2 className="mb-6 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
                <span className="font-light">Buy Land in</span> <span className="font-bold">Rwanda</span>
              </h2>
              <div className="space-y-5">
                <p className="text-base leading-relaxed text-brand-gray-600">{p.processParagraph1}</p>
                <p className="text-base leading-relaxed text-brand-gray-600">{p.processParagraph2}</p>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/services/architecture"
                  className="inline-flex items-center border-b border-black pb-0.5 text-sm font-semibold uppercase tracking-wide text-black transition-opacity hover:opacity-60"
                >
                  Architecture Services
                </Link>
                <Link
                  href="/invest-in-rwanda"
                  className="inline-flex items-center border-b border-black pb-0.5 text-sm font-semibold uppercase tracking-wide text-black transition-opacity hover:opacity-60"
                >
                  Rwanda Investment Guide
                </Link>
              </div>
            </div>
            <div className="border border-brand-gray-200">
              <div className="border-b border-brand-gray-200 bg-brand-teal p-6">
                <p className="mb-1 text-xs uppercase tracking-wider text-white/50">Quick Reference</p>
                <p className="text-lg font-bold uppercase tracking-wide text-white">{p.quickRefTitle}</p>
              </div>
              <div className="divide-y divide-brand-gray-200">
                <div className="p-5">
                  <p className="mb-1 text-xs uppercase tracking-wider text-brand-gray-500">{p.quickRefPriceLabel}</p>
                  <p className="text-sm font-bold text-black">{p.quickRefPriceValue}</p>
                </div>
                <div className="p-5">
                  <p className="mb-1 text-xs uppercase tracking-wider text-brand-gray-500">{p.quickRefTermLabel}</p>
                  <p className="text-sm font-bold text-black">{p.quickRefTermValue}</p>
                </div>
                <div className="p-5">
                  <p className="mb-1 text-xs uppercase tracking-wider text-brand-gray-500">{p.quickRefAreasLabel}</p>
                  <p className="text-sm font-bold text-black">{p.quickRefAreasValue}</p>
                </div>
                <div className="p-5">
                  <p className="mb-1 text-xs uppercase tracking-wider text-brand-gray-500">{p.quickRefDiscountLabel}</p>
                  <p className="text-sm font-bold text-black">{p.quickRefDiscountValue}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Buy Land in Rwanda */}
      <section className="bg-brand-off-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-brand-gray-500">
              {p.whyBuyEyebrow}
            </p>
            <h2 className="mb-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
              <span className="font-light">Why Buy Land</span> <span className="font-bold">in Rwanda</span>
            </h2>
            <p className="mb-8 max-w-3xl text-base leading-relaxed text-brand-gray-600 md:mb-14">
              {p.whyBuyIntro}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px bg-brand-gray-200 md:grid-cols-2 lg:grid-cols-3">
            {whyBuyItems.map((item) => (
              <div key={item.title} className="h-full bg-brand-white p-8 md:p-10">
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">{item.title}</h3>
                <p className="text-sm leading-relaxed text-brand-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Freehold vs Leasehold */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-brand-gray-500">
              {p.tenureEyebrow}
            </p>
            <h2 className="mb-8 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl md:mb-14">
              <span className="font-light">Freehold vs</span> <span className="font-bold">Leasehold</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-px bg-brand-gray-200 md:grid-cols-2">
            <div className="h-full bg-brand-white p-10 md:p-12">
              <div className="mb-6 inline-block bg-brand-teal px-3 py-1 text-xs uppercase tracking-widest text-white">
                {p.tenureColLeasehold}
              </div>
              <h3 className="mb-6 text-xl font-bold uppercase tracking-wide text-black">
                {p.tenureRowAccessLeasehold}
              </h3>
              <ul className="space-y-3">
                {tenureLeaseholdFacts.map((fact) => (
                  <li key={fact} className="flex items-start gap-3 text-sm leading-relaxed text-brand-gray-700">
                    <CheckIcon />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-full bg-brand-white p-10 md:p-12">
              <div className="mb-6 inline-block border border-brand-gray-200 px-3 py-1 text-xs uppercase tracking-widest text-brand-gray-700">
                {p.tenureColFreehold}
              </div>
              <h3 className="mb-6 text-xl font-bold uppercase tracking-wide text-black">
                {p.tenureRowTermFreehold}
              </h3>
              <ul className="space-y-3">
                {tenureFreeholdFacts.map((fact) => (
                  <li key={fact} className="flex items-start gap-3 text-sm leading-relaxed text-brand-gray-700">
                    <CheckIcon />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-sm leading-relaxed text-brand-gray-600">{p.tenureNote}</p>
        </div>
      </section>

      {/* 4. Can Foreigners Buy Land in Rwanda? */}
      <section className="bg-brand-off-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-brand-gray-500">
              {p.foreignersEyebrow}
            </p>
            <h2 className="mb-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
              <span className="font-light">Can Foreigners</span> <span className="font-bold">Buy Land in Rwanda?</span>
            </h2>
            <p className="mb-8 max-w-3xl text-base leading-relaxed text-brand-gray-600 md:mb-14">
              {t.faqSection.items[0].answer}
            </p>
          </div>
          <div className="space-y-px">
            <div className="grid grid-cols-1 items-start gap-6 bg-brand-white p-8 md:grid-cols-[120px_1fr] md:gap-10 md:p-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-gray-500">Option 1</span>
              <div>
                <h3 className="mb-1 text-base font-bold uppercase tracking-wide text-black">
                  {p.foreignersOption1Title}
                </h3>
                <p className="mb-4 text-xs uppercase tracking-wider text-brand-gray-500">
                  {p.foreignersOption1Label}
                </p>
                <p className="text-sm leading-relaxed text-brand-gray-600">{p.foreignersOption1Desc}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 items-start gap-6 bg-brand-white p-8 md:grid-cols-[120px_1fr] md:gap-10 md:p-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-gray-500">Option 2</span>
              <div>
                <h3 className="mb-1 text-base font-bold uppercase tracking-wide text-black">
                  {p.foreignersOption2Title}
                </h3>
                <p className="mb-4 text-xs uppercase tracking-wider text-brand-gray-500">
                  {p.foreignersOption2Label}
                </p>
                <p className="text-sm leading-relaxed text-brand-gray-600">{p.foreignersOption2Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Rwanda Land Prices */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-brand-gray-500">
              {p.pricesEyebrow}
            </p>
            <h2 className="mb-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
              <span className="font-light">Rwanda Land</span> <span className="font-bold">Prices</span>
            </h2>
            <p className="mb-12 max-w-3xl text-base leading-relaxed text-brand-gray-600">{p.pricesIntro}</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-teal text-white">
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-widest">
                    {p.pricesColArea}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-widest">
                    {p.pricesColPrice}
                  </th>
                  <th className="hidden px-6 py-4 text-left text-xs font-semibold uppercase tracking-widest md:table-cell">
                    {p.pricesColYield}
                  </th>
                  <th className="hidden px-6 py-4 text-left text-xs font-semibold uppercase tracking-widest lg:table-cell">
                    {p.pricesColGuide}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-gray-200">
                {areaData.map((area, index) => (
                  <tr key={area.key} className={index % 2 === 0 ? "bg-brand-white" : "bg-brand-off-white"}>
                    <td className="px-6 py-5 text-sm font-bold uppercase tracking-wide text-black">{area.name}</td>
                    <td className="px-6 py-5 text-sm font-semibold text-black">{area.landPrice}</td>
                    <td className="hidden px-6 py-5 text-sm text-brand-gray-700 md:table-cell">{area.yield}</td>
                    <td className="hidden px-6 py-5 lg:table-cell">
                      <Link
                        href={area.href}
                        className="border-b border-black pb-0.5 text-xs font-semibold uppercase tracking-wide text-black transition-opacity hover:opacity-60"
                      >
                        {area.name} Guide
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. How to Buy Land in Rwanda */}
      <section className="bg-brand-off-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-brand-gray-500">
              {p.acquisitionEyebrow}
            </p>
            <h2 className="mb-8 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl md:mb-14">
              <span className="font-light">How to Buy Land</span> <span className="font-bold">in Rwanda</span>
            </h2>
          </div>
          <div className="space-y-px">
            {acquisitionSteps.map((step, index) => (
              <div
                key={step.title}
                className="grid grid-cols-1 items-start gap-4 bg-brand-white p-8 md:grid-cols-[100px_1fr] md:gap-10 md:p-10"
              >
                <span className="font-body text-4xl font-bold text-brand-gray-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="mb-2 text-base font-bold uppercase tracking-wide text-black">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Best Areas to Buy Land */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-brand-gray-500">
              {p.bestAreasEyebrow}
            </p>
            <h2 className="mb-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
              <span className="font-light">Best Areas to</span> <span className="font-bold">Buy Land</span>
            </h2>
            <p className="mb-8 text-base leading-relaxed text-brand-gray-600 md:mb-14">{p.bestAreasParagraph}</p>
          </div>
          <div className="grid grid-cols-1 gap-px bg-brand-gray-200 md:grid-cols-2 lg:grid-cols-3">
            {areaData.map((area) => (
              <div key={area.key} className="flex h-full flex-col bg-brand-white p-8 md:p-10">
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-lg font-bold uppercase tracking-wide text-black">{area.name}</h3>
                  <span className="ml-3 shrink-0 bg-brand-off-white px-2 py-1 text-xs font-semibold text-brand-gray-500">
                    {area.landPrice}
                  </span>
                </div>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-brand-gray-600">
                  {areaItems[area.key].description}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-brand-gray-100 pt-4">
                  <p className="text-xs uppercase tracking-wider text-brand-gray-500">
                    {ap.tableBestFor}: {ap[`bestFor${area.name}` as keyof typeof ap]}
                  </p>
                  <Link
                    href={area.href}
                    className="ml-4 whitespace-nowrap border-b border-black pb-0.5 text-xs font-semibold uppercase tracking-wide text-black transition-opacity hover:opacity-60"
                  >
                    {p.bestAreasCtaLabel}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. What to Look For When Buying Land */}
      <section className="bg-brand-off-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-brand-gray-500">
              {p.dueDiligenceEyebrow}
            </p>
            <h2 className="mb-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
              <span className="font-light">What to Look For When</span> <span className="font-bold">Buying Land</span>
            </h2>
            <p className="mb-8 max-w-3xl text-base leading-relaxed text-brand-gray-600 md:mb-14">
              {p.dueDiligenceIntro}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px bg-brand-gray-200 sm:grid-cols-2 lg:grid-cols-4">
            {dueDiligenceItems.map((item) => (
              <div key={item.title} className="h-full bg-brand-white p-8">
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">{item.title}</h3>
                <p className="text-sm leading-relaxed text-brand-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Common Mistakes When Buying Land */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-brand-gray-500">
              {p.mistakesEyebrow}
            </p>
            <h2 className="mb-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
              <span className="font-light">Common Mistakes When</span> <span className="font-bold">Buying Land</span>
            </h2>
            <p className="mb-8 max-w-3xl text-base leading-relaxed text-brand-gray-600 md:mb-14">
              {p.mistakesIntro}
            </p>
          </div>
          <div className="space-y-px">
            {mistakeItems.map((item, index) => (
              <div
                key={item.title}
                className="grid grid-cols-1 items-start gap-4 bg-brand-off-white p-8 md:grid-cols-[60px_1fr] md:gap-8 md:p-10"
              >
                <span className="font-body text-3xl font-bold text-brand-gray-200">{index + 1}</span>
                <div>
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-black">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. From Land to Income-Generating Villa */}
      <section className="bg-brand-off-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-24">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-wider text-brand-gray-500">
                {p.crossSellEyebrow}
              </p>
              <h2 className="mb-6 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
                <span className="font-light">{p.crossSellHeadingLight}</span>{" "}
                <span className="font-bold">{p.crossSellHeadingBold}</span>
              </h2>
              <p className="text-base leading-relaxed text-brand-gray-600">{p.crossSellParagraph1}</p>
              <p className="mt-4 text-base leading-relaxed text-brand-gray-600">{p.crossSellParagraph2}</p>
            </div>
            <div className="space-y-4">
              {crossSellChecklist.map((item) => (
                <div key={item} className="flex items-start gap-4 border-b border-brand-gray-200 pb-4">
                  <CheckIcon />
                  <p className="text-sm text-brand-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. Land FAQs — page-specific accordion reusing 3 real, already-
          established Q&As (foreigners buying, freehold vs leasehold, areas
          covered) rather than inventing new questions. */}
      <section id="land-faq" className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mb-10">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              Common Questions
            </p>
            <h2 className="text-2xl font-bold uppercase tracking-wide text-black md:text-4xl">
              <span className="font-light">Land in Rwanda</span> <span className="font-bold">FAQs</span>
            </h2>
          </div>
          <div className="mx-auto max-w-3xl divide-y divide-brand-gray-200">
            {landFaqs.map((item, index) => (
              <div key={item.question} className="py-5">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex min-h-[44px] w-full items-center justify-between gap-4 text-left"
                >
                  <span className="pr-8 font-semibold text-black md:text-lg">{item.question}</span>
                  <span className="flex-shrink-0 text-2xl text-brand-gray-500">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                {openFaq === index && (
                  <p className="mt-3 text-sm leading-relaxed text-brand-gray-600">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Next-step quick links */}
      <section className="bg-brand-off-white py-12 md:py-16">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {nextSteps.map((step) => (
              <Link
                key={step.href}
                href={step.href}
                className="group block border border-brand-gray-200 bg-brand-white p-6 transition-colors hover:border-brand-gray-500"
              >
                <p className="mb-2 text-xs uppercase tracking-widest text-brand-gray-500">{step.eyebrow}</p>
                <p className="text-sm font-bold uppercase tracking-wide text-black transition-transform group-hover:translate-x-1">
                  {step.title} &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 13. More services */}
      <section className="bg-brand-white py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold uppercase tracking-wide text-black md:text-3xl">
            <span className="font-light">More</span> <span className="font-bold">Services</span>
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {moreServicesLinks.map((link) => {
              const item = t.services.items[link.key];
              return (
                <Link
                  key={link.key}
                  href={link.href}
                  className="group block border border-brand-gray-200 bg-brand-off-white p-8 transition-colors hover:border-black"
                >
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-black group-hover:underline">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-brand-gray-600">{item.description}</p>
                  <p className="mt-4 inline-block border-b border-black pb-0.5 text-xs font-semibold uppercase tracking-wide text-black">
                    Learn More
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 14. From the blog */}
      <section className="bg-brand-off-white py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <p className="mb-4 text-xs uppercase tracking-widest text-brand-gray-500">{t.blogSection.eyebrow}</p>
          <h2 className="mb-8 text-2xl font-bold uppercase tracking-wide text-black md:text-3xl">
            <span className="font-light">Land Buyer</span> <span className="font-bold">Guides</span>
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {relatedPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group block bg-brand-white p-6 transition-colors duration-300 hover:bg-black"
              >
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-black transition-colors group-hover:text-white">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-gray-600 transition-colors group-hover:text-brand-gray-300">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wide text-black transition-colors group-hover:text-white">
                  {t.blogSection.readMore} &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 15. Closing CTA */}
      <section className="bg-brand-teal py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mx-auto max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-widest text-white/50">{p.closingEyebrow}</p>
            <h2 className="text-3xl font-bold uppercase tracking-wide text-white md:text-5xl">
              <span className="font-light">{p.closingHeadingLight}</span>{" "}
              <span className="font-bold">{p.closingHeadingBold}</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">{p.closingParagraph}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="https://wa.me/250787524298"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#25D366] px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#20bd5a]"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>{p.closingCtaSecondary}</span>
              </Link>
              <Link
                href="/contact"
                className="rounded-sm bg-white px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-brand-teal transition-colors hover:bg-brand-gray-200"
              >
                {p.closingCtaPrimary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

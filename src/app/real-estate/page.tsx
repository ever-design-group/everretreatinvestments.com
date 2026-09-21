"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { InvestmentGuides } from "@/components/InvestmentGuides";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// Real, verifiable images/hrefs paired positionally with the 6 featured developments
// (index-matched to t.realEstatePage.featured / t.developmentsSection, since translated
// text can't carry non-text data like image paths or routes).
const featuredMeta = [
  { propertyTypeKey: "villa", location: "Rubavu", status: "prototype", price: "notForSale", image: "/images/developments/villa-photos.jpeg", href: "/developments/nara-villas", name: "B&P Ever Retreat Villa" },
  { propertyTypeKey: "villa", location: "Rubavu", status: "prototype", price: "notForSale", image: "/images/developments/villa-photos.jpeg", href: "/developments/solas-uluwatu", name: "Cottage" },
  { propertyTypeKey: "villa", location: "Musanze", status: "comingSoon", price: "", image: "/images/developments/suku-4br/suku-4br-1.webp", href: "/developments/suku-residences", name: "Virunga Villas" },
  { propertyTypeKey: "villa", location: "Nyungwe", status: "comingSoon", price: "", image: "/images/areas/nyungwe-area.webp", href: "/areas/nyungwe", name: "Nyungwe Retreat" },
  { propertyTypeKey: "villa", location: "Huye", status: "comingSoon", price: "", image: "/images/areas/huye-area.webp", href: "/areas/huye", name: "Huye Villas" },
  { propertyTypeKey: "villa", location: "Nyanza", status: "comingSoon", price: "", image: "/images/areas/kigali-area.webp", href: "/areas/nyanza", name: "Nyanza Villas" },
];

const routeHrefs = [
  "/developments",
  "/developments",
  "/fractional-ownership",
  "/services/land",
  "/services/development-partnerships",
  "/services/villa-management",
];

const areaHrefs = ["/areas/kigali", "/areas/musanze", "/areas/rubavu", "/areas/nyungwe", "/areas/huye", "/areas/nyanza"];
const areaKeys = ["kigali", "musanze", "rubavu", "nyungwe", "huye", "nyanza"] as const;

// Same per-area land price ranges already published on the Areas hub
// (src/app/areas/page.tsx metricsData) — repeated here, not re-invented.
const areaLandPrice: Record<(typeof areaKeys)[number], string> = {
  kigali: "$50-120/sqm",
  musanze: "$30-60/sqm",
  rubavu: "$40-80/sqm",
  nyungwe: "$15-30/sqm",
  huye: "$15-35/sqm",
  nyanza: "$20-50/sqm",
};

export default function RealEstatePage() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const r = t.realEstatePage;
  const re = t.realEstatePageExtras;
  const faqItems = t.faqSection.items;
  const areaItems = t.areasSection.items;
  const badges = t.developmentsSection.badges;

  return (
    <>

      {/* 1. Hero */}
      <section className="relative min-h-[85vh] w-full overflow-hidden bg-brand-teal">
        <Image
          src="/images/portfolio/completed-villa-4.webp"
          alt="Ever Retreat property in Rwanda"
          fill
          priority
          className="object-cover opacity-40 hero-bg-image"
        />
        <div className="relative z-10 mx-auto flex h-full min-h-[85vh] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-32 md:px-12 md:pb-24">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/50 md:text-sm">
            {r.hero.eyebrow}
          </p>
          <h1 className="text-4xl uppercase leading-[0.95] tracking-[0.05em] text-white md:text-7xl lg:text-8xl">
            <span className="font-light">{r.hero.headlineLight}</span>{" "}
            <span className="font-bold">{r.hero.headlineBold}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:mt-8 md:text-lg">
            {r.hero.subtext}
          </p>
          <div className="mt-10 flex flex-wrap gap-8 md:mt-14 md:gap-16">
            <div>
              <div className="text-3xl font-bold tabular-nums text-white md:text-4xl">2</div>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/40">{r.hero.stat1Label}</p>
            </div>
            <div>
              <div className="text-3xl font-bold tabular-nums text-white md:text-4xl">8</div>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/40">{r.hero.stat2Label}</p>
            </div>
            <div>
              <div className="text-3xl font-bold tabular-nums text-white md:text-4xl">6</div>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/40">{r.hero.stat3Label}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white md:text-4xl">{r.hero.stat4Value}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/40">{r.hero.stat4Label}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 1b. Inventory stats bar */}
      <section className="bg-brand-white py-8 md:py-16 w-full border-b border-brand-gray-200/50">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-y-8 gap-x-4 sm:grid-cols-4 sm:gap-8">
            <div className="text-center">
              <p className="text-xl font-bold tracking-tight text-brand-black sm:text-3xl md:text-4xl lg:text-5xl">3</p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-brand-gray-500 sm:text-xs md:text-sm">
                {re.inventoryDevelopmentsLabel}
              </p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold tracking-tight text-brand-black sm:text-3xl md:text-4xl lg:text-5xl">8</p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-brand-gray-500 sm:text-xs md:text-sm">
                {re.inventoryAreasLabel}
              </p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold tracking-tight text-brand-black sm:text-3xl md:text-4xl lg:text-5xl">120</p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-brand-gray-500 sm:text-xs md:text-sm">
                {t.statsBarSection.villasBuiltLabel}
              </p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold tracking-tight text-brand-black sm:text-3xl md:text-4xl lg:text-5xl">10+</p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-brand-gray-500 sm:text-xs md:text-sm">
                {t.statsBarSection.yearsBuildingLabel}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About + stat grid + CTA */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <p className="mb-12 text-center text-xs font-medium italic text-brand-gray-500">
            {r.about.eyebrow}
          </p>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-brand-gray-500">
                {r.about.eyebrow}
              </p>
              <h2 className="mb-6 text-3xl uppercase tracking-wide text-black md:text-5xl">
                <span className="font-light">{r.about.headingLight}</span>{" "}
                <span className="font-bold">{r.about.headingBold}</span>
              </h2>
              <div className="space-y-5 text-base leading-relaxed text-brand-gray-700 md:text-lg">
                {r.about.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-px bg-brand-gray-200">
                {[
                  [r.about.statLegalTeam, r.about.statLegalTeamLabel],
                  [r.about.statFixedPrice, r.about.statFixedPriceLabel],
                  [r.about.statRwanda, r.about.statRwandaLabel],
                  [r.about.statEndToEnd, r.about.statEndToEndLabel],
                ].map(([value, label]) => (
                  <div key={label} className="bg-brand-white p-8 text-center">
                    <p className="mb-2 text-4xl font-bold text-black md:text-5xl">{value}</p>
                    <p className="text-xs uppercase tracking-wider text-brand-gray-500">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href="/developments"
                  className="block w-full rounded-sm bg-black px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-brand-gray-700"
                >
                  {r.about.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Advantage highlights + buying/legal guide + dual CTA */}
      <section className="bg-brand-off-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <p className="mb-4 text-center text-xs uppercase tracking-[0.3em] text-brand-gray-500">
            {r.advantage.eyebrow}
          </p>
          <h2 className="mb-6 text-center text-3xl uppercase tracking-wide text-black md:text-5xl">
            <span className="font-light">{r.advantage.headingLight}</span>{" "}
            <span className="font-bold">{r.advantage.headingBold}</span>
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-center text-base leading-relaxed text-brand-gray-700 md:mb-14">
            {r.advantage.intro}
          </p>
          <div className="mb-10 grid grid-cols-1 gap-px bg-brand-gray-200 md:mb-16 md:grid-cols-3">
            {r.advantage.highlights.map((item) => (
              <div key={item.number} className="bg-brand-off-white p-10 text-center">
                <p className="mb-3 text-4xl font-bold text-black md:text-5xl">{item.number}</p>
                <p className="mb-4 text-xs uppercase tracking-wider text-brand-gray-500">{item.title}</p>
                <p className="text-sm leading-relaxed text-brand-gray-700">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto max-w-3xl">
            <div>
              <h3 className="mb-6 text-xl font-bold uppercase tracking-wide text-black md:text-2xl">
                {r.advantage.buyingProcessTitle}
              </h3>
              <div className="space-y-5 text-base leading-relaxed text-brand-gray-700">
                {r.advantage.buyingSteps.map((step) => (
                  <p key={step.label}>
                    <strong>{step.label}</strong> — {step.text}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-14">
              <h3 className="mb-6 text-xl font-bold uppercase tracking-wide text-black md:text-2xl">
                {r.advantage.freeholdTitle}
              </h3>
              <div className="space-y-5 text-base leading-relaxed text-brand-gray-700">
                {r.advantage.freeholdParagraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-sm bg-black px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-brand-gray-700"
              >
                {r.advantage.ctaEnquire}
              </Link>
              <Link
                href="/developments"
                className="rounded-sm border border-black px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-black transition-colors hover:bg-black hover:text-white"
              >
                {r.advantage.ctaViewAll}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Service teaser cards */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <p className="mb-4 text-center text-xs uppercase tracking-[0.3em] text-brand-gray-500">
            {r.services.eyebrow}
          </p>
          <h2 className="mb-8 text-center text-3xl uppercase tracking-wide text-black md:mb-14 md:text-5xl">
            {r.services.heading}
          </h2>
          <div className="grid grid-cols-1 gap-px bg-brand-gray-200 md:grid-cols-3">
            {r.services.items.map((service) => (
              <div key={service.number} className="flex h-full flex-col bg-brand-white p-8 md:p-10">
                <div className="mb-6">
                  <p className="mb-1 text-4xl font-bold text-black md:text-5xl">{service.number}</p>
                  <p className="text-xs uppercase tracking-wider text-brand-gray-500">{service.price}</p>
                </div>
                <h3 className="mb-4 text-lg font-bold uppercase tracking-wide text-black">{service.title}</h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-brand-gray-700">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-block text-sm font-semibold uppercase tracking-[0.12em] text-black transition-colors hover:text-brand-gray-500"
                >
                  {r.services.learnMore}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4b. Property types */}
      <section className="bg-brand-off-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <p className="mb-4 text-center text-xs uppercase tracking-[0.3em] text-brand-gray-500">
            {re.propertyTypesEyebrow}
          </p>
          <h2 className="mb-14 text-center text-3xl uppercase tracking-wide text-black md:text-5xl">
            {re.propertyTypesHeading}
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Link href="/developments" className="group block rounded-sm border border-brand-gray-200 bg-brand-white p-10 transition-colors hover:border-black">
              <h3 className="mb-4 text-xl font-bold uppercase tracking-wide text-black">{re.villasCardTitle}</h3>
              <p className="mb-6 text-sm leading-relaxed text-brand-gray-700">{re.villasCardDesc}</p>
              <span className="inline-block border-b border-black pb-0.5 text-xs font-semibold uppercase tracking-[0.12em] text-black transition-colors group-hover:text-brand-gray-500">
                {re.villasCardCta}
              </span>
            </Link>
            <Link href="/services/land" className="group block rounded-sm border border-brand-gray-200 bg-brand-white p-10 transition-colors hover:border-black">
              <h3 className="mb-4 text-xl font-bold uppercase tracking-wide text-black">{re.landCardTitle}</h3>
              <p className="mb-2 text-xs uppercase tracking-wider text-brand-gray-500">{re.landCardPriceLabel}</p>
              <p className="mb-4 text-2xl font-bold text-black">{re.landCardPriceValue}</p>
              <p className="mb-6 text-sm leading-relaxed text-brand-gray-700">{re.landCardDesc}</p>
              <span className="inline-block border-b border-black pb-0.5 text-xs font-semibold uppercase tracking-[0.12em] text-black transition-colors group-hover:text-brand-gray-500">
                {re.landCardCta}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Featured developments grid */}
      <section className="bg-brand-off-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <p className="mb-4 text-center text-xs uppercase tracking-[0.3em] text-brand-gray-500">
            {r.featured.eyebrow}
          </p>
          <h2 className="mb-6 text-center text-3xl uppercase tracking-wide text-black md:text-5xl">
            {r.featured.heading}
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-base leading-relaxed text-brand-gray-700 md:mb-16">
            {r.featured.paragraph}
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {featuredMeta.map((property) => (
              <Link key={property.href + property.name} href={property.href} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-gray-100">
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 bg-white/20 px-3 py-1.5 backdrop-blur-sm">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white">
                      {t.developmentsSection.propertyType}
                    </span>
                  </div>
                  <div className="absolute right-4 top-4 bg-black/90 px-3 py-1.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white">
                      {property.status === "prototype" ? badges.prototype : badges.comingSoon}
                    </span>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="text-xl font-bold uppercase tracking-wide text-black transition-colors group-hover:text-brand-gray-700 md:text-2xl">
                    {property.name}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    <span className="text-sm text-brand-gray-500">{property.location}</span>
                    {property.price === "notForSale" && (
                      <>
                        <span className="text-sm text-brand-gray-500">·</span>
                        <span className="text-sm font-semibold text-black">{t.developmentsSection.notForSale}</span>
                      </>
                    )}
                  </div>
                  <span className="mt-4 inline-block border-b border-black pb-0.5 text-xs font-semibold uppercase tracking-wide text-black transition-colors group-hover:text-brand-gray-500">
                    {r.featured.viewDetails}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center md:mt-16">
            <Link
              href="/developments"
              className="inline-block border-b border-black pb-1 text-sm font-semibold uppercase tracking-[0.12em] text-black hover:text-brand-gray-500"
            >
              {r.featured.viewAll}
            </Link>
          </div>
        </div>
      </section>

      <InvestmentGuides />

      {/* 6. Other ways to invest */}
      <section className="bg-brand-off-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <p className="mb-4 text-center text-xs uppercase tracking-[0.3em] text-brand-gray-500">
            {r.routes.eyebrow}
          </p>
          <h2 className="mb-8 text-center text-3xl uppercase tracking-wide text-black md:mb-14 md:text-5xl">
            <span className="font-light">{r.routes.headingLight}</span>{" "}
            <span className="font-bold">{r.routes.headingBold}</span>
          </h2>
          <div className="space-y-px bg-brand-gray-200">
            {r.routes.items.map((route, index) => (
              <div key={route.title} className="bg-brand-off-white p-8 md:p-10">
                <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[1fr_auto] md:gap-12">
                  <div>
                    <h3 className="mb-3 text-xl font-bold uppercase tracking-wide text-black">{route.title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-brand-gray-700">{route.description}</p>
                    <Link
                      href={routeHrefs[index]}
                      className="text-sm font-semibold uppercase tracking-[0.12em] text-black transition-colors hover:text-brand-gray-500"
                    >
                      {r.routes.learnMore}
                    </Link>
                  </div>
                  <div className="flex flex-row gap-6 md:flex-col md:text-right">
                    <div>
                      <p className="mb-1 text-xs uppercase tracking-wider text-brand-gray-500">{route.stat1Label}</p>
                      <p className="text-base font-bold text-black">{route.stat1Value}</p>
                    </div>
                    <div>
                      <p className="mb-1 text-xs uppercase tracking-wider text-brand-gray-500">{route.stat2Label}</p>
                      <p className="text-base font-bold text-black">{route.stat2Value}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs uppercase tracking-wider text-brand-gray-500">{r.routes.note}</p>
        </div>
      </section>

      {/* 7. Why choose Ever Retreat */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <p className="mb-4 text-center text-xs uppercase tracking-[0.3em] text-brand-gray-500">
            {r.whyChoose.eyebrow}
          </p>
          <h2 className="mb-8 text-center text-3xl uppercase tracking-wide text-black md:mb-14 md:text-5xl">
            {r.whyChoose.heading}
          </h2>
          <div className="grid grid-cols-1 gap-px bg-brand-gray-200 md:grid-cols-2 lg:grid-cols-3">
            {r.whyChoose.items.map((item) => (
              <div key={item.title} className="h-full bg-brand-white p-8 md:p-10">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-black">{item.title}</h3>
                <p className="text-sm leading-relaxed text-brand-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            <Link
              href="/contact"
              className="rounded-sm border border-brand-gray-200 px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-black transition-colors hover:border-black"
            >
              {r.whyChoose.talkToUs}
            </Link>
            <Link
              href="/case-study"
              className="rounded-sm border border-brand-gray-200 px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-black transition-colors hover:border-black"
            >
              {r.whyChoose.seeCaseStudy}
            </Link>
            <Link
              href="/developments"
              className="rounded-sm border border-brand-gray-200 px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-black transition-colors hover:border-black"
            >
              {r.whyChoose.viewDevelopments}
            </Link>
          </div>
        </div>
      </section>

      {/* 8. FAQ accordion */}
      <section className="bg-brand-off-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-center text-xs uppercase tracking-[0.3em] text-brand-gray-500">
              {t.faqSection.eyebrow}
            </p>
            <h2 className="mb-8 text-center text-3xl uppercase tracking-wide text-black md:mb-14 md:text-5xl">
              <span className="font-light">{r.faq.headingLight}</span>{" "}
              <span className="font-bold">{r.faq.headingBold}</span>
            </h2>

            <div className="divide-y divide-brand-gray-200">
              {faqItems.map((item, index) => (
                <div key={item.question} className="py-5">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex min-h-[44px] w-full items-center justify-between text-left"
                  >
                    <span className="pr-8 font-semibold text-black md:text-lg">{item.question}</span>
                    <span className="flex-shrink-0 text-2xl text-brand-gray-500">
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="mt-3 overflow-hidden">
                      <p className="leading-relaxed text-brand-gray-700 md:text-base">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 border border-brand-gray-200 bg-brand-white p-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-black">
                {r.faq.stillHaveQuestionsTitle}
              </p>
              <p className="text-sm text-brand-gray-700">
                {r.faq.stillHaveQuestionsText}{" "}
                <Link href="/contact" className="font-semibold text-black underline hover:no-underline">
                  {r.faq.contactUs}
                </Link>{" "}
                <Link href="/faq" className="font-semibold text-black underline hover:no-underline">
                  {r.faq.viewAllFaqs}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Explore by area */}
      <section className="bg-brand-off-white py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-brand-gray-500">
            {t.areasSection.eyebrow}
          </p>
          <h2 className="mb-8 text-2xl uppercase tracking-wide text-black md:text-3xl">
            <span className="font-light">{r.areas.headingLight}</span> <span className="font-bold">{r.areas.headingBold}</span>
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {areaKeys.map((key, index) => (
              <Link
                key={key}
                href={areaHrefs[index]}
                className="group block bg-brand-white p-6 transition-colors duration-300 hover:bg-brand-teal"
              >
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-black transition-colors group-hover:text-white">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </h3>
                <p className="text-sm leading-relaxed text-brand-gray-700 transition-colors group-hover:text-brand-gray-300">
                  {areaItems[key].description}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-brand-gray-500 transition-colors group-hover:text-white/70">
                  {re.areaFromLabel} {areaLandPrice[key]}
                </p>
                <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wide text-black transition-colors group-hover:text-white">
                  {r.areas.explorePrefix} {key.charAt(0).toUpperCase() + key.slice(1)} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="bg-brand-teal py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/50">{r.finalCta.eyebrow}</p>
              <h2 className="mb-6 text-3xl uppercase tracking-wide text-white md:text-5xl">
                <span className="font-light">{r.finalCta.headingLight}</span>{" "}
                <span className="font-bold">{r.finalCta.headingBold}</span>
              </h2>
              <p className="mb-8 text-base leading-relaxed text-brand-gray-200">{r.finalCta.paragraph}</p>
              <div className="mb-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-sm bg-white px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-black transition-colors hover:bg-brand-gray-200"
                >
                  {r.finalCta.enquireNow}
                </Link>
                <Link
                  href="/developments"
                  className="rounded-sm border border-white/30 px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white/10"
                >
                  {r.finalCta.viewDevelopments}
                </Link>
              </div>
              <div className="border-t border-brand-gray-700 pt-8">
                <p className="mb-4 text-sm uppercase tracking-wider text-brand-gray-500">{r.finalCta.quickLinksLabel}</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/services" className="text-xs uppercase tracking-wider text-brand-gray-500 transition-colors hover:text-white">
                    {r.finalCta.linkServices}
                  </Link>
                  <Link href="/portfolio" className="text-xs uppercase tracking-wider text-brand-gray-500 transition-colors hover:text-white">
                    {r.finalCta.linkPortfolio}
                  </Link>
                  <Link href="/areas" className="text-xs uppercase tracking-wider text-brand-gray-500 transition-colors hover:text-white">
                    {r.finalCta.linkAreas}
                  </Link>
                  <Link href="/about" className="text-xs uppercase tracking-wider text-brand-gray-500 transition-colors hover:text-white">
                    {r.finalCta.linkAbout}
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px self-start bg-brand-gray-700">
              <div className="bg-brand-teal p-8 text-center">
                <p className="mb-2 text-4xl font-bold text-white md:text-5xl">2</p>
                <p className="text-xs uppercase tracking-wider text-brand-gray-500">{r.finalCta.statShowcaseLabel}</p>
              </div>
              <div className="bg-brand-teal p-8 text-center">
                <p className="mb-2 text-4xl font-bold text-white md:text-5xl">8</p>
                <p className="text-xs uppercase tracking-wider text-brand-gray-500">{r.finalCta.statDevelopmentsLabel}</p>
              </div>
              <div className="col-span-2 bg-brand-teal p-8 text-center">
                <p className="mb-2 text-4xl font-bold text-white md:text-5xl">6</p>
                <p className="text-xs uppercase tracking-wider text-brand-gray-500">{r.finalCta.statRegionsLabel}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

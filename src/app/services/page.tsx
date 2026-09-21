"use client";

import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/ServiceHero";
import { ServicesSubNav } from "@/components/ServicesSubNav";
import { ProcessSteps } from "@/components/ProcessSteps";
import { InvestmentGuides } from "@/components/InvestmentGuides";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useCurrency } from "@/lib/currency/CurrencyContext";

// Real, verifiable image/href/price data paired positionally with the 5 core
// services in t.servicesPage.serviceItems (translated text can't carry
// non-text data like image paths, routes, or currency amounts).
const serviceMeta = [
  {
    key: "architecture",
    image: "/images/services/villa-design.webp",
    href: "/services/architecture",
    priceUsd: 7000,
    priceSuffix: "· 50% off with build",
  },
  {
    key: "construction",
    image: "/images/services/villa-exterior.webp",
    href: "/services/construction",
    priceUsd: 1000,
    priceSuffix: "/sqm",
  },
  {
    key: "villaManagement",
    image: "/images/services/villa-management-hero.webp",
    href: "/services/villa-management",
    price: "From 20% per booking",
  },
  {
    key: "landSourcing",
    image: "/images/services/land-aerial.webp",
    href: "/services/land",
    price: "Freehold & Leasehold",
  },
  {
    key: "developmentPartnerships",
    image: "/images/services/development-partner.webp",
    href: "/services/development-partnerships",
    price: "Profit-share partnership",
  },
] as const;

const moreServicesMeta = [
  { key: "packages", href: "/packages" },
  { key: "developerGuide", href: "/choosing-a-rwanda-developer" },
] as const;

export default function ServicesPage() {
  const { t } = useLanguage();
  const { formatPrice } = useCurrency();
  const s = t.servicesPage;
  const items = s.serviceItems;

  // Plain service names (distinct from each item's marketing tagline above),
  // matching the reference's eyebrow-tagline + plain-heading pairing per
  // service card. Reuses the same real titles shown in the homepage
  // Services section and cross-links elsewhere on the site.
  const serviceTitles: Record<(typeof serviceMeta)[number]["key"], string> = {
    architecture: t.services.items.architecture.title,
    construction: t.services.items.construction.title,
    villaManagement: t.services.items.villaManagement.title,
    landSourcing: t.services.items.landSourcing.title,
    developmentPartnerships: t.services.partnershipsTitle,
  };

  const trustStats = [
    { value: s.trustBar.stat1Value, label: s.trustBar.stat1Label },
    { value: s.trustBar.stat2Value, label: s.trustBar.stat2Label },
    { value: s.trustBar.stat3Value, label: s.trustBar.stat3Label },
    { value: s.trustBar.stat4Value, label: s.trustBar.stat4Label },
  ];

  // A compact, 5-tile process overview directly under the hero, matching
  // balitecture.com's own "Consult / Land / Design / Build / Manage / Sell"
  // bar — built from our real 5 core services rather than invented steps.
  const processTiles = serviceMeta.map((meta, index) => ({
    key: meta.key,
    number: String(index + 1).padStart(2, "0"),
    title: items[meta.key].tagline,
    description: items[meta.key].feature1,
  }));

  return (
    <>
      <Header />
      <ServiceHero
        name={s.servicesHeadingLight}
        boldSuffix={s.servicesHeadingBold}
        twoTone
        eyebrow={s.servicesEyebrow}
        subtitle={t.services.paragraph}
        image="/images/hero/aerial-rwanda.webp"
        imageAlt="Ever Retreat Services - Rwanda"
        minHeightClass="min-h-[70vh]"
        hideCta
        stats={trustStats}
      />

      <ServicesSubNav />

      {/* 1. Process overview bar */}
      <section className="border-t border-white/10 bg-brand-teal py-12 md:py-16">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-5 md:gap-5">
            {processTiles.map((tile) => (
              <div key={tile.key} className="border-t border-white/15 pt-5">
                <p className="mb-2 text-xs font-semibold text-white/30">{tile.number}</p>
                <p className="mb-1 text-sm font-bold uppercase tracking-wide text-white md:text-base">
                  {tile.title}
                </p>
                <p className="text-xs leading-relaxed text-white/40">{tile.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-7. Five alternating per-service sections */}
      {serviceMeta.map((meta, index) => {
        const item = items[meta.key];
        const isEven = index % 2 === 0;
        const price =
          "priceUsd" in meta
            ? `${t.services.pricePrefix} ${formatPrice(meta.priceUsd)} ${meta.priceSuffix}`
            : meta.price;
        return (
          <section
            key={meta.key}
            className={`py-16 md:py-28 ${isEven ? "bg-brand-white" : "bg-brand-off-white"}`}
          >
            <div className="mx-auto max-w-[1440px] px-6">
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                  <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500">
                    {item.tagline}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold uppercase tracking-wide text-black md:text-4xl">
                    {serviceTitles[meta.key]}
                  </h3>
                  <p className="mt-6 text-base leading-relaxed text-brand-gray-600">
                    {item.description1}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-brand-gray-600">
                    {item.description2}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {[item.feature1, item.feature2, item.feature3].map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-brand-gray-700">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-brand-teal" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={meta.href}
                    className="group/btn mt-6 inline-flex items-center gap-2 rounded-sm bg-brand-teal px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-brand-teal/90"
                  >
                    <span>{item.cta}</span>
                    <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">&rarr;</span>
                  </Link>
                </div>
                <div className={`relative ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                    <Image
                      src={meta.image}
                      alt={item.tagline}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute bottom-4 right-4 border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                      {price}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* 8. Fixed-price packages banner */}
      <section className="bg-brand-white py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="flex flex-col items-center justify-between gap-8 bg-brand-off-white p-8 md:flex-row md:p-12">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-brand-gray-500">
                {t.services.fixedPriceQuestion}
              </p>
              <h2 className="text-2xl uppercase tracking-wide text-black md:text-3xl">
                <span className="font-light">{t.services.pricePrefix} {formatPrice(220000)}</span>{" "}
                <span className="font-bold">{t.services.packagesTitle}</span>
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-brand-gray-700">
                {t.services.packagesDescriptionPrefix} {formatPrice(220000)}.
              </p>
            </div>
            <Link
              href="/packages"
              className="group/btn inline-flex shrink-0 items-center gap-2 rounded-sm bg-brand-teal px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-teal/90"
            >
              <span>{t.services.viewPackages}</span>
              <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 8b. Promise text block */}
      <section className="bg-brand-white pb-16 md:pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="border border-brand-gray-200 p-8 text-center md:p-12">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              {s.promise.eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-bold text-black md:text-4xl">
              {s.promise.heading}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-brand-gray-600">
              {s.promise.paragraph1}
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-gray-600">
              {s.promise.paragraph2}
            </p>
          </div>
        </div>
      </section>

      {/* 9. More services grid */}
      <section className="bg-brand-off-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              {s.moreServicesEyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-bold text-black md:text-4xl">
              {s.moreServicesHeading}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-px bg-brand-gray-200 sm:grid-cols-2">
            {moreServicesMeta.map((meta) => {
              const item = s.moreServiceItems[meta.key];
              return (
                <Link
                  key={meta.key}
                  href={meta.href}
                  className="group flex h-full flex-col bg-brand-off-white p-6 transition-colors hover:bg-brand-white"
                >
                  <h3 className="text-sm font-bold uppercase tracking-wide text-black">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-gray-600">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wide text-black transition-colors group-hover:text-brand-gray-500">
                    {s.moreServicesLearnMore} &rarr;
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <InvestmentGuides />

      <ProcessSteps />

      {/* 10. Closing CTA */}
      <section className="bg-brand-teal py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-white/50">
            {s.closingEyebrow}
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold text-white md:text-5xl">
            <span className="font-light">{s.closingHeadingLight}</span>{" "}
            <span className="font-bold">{s.closingHeadingBold}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70">
            {s.closingParagraph}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-sm bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-brand-teal transition-colors hover:bg-brand-gray-200"
            >
              {s.closingCtaPrimary}
            </Link>
            <Link
              href="/developments"
              className="rounded-sm border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white/10"
            >
              {s.closingCtaSecondary}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

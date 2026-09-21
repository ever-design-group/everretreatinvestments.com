"use client";

import { PageLayout } from "@/components/PageLayout";
import { BringVillaToLifeCTA } from "@/components/CTASections";
import { StatsBar } from "@/components/StatsBar";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { FAQ } from "@/components/FAQ";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import { WhyEverRetreat } from "@/components/WhyEverRetreat";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, DollarSign, TrendingUp, Users, ShieldCheck, Building2, Clock, Leaf, Check, X } from "lucide-react";

export default function FractionalOwnershipPage() {
  const { t } = useLanguage();
  const p = t.fractionalOwnershipPage;

  const shares = [
    {
      project: "Nyungwe Eco-Lodges",
      location: "Nyungwe Rainforest",
      share: "1/4",
      weeks: p.shareWeeksValue,
      price: "$210,000",
      yield: "14-16%",
      image: "/images/areas/nyungwe-area.webp",
      featured: false,
    },
  ];

  const glanceItems = [
    { label: p.glanceShareLabel, value: p.glanceShareValue },
    { label: p.glanceUsageLabel, value: p.glanceUsageValue },
    { label: p.glanceOccupancyLabel, value: p.glanceOccupancyValue },
    { label: p.glanceExitLabel, value: p.glanceExitValue },
    { label: p.glanceCostsLabel, value: p.glanceCostsValue },
  ];

  const tiers = [
    { label: p.tier1Label, price: p.tier1Price, weeks: p.tier1Weeks, note: p.tier1Note },
    { label: p.tier2Label, price: p.tier2Price, weeks: p.tier2Weeks, note: p.tier2Note },
    { label: p.tier3Label, price: p.tier3Price, weeks: p.tier3Weeks, note: p.tier3Note },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: p.benefit1Title,
      description: p.benefit1Desc,
    },
    {
      icon: TrendingUp,
      title: p.benefit2Title,
      description: p.benefit2Desc,
    },
    {
      icon: Users,
      title: p.benefit3Title,
      description: p.benefit3Desc,
    },
    {
      icon: ShieldCheck,
      title: p.benefit4Title,
      description: p.benefit4Desc,
    },
    {
      icon: Clock,
      title: p.benefit5Title,
      description: p.benefit5Desc,
    },
    {
      icon: Building2,
      title: p.benefit6Title,
      description: p.benefit6Desc,
    },
  ];

  return (
    <PageLayout showCta={false}
      hero={
        <section className="relative flex min-h-[85vh] w-full flex-col justify-end overflow-hidden bg-brand-teal">
          <Image
            src="/images/portfolio/villa-pool-timber-deck.webp"
            alt="Luxury villa pool area"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/50" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-16 pt-32 md:px-12 md:pb-24">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/50 md:text-sm">
              Shared Ownership
            </p>
            <h1 className="max-w-3xl text-4xl font-bold uppercase leading-[0.95] tracking-wide text-white md:text-7xl lg:text-8xl">
              {p.heroSlide1Title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
              {p.heroSlide1Subtitle}
            </p>
          </div>
        </section>
      }
    >
      {/* How It Works */}
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#124341] sm:text-xs">
                {p.howItWorksEyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl">
                {p.howItWorksHeadingLine1} <br className="hidden sm:block" />
                {p.howItWorksHeadingLine2}
              </h2>
              <p className="mt-4 text-sm text-gray-600 sm:mt-6 sm:text-base md:text-lg">
                {p.howItWorksParagraph1}
              </p>
              <p className="mt-3 text-sm text-gray-600 sm:mt-4 sm:text-base">
                {p.howItWorksParagraph2}
              </p>
              <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
                <Link
                  href="#shares"
                  className="inline-flex items-center justify-center rounded-sm bg-[#124341] px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#0d332f] sm:px-6 sm:py-3 sm:text-sm"
                >
                  {p.viewSharesButton}
                  <ChevronRight className="ml-1.5 h-3.5 w-3.5 sm:ml-2 sm:h-4 sm:w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-sm border border-gray-300 px-5 py-2.5 text-xs font-semibold text-gray-700 transition-all hover:bg-gray-50 sm:px-6 sm:py-3 sm:text-sm"
                >
                  {p.enquireNowButton}
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/portfolio/villa-kitchen-living-open.webp"
                alt="Fractional ownership villa interior"
                width={600}
                height={400}
                className="w-full rounded-sm object-cover"
              />
              <div className="absolute -bottom-4 -right-4 rounded-sm border border-gray-100 bg-white px-4 py-3 sm:-bottom-6 sm:-right-6 sm:px-6 sm:py-4">
                <p className="text-xs font-bold text-[#124341] sm:text-sm">{p.occupancyBadgeValue}</p>
                <p className="text-[10px] text-gray-500 sm:text-xs">{p.occupancyBadgeLabel}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* At a Glance */}
      <section className="bg-gray-50 py-10 sm:py-12">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#124341] sm:text-xs">
            {p.glanceEyebrow}
          </p>
          <h2 className="mt-2 text-xl font-bold text-gray-900 sm:text-2xl">
            {p.glanceHeading}
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {glanceItems.map((item, index) => (
              <div key={index} className="rounded-sm border border-gray-200 bg-white p-4">
                <p className="text-[10px] font-medium uppercase tracking-wider text-gray-500 sm:text-xs">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-gray-900 sm:text-base">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsBar />

      {/* Available Shares */}
      <section id="shares" className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#124341] sm:text-xs">
              {p.sharesEyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:mt-4 sm:text-3xl md:text-4xl">
              {p.sharesHeading}
            </h2>
            <p className="mt-3 text-sm text-gray-600 sm:mt-4 sm:text-base">
              {p.sharesIntro}
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-md gap-6 sm:mt-10">
            {shares.map((share, index) => (
              <div
                key={index}
                className={`group overflow-hidden rounded-sm border bg-white transition-all ${
                  share.featured ? "border-[#124341] ring-1 ring-[#124341]" : "border-gray-200"
                }`}
              >
                <div className="relative h-48 overflow-hidden sm:h-52">
                  <Image
                    src={share.image}
                    alt={share.project}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {share.featured && (
                    <span className="absolute right-3 top-3 rounded-full bg-[#124341] px-2.5 py-0.5 text-[10px] font-semibold text-white sm:right-4 sm:top-4 sm:text-xs">
                      {p.bestValueBadge}
                    </span>
                  )}
                  {share.project === "Nyungwe Eco-Lodges" && (
                    <span className="absolute left-3 top-3 rounded-full bg-[#124341] px-2.5 py-0.5 text-[10px] font-semibold text-white sm:left-4 sm:top-4 sm:text-xs">
                      <Leaf className="mr-1 inline h-2.5 w-2.5" />
                      {p.ecoLuxuryBadge}
                    </span>
                  )}
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                        {share.project}
                      </h3>
                      <p className="text-xs text-gray-500 sm:text-sm">{share.location}</p>
                    </div>
                    {share.project === "Nyungwe Eco-Lodges" && (
                      <Leaf className="h-5 w-5 text-[#124341] sm:h-6 sm:w-6" />
                    )}
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="rounded-sm bg-gray-50 p-2.5 text-center sm:p-3">
                      <p className="text-[10px] text-gray-500 sm:text-xs">{p.labelShare}</p>
                      <p className="text-sm font-bold text-gray-900 sm:text-base">{share.share}</p>
                    </div>
                    <div className="rounded-sm bg-gray-50 p-2.5 text-center sm:p-3">
                      <p className="text-[10px] text-gray-500 sm:text-xs">{p.labelWeeksPerYear}</p>
                      <p className="text-sm font-bold text-gray-900 sm:text-base">{share.weeks}</p>
                    </div>
                    <div className="rounded-sm bg-[#124341] p-2.5 text-center text-white sm:p-3">
                      <p className="text-[10px] text-[#8aa9a6] sm:text-xs">{p.labelPrice}</p>
                      <p className="text-sm font-bold sm:text-base">{share.price}</p>
                    </div>
                    <div className="rounded-sm bg-[#e8f0ef] p-2.5 text-center sm:p-3">
                      <p className="text-[10px] text-[#124341] sm:text-xs">{p.labelYield}</p>
                      <p className="text-sm font-bold text-[#124341] sm:text-base">{share.yield}</p>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-4 flex w-full items-center justify-center rounded-sm border border-[#124341] px-4 py-2.5 text-xs font-semibold text-[#124341] transition-all hover:bg-[#124341] hover:text-white sm:mt-5 sm:py-3 sm:text-sm"
                  >
                    {p.enquireAboutShareButton}
                    <ChevronRight className="ml-1 h-3.5 w-3.5 sm:ml-1.5 sm:h-4 sm:w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Investment Scenarios */}
          <div className="mx-auto mt-14 max-w-4xl sm:mt-16">
            <div className="text-center">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#124341] sm:text-xs">
                {p.tiersEyebrow}
              </p>
              <h3 className="mt-3 text-xl font-bold text-gray-900 sm:text-2xl">
                {p.tiersHeading}
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 sm:text-base">
                {p.tiersIntro}
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {tiers.map((tier, index) => (
                <div key={index} className="rounded-sm border border-gray-200 bg-white p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{tier.label}</p>
                  <p className="mt-2 text-2xl font-bold text-[#124341]">{tier.price}</p>
                  <p className="mt-1 text-sm text-gray-600">{tier.weeks}</p>
                  <p className="mt-3 text-xs text-gray-500">{tier.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhyEverRetreat />

      {/* Benefits */}
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#124341] sm:text-xs">
              {p.benefitsEyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:mt-4 sm:text-3xl md:text-4xl">
              {p.benefitsHeading}
            </h2>
            <p className="mt-3 text-sm text-gray-600 sm:mt-4 sm:text-base">
              {p.benefitsIntro}
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group rounded-sm border border-gray-200 bg-white p-5 transition-all hover:border-[#124341] sm:p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#124341] sm:h-12 sm:w-12">
                  <benefit.icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                </div>
                <h3 className="mt-3 text-sm font-bold text-gray-900 sm:mt-4 sm:text-base">
                  {benefit.title}
                </h3>
                <p className="mt-1.5 text-xs text-gray-600 sm:mt-2 sm:text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fractional vs Full Ownership */}
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#124341] sm:text-xs">
              {p.comparisonEyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:mt-4 sm:text-3xl md:text-4xl">
              {p.comparisonHeading}
            </h2>
            <p className="mt-3 text-sm text-gray-600 sm:mt-4 sm:text-base">
              {p.comparisonIntro}
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-4xl overflow-x-auto rounded-sm border border-gray-200 sm:mt-10">
            <table className="w-full border-collapse text-xs sm:text-sm md:text-base">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="p-3 text-left font-semibold text-gray-900 sm:p-4">{p.comparisonFeatureLabel}</th>
                  <th className="p-3 text-left font-semibold text-[#124341] sm:p-4">{p.comparisonFractionalLabel}</th>
                  <th className="p-3 text-left font-semibold text-gray-900 sm:p-4">{p.comparisonFullLabel}</th>
                </tr>
              </thead>
              <tbody>
                {p.comparisonRows.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-0">
                    <td className="p-3 font-medium text-gray-800 sm:p-4">{row.feature}</td>
                    <td className="p-3 text-gray-600 sm:p-4">{row.fractional}</td>
                    <td className="p-3 text-gray-600 sm:p-4">{row.full}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Is This Right for You */}
      <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#124341] sm:text-xs">
              {p.fitEyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:mt-4 sm:text-3xl md:text-4xl">
              {p.fitHeading}
            </h2>
            <p className="mt-3 text-sm text-gray-600 sm:mt-4 sm:text-base">
              {p.fitIntro}
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:mt-10 sm:grid-cols-2">
            <div className="rounded-sm border border-gray-200 bg-white p-5 sm:p-6">
              <h3 className="text-sm font-bold text-gray-900 sm:text-base">{p.goodFitHeading}</h3>
              <ul className="mt-3 space-y-2">
                {p.goodFitItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs text-gray-600 sm:text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#124341]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-sm border border-gray-200 bg-white p-5 sm:p-6">
              <h3 className="text-sm font-bold text-gray-900 sm:text-base">{p.notFitHeading}</h3>
              <ul className="mt-3 space-y-2">
                {p.notFitItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs text-gray-600 sm:text-sm">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-3xl text-center">
            <p className="text-sm text-gray-600 sm:text-base">{p.crossPromoHeading}</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/testimonials"
                className="inline-flex items-center justify-center rounded-sm border border-gray-300 px-5 py-2.5 text-xs font-semibold text-gray-700 transition-all hover:bg-white sm:px-6 sm:py-3 sm:text-sm"
              >
                {p.seeTestimonialsLabel}
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-sm border border-gray-300 px-5 py-2.5 text-xs font-semibold text-gray-700 transition-all hover:bg-white sm:px-6 sm:py-3 sm:text-sm"
              >
                {p.meetTeamLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <InvestmentMarket />

      <FAQ />

      <BringVillaToLifeCTA />

      <InterestedInInvesting />
    </PageLayout>
  );
}

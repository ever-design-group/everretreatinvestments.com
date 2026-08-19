import { PageLayout } from "@/components/PageLayout";
import { HeroAnimated } from "@/components/HeroAnimated";
import { BringVillaToLifeCTA } from "@/components/CTASections";
import { StatsBar } from "@/components/StatsBar";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { FAQ } from "@/components/FAQ";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import { WhyEverRetreat } from "@/components/WhyEverRetreat";
import { Developments } from "@/components/Developments";

export const metadata = {
  title: "Invest in Rwanda Property | Complete Investment Guide | Ever Retreat",
  description:
    "Complete guide to property investment in Rwanda. Yields, legal structures, areas, and step-by-step process.",
};

export default function InvestInBaliPage() {
  // This page is kept for backward compatibility.
  // The active route is now /invest-in-rwanda
  const heroSlides = [
    {
      image: "/images/hero/aerial-rwanda.webp",
      imageAlt: "Aerial view of Rwanda landscape",
      title: "Invest in Rwanda",
      subtitle: "Complete guide to property investment in Rwanda.",
    },
    {
      image: "/images/areas/musanze-area.webp",
      imageAlt: "Musanze volcano views",
      title: "Volcanoes Region",
      subtitle: "Mountain eco-retreats and gorilla tourism demand.",
    },
    {
      image: "/images/areas/lake-kivu-area.webp",
      imageAlt: "Lake Kivu waterfront",
      title: "Lake Kivu",
      subtitle: "Waterfront properties with premium holiday rental potential.",
    },
  ];

  return (
    <PageLayout
      hero={
      <HeroAnimated
        slides={heroSlides}
        badge="Investment Guide"
        tag="Ever Retreat"
        ctaHref="/contact"
        secondaryCtaHref="/how-to-buy-property-in-rwanda"
      />
    }
    >

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Why Invest in Rwanda Property?</h2>
            <p>
              Rwanda is one of East Africa&apos;s strongest property investment
              markets. Consistent tourism growth, limited developable land in
              prime areas, and high rental yields make it an attractive
              destination for property investors.
            </p>
            <p>
              Our 160-strong in-house team handles everything from land
              sourcing to rental management. Our completed projects — Kivu
              Villas at Lake Kivu, Virunga Villas in Musanze, and Rubavu
              Residences — have delivered 15-20% gross yields with 85%+
              average occupancy.
            </p>
            <h3>Investment Metrics</h3>
            <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-black">15-20%</p>
                <p className="text-xs text-brand-gray-500">Gross Yield</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">85%+</p>
                <p className="text-xs text-brand-gray-500">Avg Occupancy</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">200+</p>
                <p className="text-xs text-brand-gray-500">Villas Built</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">160+</p>
                <p className="text-xs text-brand-gray-500">Team Members</p>
              </div>
            </div>
            <h3>Legal Ownership</h3>
            <p>
              Foreigners can legally secure property in Rwanda through
              leasehold agreements, freehold title deeds in designated areas, or
              corporate structures. Our in-house legal team ensures every
              acquisition is fully compliant.
            </p>
            <h3>Areas with Highest ROI</h3>
            <ul>
              <li>
                <strong>Kigali</strong> — Capital city, business district,
                consistent rental demand.
              </li>
              <li>
                <strong>Musanze</strong> — Volcanoes region, gorilla trekking,
                luxury lodge market.
              </li>
              <li>
                <strong>Rubavu</strong> — Lake Kivu waterfront, high-end holiday
                rentals.
              </li>
              <li>
                <strong>Nyungwe</strong> — Forest edge, eco-tourism, lower entry
                costs.
              </li>
              <li>
                <strong>Akagera</strong> — National park proximity, safari lodge
                market.
              </li>
            </ul>
            <h3>Step-by-Step Process</h3>
            <ol>
              <li>Land sourcing and due diligence</li>
              <li>Architectural design</li>
              <li>Permit application</li>
              <li>Construction management</li>
              <li>Rental income setup</li>
            </ol>
          </div>
        </div>
      </section>

      <StatsBar />

      <WhyEverRetreat />

      <Developments showAll />

      <InvestmentMarket />

      <FAQ />

      <BringVillaToLifeCTA />

      <InterestedInInvesting />
    </PageLayout>
  );
}

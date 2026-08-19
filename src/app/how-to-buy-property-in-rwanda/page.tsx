import { PageLayout } from "@/components/PageLayout";
import { HeroAnimated } from "@/components/HeroAnimated";
import { BringVillaToLifeCTA } from "@/components/CTASections";
import { StatsBar } from "@/components/StatsBar";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { FAQ } from "@/components/FAQ";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import { WhyEverRetreat } from "@/components/WhyEverRetreat";

export const metadata = {
  title: "How to Buy Property in Rwanda | Complete Guide | Ever Retreat",
  description:
    "Step-by-step guide to buying property in Rwanda. Legal frameworks, ownership types, due diligence, and the process from land search to transfer.",
};

export default function HowToBuyPage() {
  const heroSlides = [
    {
      image: "/images/hero/rwanda-landscape.webp",
      imageAlt: "Rwanda landscape with volcanoes",
      title: "How to Buy Property in Rwanda",
      subtitle: "Your complete step-by-step guide to real estate investment in Rwanda.",
    },
    {
      image: "/images/areas/lake-kivu-area.webp",
      imageAlt: "Lake Kivu waterfront property",
      title: "Legal Clarity",
      subtitle: "Foreign buyers can secure property through leasehold, freehold, and PT PMA structures.",
    },
    {
      image: "/images/developments/dasa-ubud/dasa-ubud-banner.webp",
      imageAlt: "Completed villa development in Rwanda",
      title: "Expert Support",
      subtitle: "Our in-house legal team guides you through every step, stress-free.",
    },
  ];

  return (
    <PageLayout
      hero={
      <HeroAnimated
        slides={heroSlides}
        badge="Free Guide"
        tag="Ever Retreat"
        ctaHref="#guide"
        secondaryCtaHref="/invest-in-rwanda"
      />
    }
    >

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Your Step-by-Step Process</h2>
            <p>
              Buying property in Rwanda is straightforward when you work with
              the right team. Our in-house legal experts handle all compliance,
              title verification, and transfer documentation — so you can focus
              on finding the perfect property.
            </p>
            <h3>Step 1: Define Your Budget and Goals</h3>
            <p>
              Before searching, clarify your budget (including build costs,
              permits, and transfer fees — typically 10-15% of purchase price)
              and your goals. Are you building a retirement home, a rental
              investment, or both? This determines which areas offer the best
              value.
            </p>
            <h3>Step 2: Property Search and Due Diligence</h3>
            <p>
              We search across Kigali, Musanze, Rubavu, Nyungwe, and Akagera
              for properties matching your criteria. Our team conducts full
              legal due diligence — title verification, zoning compliance,
              environmental checks, and restriction review.
            </p>
            <h3>Step 3: Negotiation and Offer</h3>
            <p>
              We negotiate on your behalf, leveraging local market knowledge and
              relationships. For development land, we can structure joint-venture
              partnerships where you contribute the land and we handle design,
              construction, and management.
            </p>
            <h3>Step 4: Legal Transfer</h3>
            <p>
              Foreign buyers in Rwanda can secure property through:
            </p>
            <ul>
              <li>
                <strong>Leasehold (PDL/Lease)</strong> — 20-99 year renewable
                lease, standard for foreigners. Available on most residential
                and development sites.
              </li>
              <li>
                <strong>Freehold (Title Deed)</strong> — Perpetual ownership,
                available in designated areas. Our legal team verifies
                eligibility.
              </li>
              <li>
                <strong>Corporate Structure</strong> — Local share company
                ownership for commercial-scale projects. Requires legal setup
                but offers flexibility.
              </li>
            </ul>
            <h3>Step 5: Transfer and Post-Purchase</h3>
            <p>
              Final transfer is handled by a licensed notary. After purchase,
              we coordinate site surveys, building permits, and if applicable,
              begin the design-build process for your villa.
            </p>
          </div>
        </div>
      </section>

      <StatsBar />

      <WhyEverRetreat />

      <section className="bg-brand-off-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500">
                Cost Breakdown
              </p>
              <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
                What You&apos;ll Pay
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-gray-600">
                Beyond the purchase price, budget 10-15% for transaction costs:
                notary fees, transfer tax, stamp duty, and legal fees. Our
                transparent fee structure means no hidden costs.
              </p>
            </div>
            <div>
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-brand-gray-200">
                    <th className="pb-3 text-left font-semibold">Fee</th>
                    <th className="pb-3 text-right font-semibold">Approx. Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-brand-gray-100">
                    <td className="py-3">Transfer Tax (5%)</td>
                    <td className="py-3 text-right">$2.5K (on $50K land)</td>
                  </tr>
                  <tr className="border-b border-brand-gray-100">
                    <td className="py-3">Notary/Transfer Fees</td>
                    <td className="py-3 text-right">~$1,500</td>
                  </tr>
                  <tr className="border-b border-brand-gray-100">
                    <td className="py-3">Legal Due Diligence</td>
                    <td className="py-3 text-right">~$500</td>
                  </tr>
                  <tr className="border-b border-brand-gray-100">
                    <td className="py-3">Building Permit</td>
                    <td className="py-3 text-right">~$300</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <InvestmentMarket />

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Top Areas for Property Investment</h2>
            <ol>
              <li>
                <strong>Kigali</strong> — Capital city, highest land values,
                consistent rental demand.
              </li>
              <li>
                <strong>Musanze</strong> — Volcanoes region, gorilla tourism,
                luxury lodge market.
              </li>
              <li>
                <strong>Rubavu</strong> — Lake Kivu waterfront, high-end
                holiday rentals.
              </li>
              <li>
                <strong>Nyungwe</strong> — Forest edge, eco-tourism, lower
                entry costs.
              </li>
              <li>
                <strong>Akagera</strong> — National park proximity, safari lodge
                market.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <FAQ />

      <BringVillaToLifeCTA />

      <InterestedInInvesting />
    </PageLayout>
  );
}

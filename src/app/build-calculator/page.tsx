import { PageLayout } from "@/components/PageLayout";
import { HeroAnimated } from "@/components/HeroAnimated";
import { BuildCalculator } from "@/components/BuildCalculator";
import { BringVillaToLifeCTA } from "@/components/CTASections";
import { StatsBar } from "@/components/StatsBar";
import { PricingForm } from "@/components/PricingForm";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { FAQ } from "@/components/FAQ";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import { WhyEverRetreat } from "@/components/WhyEverRetreat";

export const metadata = {
  title: "Villa Build Cost Calculator | Ever Retreat Rwanda",
  description:
    "Estimate the cost of building your villa in Rwanda with our interactive build calculator. Get instant estimates for construction, land, and projected returns.",
};

export default function BuildCalculatorPage() {
  const heroSlides = [
    {
      image: "/images/services/calculator-lifestyle.webp",
      imageAlt: "Woman at infinity pool overlooking Rwanda landscape",
      title: "Build Cost Calculator",
      subtitle: "Estimate construction costs, land prices, and projected rental returns for your Rwanda villa project.",
    },
    {
      image: "/images/areas/musanze-area.webp",
      imageAlt: "Musanze mountain landscape",
      title: "Rwanda Pricing",
      subtitle: "Accurate cost estimates for building in Kigali, Musanze, Rubavu, and beyond.",
    },
    {
      image: "/images/areas/lake-kivu-area.webp",
      imageAlt: "Lake Kivu development area",
      title: "Smart Investment",
      subtitle: "Built-in yield projections based on real Rwanda market data.",
    },
  ];

  return (
    <PageLayout
      hero={
      <HeroAnimated
        slides={heroSlides}
        badge="Free Calculator"
        tag="Ever Retreat"
        ctaHref="#calculator"
         secondaryCtaHref="/how-to-buy-property-in-rwanda"
      />
    }
    >

      <StatsBar />

      <BuildCalculator />

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Our Build Process in Rwanda</h2>
            <p>
              Once you have your estimate, our end-to-end service handles
              everything from land acquisition to villa completion across
              Rwanda:
            </p>
            <ol>
              <li>
                <strong>Land sourcing</strong> — We find and assess properties
                in your target area (Kigali, Musanze, Rubavu, Nyungwe, Akagera).
              </li>
              <li>
                <strong>Design & permits</strong> — Architect-designed plans
                with full RDC permitting and compliance.
              </li>
              <li>
                <strong>Construction</strong> — Managed build with weekly
                progress updates, built for Rwanda&apos;s climate.
              </li>
              <li>
                <strong>Rental setup</strong> — Furnishing, photos, and listing
                on all platforms.
              </li>
              <li>
                <strong>Ongoing management</strong> — Full rental management and
                maintenance.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <WhyEverRetreat />

      <PricingForm />

      <InvestmentMarket />

      <FAQ />

      <BringVillaToLifeCTA />

      <InterestedInInvesting />
    </PageLayout>
  );
}

import { PageLayout } from "@/components/PageLayout";
import { HeroAnimated } from "@/components/HeroAnimated";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import { StatsBar } from "@/components/StatsBar";

export const metadata = {
  title: "Evane Property Investment | Ever Retreat",
  description:
    "Evane property investment guide. Northern Rwanda hill station between Kigali and Musanze. Scenic landscapes with affordable land and strong rental potential.",
};

export default function EvaneAreaPage() {
  const heroSlides = [
    {
      image: "/images/areas/lake-kivu-area.webp",
      imageAlt: "Evane rolling hills landscape",
      title: "Evane",
      subtitle: "Northern Rwanda hill station — scenic highlands between Kigali and Musanze.",
    },
    {
      image: "/images/areas/huye-area.webp",
      imageAlt: "Evane countryside",
      title: "Scenic Highlands",
      subtitle: "Affordable land with growing interest from buyers seeking tranquil mountain living.",
    },
  ];

  return (
    <PageLayout
      hero={
        <HeroAnimated
          slides={heroSlides}
          badge="Northern Highlands"
          tag="Ever Retreat Areas"
          ctaHref="/contact"
          secondaryCtaHref="/areas"
        />
      }
    >

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Evane Property Market</h2>
            <p>
              Evane is a district in Rwanda&apos;s northern province, nestled in
              the rolling hills between Kigali and Musanze. The area offers
              scenic landscapes and fresh mountain air, appealing to those seeking
              a quieter alternative to the capital while still benefiting from
              Kigali&apos;s growing economic influence.
            </p>
            <p>
              Land prices in Evane are among Rwanda&apos;s most accessible,
              presenting opportunities for residential developments and small-scale
              eco-lodges. The improving road network connecting it to Kigali and
              Musanze is driving gradual interest from local buyers and
              investors.
            </p>
            <h3>Investment Metrics</h3>
            <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-black">$20-45/sqm</p>
                <p className="mt-1 text-xs text-brand-gray-500">Land Price</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">12-16%</p>
                <p className="mt-1 text-xs text-brand-gray-500">Gross Yield</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">75%</p>
                <p className="mt-1 text-xs text-brand-gray-500">Avg Occupancy</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">8-12%</p>
                <p className="mt-1 text-xs text-brand-gray-500">Appreciation</p>
              </div>
            </div>
            <h3>Why Invest in Evane</h3>
            <ul>
              <li>
                <strong>Low entry cost</strong> — Among the most affordable land
                prices in Rwanda&apos;s tourism zones.
              </li>
              <li>
                <strong>Scenic appeal</strong> — Attractive for mountain retreats
                and wellness developments.
              </li>
              <li>
                <strong>Improving connectivity</strong> — Better roads to Kigali
                and Musanze increasing accessibility.
              </li>
              <li>
                <strong>Early market</strong> — Lower competition with potential
                for early mover advantages.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <StatsBar />

      <InvestmentMarket />

      <InterestedInInvesting />
    </PageLayout>
  );
}

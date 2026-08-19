import { PageLayout } from "@/components/PageLayout";
import { HeroAnimated } from "@/components/HeroAnimated";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import { StatsBar } from "@/components/StatsBar";

export const metadata = {
  title: "Kigali Property Investment | Ever Retreat",
  description:
    "Kigali property investment guide. Capital city with consistent rental demand and strong capital appreciation. From $50-120/sqm land prices.",
};

export default function KigaliAreaPage() {
  const heroSlides = [
    {
      image: "/images/areas/kigali-area.webp",
      imageAlt: "Kigali city skyline",
      title: "Kigali",
      subtitle: "Rwanda's capital city — consistent demand, modern infrastructure, and strong capital growth.",
    },
    {
      image: "/images/hero/aerial-rwanda.webp",
      imageAlt: "Aerial view of Kigali",
      title: "Business Hub",
      subtitle: "Expats, diplomats, and business travelers create year-round rental demand.",
    },
  ];

  return (
    <PageLayout
      hero={
      <HeroAnimated
        slides={heroSlides}
        badge="Capital City"
        tag="Ever Retreat Areas"
        ctaHref="/contact"
        secondaryCtaHref="/areas"
      />
    }
    >

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Kigali Property Market</h2>
            <p>
              Kigali is Rwanda&apos;s capital and business hub, home to
              international organisations, embassies, and a growing expat
              community. The demand for quality housing and short-term rentals
              is consistent year-round, making it one of Rwanda&apos;s most
              stable property investment markets.
            </p>
            <h3>Investment Metrics</h3>
            <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-black">$50-120/sqm</p>
                <p className="mt-1 text-xs text-brand-gray-500">Land Price</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">8-12%</p>
                <p className="mt-1 text-xs text-brand-gray-500">Gross Yield</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">75%</p>
                <p className="mt-1 text-xs text-brand-gray-500">Avg Occupancy</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">5-10%</p>
                <p className="mt-1 text-xs text-brand-gray-500">Appreciation</p>
              </div>
            </div>
            <h3>Why Invest in Kigali</h3>
            <ul>
              <li>
                <strong>Stable demand</strong> — Year-round demand from expats,
                diplomats, and business travelers.
              </li>
              <li>
                <strong>Modern infrastructure</strong> — Growing business
                district with new developments and amenities.
              </li>
              <li>
                <strong>Capital growth</strong> — Strong long-term appreciation
                as Kigali develops into a regional hub.
              </li>
              <li>
                <strong>Liquidity</strong> — High resale demand from incoming
                expats and investors.
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

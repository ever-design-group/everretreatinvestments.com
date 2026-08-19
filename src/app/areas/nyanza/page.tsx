import { PageLayout } from "@/components/PageLayout";
import { HeroAnimated } from "@/components/HeroAnimated";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import { StatsBar } from "@/components/StatsBar";

export const metadata = {
  title: "Nyanza Property Investment | Ever Retreat",
  description:
    "Nyanza property investment guide. Southern Rwanda former capital near Lake Kivu and Nyungwe. Historical significance with affordable land and growing tourism.",
};

export default function NyanzaAreaPage() {
  const heroSlides = [
    {
      image: "/images/areas/kigali-area.webp",
      imageAlt: "Nyanza city skyline",
      title: "Nyanza",
      subtitle: "Southern province former capital — rich history near Lake Kivu and Nyungwe.",
    },
    {
      image: "/images/areas/lake-kivu-area.webp",
      imageAlt: "Nyanza lakeside landscape",
      title: "Historical Hub",
      subtitle: "Close to Lake Kivu and Nyungwe National Park, with consistent tourism demand.",
    },
  ];

  return (
    <PageLayout
      hero={
        <HeroAnimated
          slides={heroSlides}
          badge="Southern Province"
          tag="Ever Retreat Areas"
          ctaHref="/contact"
          secondaryCtaHref="/areas"
        />
      }
    >

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Nyanza Property Market</h2>
            <p>
              Nyanza is a city in Rwanda&apos;s southern province, located along
              the road between Kigali and Lake Kivu. Once the capital of the
              Kingdom of Rwanda, the area is steeped in history and features the
              iconic King&apos;s Palace. It sits at the foot of the Nyungwe
              highlands and is a natural stopover for travelers heading to Lake
              Kivu and Nyungwe National Park.
            </p>
            <p>
              With affordable land prices and growing tourism infrastructure,
              Nyanza presents opportunities for boutique hotels, cultural retreats,
              and residential developments serving both local and international
              markets.
            </p>
            <h3>Investment Metrics</h3>
            <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-black">$20-50/sqm</p>
                <p className="mt-1 text-xs text-brand-gray-500">Land Price</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">13-17%</p>
                <p className="mt-1 text-xs text-brand-gray-500">Gross Yield</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">72%</p>
                <p className="mt-1 text-xs text-brand-gray-500">Avg Occupancy</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">6-11%</p>
                <p className="mt-1 text-xs text-brand-gray-500">Appreciation</p>
              </div>
            </div>
            <h3>Why Invest in Nyanza</h3>
            <ul>
              <li>
                <strong>Cultural tourism</strong> — Historical sites and the King&apos;s
                Palace attract visitors year-round.
              </li>
              <li>
                <strong>Gateway location</strong> — Natural stopover between Kigali,
                Lake Kivu, and Nyungwe creates steady foot traffic.
              </li>
              <li>
                <strong>Moderate entry</strong> — Affordable land with better
                accessibility than Evane or Nyungwe.
              </li>
              <li>
                <strong>Growing infrastructure</strong> — Improvements to the Kigali-Lake
                Kivu corridor benefit the area.
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

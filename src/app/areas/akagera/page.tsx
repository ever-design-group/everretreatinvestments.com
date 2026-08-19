import { PageLayout } from "@/components/PageLayout";
import { HeroAnimated } from "@/components/HeroAnimated";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import { StatsBar } from "@/components/StatsBar";

export const metadata = {
  title: "Akagera Property Investment | Ever Retreat",
  description:
    "Akagera property investment guide. National park proximity with safari lodge opportunities and luxury tourism demand.",
};

export default function AkageraAreaPage() {
  const heroSlides = [
    {
      image: "/images/areas/huye-area.webp",
      imageAlt: "Akagera savannah landscape",
      title: "Akagera",
      subtitle: "National park proximity — safari lodges and exclusive eco-retreats.",
    },
    {
      image: "/images/areas/lake-kivu-area.webp",
      imageAlt: "Eastern Rwanda landscape",
      title: "Safari Tourism",
      subtitle: "Growing luxury safari market with high-end accommodation demand.",
    },
  ];

  return (
    <PageLayout
      hero={
      <HeroAnimated
        slides={heroSlides}
        badge="National Park"
        tag="Ever Retreat Areas"
        ctaHref="/contact"
        secondaryCtaHref="/areas"
      />
    }
    >

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Akagera Property Market</h2>
            <p>
              Akagera is centred around Rwanda&apos;s oldest national park, home
              to lions, elephants, rhinos, and vast savannah landscapes. The
              area attracts high-spending safari tourists and luxury travelers
              seeking exclusive, off-the-beaten-path accommodations.
            </p>
            <p>
              Safari lodges here command premium nightly rates due to their
              exclusivity and unique wildlife experiences. Land is relatively
              affordable, but the market is niche and specialized.
            </p>
            <h3>Investment Metrics</h3>
            <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-black">$10-25/sqm</p>
                <p className="mt-1 text-xs text-brand-gray-500">Land Price</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">12-16%</p>
                <p className="mt-1 text-xs text-brand-gray-500">Gross Yield</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">65%</p>
                <p className="mt-1 text-xs text-brand-gray-500">Avg Occupancy</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">7-12%</p>
                <p className="mt-1 text-xs text-brand-gray-500">Appreciation</p>
              </div>
            </div>
            <h3>Why Invest in Akagera</h3>
            <ul>
              <li>
                <strong>Exclusive market</strong> — Limited luxury safari
                accommodation creates scarcity value.
              </li>
              <li>
                <strong>High nightly rates</strong> — Safari lodges command
                premium rates from international tourists.
              </li>
              <li>
                <strong>Growing tourism</strong> — Rwanda&apos;s tourism sector
                is expanding, with Akagera seeing increased visitor numbers.
              </li>
              <li>
                <strong>Unique experience</strong> — Wildlife viewing and
                exclusive retreats command premium pricing.
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

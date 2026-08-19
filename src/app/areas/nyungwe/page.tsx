import { PageLayout } from "@/components/PageLayout";
import { HeroAnimated } from "@/components/HeroAnimated";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import { StatsBar } from "@/components/StatsBar";

export const metadata = {
  title: "Nyungwe Property Investment | Ever Retreat",
  description:
    "Nyungwe property investment guide. Forest edge with eco-tourism demand and lower entry costs. Perfect for sustainable lodge developments.",
};

export default function NyungweAreaPage() {
  const heroSlides = [
    {
      image: "/images/areas/nyungwe-area.webp",
      imageAlt: "Nyungwe forest canopy",
      title: "Nyungwe",
      subtitle: "Forest edge — eco-tourism accommodation and sustainable lodge investments.",
    },
    {
      image: "/images/areas/huye-area.webp",
      imageAlt: "Nyungwe highlands landscape",
      title: "Eco-Tourism Hub",
      subtitle: "Growing demand for sustainable lodges and forest-edge retreats.",
    },
  ];

  return (
    <PageLayout
      hero={
      <HeroAnimated
        slides={heroSlides}
        badge="Forest Edge"
        tag="Ever Retreat Areas"
        ctaHref="/contact"
        secondaryCtaHref="/areas"
      />
    }
    >

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Nyungwe Property Market</h2>
            <p>
              Nyungwe is centered around Rwanda&apos;s famous Nyungwe
              National Park — home to the world&apos;s largest mountain
              chimpanzee forest. The area attracts eco-tourists, researchers,
              and adventure travelers seeking canopy walks, bird watching, and
              forest experiences.
            </p>
            <p>
              Land prices here are among Rwanda&apos;s most affordable, making it
              ideal for eco-lodge developers and sustainable retreat operators.
              The growing community tourism initiative brings steady demand
              for accommodation.
            </p>
            <h3>Investment Metrics</h3>
            <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-black">$15-30/sqm</p>
                <p className="mt-1 text-xs text-brand-gray-500">Land Price</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">10-15%</p>
                <p className="mt-1 text-xs text-brand-gray-500">Gross Yield</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">70%</p>
                <p className="mt-1 text-xs text-brand-gray-500">Avg Occupancy</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">5-10%</p>
                <p className="mt-1 text-xs text-brand-gray-500">Appreciation</p>
              </div>
            </div>
            <h3>Why Invest in Nyungwe</h3>
            <ul>
              <li>
                <strong>Low entry cost</strong> — Most affordable land prices
                in Rwanda&apos;s prime tourism zones.
              </li>
              <li>
                <strong>Eco-tourism growth</strong> — Increasing international
                visitors to Nyungwe National Park.
              </li>
              <li>
                <strong>Niche market</strong> — Less competition, higher margins
                for unique eco-accommodations.
              </li>
              <li>
                <strong>Sustainability focus</strong> — Strong alignment with
                Rwanda&apos;s green tourism initiatives.
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

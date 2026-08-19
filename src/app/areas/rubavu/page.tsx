import { PageLayout } from "@/components/PageLayout";
import { HeroAnimated } from "@/components/HeroAnimated";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import { StatsBar } from "@/components/StatsBar";

export const metadata = {
  title: "Rubavu Property Investment | Ever Retreat",
  description:
    "Rubavu property investment guide. Lake Kivu waterfront with premium holiday rentals and high nightly rates. 15-20% gross yields.",
};

export default function RubavuAreaPage() {
  const heroSlides = [
    {
      image: "/images/areas/rubavu-area.webp",
      imageAlt: "Rubavu Lake Kivu waterfront",
      title: "Rubavu",
      subtitle: "Lake Kivu waterfront — premium holiday rentals and luxury lakeside villas.",
    },
    {
      image: "/images/areas/lake-kivu-area.webp",
      imageAlt: "Lake Kivu sunset from waterfront",
      title: "Lake Kivu Lifestyle",
      subtitle: "Home to Kivu Villas and Rubavu Residences — our most successful developments.",
    },
  ];

  return (
    <PageLayout
      hero={
      <HeroAnimated
        slides={heroSlides}
        badge="Lake Kivu"
        tag="Ever Retreat Areas"
        ctaHref="/contact"
        secondaryCtaHref="/areas"
      />
    }
    >

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Rubavu Property Market</h2>
            <p>
              Rubavu sits on the shores of Lake Kivu, one of Rwanda&apos;s
              most scenic and sought-after destinations. The area attracts
              high-spending tourists year-round for water sports, sunset
              cruises, and lakeside relaxation. Our Kivu Villas and Rubavu
              Residences developments here have achieved 95% occupancy with
              premium nightly rates.
            </p>
            <h3>Investment Metrics</h3>
            <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-black">$40-80/sqm</p>
                <p className="mt-1 text-xs text-brand-gray-500">Land Price</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">15-20%</p>
                <p className="mt-1 text-xs text-brand-gray-500">Gross Yield</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">85%</p>
                <p className="mt-1 text-xs text-brand-gray-500">Avg Occupancy</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">10-15%</p>
                <p className="mt-1 text-xs text-brand-gray-500">Appreciation</p>
              </div>
            </div>
            <h3>Why Invest in Rubavu</h3>
            <ul>
              <li>
                <strong>Premium rental rates</strong> — Lake Kivu waterfront
                villas command some of Rwanda&apos;s highest nightly rates.
              </li>
              <li>
                <strong>Consistent demand</strong> — Tourism to Lake Kivu is
                strong year-round, with peak seasons in December and July.
              </li>
              <li>
                <strong>Luxury segment</strong> — High-net-worth tourists and
                expats create demand for premium accommodations.
              </li>
              <li>
                <strong>Lifestyle investment</strong> — Beautiful location for
                personal use and rental income.
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

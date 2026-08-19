import { PageLayout } from "@/components/PageLayout";
import { Developments } from "@/components/Developments";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import Image from "next/image";

export const metadata = {
  title: "Lake Kivu Villas | Ever Retreat Rwanda",
  description:
    "Lake Kivu property investment guide. Waterfront properties with 15-20% yields, lakeside living, and strong rental demand.",
};

export default function UluwatuAreaPage() {
  return (
    <PageLayout
      title="Lake Kivu"
      subtitle="Waterfront luxury, world-class scenery, and the fastest-growing property market in Rwanda."
      showCta={false}
    >
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="/images/areas/lake-kivu-area.webp"
          alt="Lake Kivu waterfront"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/80">
            Investment Area
          </p>
          <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
            Lake Kivu
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-white/80">
            Waterfront luxury, world-class scenery, and consistent rental
            demand on the shores of Rwanda&apos;s Great Lake.
          </p>
        </div>
      </section>

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Lake Kivu Property Market</h2>
            <p>
              Lake Kivu sits on the western border of Rwanda, known for its
              stunning freshwater lake, volcanic hills, and relaxed lakeside
              atmosphere. Most villa developments here are positioned on the
              waterfront or hillside, offering unobstructed lake and volcano views.
            </p>

            <h3>Investment Metrics</h3>
            <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-black">$350-600/sqm</p>
                <p className="text-xs text-brand-gray-500">Land Price</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">15-20%</p>
                <p className="text-xs text-brand-gray-500">Gross Yield</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">85%</p>
                <p className="text-xs text-brand-gray-500">Avg Occupancy</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">7-15%</p>
                <p className="text-xs text-brand-gray-500">Appreciation</p>
              </div>
            </div>

            <h3>Why Invest in Lake Kivu</h3>
            <ul>
              <li>
                <strong>Limited developable land</strong> — The waterfront
                terrain restricts available plots, creating scarcity value.
              </li>
              <li>
                <strong>Year-round demand</strong> — Lake tourism and
                adventure travellers create consistent booking patterns.
              </li>
              <li>
                <strong>Premium nightly rates</strong> — Waterfront properties
                command some of Rwanda&apos;s highest rental rates.
              </li>
            </ul>

            <h3>Available Developments</h3>
            <p>
              Current projects at Lake Kivu include Kivu Villas and Rubavu
              Residences, both offering waterfront locations with high rental
              demand.
            </p>
          </div>
        </div>
      </section>

      <Developments showAll />

      <InvestmentMarket />

      <InterestedInInvesting />
    </PageLayout>
  );
}


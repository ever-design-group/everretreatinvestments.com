import { PageLayout } from "@/components/PageLayout";
import { Developments } from "@/components/Developments";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import Image from "next/image";

export const metadata = {
  title: "Volcanoes Villas | Ever Retreat Rwanda",
  description:
    "Volcanoes National Park property investment guide. Mountain retreats with 12-18% yields, gorilla tourism, and strong long-stay demand.",
};

export default function UbudAreaPage() {
  return (
    <PageLayout
      title="Volcanoes"
      subtitle="Rwanda&apos;s cultural and tourism highlands. Mountain retreats, gorilla trekking, and steady yields."
      showCta={false}
    >
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="/images/areas/musanze-area.webp"
          alt="Volcanoes mountains landscape"
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
            Volcanoes
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-white/80">
            Rwanda&apos;s northern mountain region. Gorilla tourism, luxury lodges,
            and steady year-round demand.
          </p>
        </div>
      </section>

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Volcanoes Property Market</h2>
            <p>
              The Volcanoes region in northern Rwanda is surrounded by
              terraced hills, volcanic mountains, and the famous Volcanoes
              National Park. The demand here comes from gorilla trekkers,
              luxury lodge operators, and investors seeking unique mountain
              experiences.
            </p>

            <h3>Investment Metrics</h3>
            <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-black">$150-300/sqm</p>
                <p className="text-xs text-brand-gray-500">Land Price</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">12-18%</p>
                <p className="text-xs text-brand-gray-500">Gross Yield</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">70%</p>
                <p className="text-xs text-brand-gray-500">Avg Occupancy</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">7-10%</p>
                <p className="text-xs text-brand-gray-500">Appreciation</p>
              </div>
            </div>

            <h3>Why Invest in Volcanoes</h3>
            <ul>
              <li>
                <strong>Gorilla tourism</strong> — Year-round demand from
                international visitors to Volcanoes National Park.
              </li>
              <li>
                <strong>Lower land prices</strong> — Entry costs are lower than
                urban areas, improving ROI potential.
              </li>
              <li>
                <strong>Long-stay demand</strong> — Luxury lodges and retreat
                operators book for weeks or months at a time.
              </li>
            </ul>

            <h3>Available Developments</h3>
            <p>
              Dasa Musanze is our luxury 3-bedroom villa project in the
              Volcanoes region, designed for both private use and rental income.
              Virunga Villas offers 2-bedroom mountain villas with wellness-focused
              amenities.
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


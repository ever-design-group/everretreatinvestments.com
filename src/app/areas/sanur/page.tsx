import { PageLayout } from "@/components/PageLayout";
import { Developments } from "@/components/Developments";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import Image from "next/image";

export const metadata = {
  title: "Rubavu Villas | Ever Retreat Rwanda",
  description:
    "Rubavu property investment guide. Family-friendly lakeside area with steady yields and high long-term occupancy.",
};

export default function SanurAreaPage() {
  return (
    <PageLayout
      title="Rubavu"
      subtitle="Lakeside relaxation with golden sunsets and steady rental demand. Lower entry costs with reliable returns."
      showCta={false}
    >
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="/images/areas/rubavu-area.webp"
          alt="Rubavu lakeside"
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
            Rubavu
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-white/80">
            Rwanda&apos;s original lakeside resort area. Family-friendly,
            well-established infrastructure, and consistent long-term demand.
          </p>
        </div>
      </section>

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Rubavu Property Market</h2>
            <p>
              Rubavu is Rwanda&apos;s original lakeside resort, known for its calm
              waters, family-friendly atmosphere, and well-established tourism
              infrastructure. Unlike the more volatile areas, Rubavu offers
              consistent demand from families, retirees, and long-stay guests.
            </p>

            <h3>Investment Metrics</h3>
            <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-black">$200-350/sqm</p>
                <p className="text-xs text-brand-gray-500">Land Price</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">8-12%</p>
                <p className="text-xs text-brand-gray-500">Gross Yield</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">80%</p>
                <p className="text-xs text-brand-gray-500">Avg Occupancy</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">5-8%</p>
                <p className="text-xs text-brand-gray-500">Appreciation</p>
              </div>
            </div>

            <h3>Why Invest in Rubavu</h3>
            <ul>
              <li>
                <strong>Stable yields</strong> — Well-established tourism
                infrastructure ensures consistent year-round demand.
              </li>
              <li>
                <strong>Family market</strong> — Higher average booking values
                from family groups staying 5-14 nights.
              </li>
              <li>
                <strong>Lower entry cost</strong> — More affordable land prices
                than urban areas, improving ROI potential.
              </li>
            </ul>

            <h3>Available Developments</h3>
            <p>
              Rubavu is ideal for villa projects targeting the family and
              long-stay market. Its proximity to the lake and peaceful atmosphere
              makes it popular with expatriates and retirees.
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


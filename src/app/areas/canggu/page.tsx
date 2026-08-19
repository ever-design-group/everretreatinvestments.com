import { PageLayout } from "@/components/PageLayout";
import { Developments } from "@/components/Developments";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import Image from "next/image";

export const metadata = {
  title: "Musanze Villas | Ever Retreat Rwanda",
  description:
    "Musanze property investment guide. Digital nomad hub with 15-20% yields and booming short-term rental demand.",
};

export default function CangguAreaPage() {
  return (
    <PageLayout
      title="Musanze"
      subtitle="Rwanda&apos;s most dynamic area. Adventure tourism, mountain retreats, and consistent rental demand."
      showCta={false}
    >
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="/images/areas/musanze-area.webp"
          alt="Musanze countryside"
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
            Musanze
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-white/80">
            Rwanda&apos;s northern highlands. High demand, strong rental
            returns, and a growing adventure tourism scene.
          </p>
        </div>
      </section>

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Musanze Property Market</h2>
            <p>
              Musanze has transformed into Rwanda&apos;s most dynamic area for adventure
              tourists, expats, and young professionals. The demand for short-term
              rentals is extremely high, driven by international visitors and
              mountain retreat seekers.
            </p>

            <h3>Investment Metrics</h3>
            <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-black">$200-400/sqm</p>
                <p className="text-xs text-brand-gray-500">Land Price</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">15-20%</p>
                <p className="text-xs text-brand-gray-500">Gross Yield</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">80%</p>
                <p className="text-xs text-brand-gray-500">Avg Occupancy</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">10-15%</p>
                <p className="text-xs text-brand-gray-500">Appreciation</p>
              </div>
            </div>

            <h3>Why Invest in Musanze</h3>
            <ul>
              <li>
                <strong>Growing expat population</strong> — Over 5,000
                international residents call Musanze home, creating year-round rental
                demand.
              </li>
              <li>
                <strong>Elevated nightly rates</strong> — Musanze commands
                premium rates compared to other areas, with villas averaging
                $150-300/night.
              </li>
              <li>
                <strong>Infrastructure development</strong> — Ongoing
                improvement projects keep the area attractive for long-term
                investment.
              </li>
            </ul>

            <h3>Available Developments</h3>
            <p>
              Dasa Musanze is our latest completed development in the Musanze
              highlands, offering turnkey rental-ready villas. Virunga Villas provides
              boutique 2-bedroom options for early-stage investors.
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


import { PageLayout } from "@/components/PageLayout";
import { Developments } from "@/components/Developments";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import Image from "next/image";

export const metadata = {
  title: "Kigali Villas | Ever Retreat Rwanda",
  description:
    "Kigali property investment guide. Capital city with consistent rental demand and strong capital appreciation. From $50-120/sqm land prices.",
};

export default function SeminyakAreaPage() {
  return (
    <PageLayout
      title="Kigali"
      subtitle="Rwanda&apos;s capital and business hub. Premium rates, high occupancy, strong resale value."
      showCta={false}
    >
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="/images/areas/kigali-area.webp"
          alt="Kigali city skyline"
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
            Kigali
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-white/80">
            Rwanda&apos;s capital and business hub. Home to international
            organisations, embassies, and a growing expat community
            with premium nightly rates and a liquid resale market.
          </p>
        </div>
      </section>

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Kigali Property Market</h2>
            <p>
              Kigali is Rwanda&apos;s capital and business hub, home to
              international organisations, embassies, and a growing expat
              community. With a mature tourism infrastructure, high average daily
              rates, and year-round occupancy, it offers stability rather than speculative
              growth.
            </p>

            <h3>Investment Metrics</h3>
            <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-black">$300-500/sqm</p>
                <p className="text-xs text-brand-gray-500">Land Price</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">8-12%</p>
                <p className="text-xs text-brand-gray-500">Gross Yield</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">75%</p>
                <p className="text-xs text-brand-gray-500">Avg Occupancy</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">5-10%</p>
                <p className="text-xs text-brand-gray-500">Appreciation</p>
              </div>
            </div>

            <h3>Why Invest in Kigali</h3>
            <ul>
              <li>
                <strong>Highest nightly rates</strong> — Luxury villas in
                Kigali command premium rates from high-net-worth travelers.
              </li>
              <li>
                <strong>Mature market</strong> — Established tourism
                infrastructure ensures consistent year-round demand.
              </li>
              <li>
                <strong>Liquid resale market</strong> — High demand for resale
                properties makes exit strategies straightforward.
              </li>
            </ul>

            <h3>Available Developments</h3>
            <p>
              Due to limited land availability and high entry costs, Kigali
              suits investors prioritising stability and consistent rental
              income over speculative growth.
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


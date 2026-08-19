import { PageLayout } from "@/components/PageLayout";
import { Developments } from "@/components/Developments";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import Image from "next/image";

export const metadata = {
  title: "Gisenyi Villas | Ever Retreat Rwanda",
  description:
    "Gisenyi property investment guide. Quiet upscale lakeside area with strong villa demand.",
};

export default function KerobokanAreaPage() {
  return (
    <PageLayout
      title="Gisenyi"
      subtitle="Lakeside town with strong demand and lower entry costs."
      showCta={false}
    >
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="/images/areas/lake-kivu-area.webp"
          alt="Gisenyi lakeside"
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
            Gisenyi
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-white/80">
            Lakeside town with growing villa development and quieter
            streets than central Rubavu.
          </p>
        </div>
      </section>

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Gisenyi Property Market</h2>
            <p>
              Gisenyi is a quieter lakeside town north of Rubavu, offering a more
              residential alternative to the main tourist strips while
              maintaining proximity to both Rubavu and the lake. It&apos;s popular with
              long-stay expatriates and families.
            </p>

            <h3>Investment Metrics</h3>
            <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-black">$250-400/sqm</p>
                <p className="text-xs text-brand-gray-500">Land Price</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">10-15%</p>
                <p className="text-xs text-brand-gray-500">Gross Yield</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">75%</p>
                <p className="text-xs text-brand-gray-500">Avg Occupancy</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">8-12%</p>
                <p className="text-xs text-brand-gray-500">Appreciation</p>
              </div>
            </div>

            <h3>Why Invest in Gisenyi</h3>
            <ul>
              <li>
                <strong>Quieter than Rubavu</strong> — Lower competition for
                tenants, with demand still strong.
              </li>
              <li>
                <strong>Walking distance to the lake</strong> — Residents
                have easy access to Gisenyi&apos;s beaches and lakeside amenities.
              </li>
              <li>
                <strong>Lower entry costs</strong> — Land prices are more
                affordable compared to Kigali or Rubavu.
              </li>
            </ul>

            <h3>Available Developments</h3>
            <p>
              Kigali Residence is our boutique development in Gisenyi featuring
              2-bedroom villas designed for both private living and rental income.
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


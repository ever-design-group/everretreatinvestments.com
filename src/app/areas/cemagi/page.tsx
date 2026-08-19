import { PageLayout } from "@/components/PageLayout";
import { Developments } from "@/components/Developments";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { PricingForm } from "@/components/PricingForm";

export const metadata = {
  title: "Nyungwe Villas | Ever Retreat Rwanda",
  description:
    "Nyungwe Forest property investment guide. Lake-edge and forest-edge area with 10-15% yields.",
};

export default function CemagiAreaPage() {
  return (
    <PageLayout
      title="Nyungwe"
      subtitle="Forest edge with emerging investment potential."
      showCta={false}
    >
      <section className="px-6 py-12 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-center text-sm font-medium uppercase tracking-wider text-brand-gray-500">
            Investment Area
          </p>
          <h2 className="mt-2 text-center text-3xl font-bold text-black md:text-5xl">
            Nyungwe Property Market
          </h2>
          <div className="prose prose-lg mx-auto mt-8 max-w-4xl">
            <p>
              Nyungwe Forest National Park is one of Rwanda&apos;s most
              visited destinations, home to chimpanzees and over 300 bird
              species. The area offers a unique combination of forest edge and
              hillside properties with emerging development potential.
            </p>
            <h3>Investment Metrics</h3>
            <ul>
              <li><strong>Average Land Price:</strong> $150-300/sqm</li>
              <li><strong>Gross Yield:</strong> 10-15%</li>
              <li><strong>Avg Occupancy:</strong> 75%</li>
              <li><strong>Capital Appreciation:</strong> 10-20%/year</li>
            </ul>
            <h3>Available Developments</h3>
            <p>
              Nyungwe offers some of the best entry-level investment opportunities
              in Rwanda&apos;s forest regions, with lower land prices than urban areas
              while still benefiting from consistent tourism demand.
            </p>
          </div>
        </div>
      </section>
      <Developments showAll />
      <InvestmentMarket />
      <PricingForm />
    </PageLayout>
  );
}


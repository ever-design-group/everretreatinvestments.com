import { PageLayout } from "@/components/PageLayout";
import { Developments } from "@/components/Developments";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { PricingForm } from "@/components/PricingForm";

export const metadata = {
  title: "Akagera Villas | Ever Retreat Rwanda",
  description:
    "Akagera property investment guide. Up-and-coming area near Akagera National Park.",
};

export default function PererenanAreaPage() {
  return (
    <PageLayout
      title="Akagera"
      subtitle="Near Akagera National Park. Lower entry costs with similar demand drivers."
      showCta={false}
    >
      <section className="px-6 py-12 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-center text-sm font-medium uppercase tracking-wider text-brand-gray-500">
            Investment Area
          </p>
          <h2 className="mt-2 text-center text-3xl font-bold text-black md:text-5xl">
            Akagera Property Market
          </h2>
          <div className="prose prose-lg mx-auto mt-8 max-w-4xl">
            <p>
              Akagera sits near Rwanda&apos;s eastern border, close to Akagera
              National Park. With lower entry costs and a unique safari-lodge
              demand curve to Akagera, it&apos;s becoming popular among investors seeking
              early-stage capital appreciation.
            </p>
            <h3>Investment Metrics</h3>
            <ul>
              <li><strong>Average Land Price:</strong> $100-200/sqm</li>
              <li><strong>Gross Yield:</strong> 12-16%</li>
              <li><strong>Avg Occupancy:</strong> 75%</li>
              <li><strong>Capital Appreciation:</strong> 8-15%/year</li>
            </ul>
            <h3>Available Developments</h3>
            <p>
              As development grows near Akagera National Park, the area offers
              attractive pricing for investors wanting to get in early on
              Rwanda&apos;s safari lodge market.
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


import { PageLayout } from "@/components/PageLayout";
import { InvestmentGuides } from "@/components/InvestmentGuides";
import Image from "next/image";

export const metadata = {
  title: "Best Area to Invest in Rwanda (2026) | Ever Retreat",
  description:
    "Comparing Kigali, Musanze, Rubavu, Nyungwe, and Akagera. Real yield data and land prices from our team that builds across all five areas.",
};

export default function BestAreaToInvestPage() {
  return (
    <PageLayout
      title="Best Area to Invest in Rwanda (2026)"
      subtitle="Comparing land prices, yields, and lifestyle factors across Rwanda&apos;s top investment areas."
      bg="off-white"
    >
      <section className="px-6 py-12 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <Image
              src="/images/areas/lake-kivu-area.webp"
              alt="Rwanda investment areas comparison"
              width={1200}
              height={600}
              className="w-full rounded-lg object-cover"
            />

            <h2>Kigali</h2>
            <p>
              <strong>Land price:</strong> $300-500/sqm<br />
              <strong>Gross yield:</strong> 8-12%<br />
              <strong>Occupancy:</strong> 75%
            </p>
            <p>
              Rwanda&apos;s capital and business hub. Best for stable, consistent
              returns with minimal management effort. Highest resale liquidity.
            </p>

            <h2>Musanze</h2>
            <p>
              <strong>Land price:</strong> $200-400/sqm<br />
              <strong>Gross yield:</strong> 15-20%<br />
              <strong>Occupancy:</strong> 80%
            </p>
            <p>
              Northern highlands, gateway to Volcanoes National Park. Highest
              yields in the country, growing expat community, and adventure
              tourism demand.
            </p>

            <h2>Rubavu</h2>
            <p>
              <strong>Land price:</strong> $350-600/sqm<br />
              <strong>Gross yield:</strong> 15-20%<br />
              <strong>Occupancy:</strong> 85%
            </p>
            <p>
              Lake Kivu waterfront. Premium nightly rates, family-friendly
              atmosphere, and strong long-stay demand. Limited supply keeps
              entry costs high but potential is significant.
            </p>

            <h2>Nyungwe</h2>
            <p>
              <strong>Land price:</strong> $150-300/sqm<br />
              <strong>Gross yield:</strong> 10-15%<br />
              <strong>Occupancy:</strong> 70%
            </p>
            <p>
              Forest edge near Nyungwe National Park. Lower entry costs,
              emerging market, and growing eco-tourism demand. Higher risk but
              potential for early-stage appreciation.
            </p>

            <h2>Akagera</h2>
            <p>
              <strong>Land price:</strong> $100-250/sqm<br />
              <strong>Gross yield:</strong> 12-16%<br />
              <strong>Occupancy:</strong> 65%
            </p>
            <p>
              Eastern province near Akagera National Park. Lowest entry cost,
              safari lodge demand, and significant upside potential. Best for
              patient investors willing to wait for infrastructure development.
            </p>

            <h2>Our Recommendation</h2>
            <p>
              For <strong>balanced returns with lower risk</strong>, invest in
              Rubavu or Kigili. For <strong>highest yield potential</strong>,
              focus on Musanze. For <strong>early-stage entry</strong>,
              consider Nyungwe or Akagera.
            </p>
          </div>
        </div>
      </section>

      <InvestmentGuides />
    </PageLayout>
  );
}


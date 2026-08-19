import { PageLayout } from "@/components/PageLayout";
import { InvestmentGuides } from "@/components/InvestmentGuides";
import Image from "next/image";

export const metadata = {
  title: "Lake Kivu vs Musanze Investment Comparison | Ever Retreat",
  description:
    "Comparing land prices, yields, and lifestyle factors between Rwanda's two premier villa investment destinations.",
};

export default function LakeKivuVsMusanzePage() {
  return (
    <PageLayout
      title="Lake Kivu vs Musanze: Investment Comparison"
      subtitle="Two premier destinations, two different investment profiles."
      bg="off-white"
    >
      <section className="px-6 py-12 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <Image
              src="/images/areas/lake-kivu-area.webp"
              alt="Lake Kivu waterfront"
              width={1200}
              height={600}
              className="w-full rounded-lg object-cover"
            />

            <h2>At a Glance</h2>
            <table>
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>Lake Kivu (Rubavu)</th>
                  <th>Musanze</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Avg Land Price</td>
                  <td>$350-600/sqm</td>
                  <td>$200-400/sqm</td>
                </tr>
                <tr>
                  <td>Avg Gross Yield</td>
                  <td>15-20%</td>
                  <td>15-20%</td>
                </tr>
                <tr>
                  <td>Avg Occupancy</td>
                  <td>85%</td>
                  <td>80%</td>
                </tr>
                <tr>
                  <td>Nightly Rate Range</td>
                  <td>$250-450</td>
                  <td>$180-350</td>
                </tr>
                <tr>
                  <td>Capital Appreciation</td>
                  <td>7-10%</td>
                  <td>10-15%</td>
                </tr>
              </tbody>
            </table>

            <h2>Lake Kivu (Rubavu)</h2>
            <p>
              <strong>Pros:</strong> Premium nightly rates, consistently high
              occupancy, scenic waterfront location, established tourism
              infrastructure.
            </p>
            <p>
              <strong>Cons:</strong> Higher entry cost, limited developable land
              availability, more competitive market.
            </p>

            <h2>Musanze</h2>
            <p>
              <strong>Pros:</strong> Lower land prices, strong capital
              appreciation potential, growing expat community, adventure
              tourism demand.
            </p>
            <p>
              <strong>Cons:</strong> More seasonal demand, lower nightly rates,
              infrastructure still developing.
            </p>

            <h2>Which Should You Choose?</h2>
            <p>
              If you prioritise <strong>immediate cash flow</strong> with
              premium nightly rates, Lake Kivu is the better choice. If you
              prefer <strong>capital appreciation</strong> with growing demand
              and lower entry cost, Musanze wins.
            </p>
            <p>
              Many investors diversify across both — allocating 60% to Lake Kivu
              for cash flow and 40% to Musanze for growth.
            </p>
          </div>
        </div>
      </section>

      <InvestmentGuides />
    </PageLayout>
  );
}

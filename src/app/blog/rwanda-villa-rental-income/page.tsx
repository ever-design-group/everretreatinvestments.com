import { PageLayout } from "@/components/PageLayout";
import { InvestmentGuides } from "@/components/InvestmentGuides";
import Image from "next/image";

export const metadata = {
  title: "How Much Rental Income Does a Rwanda Villa Actually Earn? | Ever Retreat",
  description:
    "Real nightly rates, occupancy data, and net yield breakdowns by area. Two worked case studies showing what investors actually take home.",
};

export default function RentalIncomePage() {
  return (
    <PageLayout
      title="How Much Rental Income Does a Rwanda Villa Actually Earn?"
      subtitle="Real nightly rates, occupancy data, and net yield breakdowns by area."
      bg="off-white"
    >
      <section className="px-6 py-12 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <Image
              src="/images/portfolio/villa-dining-rattan-interior.webp"
              alt="Luxury villa interior in Rwanda"
              width={1200}
              height={600}
              className="w-full rounded-lg object-cover"
            />

            <h2>Yield by Area</h2>
            <p>
              Here&apos;s what Ever Retreat-managed villas achieve as of 2026:
            </p>

            <table>
              <thead>
                <tr>
                  <th>Area</th>
                  <th>Avg Nightly Rate</th>
                  <th>Avg Occupancy</th>
                  <th>Gross Yield</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lake Kivu (Rubavu)</td>
                  <td>$250-450</td>
                  <td>85%</td>
                  <td>15-20%</td>
                </tr>
                <tr>
                  <td>Musanze Highlands</td>
                  <td>$180-350</td>
                  <td>80%</td>
                  <td>12-18%</td>
                </tr>
                <tr>
                  <td>Kigali</td>
                  <td>$300-600</td>
                  <td>75%</td>
                  <td>8-12%</td>
                </tr>
                <tr>
                  <td>Nyungwe Area</td>
                  <td>$150-280</td>
                  <td>70%</td>
                  <td>10-15%</td>
                </tr>
              </tbody>
            </table>

            <h2>Case Study: Kivu Villas</h2>
            <p>
              Our 3-bedroom waterfront villa at Lake Kivu (Kivu Villas):
            </p>
            <ul>
              <li>Purchase price: $269K</li>
              <li>Average nightly rate: $320</li>
              <li>Occupancy: 85%</li>
              <li>Annual rental income: $103,000</li>
              <li>Operating costs (management, cleaning, maintenance): $25,000</li>
              <li>Net income: $78,000</li>
              <li><strong>Net yield: 29%</strong></li>
            </ul>

            <h2>Case Study: Dasa Musanze</h2>
            <p>
              Our 3-bedroom mountain villa in the Musanze highlands:
            </p>
            <ul>
              <li>Purchase price: $199K</li>
              <li>Average nightly rate: $200</li>
              <li>Occupancy: 78%</li>
              <li>Annual rental income: $57,000</li>
              <li>Operating costs: $14,000</li>
              <li>Net income: $43,000</li>
              <li><strong>Net yield: 22%</strong></li>
            </ul>

            <h2>What We Include in Management</h2>
            <p>
              Ever Retreat&apos;s full rental management covers:
            </p>
            <ul>
              <li>Professional photography and listing creation</li>
              <li>Dynamic pricing optimization</li>
              <li>Guest communication and 24/7 support</li>
              <li>Cleaning and maintenance</li>
              <li>Accounting and tax reporting</li>
              <li>Legal compliance and permit renewals</li>
            </ul>
          </div>
        </div>
      </section>

      <InvestmentGuides />
    </PageLayout>
  );
}


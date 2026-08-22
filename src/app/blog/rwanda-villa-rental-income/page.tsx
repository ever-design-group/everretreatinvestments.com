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
      hero={
        <section className="relative h-[600px] w-full overflow-hidden">
          <Image
            src="/images/portfolio/villa-dining-rattan-interior.webp"
            alt="Luxury villa interior in Rwanda"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 sm:tracking-[0.25em]">
              Ever Retreat Blog
            </p>
            <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
              How Much Rental Income Does a Rwanda Villa Actually Earn?
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base md:text-lg">
              Real nightly rates, occupancy data, and net yield breakdowns by area.
            </p>
          </div>
        </section>
      }
    >
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="prose prose-lg mx-auto max-w-4xl">
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

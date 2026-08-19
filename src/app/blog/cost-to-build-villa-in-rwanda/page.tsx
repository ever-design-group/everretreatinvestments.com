import { PageLayout } from "@/components/PageLayout";
import { InvestmentGuides } from "@/components/InvestmentGuides";
import Image from "next/image";

export const metadata = {
  title: "What Does It Cost to Build a Villa in Rwanda? | Ever Retreat",
  description:
    "Real construction costs from $1,000 per sqm. Budget examples for 1-3 bedroom villas in Kigali, Musanze, and Rubavu.",
};

export default function CostToBuildVillaInRwandaPage() {
  return (
    <PageLayout
      title="What Does It Cost to Build a Villa in Rwanda?"
      subtitle="Real construction costs from $1,000 per sqm."
      bg="off-white"
    >
      <section className="px-6 py-12 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <Image
              src="/images/services/villa-exterior.webp"
              alt="Villa construction in Rwanda"
              width={1200}
              height={600}
              className="w-full rounded-lg object-cover"
            />

            <h2>Construction Cost Breakdown</h2>
            <p>
              In Rwanda, villa construction costs range from $1,000 to $2,500
              per square metre depending on design complexity, finishes, and
              location. Here&apos;s what you need to know when budgeting.
            </p>

            <h3>Cost by Villa Size</h3>
            <table>
              <thead>
                <tr>
                  <th>Villa Type</th>
                  <th>Built Area</th>
                  <th>Cost Range</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2-Bedroom Starter</td>
                  <td>80 sqm</td>
                  <td>$80K - $120K</td>
                </tr>
                <tr>
                  <td>3-Bedroom Mid-Range</td>
                  <td>120 sqm</td>
                  <td>$120K - $180K</td>
                </tr>
                <tr>
                  <td>4-Bedroom Luxury</td>
                  <td>180 sqm</td>
                  <td>$180K - $270K</td>
                </tr>
                <tr>
                  <td>5-Bedroom Premium</td>
                  <td>250 sqm</td>
                  <td>$250K - $375K</td>
                </tr>
              </tbody>
            </table>

            <h2>Land Costs by Area</h2>
            <p>
              Land prices vary significantly by location and proximity to
              tourism infrastructure.
            </p>

            <h3>Land Price Ranges</h3>
            <ul>
              <li>
                <strong>Kigali</strong> — $300-500/sqm in prime residential areas
              </li>
              <li>
                <strong>Rubavu (Lake Kivu)</strong> — $350-600/sqm for waterfront plots
              </li>
              <li>
                <strong>Musanze</strong> — $200-400/sqm in the highlands
              </li>
              <li>
                <strong>Nyungwe Area</strong> — $150-300/sqm near forest reserves
              </li>
              <li>
                <strong>Akagera Area</strong> — $100-250/sqm near national park
              </li>
            </ul>

            <h2>Total Project Budget</h2>
            <p>
              Our fixed-price packages start at $220K and include everything
              from land sourcing to rental setup. This covers architecture,
              permits, construction, interior design, and project management.
            </p>
            <p>
              Most investors budget 10-15% above the base package for custom
              upgrades, premium finishes, or land acquisition in prime areas.
            </p>
          </div>
        </div>
      </section>

      <InvestmentGuides />
    </PageLayout>
  );
}


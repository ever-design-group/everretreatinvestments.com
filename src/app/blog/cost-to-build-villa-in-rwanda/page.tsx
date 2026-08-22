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
      hero={
        <section className="relative h-[600px] w-full overflow-hidden">
          <Image
            src="/images/services/villa-exterior.webp"
            alt="Villa construction in Rwanda"
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
              What Does It Cost to Build a Villa in Rwanda?
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base md:text-lg">
              Real construction costs from $1,000 per sqm.
            </p>
          </div>
        </section>
      }
    >
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="prose prose-lg mx-auto max-w-4xl">
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

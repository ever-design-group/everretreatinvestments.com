import { PageLayout } from "@/components/PageLayout";
import { HeroAnimated } from "@/components/HeroAnimated";
import { BringVillaToLifeCTA } from "@/components/CTASections";
import { StatsBar } from "@/components/StatsBar";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { FAQ } from "@/components/FAQ";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import { WhyEverRetreat } from "@/components/WhyEverRetreat";
import Image from "next/image";

export const metadata = {
  title: "Fractional Ownership - Shared Rwanda Villa Ownership | Ever Retreat",
  description:
    "Explore fractional ownership opportunities in Rwanda. Own a share of premium villa properties with full usage rights, rental income potential, and hassle-free management.",
};

export default function FractionalOwnershipPage() {
  const heroSlides = [
    {
      image: "/images/portfolio/villa-pool-timber-deck.webp",
      imageAlt: "Luxury villa pool area",
      title: "Fractional Ownership",
      subtitle: "Own a share of premium Rwanda villas without the full cost.",
    },
    {
      image: "/images/portfolio/completed-villa-4.webp",
      imageAlt: "Completed luxury villa interior",
      title: "Luxury Access",
      subtitle: "Premium villas in Kigali, Musanze, Rubavu, and Nyungwe.",
    },
    {
      image: "/images/areas/lake-kivu-area.webp",
      imageAlt: "Lake Kivu waterfront",
      title: "Smart Investment",
      subtitle: "Rental income, shared costs, and professional management.",
    },
  ];

  return (
    <PageLayout
      hero={
      <HeroAnimated
        slides={heroSlides}
        badge="Shared Ownership"
        tag="Ever Retreat"
        ctaHref="#enquire"
        secondaryCtaHref="/packages"
      />
    }
    >

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500">
                How It Works
              </p>
              <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
                Co-Own Luxury. Pay Less. Earn More.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-gray-600">
                Fractional ownership lets you own a percentage of a premium
                villa in Rwanda&apos;s most desirable locations. Typically 1/2,
                1/3, or 1/4 shares, each granting you exclusive weeks of use
                plus rental income when you&apos;re not there.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-gray-600">
                Our current offerings include shares in Kivu Villas at Lake Kivu
                and Virunga Villas in Musanze — both achieving 95% occupancy and
                15-20% gross yields.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/portfolio/villa-kitchen-living-open.webp"
                alt="Fractional ownership villa interior"
                width={600}
                height={400}
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <StatsBar />

      <WhyEverRetreat />

      <section className="bg-brand-off-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Available Shares</h2>
            <table>
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Share</th>
                  <th>Weeks/Year</th>
                  <th>Price</th>
                  <th>Yield</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Kivu Villas (Lake Kivu)</td>
                  <td>1/4</td>
                  <td>13 weeks</td>
                  <td>$180K</td>
                  <td>16-18%</td>
                </tr>
                <tr>
                  <td>Virunga Villas (Musanze)</td>
                  <td>1/3</td>
                  <td>17 weeks</td>
                  <td>$159K</td>
                  <td>15-17%</td>
                </tr>
                <tr>
                  <td>Virunga Villas (Musanze)</td>
                  <td>1/2</td>
                  <td>26 weeks</td>
                  <td>$318K</td>
                  <td>15-17%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Benefits</h2>
            <ul>
              <li>
                <strong>Lower entry cost</strong> — Own luxury for a fraction
                of the full price.
              </li>
              <li>
                <strong>Rental income</strong> — Earn when you&apos;re not using
                your villa.
              </li>
              <li>
                <strong>Full management</strong> — Our team handles everything:
                maintenance, cleaning, guest communication, and dynamic pricing.
              </li>
              <li>
                <strong>Shared costs</strong> — Maintenance, taxes, and
                insurance are split among owners.
              </li>
              <li>
                <strong>Exit flexibility</strong> — Shares can be sold or
                transferred after a minimum holding period.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <InvestmentMarket />

      <FAQ />

      <BringVillaToLifeCTA />

      <InterestedInInvesting />
    </PageLayout>
  );
}

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
  title: "Land Sourcing Services - Find Land in Rwanda | Ever Retreat",
  description:
    "We source and evaluate land across Rwanda's prime investment zones. Legal due diligence, zoning checks, and negotiation - all before you commit. Freehold & leasehold options available.",
};

export default function LandServicePage() {
  const heroSlides = [
    {
      image: "/images/services/land-aerial.webp",
      imageAlt: "Aerial view of land in Rwanda",
      title: "Land Sourcing",
      subtitle: "Prime land identified, evaluated, and secured — before you commit.",
    },
    {
      image: "/images/services/land-prices-map.webp",
      imageAlt: "Land prices map of Rwanda",
      title: "Local Expertise",
      subtitle: "We know where the best land values are across Kigali, Musanze, and beyond.",
    },
    {
      image: "/images/areas/lake-kivu-area.webp",
      imageAlt: "Lake Kivu waterfront land",
      title: "Waterfront Opportunities",
      subtitle: "Lake Kivu and Akagera properties with unbeatable potential.",
    },
  ];

  return (
    <PageLayout
      hero={
      <HeroAnimated
        slides={heroSlides}
        badge="Due Diligence Included"
        tag="Ever Retreat Land"
        ctaHref="/contact"
        secondaryCtaHref="/areas"
      />
    }
    >

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500">
                Our Process
              </p>
              <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
                Finding the Right Land in Rwanda
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-gray-600">
                Buying land in Rwanda requires understanding local zoning
                laws, title verification, and terrain suitability. Our team
                sources and evaluates land across Rwanda&apos;s prime
                investment zones — from Lake Kivu waterfront to Musanze
                highlands — with full legal due diligence, zoning checks, and
                negotiation, all before you commit.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-gray-600">
                Both leasehold and freehold options are available. Our in-house
                legal team handles title verification, environmental compliance,
                and all transfer documentation.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/areas/musanze-area.webp"
                alt="Land for sale in Rwanda highlands"
                width={600}
                height={400}
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-off-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500">
              Prime Areas
            </p>
            <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
              Where We Source
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-gray-600">
              We identify land in Rwanda&apos;s highest-performing investment
              zones, each with distinct advantages for villa development.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                area: "Lake Kivu",
                price: "$30-80/sqm",
                desc: "Waterfront and hillside plots with high rental demand.",
              },
              {
                area: "Musanze",
                price: "$20-50/sqm",
                desc: "Volcanoes National Park proximity, growing tourism.",
              },
              {
                area: "Rubavu",
                price: "$25-60/sqm",
                desc: "Lake Kivu beaches and emerging resort market.",
              },
              {
                area: "Kigali",
                price: "$50-120/sqm",
                desc: "Capital city, business district, consistent demand.",
              },
              {
                area: "Nyungwe",
                price: "$15-35/sqm",
                desc: "Forest edge, eco-tourism, lower entry cost.",
              },
              {
                area: "Akagera",
                price: "$10-25/sqm",
                desc: "National park proximity, luxury safari lodge market.",
              },
            ].map((item) => (
              <div
                key={item.area}
                className="border border-brand-gray-100 p-6 text-center"
              >
                <h3 className="text-xl font-bold text-black">{item.area}</h3>
                <p className="mt-2 text-2xl font-bold text-brand-green">
                  {item.price}
                </p>
                <p className="mt-1 text-sm text-brand-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsBar />

      <WhyEverRetreat />

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>What&apos;s Included</h2>
            <ul>
              <li>Area selection consultation based on budget and goals</li>
              <li>Land search and property viewings</li>
              <li>Legal due diligence (title, zoning, permits)</li>
              <li>Negotiation and price haggling</li>
              <li>Purchase contract review</li>
              <li>Notary coordination and transfer</li>
              <li>Post-purchase site measurement and survey</li>
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

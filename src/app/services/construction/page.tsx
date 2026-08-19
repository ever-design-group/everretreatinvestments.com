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
  title: "Construction Services - Premium Eco-Villa Building in Rwanda | Ever Retreat",
  description:
    "Expert eco-villa construction in Rwanda with transparent pricing, quality materials, and on-time delivery. Build your dream retreat with 50% off design fees when you build with us.",
};

export default function ConstructionServicePage() {
  const heroSlides = [
    {
      image: "/images/services/villa-exterior.webp",
      imageAlt: "Villa under construction in Rwanda",
      title: "Construction",
      subtitle: "End-to-end build management with Rwanda's leading construction team.",
    },
    {
      image: "/images/portfolio/completed-villa-4.webp",
      imageAlt: "Completed luxury villa in Rwanda",
      title: "Quality Build",
      subtitle: "Fixed-price contracts from foundation to handover. 95% on-time completion.",
    },
    {
      image: "/images/developments/dasa-ubud/dasa-ubud-banner.webp",
      imageAlt: "Construction progress at Dasa Musanze development",
      title: "Proven Track Record",
      subtitle: "200+ completed projects across Kigali, Musanze, Rubavu, and Nyungwe.",
    },
  ];

  return (
    <PageLayout
      hero={
      <HeroAnimated
        slides={heroSlides}
        badge="Fixed-Price"
        tag="Ever Retreat Construction"
        ctaHref="/contact"
        secondaryCtaHref="/packages"
      />
    }
    >

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500">
                Our Approach
              </p>
              <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
                Built for Rwanda&apos;s Terrain & Climate
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-gray-600">
                Constructing villas in Rwanda requires understanding of laterite
                soil, seasonal rainfall patterns, and seismic considerations.
                Our 160-strong in-house team uses reinforced concrete structures
                with laterite-adapted foundations, proper drainage, and
                climate-responsive design — all included in our fixed-price
                contracts.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-gray-600">
                From Kivu Villas at Lake Kivu to Virunga Villa near the
                volcanoes, every project is managed by certified engineers with
                local expertise. We average 6-9 months per villa and maintain a
                95% on-time delivery rate.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/developments/suku-4br/suku-4br-1.webp"
                alt="Construction site in Rwanda"
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
              Build Quality
            </p>
            <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
              Quality Standards
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="text-center">
              <p className="text-3xl font-bold text-black">SNI</p>
              <p className="mt-2 text-sm text-brand-gray-600">
                Materials meet Rwandan standards
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-black">6-9 mo</p>
              <p className="mt-2 text-sm text-brand-gray-600">
                Average build timeline
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-black">95%</p>
              <p className="mt-2 text-sm text-brand-gray-600">
                On-time completion rate
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsBar />

      <WhyEverRetreat />

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Construction Process</h2>
            <ol>
              <li>
                <strong>Site preparation</strong> — Clearing, excavation, and
                foundation layout. Laterite soil stabilisation and drainage.
              </li>
              <li>
                <strong>Structural work</strong> — Reinforced concrete frame,
                roof structure, and waterproofing suitable for seasonal rains.
              </li>
              <li>
                <strong>Mechanical & electrical</strong> — Plumbing, electrical
                systems, and solar power integration.
              </li>
              <li>
                <strong>Finishes</strong> — Locally-sourced stone, hardwood, and
                tropical-appropriate materials.
              </li>
              <li>
                <strong>Final inspection</strong> — Quality control, snagging,
                and handover documentation.
              </li>
            </ol>
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

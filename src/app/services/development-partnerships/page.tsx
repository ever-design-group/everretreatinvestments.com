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
  title: "Development Partnerships - Villa Development in Rwanda | Ever Retreat",
  description:
    "Partner with Ever Retreat for villa developments in Rwanda. We design, build, sell, and manage full villa developments for landowners and investors.",
};

export default function DevelopmentPartnershipsPage() {
  const heroSlides = [
    {
      image: "/images/services/development-partner.webp",
      imageAlt: "Multi-villa development site in Rwanda",
      title: "Development Partnerships",
      subtitle: "Joint venture villa developments on your land — we handle everything.",
    },
    {
      image: "/images/portfolio/suku-render.webp",
      imageAlt: "Architectural render of completed Rwanda development",
      title: "Proven Model",
      subtitle: "Successful developments across Lake Kivu, Musanze, and Kigali.",
    },
    {
      image: "/images/portfolio/nara-render.webp",
      imageAlt: "Luxury villa development render",
      title: "Full Service",
      subtitle: "Design, build, sell, and manage — from concept to completion.",
    },
  ];

  return (
    <PageLayout
      hero={
      <HeroAnimated
        slides={heroSlides}
        badge="Joint Venture"
        tag="Ever Retreat Developments"
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
                Partnership Model
              </p>
              <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
                Already Own Land? Develop It With Us.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-gray-600">
                If you own land in Rwanda — whether at Lake Kivu, in the
                Musanze highlands, or near Kigali — we can partner with you to
                transform it into a profitable villa development. We bring
                architecture, construction, marketing, sales, and rental
                management capabilities. You bring the land. Profits are shared
                based on contribution, typically 50/50 or 60/40.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-gray-600">
                Our Kivu Villas project delivered 8 waterfront eco-lodges with
                95% occupancy. Virunga Villa achieved 15% gross yield with
                premium mountain tourism demand.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/services/development-partner.webp"
                alt="Development partnership in Rwanda"
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
              Our Projects
            </p>
            <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
              Completed Developments
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-gray-600">
              200+ villas across Rwanda&apos;s most desirable locations.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                name: "Kivu Villas",
                location: "Lake Kivu",
                units: "8 waterfront eco-lodges",
                image: "/images/areas/lake-kivu-area.webp",
              },
              {
                name: "Virunga Villa",
                location: "Musanze",
                units: "1 luxury mountain retreat",
                image: "/images/areas/musanze-area.webp",
              },
              {
                name: "Dasa Musanze",
                location: "Musanze Highlands",
                units: "12 villas",
                image: "/images/developments/dasa-ubud/dasa-ubud-banner.webp",
              },
            ].map((project) => (
              <div
                key={project.name}
                className="overflow-hidden rounded-lg border border-brand-gray-100"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-black">
                    {project.name}
                  </h3>
                  <p className="text-sm text-brand-gray-600">
                    {project.location} • {project.units}
                  </p>
                </div>
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
            <h2>Partnership Process</h2>
            <ol>
              <li>
                <strong>Land evaluation</strong> — Site analysis, zoning
                compliance, and feasibility study.
              </li>
              <li>
                <strong>Design</strong> — Architectural plans and 3D renders.
              </li>
              <li>
                <strong>Construction</strong> — Build management with quality
                control and timeline tracking.
              </li>
              <li>
                <strong>Sales & marketing</strong> — Launch campaign, listings,
                and buyer outreach.
              </li>
              <li>
                <strong>Rental management</strong> — Optional ongoing
                management for retained units.
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

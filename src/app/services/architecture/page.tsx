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
  title: "Architecture & Design Services - Bespoke Rwanda Villa Design | Ever Retreat",
  description:
    "Award-winning Rwanda architects with an IAI-licensed team. 200+ tropical modern villas designed. Custom architecture built for Rwanda's climate, permits, and rental performance. 50% off when you build with us.",
};

export default function ArchitectureServicePage() {
  const heroSlides = [
    {
      image: "/images/services/villa-design.webp",
      imageAlt: "Bespoke villa architectural design in Rwanda",
      title: "Architecture & Design",
      subtitle: "Award-winning tropical modern villas designed for Rwanda's climate and rental performance.",
    },
    {
      image: "/images/portfolio/villa-kitchen-living-open.webp",
      imageAlt: "Open-plan living area in Rwanda villa design",
      title: "Bespoke Design",
      subtitle: "Custom architecture built for Rwanda's terrain, climate, and investment returns.",
    },
    {
      image: "/images/portfolio/nara-render.webp",
      imageAlt: "Architectural render of completed Rwanda villa project",
      title: "50% Off Design",
      subtitle: "When you build with us, our award-winning architects design your villa at half price.",
    },
  ];

  return (
    <PageLayout
      hero={
      <HeroAnimated
        slides={heroSlides}
        badge="Award-Winning Design"
        tag="Ever Retreat Architecture"
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
                Tropical Modern. Built for Rwanda.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-gray-600">
                Our IAI-licensed architecture team has designed 200+
                eco-lodges and villas across Rwanda. Every plan balances
                modern aesthetics with Rwanda&apos;s highland climate,
                seasonal rainfall patterns, and local building traditions.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-gray-600">
                We design for rental performance as much as beauty. Kitchens
                are positioned for service access, bedrooms face away from
                road noise, and every villa includes a dedicated laundry and
                staff area.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/portfolio/villa-kitchen-living-open.webp"
                alt="Interior design in Rwanda villa"
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
              Design Process
            </p>
            <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
              5-Stage Design Process
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {[
              { step: "1", title: "Site Analysis", desc: "Topography, orientation, views, and regulatory constraints." },
              { step: "2", title: "Concept Design", desc: "Block diagrams, massing studies, and 3D concepts." },
              { step: "3", title: "Design Development", desc: "Detailed drawings, material palette, and finishes." },
              { step: "4", title: "3D Renders", desc: "Photorealistic renders and virtual walkthroughs." },
              { step: "5", title: "Construction Docs", desc: "Full working drawings and permit set ready for build." },
            ].map((stage) => (
              <div key={stage.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-black text-xl font-bold text-white">
                  {stage.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-black">{stage.title}</h3>
                <p className="mt-2 text-sm text-brand-gray-600">{stage.desc}</p>
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
            <h2>Our Design Philosophy</h2>
            <p>
              We design villas that work year-round. Kivu Villas at Lake Kivu
              uses natural ventilation to combat humidity, Virunga Villa near
              the volcanoes incorporates stone from local quarries, and our
              Kigali projects maximise daylight while minimizing heat gain.
            </p>
            <h3>Projects</h3>
            <ul>
              <li><strong>Kivu Villas</strong> — 8 waterfront eco-lodges at Lake Kivu</li>
              <li><strong>Virunga Villa</strong> — Luxury mountain retreat near Volcanoes NP</li>
              <li><strong>Dasa Musanze</strong> — 12 villas in Musanze highlands</li>
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

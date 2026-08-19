import { PageLayout } from "@/components/PageLayout";
import { ServiceHero } from "@/components/ServiceHero";
import { BringVillaToLifeCTA } from "@/components/CTASections";
import { StatsBar } from "@/components/StatsBar";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { FAQ } from "@/components/FAQ";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import Image from "next/image";

export const metadata = {
  title: "Interior Design Services - Rwanda Villa Interiors | Ever Retreat",
  description:
    "Bespoke interior design for Rwanda villas. Our in-house designers create functional, beautiful spaces that maximise rental appeal and guest experience.",
};

export default function InteriorDesignServicePage() {
  return (
    <PageLayout
      hero={
        <ServiceHero
          name="Interior Design"
          subtitle="Bespoke interior design that balances tropical aesthetics with modern comfort."
          image="/images/services/villa-design.webp"
          imageAlt="Interior Design - Ever Retreat Rwanda"
          badge="Design"
          tag="Ever Retreat"
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
                Design That Performs
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-gray-600">
                Our in-house interior designers create spaces that are beautiful,
                functional, and optimised for rental performance. Every piece of
                furniture and finish is selected for durability in Rwanda&apos;s
                tropical climate, whilst maintaining a sophisticated aesthetic
                that commands premium nightly rates.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-gray-600">
                We source materials locally where possible and work with
                Rwandan artisans for custom pieces, supporting the local
                economy while creating unique, authentic spaces.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/portfolio/villa-kitchen-living-open.webp"
                alt="Open-plan interior design"
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
              Design Styles
            </p>
            <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
              Signature Styles
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                title: "Tropical Modern",
                description:
                  "Clean lines, natural materials, and cross-ventilation designed for Rwanda's climate.",
              },
              {
                title: "Scandinavian Minimal",
                description:
                  "Light woods, neutral tones, and functional design for a calm atmosphere.",
              },
              {
                title: "Rwanda Modern",
                description:
                  "Modern interpretations of traditional Rwandan elements and craftsmanship.",
              },
              {
                title: "Japandi",
                description:
                  "Japanese minimalism meets Scandinavian functionality for serene spaces.",
              },
            ].map((style) => (
              <div
                key={style.title}
                className="border border-brand-gray-100 p-6"
              >
                <h3 className="text-xl font-bold text-black">{style.title}</h3>
                <p className="mt-2 text-sm text-brand-gray-600">
                  {style.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>What&apos;s Included</h2>
            <ul>
              <li>Concept design and mood boards</li>
              <li>Material and furniture sourcing</li>
              <li>Custom joinery and built-in design</li>
              <li>Styling and soft furnishings</li>
              <li>Procurement and logistics coordination</li>
              <li>Installation and styling completion</li>
            </ul>
            <p>
              50% off interior design fees when you build with us — our
              designers work alongside our construction team for seamless
              execution from structure to styling.
            </p>
          </div>
        </div>
      </section>

      <StatsBar />

      <InvestmentMarket />

      <FAQ />

      <BringVillaToLifeCTA />

      <InterestedInInvesting />
    </PageLayout>
  );
}

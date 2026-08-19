import { PageLayout } from "@/components/PageLayout";
import { ServiceHero } from "@/components/ServiceHero";
import { BringVillaToLifeCTA } from "@/components/CTASections";
import { StatsBar } from "@/components/StatsBar";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { FAQ } from "@/components/FAQ";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import Image from "next/image";

export const metadata = {
  title: "Landscape Design Services - Tropical Gardens in Rwanda | Ever Retreat",
  description:
    "Professional landscape design for Rwanda villas. Tropical gardens, water features, and outdoor living spaces that enhance your property's beauty and value.",
};

export default function LandscapeServicePage() {
  return (
    <PageLayout
      hero={
        <ServiceHero
          name="Landscape Design"
          subtitle="Transform your outdoor space with stunning tropical landscapes and gardens."
          image="/images/services/land-aerial.webp"
          imageAlt="Landscape Design - Ever Retreat Rwanda"
          badge="Design"
          tag="Ever Retreat"
          ctaHref="/contact"
          secondaryCtaHref="/services/architecture"
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
                Outdoor Living, Designed for Rwanda
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-gray-600">
                The landscape is just as important as the villa itself. Our
                award-winning landscape team designs tropical gardens, water
                features, and outdoor living spaces that complement Rwanda&apos;s
                natural beauty while creating functional, rentable outdoor areas.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-gray-600">
                We use native and adapted plant species that thrive in
                Rwanda&apos;s climate, reducing maintenance costs while creating
                stunning visual impact. Every design considers seasonal changes,
                irrigation efficiency, and long-term growth patterns.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/portfolio/villa-dining-rattan-interior.webp"
                alt="Outdoor dining area with tropical landscaping"
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
              Design Elements
            </p>
            <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
              Design Elements
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-gray-600">
              We incorporate these elements into every landscape design:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Native Planting",
                desc: "Tropical palms, frangipani, and native species adapted to Rwanda's climate.",
              },
              {
                title: "Water Features",
                desc: "Reflection pools, water walls, and natural stone elements.",
              },
              {
                title: "Outdoor Living",
                desc: "Decking, pergolas, outdoor kitchens, and lounge areas.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-xl font-bold text-black">{item.title}</h3>
                <p className="mt-2 text-sm text-brand-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsBar />

      <InvestmentMarket />

      <section className="bg-brand-off-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Services Included</h2>
            <ul>
              <li>Site analysis and soil testing</li>
              <li>Concept design and 3D renders</li>
              <li>Plant selection and sourcing</li>
              <li>Irrigation system design</li>
              <li>Hard landscaping (decking, stonework, water features)</li>
              <li>Installation and planting</li>
              <li>Ongoing maintenance program</li>
            </ul>
          </div>
        </div>
      </section>

      <FAQ />

      <BringVillaToLifeCTA />

      <InterestedInInvesting />
    </PageLayout>
  );
}

import { PageLayout } from "@/components/PageLayout";
import { DevelopmentHero } from "@/components/DevelopmentHero";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";

export const metadata = {
  title: "Dasa Musanze | 3-Bedroom Villa Portfolio | Ever Retreat",
  description:
    "Dasa Musanze is a portfolio development of 5 luxury villas in the Musanze highlands.",
};

export default function DasaUluwatuPage() {
  return (
    <PageLayout title="Dasa Musanze" subtitle="Musanze, Rwanda" showCta={false}>
      <DevelopmentHero
        name="Dasa Musanze"
        tagline="Portfolio Development"
        subtitle="5 luxury villas in Musanze with mountain views"
        image="/images/developments/dasa-ubud/dasa-ubud-banner.webp"
        imageAlt="Dasa Musanze villa with mountain view"
        ctaHref="/contact"
        secondaryCtaHref="#villa-types"
        showFacadeToggle
      />
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Project Overview</h2>
            <p>
              Dasa Musanze is a portfolio of 5 luxury 3-bedroom villas located
              in the Musanze highlands, near Volcanoes National Park. Each villa
              offers panoramic mountain views and direct access to gorilla
              trekking trails.
            </p>
            <h3>Specifications</h3>
            <ul>
              <li>3 bedrooms, 3.5 bathrooms</li>
              <li>165 sqm built area</li>
              <li>Private infinity pool</li>
              <li>Construction time: 16 months</li>
              <li>Yield: 16-20% gross</li>
            </ul>
            <h3>Design</h3>
            <p>
              Designed with a focus on indoor-outdoor living, each villa
              features floor-to-ceiling windows, a wraparound deck, and a
              minimalist aesthetic that blends with the natural mountain
              landscape.
            </p>
          </div>
        </div>
      </section>
      <InterestedInInvesting />
    </PageLayout>
  );
}

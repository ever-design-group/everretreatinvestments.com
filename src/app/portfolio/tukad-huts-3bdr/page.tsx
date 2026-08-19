import { PageLayout } from "@/components/PageLayout";
import { DevelopmentHero } from "@/components/DevelopmentHero";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";

export const metadata = {
  title: "Kivu Villas | 3-Bedroom Villa Portfolio | Ever Retreat",
  description:
    "Kivu Villas is a portfolio development of 10 waterfront villas at Lake Kivu.",
};

export default function TukadHutsPage() {
  return (
    <PageLayout title="Kivu Villas" subtitle="Lake Kivu, Rwanda" showCta={false}>
      <DevelopmentHero
        name="Kivu Villas"
        tagline="Portfolio Development"
        subtitle="10 waterfront villas at Lake Kivu with lake views"
        image="/images/portfolio/villa-pool-timber-deck.webp"
        imageAlt="Kivu Villas villa with pool overlooking Lake Kivu"
        ctaHref="/contact"
        secondaryCtaHref="#villa-types"
        showFacadeToggle
      />
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Project Overview</h2>
            <p>
              Kivu Villas is a portfolio of 10 identical 3-bedroom waterfront
              villas on the shores of Lake Kivu, each positioned for unobstructed
              lake and volcano views.
            </p>
            <h3>Specifications</h3>
            <ul>
              <li>3 bedrooms, 3 bathrooms</li>
              <li>120 sqm built area</li>
              <li>Private pool + sauna</li>
              <li>Construction time: 14 months</li>
              <li>Yield: 15% net</li>
            </ul>
            <h3>Design</h3>
            <p>
              Designed by our in-house architects, each villa follows a
              minimalist modern aesthetic with local materials. The open-plan layout maximizes the lake views from every living
              space.
            </p>
          </div>
        </div>
      </section>
      <InterestedInInvesting />
    </PageLayout>
  );
}

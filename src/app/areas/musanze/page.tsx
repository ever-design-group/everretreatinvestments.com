import { PageLayout } from "@/components/PageLayout";
import { HeroAnimated } from "@/components/HeroAnimated";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import { StatsBar } from "@/components/StatsBar";

export const metadata = {
  title: "Musanze Property Investment | Ever Retreat",
  description:
    "Musanze property investment guide. Volcanoes region with gorilla tourism and luxury mountain retreats. 12-18% gross yields.",
};

export default function MusanzeAreaPage() {
  const heroSlides = [
    {
      image: "/images/areas/musanze-area.webp",
      imageAlt: "Musanze volcano landscape",
      title: "Musanze",
      subtitle: "Rwanda's northern highlands — gorilla tourism, luxury lodges, and mountain retreats.",
    },
    {
      image: "/images/developments/dasa-ubud/dasa-ubud-banner.webp",
      imageAlt: "Mountain villa development in Musanze",
      title: "Volcanoes Region",
      subtitle: "Home to Virunga Villas and premium eco-retreats near Volcanoes National Park.",
    },
  ];

  return (
    <PageLayout
      hero={
      <HeroAnimated
        slides={heroSlides}
        badge="Volcanoes Region"
        tag="Ever Retreat Areas"
        ctaHref="/contact"
        secondaryCtaHref="/areas"
      />
    }
    >

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Musanze Property Market</h2>
            <p>
              Musanze sits in Rwanda&apos;s northern highlands, bordering
              Volcanoes National Park. It&apos;s the gateway to gorilla
              trekking and home to our Virunga Villas development — premium
              mountain eco-retreats designed for both private use and rental
              income.
            </p>
            <h3>Investment Metrics</h3>
            <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-black">$30-60/sqm</p>
                <p className="mt-1 text-xs text-brand-gray-500">Land Price</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">12-18%</p>
                <p className="mt-1 text-xs text-brand-gray-500">Gross Yield</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">80%</p>
                <p className="mt-1 text-xs text-brand-gray-500">Avg Occupancy</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">8-12%</p>
                <p className="mt-1 text-xs text-brand-gray-500">Appreciation</p>
              </div>
            </div>
            <h3>Why Invest in Musanze</h3>
            <ul>
              <li>
                <strong>Gorilla tourism</strong> — Year-round demand from
                international visitors to Volcanoes National Park.
              </li>
              <li>
                <strong>Luxury segment</strong> — High nightly rates for
                mountain retreats and eco-lodges.
              </li>
              <li>
                <strong>Growing infrastructure</strong> — New roads and
                developments improving accessibility.
              </li>
              <li>
                <strong>Lower entry cost</strong> — More affordable than Kigali
                or Rubavu, improving ROI potential.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <StatsBar />

      <InvestmentMarket />

      <InterestedInInvesting />
    </PageLayout>
  );
}

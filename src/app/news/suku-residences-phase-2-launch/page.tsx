import { PageLayout } from "@/components/PageLayout";
import { News } from "@/components/News";
import Image from "next/image";

export const metadata = {
  title: "Virunga Villas Launches Phase 2 | Ever Retreat",
  description:
    "Four new wellness villas now available for early-bird pricing in Musanze. Phase 2 launches with limited units and preferential rates.",
};

export default function Phase2LaunchPage() {
  return (
    <PageLayout
      hero={
        <section className="relative h-[600px] w-full overflow-hidden">
          <Image
            src="/images/developments/suku-4br/suku-4br-1.webp"
            alt="Virunga Villas Phase 2"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 sm:tracking-[0.25em]">
              Ever Retreat News
            </p>
            <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
              Virunga Villas Launches Phase 2
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base md:text-lg">
              Four new wellness villas now available for early-bird pricing.
            </p>
            <p className="mt-2 text-sm text-white/60">
              February 2026
            </p>
          </div>
        </section>
      }
    >
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>New Wellness Villas in Musanze Highlands</h2>
            <p>
              Ever Retreat is pleased to announce the launch of Phase 2 at
              Virunga Villas, our boutique mountain retreat in Musanze. Four new
              2-bedroom wellness villas are now available with early-bird
              pricing for a limited time.
            </p>

            <h3>Development Details</h3>
            <ul>
              <li>4 new villas (2-bedroom, 2-bathroom)</li>
              <li>120-140 sqm built area each</li>
              <li>Private plunge pools with mountain views</li>
              <li>Wellness-focused design with optional sauna</li>
              <li>Freehold and leasehold options available</li>
            </ul>

            <h3>Early-Bird Pricing</h3>
            <p>
              Phase 2 villas are priced from $239K USD (reduced from $269K)
              for the first 4 buyers who deposit by May 2026. Each villa includes
              full rental management setup and a guaranteed minimum yield of
              15% for the first two years.
            </p>

            <h3>Location Advantages</h3>
            <p>
              Situated in the Musanze highlands, Virunga Villas offers proximity
              to Volcanoes National Park and year-round demand from gorilla
              trekkers, luxury lodge operators, and expatriate residents. The
              Phase 1 development achieved 95% occupancy in its first year.
            </p>

            <h3>Key Dates</h3>
            <ul>
              <li>Deposit deadline: May 15, 2026</li>
              <li>Construction start: June 2026</li>
              <li>Completion: Q4 2027</li>
              <li>Rental availability: Q1 2028</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-brand-off-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="mx-auto max-w-3xl">
            <News />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

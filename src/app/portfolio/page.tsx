import { PageLayout } from "@/components/PageLayout";
import { Portfolio } from "@/components/Portfolio";
import { StatsBar } from "@/components/StatsBar";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import { FAQ } from "@/components/FAQ";
import Image from "next/image";

export const metadata = {
  title: "Portfolio - 200+ Rwanda Properties Built | Ever Retreat",
  description:
    "Explore our portfolio of 200+ completed villas across Rwanda's most desirable locations. Award-winning architecture and construction.",
};

export default function PortfolioPage() {
  return (
    <PageLayout
      hero={
        <section className="relative h-[600px] w-full overflow-hidden">
          <Image
            src="/images/portfolio/completed-villa-4.webp"
            alt="Completed Ever Retreat villa"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 sm:tracking-[0.25em]">
              Our Work
            </p>
            <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              200+ Villas Built
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base md:text-xl">
              Ten years building across Rwanda — from Rubavu to Musanze, Kigali to
              Huye. Each project tells a story of craftsmanship, design, and
              investment success.
            </p>
          </div>
        </section>
      }
    >
      <StatsBar />

      <section className="bg-brand-off-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500">
              Featured Projects
            </p>
            <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
              By Area
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-gray-600">
              Browse our completed villas by location, each selected for its
              investment performance and architectural distinction.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-3">
            <button className="rounded-full border-2 border-black px-6 py-2 text-sm font-semibold text-black">
              All
            </button>
            <button className="rounded-full border-2 border-transparent px-6 py-2 text-sm font-medium text-brand-gray-500 hover:border-black hover:text-black">
              Kigali
            </button>
            <button className="rounded-full border-2 border-transparent px-6 py-2 text-sm font-medium text-brand-gray-500 hover:border-black hover:text-black">
              Musanze
            </button>
            <button className="rounded-full border-2 border-transparent px-6 py-2 text-sm font-medium text-brand-gray-500 hover:border-black hover:text-black">
              Rubavu
            </button>
            <button className="rounded-full border-2 border-transparent px-6 py-2 text-sm font-medium text-brand-gray-500 hover:border-black hover:text-black">
              Nyungwe
            </button>
            <button className="rounded-full border-2 border-transparent px-6 py-2 text-sm font-medium text-brand-gray-500 hover:border-black hover:text-black">
              Akagera
            </button>
          </div>

          <Portfolio />
        </div>
      </section>

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Investment Results</h2>
            <p>
              Every villa in our portfolio is managed under our rental
              management program, delivering consistent occupancy rates of 75-90%
              across all locations. Properties are typically held for 3-7 years
              before sale, with average appreciation of 7-15% annually.
            </p>
            <p>
              Our developments in Rubavu and Musanze have outperformed the
              broader Rwanda property market by 20-30% in capital growth, while
              maintaining gross yields of 15-20% through strategic short-term
              rental positioning.
            </p>
            <h3>Notable Projects</h3>
            <ul>
              <li>
                <strong>Kivu Villas</strong> — 8 luxury waterfront villas at Lake Kivu,
                95% occupancy within first year.
              </li>
              <li>
                <strong>Virunga Villas</strong> — 9 mountain retreats in Musanze,
                averaging 85% occupancy at premium rates.
              </li>
              <li>
                <strong>Rubavu Residences</strong> — 12 lakeside villas in Rubavu,
                strong rental demand year-round.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <InterestedInInvesting />

      <FAQ />
    </PageLayout>
  );
}

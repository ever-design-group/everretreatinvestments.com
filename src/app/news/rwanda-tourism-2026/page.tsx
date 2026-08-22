import { PageLayout } from "@/components/PageLayout";
import { News } from "@/components/News";
import Image from "next/image";

export const metadata = {
  title: "Rwanda Tourism Reaches New Highs in 2025 | Ever Retreat",
  description:
    "2025 arrivals data shows Rwanda continues to attract strong property investment interest across all regions, with visitor numbers up 28% year-on-year.",
};

export default function RwandaTourismPage() {
  return (
    <PageLayout
      hero={
        <section className="relative h-[600px] w-full overflow-hidden">
          <Image
            src="/images/blog/rwanda-tourism-2026-blog-hero.webp"
            alt="Rwanda tourism landscape"
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
              Rwanda Tourism Reaches New Highs
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base md:text-lg">
              2025 arrivals data shows strong visitor demand across all regions.
            </p>
            <p className="mt-2 text-sm text-white/60">
              April 2026
            </p>
          </div>
        </section>
      }
    >
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Visitor Numbers Up 28% Year-on-Year</h2>
            <p>
              Rwanda welcomed 2.1 million international visitors in 2025, a 28%
              increase from 2024. The growth was driven by strong performance in
              the East African region, Europe, and North America, with visitors
              citing Rwanda&apos;s safety, ease of travel, and diverse tourism
              offerings as key factors.
            </p>

            <h3>Regional Breakdown</h3>
            <ul>
              <li>
                <strong>Lake Kivu (Rubavu)</strong> — 35% increase in visitors,
                driven by waterfront accommodation demand.
              </li>
              <li>
                <strong>Volcanoes Region (Musanze)</strong> — 32% increase,
                with gorilla trekking and luxury lodges performing strongly.
              </li>
              <li>
                <strong>Kigali</strong> — 22% increase, boosted by business
                travel and conference tourism.
              </li>
              <li>
                <strong>National Parks</strong> — 40% increase, led by Akagera
                safari experiences.
              </li>
            </ul>

            <h3>Implications for Property Investment</h3>
            <p>
              The sustained growth in tourism confirms Rwanda&apos;s position as one
              of East Africa&apos;s most attractive property investment destinations.
              Areas with tourism infrastructure continue to see 15-20% gross
              yields, with occupancy rates above 80% across our developments.
            </p>

            <h3>Market Outlook</h3>
            <p>
              Early 2026 data suggests the upward trend will continue, with
              new international flight routes and hotel developments expected
              to drive further demand. The Rwanda Development Board projects
              2.5 million visitors in 2026, making property investment in
              tourism areas a strong opportunity for 2026 and beyond.
            </p>
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

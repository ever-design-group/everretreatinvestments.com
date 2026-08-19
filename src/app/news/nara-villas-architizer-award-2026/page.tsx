import { PageLayout } from "@/components/PageLayout";
import { News } from "@/components/News";
import Image from "next/image";

export const metadata = {
  title: "Kivu Villas Wins Architizer A+ Award 2026 | Ever Retreat",
  description:
    "Our lakeside villa project in Rubavu receives international recognition for sustainable design from the Architizer A+ Awards.",
};

export default function ArchitizerAwardPage() {
  return (
    <PageLayout
      title="Kivu Villas Wins Architizer A+ Award 2026"
      subtitle="Our lakeside villa project in Rubavu receives international recognition for sustainable design."
      bg="off-white"
    >
      <section className="px-6 py-12 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <Image
              src="/images/awards/architizer-award.webp"
              alt="Architizer A+ Award"
              width={1200}
              height={600}
              className="w-full rounded-lg object-cover"
            />

            <p className="text-sm text-brand-gray-500">April 2026</p>

            <h2>International Recognition for Sustainable Design</h2>
            <p>
              Ever Retreat is proud to announce that Kivu Villas in Rubavu has
              been awarded the Architizer A+ Award for 2026 in the Sustainable
              Architecture category. The award recognises the project&apos;s
              innovative approach to eco-friendly lakeside development that
              minimises environmental impact while maximising guest comfort.
            </p>

            <h3>About Kivu Villas</h3>
            <p>
              Completed in late 2026, Kivu Villas comprises 8 waterfront
              eco-lodges on the shores of Lake Kivu in Rubavu. Each villa was
              designed with solar power, rainwater harvesting, and locally-sourced
              materials, achieving a 40% reduction in energy consumption compared
              to conventional luxury developments.
            </p>

            <h3>What the Judges Said</h3>
            <p>
              &ldquo;Kivu Villas demonstrates how luxury tourism and environmental
              stewardship can coexist. The project sets a new standard for
              sustainable development in East Africa,&rdquo; said the Architizer jury.
            </p>

            <h3>About the Architizer A+ Awards</h3>
            <p>
              The Architizer A+ Awards are the most prestigious global
              architecture awards, recognising excellence across 60+
              categories. Winners are selected by a jury of over 300
              architects, developers, and industry experts from around the world.
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


import { PageLayout } from "@/components/PageLayout";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import Image from "next/image";

export const metadata = {
  title: "Case Study: Kivu Villas | Ever Retreat Rwanda",
  description:
    "How we designed and built 8 waterfront villas at Lake Kivu achieving 18% rental yield.",
};

export default function CaseStudyPage() {
  return (
    <PageLayout
      title="Case Study: Kivu Villas"
      subtitle="How we designed and built 8 waterfront villas at Lake Kivu achieving 18% rental yield."
      showCta={false}
    >
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="/images/portfolio/completed-villa-4.webp"
          alt="Kivu Villas waterfront pool"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </section>
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-black md:text-3xl">
                The Challenge
              </h2>
              <p className="mt-4 text-base leading-relaxed text-brand-gray-600">
                Our client owned a challenging waterfront plot at Lake Kivu with
                steep terrain and panoramic lake views. The site required
                specialized engineering and foundation work to build safely on
                the shoreline.
              </p>
              <h3 className="mt-8 text-xl font-semibold text-black">
                The Solution
              </h3>
              <p className="mt-4 text-base leading-relaxed text-brand-gray-600">
                Our team designed 8 identical 2-bedroom villas positioned for
                maximum lake views, each with a private plunge pool and sauna.
                We used reinforced concrete foundations and cantilevered
                terraces.
              </p>
              <h3 className="mt-8 text-xl font-semibold text-black">
                Results
              </h3>
              <p className="mt-4 text-base leading-relaxed text-brand-gray-600">
                Completed in 18 months. Average occupancy rate of 85%. Net
                rental yield of 18% after all costs. Total build cost: $2.1M
                for 8 villas ($262K per villa).
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/portfolio/gj-villa.webp"
                alt="Kivu Villas interior"
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
              <Image
                src="/images/portfolio/suku-terrace.webp"
                alt="Kivu Villas exterior"
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
              <Image
                src="/images/portfolio/villa-natural.webp"
                alt="Kivu Villas pool"
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
              <Image
                src="/images/portfolio/completed-villa-4.webp"
                alt="Kivu Villas sauna"
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <InterestedInInvesting />
    </PageLayout>
  );
}

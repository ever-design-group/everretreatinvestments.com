import { PageLayout } from "@/components/PageLayout";
import { BringVillaToLifeCTA } from "@/components/CTASections";
import Image from "next/image";

export const metadata = {
  title: "Rwanda Land Zoning Guide | Ever Retreat",
  description:
    "Complete guide to Rwanda land zoning regulations. Understand the different land use zones and what you can build in each.",
};

export default function BaliLandZoningPage() {
  return (
    <PageLayout
      hero={
        <section className="relative h-[600px] w-full overflow-hidden">
          <Image
            src="/images/hero/rwanda-landscape.webp"
            alt="Rwanda hills landscape"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 sm:tracking-[0.25em]">
              Land Zoning Guide
            </p>
            <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
              Rwanda Land Zoning Guide
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base md:text-lg">
              Understanding Rwanda&apos;s land use regulations.
            </p>
          </div>
        </section>
      }
    >
      <section className="px-6 py-12 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Understanding Rwanda Land Zoning</h2>
            <p>
              Rwanda uses a structured land-use planning system to manage
              development across the country. Understanding the zoning
              classification of your land is critical before purchasing or
              developing.
            </p>

            <h3>Residential Zones</h3>
            <p>
              These zones allow villa construction. Low-density residential zones
              permit standalone villas, while higher-density zones allow
              multi-unit developments. Most villa developments around Kigali,
              Musanze, and Rubavu are in these zones.
            </p>

            <h3>Agricultural Zones</h3>
            <p>
              These zones primarily allow agricultural use. Converting land
              from agricultural to residential or tourism use in Rwanda is
              possible but requires specific permits and may be restricted in
              certain areas.
            </p>

            <h3>Commercial Zones</h3>
            <p>
              These zones allow commercial development. Most of Kigali&apos;s
              central business district and major urban centres fall within these
              zones.
            </p>

            <h3>Protected and Green Zones</h3>
            <p>
              These are protected areas including national parks, forest
              reserves, and wetlands. Development is heavily restricted and
              generally requires special permits from the government.
            </p>

            <h3>Zoning Compliance</h3>
            <p>
              Our legal and planning team handles all zoning verification before
              purchase. We check the site plan against the land certificate to
              ensure your intended use is permitted.
            </p>
          </div>
        </div>
      </section>
      <BringVillaToLifeCTA />
    </PageLayout>
  );
}

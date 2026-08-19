import { PageLayout } from "@/components/PageLayout";
import { BringVillaToLifeCTA } from "@/components/CTASections";

export const metadata = {
  title: "Rwanda Land Zoning Guide | Ever Retreat",
  description:
    "Complete guide to Rwanda land zoning regulations. Understand the different land use zones and what you can build in each.",
};

export default function BaliLandZoningPage() {
  return (
    <PageLayout
      title="Rwanda Land Zoning Guide"
      subtitle="Understanding Rwanda&apos;s land use regulations."
      showCta={false}
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


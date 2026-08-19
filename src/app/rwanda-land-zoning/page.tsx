import { PageLayout } from "@/components/PageLayout";

export const metadata = {
  title: "Rwanda Land Zoning Guide | Ever Retreat",
  description:
    "Complete guide to Rwanda land zoning regulations. Understand the different land use zones, zoning classifications, and what you can build in each area.",
};

export default function RwandaLandZoningPage() {
  return (
    <PageLayout
      title="Rwanda Land Zoning Guide"
      subtitle="Understanding Rwanda's land use regulations."
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
              developing a property for tourism or residential use.
            </p>

            <h3>Residential Zones</h3>
            <p>
              Residential zones permit villa construction and private residences.
              These zones cover most suburban and peri-urban areas around Kigali,
              Musanze, Rubavu, and other urban centres. Higher-density residential
              zones allow multi-unit developments, while low-density zones are
              ideal for standalone villas.
            </p>

            <h3>Tourism and Hospitality Zones</h3>
            <p>
              Tourism-designated zones permit short-term rental accommodation and
              hospitality businesses. These zones cover areas near Lake Kivu,
              Volcanoes National Park, Akagera National Park, and along the
              convention centre corridor in Kigali. Most villa developments in
              Kigali, Rubavu, and Musanze fall within these zones.
            </p>

            <h3>Agricultural Zones</h3>
            <p>
              Agricultural zones primarily allow farming and agricultural use.
              Converting land from agricultural to residential or tourism use
              in Rwanda is possible but requires specific permits from the
              relevant local authority and may be restricted in certain areas.
            </p>

            <h3>Commercial and Mixed-Use Zones</h3>
            <p>
              These zones allow commercial development, offices, retail, and
              mixed-use buildings. Areas along the Kigali business district and
              major arterial roads fall within these zones.
            </p>

            <h3>Protected and Green Zones</h3>
            <p>
              Protected zones include national parks, forest reserves, and wetlands.
              Development is heavily restricted and generally requires special
              permits from the Rwanda Development Board (RDB) and the Ministry
              of Environment.
            </p>

            <h3>Zoning Compliance</h3>
            <p>
              Our legal and planning team handles all zoning verification before
              purchase. We check the site plan against the land title to ensure
              your intended use is permitted, and coordinate all permit applications
              for your development.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

import { PageLayout } from "@/components/PageLayout";
import { InvestmentGuides } from "@/components/InvestmentGuides";
import Image from "next/image";

export const metadata = {
  title: "How to Build a Villa in Rwanda: Step by Step | Ever Retreat",
  description:
    "Complete guide to building a villa in Rwanda. Step-by-step process from land sourcing, design, permits, construction, to rental management.",
};

export default function HowToBuildVillaInRwandaPage() {
  return (
    <PageLayout
      hero={
        <section className="relative h-[600px] w-full overflow-hidden">
          <Image
            src="/images/hero/aerial-rwanda.webp"
            alt="Rwanda aerial landscape"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 sm:tracking-[0.25em]">
              Ever Retreat Blog
            </p>
            <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
              How to Build a Villa in Rwanda
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base md:text-lg">
              The full process from land to first guest.
            </p>
          </div>
        </section>
      }
    >
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Land Sourcing & Due Diligence</h2>
            <p>
              The first step is finding suitable land. In Rwanda, this means
              identifying properties in tourism-designated zones where short-term
              rental licences are permitted. Our in-house team uses GIS mapping
              and local relationships to find plots that meet both lifestyle and
              investment criteria.
            </p>

            <h3>What We Check</h3>
            <ul>
              <li>Zoning compliance (tourism vs residential)</li>
              <li>Soil conditions and topography</li>
              <li>Access to utilities (water, power, internet)</li>
              <li>Proximity to attractions and infrastructure</li>
              <li>Title verification and encumbrance checks</li>
            </ul>

            <h2>Architectural Design</h2>
            <p>
              Once the land is secured, our in-house architects develop custom
              designs that maximize the site&apos;s potential. We use 3D renders and
              virtual walkthroughs so you can see exactly what you&apos;re building.
              All designs incorporate cross-ventilation, natural light, and
              open-plan layouts suited to Rwanda&apos;s climate.
            </p>

            <h2>Permit Application</h2>
            <p>
              Getting permits in Rwanda is a multi-agency process. We handle
              everything: building permits from local authorities, tourism
              operation permits from the Rwanda Development Board (RDB), and
              environmental approvals where required. Our legal team ensures
              full compliance before construction begins.
            </p>

            <h2>Construction Management</h2>
            <p>
              With permits secured, construction begins. Our certified project
              managers oversee the build with weekly photo updates, real-time
              budget tracking, and milestone-based payments. All structures use
              reinforced concrete for durability and compliance with Rwanda&apos;s
              building codes.
            </p>

            <h3>Average Timeline</h3>
            <ul>
              <li>Land sourcing & due diligence: 2-4 months</li>
              <li>Design & permitting: 3-5 months</li>
              <li>Construction: 10-16 months</li>
              <li>Rental setup: 2-4 weeks</li>
            </ul>

            <h2>Rental Income Setup</h2>
            <p>
              The final stage is getting your villa rented. We handle
              professional photography, listing creation across all major
              platforms (Airbnb, Booking.com, VRBO), furnishing with
              hotel-grade amenities, and pricing optimization. Most of our
              clients achieve first bookings within 4 weeks of handover.
            </p>
          </div>
        </div>
      </section>

      <InvestmentGuides />
    </PageLayout>
  );
}

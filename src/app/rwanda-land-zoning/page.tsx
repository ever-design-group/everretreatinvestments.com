import { PageLayout } from "@/components/PageLayout";
import { FreeGuide } from "@/components/FreeGuide";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin, Building2, Trees, Hotel, ShoppingBag, LandPlot, ShieldCheck, AlertCircle } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "/rwanda-land-zoning",
  },
  title: "Rwanda Land Zoning Guide | Ever Retreat",
  description:
    "Complete guide to Rwanda land zoning regulations. Understand the different land use zones, zoning classifications, and what you can build in each area.",
};

export default function RwandaLandZoningPage() {
  const zones = [
    {
      icon: Building2,
      title: "Residential Zones",
      description:
        "Residential zones permit villa construction and private residences. These zones cover most suburban and peri-urban areas around Kigali, Musanze, Rubavu, and other urban centres.",
      features: [
        "Low-density zones ideal for standalone villas",
        "Medium-density zones allow townhouses",
        "High-density zones permit multi-unit developments",
        "Building height restrictions apply",
      ],
      color: "bg-gray-100",
      iconBg: "bg-gray-900",
    },
    {
      icon: Hotel,
      title: "Tourism & Hospitality Zones",
      description:
        "Tourism-designated zones permit short-term rental accommodation and hospitality businesses. These zones cover areas near Lake Kivu, Volcanoes National Park, Akagera National Park, and along the convention centre corridor in Kigali.",
      features: [
        "Short-term rentals permitted",
        "Hotel and lodge development allowed",
        "Villa developments in Kigali, Rubavu, and Musanze",
        "Tourism infrastructure support",
      ],
      color: "bg-gray-100",
      iconBg: "bg-gray-900",
    },
    {
      icon: Trees,
      title: "Agricultural Zones",
      description:
        "Agricultural zones primarily allow farming and agricultural use. Converting land from agricultural to residential or tourism use requires specific permits from the relevant local authority.",
      features: [
        "Farming and agricultural use permitted",
        "Limited residential development possible",
        "Conversion requires permits",
        "Subject to local authority approval",
      ],
      color: "bg-gray-100",
      iconBg: "bg-gray-900",
    },
    {
      icon: ShoppingBag,
      title: "Commercial & Mixed-Use Zones",
      description:
        "These zones allow commercial development, offices, retail, and mixed-use buildings. Areas along the Kigali business district and major arterial roads fall within these zones.",
      features: [
        "Commercial development permitted",
        "Retail and office spaces allowed",
        "Mixed-use residential-commercial buildings",
        "Higher density permitted",
      ],
      color: "bg-gray-100",
      iconBg: "bg-gray-900",
    },
    {
      icon: ShieldCheck,
      title: "Protected & Green Zones",
      description:
        "Protected zones include national parks, forest reserves, and wetlands. Development is heavily restricted and requires special permits from the Rwanda Development Board (RDB) and the Ministry of Environment.",
      features: [
        "National parks and forest reserves",
        "Wetland protection areas",
        "Special permits required",
        "Environmental impact assessments needed",
      ],
      color: "bg-gray-100",
      iconBg: "bg-gray-900",
    },
  ];

  // Maps the 8 real investment areas covered on the /areas page to the zone
  // categories above, based on the characteristics already stated for each
  // area on that page and in the zone descriptions themselves.
  const areaZoning = [
    { name: "Kigali", bestFor: "Capital growth, stable demand", zones: "Residential & Commercial/Mixed-Use" },
    { name: "Musanze", bestFor: "Tourism, mountain retreats", zones: "Tourism & Hospitality" },
    { name: "Rubavu", bestFor: "Waterfront, holiday rentals", zones: "Tourism & Hospitality" },
    { name: "Nyungwe", bestFor: "Eco-tourism, lower entry", zones: "Tourism & Hospitality, Protected & Green" },
    { name: "Akagera", bestFor: "Safari lodges, exclusivity", zones: "Tourism & Hospitality, Protected & Green" },
    { name: "Huye", bestFor: "Eco-tourism, student rentals", zones: "Residential, Agricultural" },
    { name: "Evane", bestFor: "Mountain retreats, hill stations", zones: "Tourism & Hospitality" },
    { name: "Nyanza", bestFor: "Cultural tourism, gateway location", zones: "Residential, Tourism & Hospitality" },
  ];

  return (
    <PageLayout
      hero={
        <section className="relative flex min-h-[70vh] w-full flex-col justify-end overflow-hidden bg-brand-teal">
          <Image
            src="/images/hero/aerial-rwanda.webp"
            alt="Aerial view of Rwanda land showing zoning areas"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-16 pt-32 md:px-12 md:pb-24">
            <div className="mb-4 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.15em] text-white/60 sm:text-xs">
              <Link href="/" className="transition-colors hover:text-white/90">
                Home
              </Link>
              <ChevronRight className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
              <span className="text-white/80">Land Zoning Guide</span>
            </div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/50 md:text-sm">
              Rwanda Property Investor Guide
            </p>
            <h1 className="text-4xl uppercase leading-[0.95] tracking-wide text-white md:text-7xl lg:text-8xl">
              <span className="font-light">Rwanda Land</span>
              <br />
              <span className="font-bold">Zoning Guide</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
              Understanding Rwanda&apos;s land use regulations and zoning classifications.
            </p>
          </div>
        </section>
      }
    >
      {/* Main Content */}
      <section className="px-4 py-10 sm:px-6 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          {/* Introduction */}
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 rounded-sm border border-gray-200 bg-white p-6 md:p-8 lg:p-10">
              <div className="flex items-start gap-4">
                <div className="hidden shrink-0 rounded-sm bg-gray-900 p-3 sm:block">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                    Understanding Rwanda Land Zoning
                  </h2>
                  <p className="mt-2 text-sm text-gray-600 sm:text-base">
                    Rwanda uses a structured land-use planning system to manage
                    development across the country. Understanding the zoning
                    classification of your land is critical before purchasing or
                    developing a property for tourism or residential use.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                      <AlertCircle className="mr-1 h-3 w-3" />
                      Always verify zoning before purchase
                    </span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                      <LandPlot className="mr-1 h-3 w-3" />
                      Permits required for development
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Zoning Categories */}
          <div className="mx-auto max-w-4xl">
            <h3 className="mb-6 text-lg font-bold text-gray-900 sm:text-xl md:text-2xl">
              Zoning Classifications in Rwanda
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              {zones.map((zone, index) => (
                <div
                  key={index}
                  className="group rounded-sm border border-gray-200 bg-white p-5 transition-all hover:border-gray-400 sm:p-6 md:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${zone.iconBg} sm:h-12 sm:w-12`}>
                      <zone.icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-base font-bold text-gray-900 sm:text-lg md:text-xl">
                          {zone.title}
                        </h4>
                        <span className="inline-flex items-center rounded-full bg-gray-200 px-2 py-0.5 text-[10px] font-medium text-gray-700 sm:px-2.5 sm:text-xs">
                          Zone {index + 1}
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs text-gray-600 sm:mt-2 sm:text-sm md:text-base">
                        {zone.description}
                      </p>
                      <ul className="mt-2 space-y-1 sm:mt-3">
                        {zone.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-gray-600 sm:text-sm">
                            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-gray-900 sm:mt-1.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Zoning by Location */}
            <div className="mt-8 sm:mt-10">
              <h3 className="mb-6 text-lg font-bold text-gray-900 sm:text-xl md:text-2xl">
                Zoning by Location
              </h3>
              <p className="mb-6 text-xs text-gray-600 sm:text-sm md:text-base">
                How the zoning categories above typically map onto Rwanda&apos;s
                key investment areas. Always confirm the exact zoning of a
                specific plot before purchase.
              </p>
              <div className="overflow-x-auto rounded-sm border border-gray-200">
                <table className="w-full border-collapse text-xs sm:text-sm md:text-base">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="p-3 text-left font-semibold text-gray-900 sm:p-4">Area</th>
                      <th className="p-3 text-left font-semibold text-gray-900 sm:p-4">Best For</th>
                      <th className="p-3 text-left font-semibold text-gray-900 sm:p-4">Typical Zoning</th>
                    </tr>
                  </thead>
                  <tbody>
                    {areaZoning.map((area, index) => (
                      <tr key={index} className="border-b border-gray-100 last:border-0">
                        <td className="p-3 font-medium text-gray-800 sm:p-4">{area.name}</td>
                        <td className="p-3 text-gray-600 sm:p-4">{area.bestFor}</td>
                        <td className="p-3 text-gray-600 sm:p-4">{area.zones}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-right">
                <Link
                  href="/areas"
                  className="inline-flex items-center justify-center text-xs font-semibold text-gray-900 underline underline-offset-4 hover:text-gray-600 sm:text-sm"
                >
                  View All Area Guides
                  <ChevronRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Zoning Compliance Section */}
            <div className="mt-8 rounded-sm border border-gray-200 bg-gray-50 p-6 sm:mt-10 sm:p-8 md:p-10">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-900 sm:h-12 sm:w-12">
                  <ShieldCheck className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 sm:text-lg md:text-xl">
                    Zoning Compliance & Due Diligence
                  </h4>
                  <p className="mt-1.5 text-xs text-gray-600 sm:mt-2 sm:text-sm md:text-base">
                    Our legal and planning team handles all zoning verification before
                    purchase. We check the site plan against the land title to ensure
                    your intended use is permitted, and coordinate all permit applications
                    for your development.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-sm bg-gray-900 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-gray-800 sm:px-5 sm:py-2.5 sm:text-sm"
                    >
                      <ShieldCheck className="mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      Verify Your Land
                    </Link>
                    <Link
                      href="/services/land"
                      className="inline-flex items-center justify-center rounded-sm border border-gray-300 px-4 py-2 text-xs font-semibold text-gray-700 transition-all hover:bg-gray-100 sm:px-5 sm:py-2.5 sm:text-sm"
                    >
                      Land Sourcing Services
                      <ChevronRight className="ml-1 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="mt-6 rounded-sm border-l-4 border-gray-900 bg-gray-50 p-4 sm:mt-8 sm:p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-gray-900" />
                <div>
                  <h5 className="text-sm font-semibold text-gray-900 sm:text-base">
                    Important Notice
                  </h5>
                  <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                    Zoning regulations are subject to change. Always verify with the
                    Rwanda Development Board (RDB) and the relevant local authority
                    before making any land purchase or development decision.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-8 rounded-sm border border-white/20 bg-gray-900 p-6 text-center sm:mt-10 sm:p-8 md:p-10 lg:p-12">
              <h3 className="text-lg font-bold text-white sm:text-xl md:text-2xl">
                Ready to Find Your Perfect Land?
              </h3>
              <p className="mt-2 text-xs text-gray-400 sm:text-sm md:text-base">
                Our team can help you navigate Rwanda&apos;s zoning regulations and find
                the ideal property for your development.
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:mt-6 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-sm bg-white px-5 py-2.5 text-xs font-semibold text-gray-900 transition-all hover:bg-gray-100 sm:px-6 sm:py-3 sm:text-sm"
                >
                  Contact Our Team
                  <ChevronRight className="ml-1.5 h-3.5 w-3.5 sm:ml-2 sm:h-4 sm:w-4" />
                </Link>
                <Link
                  href="/services/land"
                  className="inline-flex items-center justify-center rounded-sm border border-white/20 px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-white/10 sm:px-6 sm:py-3 sm:text-sm"
                >
                  Land Sourcing Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FreeGuide />
    </PageLayout>
  );
}
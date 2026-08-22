import { PageLayout } from "@/components/PageLayout";
import Link from "next/link";
import { ChevronRight, MapPin, Building2, Trees, Hotel, ShoppingBag, LandPlot, ShieldCheck, AlertCircle } from "lucide-react";

export const metadata = {
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

  return (
    <PageLayout
      hero={
        <section className="relative h-[280px] w-full overflow-hidden bg-black sm:h-[320px] md:h-[380px] lg:h-[420px]">
          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
            }} />
          </div>
          
          {/* Content */}
          <div className="relative flex h-full flex-col items-center justify-center px-4 text-center sm:px-6">
            {/* Breadcrumb */}
            <div className="mb-2 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.15em] text-white/60 sm:mb-3 sm:text-xs">
              <Link href="/" className="transition-colors hover:text-white/90">
                Home
              </Link>
              <ChevronRight className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
              <span className="text-white/80">Land Zoning Guide</span>
            </div>

            <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight">
              Rwanda Land Zoning Guide
            </h1>
            
            {/* Divider - Pure White */}
            <div className="mt-3 h-0.5 w-12 bg-white/40 sm:w-16" />
            
            <p className="mt-3 max-w-2xl text-xs text-white/70 sm:mt-4 sm:text-sm md:text-base">
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
            <div className="mb-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:rounded-2xl md:p-8 lg:p-10">
              <div className="flex items-start gap-4">
                <div className="hidden shrink-0 rounded-lg bg-gray-900 p-3 sm:block">
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
                  className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md sm:p-6 md:rounded-2xl md:p-8"
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

            {/* Zoning Compliance Section */}
            <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm sm:mt-10 sm:p-8 md:rounded-2xl md:p-10">
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
                      className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-lg sm:px-5 sm:py-2.5 sm:text-sm"
                    >
                      <ShieldCheck className="mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      Verify Your Land
                    </Link>
                    <Link
                      href="/services/land"
                      className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-xs font-semibold text-gray-700 transition-all hover:bg-gray-100 sm:px-5 sm:py-2.5 sm:text-sm"
                    >
                      Land Sourcing Services
                      <ChevronRight className="ml-1 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="mt-6 rounded-xl border-l-4 border-gray-900 bg-gray-50 p-4 sm:mt-8 sm:p-6">
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
            <div className="mt-8 rounded-xl bg-gray-900 p-6 text-center shadow-xl sm:mt-10 sm:p-8 md:rounded-2xl md:p-10 lg:p-12">
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
                  className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-xs font-semibold text-gray-900 transition-all hover:bg-gray-100 hover:shadow-lg sm:px-6 sm:py-3 sm:text-sm"
                >
                  Contact Our Team
                  <ChevronRight className="ml-1.5 h-3.5 w-3.5 sm:ml-2 sm:h-4 sm:w-4" />
                </Link>
                <Link
                  href="/services/land"
                  className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-white/10 sm:px-6 sm:py-3 sm:text-sm"
                >
                  Land Sourcing Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
import { PageLayout } from "@/components/PageLayout";
import { HeroAnimated } from "@/components/HeroAnimated";
import { StatsBar } from "@/components/StatsBar";
import { PricingForm } from "@/components/PricingForm";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { FAQ } from "@/components/FAQ";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Villa Packages | Fixed-Price Villa Builds in Rwanda | Ever Retreat",
  description:
    "Browse our popular villa packages from $220K. Fixed-price, end-to-end service from land to completion, built for Rwanda's climate.",
};

const packagesList = [
  {
    id: "2br",
    name: "2-Bedroom Villa",
    price: "$220K",
    size: "80 sqm",
    bedrooms: "2",
    bathrooms: "2",
    description:
      "Perfect starter villa or rental investment. Open-plan living, private pool, modern design.",
    features: [
      "Open-plan living & dining",
      "Modern kitchen with appliances",
      "Private pool (6x3m)",
      "Timber decking",
      "Air-conditioning throughout",
      "Security system",
    ],
    image: "/images/portfolio/villa-kitchen-living-open.webp",
    popular: false,
  },
  {
    id: "3br",
    name: "3-Bedroom Villa",
    price: "$290K",
    size: "120 sqm",
    bedrooms: "3",
    bathrooms: "2.5",
    description:
      "Premium rental-ready villa with chef's kitchen and gym. High rental demand in Kigali and Musanze.",
    features: [
      "Chef's kitchen with stone benchtops",
      "Private gym / office space",
      "Swimming pool (8x3m)",
      "Outdoor living deck",
      "Smart home automation",
      "Staff quarters (optional)",
    ],
    image: "/images/portfolio/villa-pool-timber-deck.webp",
    popular: true,
  },
  {
    id: "4br",
    name: "4-Bedroom Villa",
    price: "$360K",
    size: "180 sqm",
    bedrooms: "4",
    bathrooms: "4",
    description:
      "Luxury family villa with home cinema, sauna, and entertainment space. Premium finishes throughout.",
    features: [
      "Home cinema room",
      "Sauna & steam room",
      "Large swimming pool (10x4m)",
      "Alfresco entertaining deck",
      "Spa bathroom in master",
      "Two-car carport",
    ],
    image: "/images/portfolio/villa-natural.webp",
    popular: false,
  },
  {
    id: "5br",
    name: "5-Bedroom Villa",
    price: "$450K",
    size: "250 sqm",
    bedrooms: "5",
    bathrooms: "5",
    description:
      "Ultimate family or group villa with staff quarters, elevator, and rooftop terrace. Turnkey rental-ready.",
    features: [
      "Full staff quarters (2 rooms)",
      "Rooftop entertainment terrace",
      "Large swimming pool (12x4m)",
      "Elevator access",
      "Home automation system",
      "Three-car garage",
    ],
    image: "/images/services/villa-exterior.webp",
    popular: false,
  },
];

export default function PackagesPage() {
  const heroSlides = [
    {
      image: "/images/portfolio/completed-villa-4.webp",
      imageAlt: "Completed luxury villa in Rwanda",
      title: "Ready-Made Villa Packages",
      subtitle: "Fixed-price, end-to-end service from land to completion in Rwanda.",
    },
    {
      image: "/images/areas/lake-kivu-area.webp",
      imageAlt: "Lake Kivu development site",
      title: "Prime Locations",
      subtitle: "Build in Kigali, Musanze, Rubavu, Nyungwe, or Akagera.",
    },
    {
      image: "/images/developments/dasa-ubud/dasa-ubud-banner.webp",
      imageAlt: "Villa construction in Rwanda",
      title: "From $220K",
      subtitle: "Complete villa packages with everything included.",
    },
  ];

  return (
    <PageLayout
      hero={
      <HeroAnimated
        slides={heroSlides}
        badge="Fixed-Price"
        tag="Ever Retreat Packages"
        ctaHref="/contact"
         secondaryCtaHref="/how-to-buy-property-in-rwanda"
      />
    }
    >

      <section className="bg-brand-black py-8 md:py-12">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-white md:text-3xl">
                Fixed Price
              </p>
              <p className="mt-1 text-xs text-white/60">No hidden costs</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white md:text-3xl">
                6-9 Months
              </p>
              <p className="mt-1 text-xs text-white/60">
                Construction timeline
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white md:text-3xl">
                15-20%
              </p>
              <p className="mt-1 text-xs text-white/60">
                Projected rental yield
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white md:text-3xl">
                $0
              </p>
              <p className="mt-1 text-xs text-white/60">
                Design fees included
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500">
              Villa Packages
            </p>
            <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
              Four Sizes. One Process.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-gray-600">
              All packages include architecture, permits, construction, interior
              design, and project management. Build in Kigali, Musanze, Rubavu,
              Nyungwe, or Akagera.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {packagesList.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative flex flex-col overflow-hidden border ${
                  pkg.popular ? "border-black" : "border-brand-gray-100"
                }`}
              >
                {pkg.popular && (
                  <div className="bg-brand-green px-4 py-2 text-center text-xs font-bold text-white">
                    Most Popular
                  </div>
                )}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black">{pkg.name}</h3>
                  <p className="mt-2 text-3xl font-bold text-brand-green">
                    {pkg.price}
                  </p>
                  <p className="mt-1 text-sm text-brand-gray-600">
                    {pkg.size} | {pkg.bedrooms} bed | {pkg.bathrooms} bath
                  </p>
                  <p className="mt-4 text-sm text-brand-gray-600">
                    {pkg.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm"
                      >
                        <span className="mt-[2px] h-1 w-1 rounded-full bg-black" />
                        <span className="text-brand-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-6 block w-full rounded bg-black px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-black/80"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-off-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>What&apos;s Included</h2>
            <p>
              Every villa package includes everything from design to
              completion, with the option to add land sourcing and rental
              management:
            </p>
            <ul>
              <li>Land acquisition service (optional)</li>
              <li>Architectural design & 3D renders</li>
              <li>Building permits & RDC compliance</li>
              <li>Full construction with quality materials</li>
              <li>Interior design & furniture selection</li>
              <li>Project management throughout</li>
              <li>Rental management & booking system setup</li>
              <li>Ongoing maintenance program</li>
            </ul>
            <p>
              All packages are fixed-price with transparent cost breakdowns.
              You will never pay more than the agreed amount.
            </p>
          </div>
        </div>
      </section>

      <StatsBar />

      <PricingForm />

      <InvestmentMarket />

      <FAQ />

      <InterestedInInvesting />
    </PageLayout>
  );
}

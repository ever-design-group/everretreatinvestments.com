import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DevelopmentHero } from "@/components/DevelopmentHero";
import { PricingForm } from "@/components/PricingForm";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import Image from "next/image";
import Link from "next/link";

const villaTypes = [
  {
    label: "3 Bedroom",
    image: "/images/developments/nara-exterior-1.webp",
    area: "250 sqm",
    land: "600 sqm",
    price: "From $349K USD",
    href: "/contact",
  },
];

const features = [
  {
    number: "01",
    title: "Panoramic Lake Views",
    description:
      "Every villa is positioned for unobstructed views over Lake Kivu and the surrounding volcanoes.",
  },
  {
    number: "02",
    title: "Modern Tropical Design",
    description:
      "Clean lines, natural materials, and open-plan living spaces that blend indoor and outdoor living.",
  },
  {
    number: "03",
    title: "Lakeside Wellness",
    description:
      "Private plunge pools, yoga decks, and optional sauna installations built from the start.",
  },
  {
    number: "04",
    title: "Rental Ready",
    description: "Designed specifically for rental income with hotel-grade amenities and proven demand.",
  },
];

export const metadata = {
  title: "Rubavu Residences - Lake Kivu Luxury Retreats in Rwanda | Ever Retreat",
  description:
    "Rubavu Residences: Luxury lakeside living on the shores of Lake Kivu. Panoramic lake views, modern architecture, and exceptional holiday rental potential.",
};

export default function SolasUluwutuPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <DevelopmentHero
          name="Rubavu Residences"
          tagline="New Development | Rubavu, Rwanda"
          subtitle="Luxury | Lake Kivu | Panoramic Views | Lakeside Living"
          image="/images/developments/nara-exterior-1.webp"
          imageAlt="Rubavu Residences - Lake Kivu"
          ctaHref="#enquire"
          secondaryCtaHref="#villa-types"
          showFacadeToggle
        />

        <section className="bg-brand-white py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
                  The Development
                </p>
                <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl md:leading-tight">
                  Twelve lakeside villas on the Rubavu hillside
                </h2>
                <div className="mt-8 space-y-6 text-base leading-relaxed text-brand-gray-600">
                  <p>
                    Rubavu Residences is a collection of 12 premium 3-bedroom
                    villas positioned on the hillside above Rubavu, each
                    offering panoramic views over Lake Kivu. The development
                    sits moments from the lake shore and Rubavu town centre.
                  </p>
                  <p>
                    Each villa features floor-to-ceiling windows, private
                    plunge pools, and a design that maximises indoor-outdoor
                    living. The architecture combines modern tropical elements
                    with local stone and timber craftsmanship.
                  </p>
                  <p>
                    Rubavu Residences offers freehold and leasehold ownership
                    options in a tourism-designated zone, which legally permits
                    short-term rental operations. This means full eligibility
                    for the required rental licences and long-term security for
                    your investment.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-lg border border-brand-gray-200 p-4">
                    <p className="text-xs uppercase tracking-wider text-brand-gray-500">Location</p>
                    <p className="mt-1 text-lg font-bold text-black">Rubavu, Lake Kivu, Rwanda</p>
                  </div>
                  <div className="rounded-lg border border-brand-gray-200 p-4">
                    <p className="text-xs uppercase tracking-wider text-brand-gray-500">Bedrooms</p>
                    <p className="mt-1 text-lg font-bold text-black">3</p>
                  </div>
                  <div className="rounded-lg border border-brand-gray-200 p-4">
                    <p className="text-xs uppercase tracking-wider text-brand-gray-500">Price From</p>
                    <p className="mt-1 text-lg font-bold text-black">$349K USD</p>
                  </div>
                  <div className="rounded-lg border border-brand-gray-200 p-4">
                    <p className="text-xs uppercase tracking-wider text-brand-gray-500">Tenure</p>
                    <p className="mt-1 text-lg font-bold text-black">Freehold & Leasehold</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
                  At a Glance
                </p>
                <div className="mt-4 divide-y divide-brand-gray-200 rounded-lg border border-brand-gray-200">
                  {[
                    ["Development", "Rubavu Residences"],
                    ["Developer", "Ever Retreat"],
                    ["Location", "Rubavu, Lake Kivu, Rwanda"],
                    ["Zone", "Residential / Tourism Designated"],
                    ["Total Villas", "12"],
                    ["Bedrooms", "3"],
                    ["Build Area", "250 sqm"],
                    ["Land Area", "600-800 sqm"],
                    ["Price From", "$349K USD"],
                    ["Tenure", "Freehold & Leasehold Options"],
                    ["Completion", "Q2 2028"],
                    ["Rental Licence", "Supported"],
                  ].map(([key, value]) => (
                    <div key={key} className="flex justify-between px-6 py-3">
                      <span className="text-sm text-brand-gray-500">{key}</span>
                      <span className="text-sm font-semibold text-black">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
          <Image
            src="/images/areas/lake-kivu-area.webp"
            alt="Rubavu Residences lake view"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-end p-8 md:p-14">
            <div className="max-w-lg">
              <p className="text-xs tracking-[0.3em] text-white/50 uppercase mb-3">
                The Long View
              </p>
              <p className="text-xl md:text-2xl font-light text-white leading-snug">
                A villa built to earn more in year ten than it cost in year one.
              </p>
            </div>
          </div>
        </section>

        <section id="villa-types" className="bg-brand-off-white py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="mb-12 text-center">
              <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
                Villa Types
              </p>
              <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
                One layout. With a private plunge pool.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-1 max-w-2xl mx-auto">
              {villaTypes.map((bed) => (
                <Link
                  key={bed.label}
                  href={bed.href}
                  className="group block overflow-hidden rounded-lg bg-white"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={bed.image}
                      alt={bed.label}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
                      {bed.label}
                    </p>
                    <div className="mt-3 flex items-baseline gap-2">
                      <p className="text-2xl font-bold text-black">{bed.price}</p>
                    </div>
                    <div className="mt-3 space-y-1 text-sm text-brand-gray-600">
                      <p>{bed.area} build</p>
                      <p>{bed.land} land</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-white py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="mb-12 text-center">
              <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
                Included With Every Villa
              </p>
              <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
                Designed for wellness. Built for investment.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.number} className="flex gap-4">
                  <span className="text-2xl font-bold text-brand-gray-300">
                    {feature.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-black">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-off-white py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="mb-12 text-center">
              <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
                Nearby Attractions
              </p>
              <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
                On the shores of Lake Kivu
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="relative aspect-[16/9] overflow-hidden lg:aspect-auto lg:row-span-2">
                <Image
                  src="/images/areas/lake-kivu-area.webp"
                  alt="Lake Kivu area"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                  <span className="inline-block text-xs tracking-[0.25em] text-white/70 uppercase mb-2">
                    Shores of Lake Kivu
                  </span>
                  <h3 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-wide">
                    Rubavu
                  </h3>
                  <p className="text-sm text-white/60 max-w-md mt-1">
                    Rubavu is Rwanda&apos;s lakeside town on the northern shore
                    of Lake Kivu. Known for its relaxed atmosphere, water
                    sports, and stunning sunset views over the lake.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden lg:aspect-auto">
                <Image
                  src="/images/areas/rubavu-area.webp"
                  alt="Gisenyi area"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                  <span className="inline-block text-xs tracking-[0.25em] text-white/70 uppercase mb-2">
                    10 minutes away
                  </span>
                  <h3 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-wide">
                    Gisenyi
                  </h3>
                  <p className="text-sm text-white/60 mt-1">
                    Gisenyi&apos;s lively lakeside promenade with cafes, boat
                    cruises, and waterfront dining.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PricingForm />

        <section
          id="enquire"
          className="relative overflow-hidden bg-brand-black py-20 md:py-28"
        >
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/areas/lake-kivu-area.webp"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="relative mx-auto max-w-[1440px] px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-medium uppercase tracking-widest text-white/70">
                Secure Your Rubavu Residences Villa
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl md:leading-tight">
                Early bird pricing available
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/70">
                Reserve your unit with a $5,000 deposit. The previous lake-front
                development from Ever Retreat reached full reservation quickly.
                Don&apos;t miss your chance to own in Rubavu&apos;s newest
                boutique development.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
                <Link
                  href="/contact"
                  className="rounded bg-white px-10 py-4 text-sm font-semibold text-black transition-all hover:bg-white/90"
                >
                  Enquire Now
                </Link>
                <Link
                  href="/developments"
                  className="rounded border-2 border-white/50 px-10 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10"
                >
                  View All Developments
                </Link>
              </div>
            </div>
          </div>
        </section>

        <InterestedInInvesting />
      </main>
      <Footer />
    </>
  );
}

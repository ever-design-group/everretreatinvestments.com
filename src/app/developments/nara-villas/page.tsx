import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DevelopmentHero } from "@/components/DevelopmentHero";
import Link from "next/link";
import Image from "next/image";

const naraBeds = [
  {
    label: "2 Bedroom",
    image: "/images/developments/nara-exterior-1.webp",
    area: "153 sqm",
    land: "105 sqm",
    price: "From $269K USD",
    href: "/developments/nara-villas/2-bedroom",
  },
  {
    label: "3 Bedroom",
    image: "/images/developments/nara-exterior-1.webp",
    area: "226 sqm",
    land: "188 sqm",
    price: "From $329K USD",
    href: "/developments/nara-villas/3-bedroom",
  },
];

const features = [
  {
    number: "01",
    title: "Private Pools",
    description: "Every villa includes a private pool, positioned for privacy and designed for both morning laps and evening lounging.",
  },
  {
    number: "02",
    title: "Modern Tropical Design",
    description: "Clean lines, open layouts, and natural light work together with greenery and fresh airflow to create calm, effortless spaces.",
  },
  {
    number: "03",
    title: "Lake Transfer Service",
    description: "Dedicated transfer service to lakeside locations and Gisenyi included. Easy access to everything the lake has to offer.",
  },
  {
    number: "04",
    title: "Dedicated Villa Management",
    description: "In-house management handles guest operations, maintenance, and monthly reporting so you can be hands-off.",
  },
  {
    number: "05",
    title: "Optional Sauna & Ice Bath",
    description: "Wellness infrastructure built in from the start. Optional sauna and ice bath installations available.",
  },
  {
    number: "06",
    title: "Freehold & Leasehold Options",
    description: "Flexible ownership structures available. Full eligibility for rental licences and long-term security for your investment.",
  },
];

const attractions = [
  {
    name: "Gisenyi Waterfront",
    time: "5 minutes away",
    image: "/images/areas/lake-kivu-area.webp",
    description: "Lively lakeside promenade with cafes, boat cruises, and the vibrant Gisenyi town centre.",
  },
  {
    name: "Lake Kivu Sunset Cruises",
    time: "15 minutes away",
    image: "/images/areas/lake-kivu-area.webp",
    description: "Scenic boat trips across Lake Kivu with views of the surrounding hills and islands.",
  },
];

export const metadata = {
  title: "Kivu Villas - Luxury Villas in Rubavu, Rwanda | Ever Retreat",
  description:
    "Kivu Villas: 2 & 3 bedroom luxury villas in Rubavu, Rwanda. From $269K USD. Private pools, lake transfer service, freehold & leasehold options. Award-winning design with stunning Lake Kivu views.",
};

export default function NaraVillasPage() {
  return (
    <>
      <Header />
      <DevelopmentHero
        name="Kivu Villas"
        tagline="New Development | Rubavu, Rwanda"
        subtitle="2 & 3 Bed | Lake Views | Private Pools | Lake Kivu"
        image="/images/developments/nara-exterior-1.webp"
        imageAlt="Kivu Villas - Rubavu Lake Kivu"
        ctaHref="#enquire"
        secondaryCtaHref="#villa-types"
      />

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
                The Development
              </p>
              <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl md:leading-tight">
                Eight lakeside villas on a peaceful Rubavu hillside
              </h2>
              <div className="mt-8 space-y-6 text-base leading-relaxed text-brand-gray-600">
                <p>
                  Steps from Lake Kivu&apos;s western shore. Two and three bedroom layouts, private pools throughout.
                  Designed with a modern tropical approach, the architecture centres on wellness living from the very start.
                  Clean lines, open layouts, and natural light work together with greenery and fresh airflow.
                </p>
                <p>
                  Kivu Villas sits on the shores of Lake Kivu — moments from Rubavu town and Gisenyi.
                  The location attracts visitors for sunset cruises, water sports, and lakeside relaxation,
                  with consistent weekend and holiday demand from regional and international visitors.
                </p>
                <p>
                  Kivu Villas offers freehold and leasehold ownership options, legally permitting tourist accommodation and short-term rentals.
                  This means full eligibility for the required rental licences, alignment with government-approved tourism activities,
                  and long-term security for your investment.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-brand-gray-200 p-4">
                  <p className="text-xs uppercase tracking-wider text-brand-gray-500">Location</p>
                  <p className="mt-1 text-lg font-bold text-black">Rubavu, Lake Kivu, Rwanda</p>
                </div>
                <div className="rounded-lg border border-brand-gray-200 p-4">
                  <p className="text-xs uppercase tracking-wider text-brand-gray-500">Bedrooms</p>
                  <p className="mt-1 text-lg font-bold text-black">2 & 3</p>
                </div>
                <div className="rounded-lg border border-brand-gray-200 p-4">
                  <p className="text-xs uppercase tracking-wider text-brand-gray-500">Price From</p>
                  <p className="mt-1 text-lg font-bold text-black">$269K USD</p>
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
                  ["Development", "Kivu Villas"],
                  ["Developer", "Ever Retreat"],
                  ["Location", "Rubavu, Lake Kivu, Rwanda"],
                  ["Zone", "Residential / Tourism Designated"],
                  ["Total Villas", "8"],
                  ["Bedrooms", "2 & 3"],
                  ["Build Area", "153 - 226 sqm"],
                  ["Land Area", "105 - 188 sqm"],
                  ["Price From", "$269K USD"],
                  ["Tenure", "Freehold & Leasehold Options"],
                  ["Completion", "Q4 2027"],
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
          src="/images/developments/nara-exterior-1.webp"
          alt="Kivu Villas long view"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-end p-8 md:p-14">
          <div className="max-w-lg">
            <p className="text-xs tracking-[0.3em] text-white/50 uppercase mb-3">The Long View</p>
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
              Two layouts. Both with a private pool.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {naraBeds.map((bed) => (
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                <span className="text-2xl font-bold text-brand-gray-300">{feature.number}</span>
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
                  Lake Kivu
                </h3>
                <p className="text-sm text-white/60 font-body mt-1 max-w-md">
                  Lake Kivu&apos;s western shore. Lakeside relaxation, sunset cruises, and consistent weekend and holiday demand from regional and international visitors.
                </p>
              </div>
            </div>
            {attractions.map((attraction) => (
              <div
                key={attraction.name}
                className="relative aspect-[16/9] overflow-hidden lg:aspect-auto"
              >
                <Image
                  src={attraction.image}
                  alt={attraction.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                  <span className="inline-block text-xs tracking-[0.25em] text-white/70 uppercase mb-2">
                    {attraction.time}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-wide">
                    {attraction.name}
                  </h3>
                  <p className="text-sm text-white/60 font-body mt-1">
                    {attraction.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="enquire" className="relative overflow-hidden bg-brand-black py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/developments/nara-exterior-1.webp"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-white/70">
              Secure Your Kivu Villa
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl md:leading-tight">
              2 of 8 villas remaining
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              Reserve your unit with a $5,000 deposit. The previous Lake Kivu development from Ever Retreat reached full reservation quickly.
              Don&apos;t miss your chance to own on Lake Kivu&apos;s newest boutique development.
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
      <Footer />
    </>
  );
}

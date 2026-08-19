import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DevelopmentHero } from "@/components/DevelopmentHero";
import { PricingForm } from "@/components/PricingForm";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import Image from "next/image";
import Link from "next/link";

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

const villaBeds = [
  {
    label: "3 Bedroom",
    image: "/images/developments/nara-exterior-1.webp",
    area: "180 sqm",
    land: "300 sqm",
    price: "From $349K USD",
    href: "/developments/casa-petak/3-bedroom",
  },
  {
    label: "2 Bedroom",
    image: "/images/developments/nara-exterior-1.webp",
    area: "140 sqm",
    land: "250 sqm",
    price: "From $299K USD",
    href: "/developments/casa-petak/2-bedroom",
  },
];

const attractions = [
  {
    name: "Lake Mugesera",
    time: "5 minutes away",
    image: "/images/areas/kigali-area.webp",
    description: "Lakeside promenade with cafes, walking trails, and waterfront dining.",
  },
  {
    name: "Kigali City Center",
    time: "10 minutes away",
    image: "/images/areas/kigali-area.webp",
    description: "Kigali's vibrant city centre with shopping, restaurants, and cultural attractions.",
  },
];

export const metadata = {
  title: "Kigali Residence | 2 & 3 Bedroom Villas in Kigali, Rwanda | Ever Retreat",
  description:
    "Kigali Residence: 2 & 3 bedroom luxury villas in Kigali, Rwanda. From $299K USD. Private pools, modern tropical design, and full rental management with 15-20% yield potential.",
};

export default function CasaPetakPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <DevelopmentHero
         name="Kigali Residence"
         tagline="New Development | Kigali, Rwanda"
         subtitle="2 & 3 Bed | Private Pools | 15-20% Yield | Kigali"
         image="/images/hero/aerial-rwanda.webp"
         imageAlt="Kigali Residence - Kigali, Rwanda"
          ctaHref="#enquire"
          secondaryCtaHref="#villa-types"
          showFacadeToggle
        />

        <section className="bg-brand-white py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
                  The Development
                </p>
                <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl md:leading-tight">
                  Eight low-impact villas tucked away in Kigali&apos;s greenbelt
                </h2>
                <div className="mt-8 space-y-6 text-base leading-relaxed text-brand-gray-600">
                   <p>
                     Kigali Residence is a boutique collection of 8 two and three
                     bedroom villas set on a single 2,400 sqm site in the quieter
                     streets of Kigali, a short walk from Lake Mugesera.
                   </p>
                  <p>
                    Designed with a modern tropical approach, the architecture
                    centres on wellness living from the very start. Clean lines,
                    open layouts, and natural light work together with greenery
                    and fresh airflow to create calm, effortless spaces.
                  </p>
                  <p>
                    Casa Petak offers freehold and leasehold ownership options
                    in a tourism-designated zone, which legally permits tourist
                    accommodation and short-term rentals. This means full
                    eligibility for the required rental licences, alignment with
                    government-approved tourism activities, and long-term
                    security for your investment.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-lg border border-brand-gray-200 p-4">
                    <p className="text-xs uppercase tracking-wider text-brand-gray-500">Location</p>
                     <p className="mt-1 text-lg font-bold text-black">Kigali, Rwanda</p>
                   </div>
                   <div className="rounded-lg border border-brand-gray-200 p-4">
                     <p className="text-xs uppercase tracking-wider text-brand-gray-500">Bedrooms</p>
                     <p className="mt-1 text-lg font-bold text-black">2 & 3</p>
                   </div>
                   <div className="rounded-lg border border-brand-gray-200 p-4">
                     <p className="text-xs uppercase tracking-wider text-brand-gray-500">Price From</p>
                     <p className="mt-1 text-lg font-bold text-black">$299K USD</p>
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
                     ["Development", "Kigali Residence"],
                     ["Developer", "Ever Retreat"],
                     ["Location", "Kigali, Rwanda"],
                    ["Zone", "Residential / Tourism Designated"],
                    ["Total Villas", "8"],
                    ["Bedrooms", "2 & 3"],
                    ["Build Area", "140 - 180 sqm"],
                    ["Land Area", "250 - 300 sqm"],
                    ["Price From", "$299K USD"],
                    ["Tenure", "Freehold & Leasehold Options"],
                    ["Completion", "Q3 2027"],
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
            src="/images/portfolio/villa-pool-timber-deck.webp"
            alt="Casa Petak villa pool"
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
                A villa built to earn more in year ten than it cost in year
                one.
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
              {villaBeds.map((bed) => (
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
                In the heart of Kigali
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="relative aspect-[16/9] overflow-hidden lg:aspect-auto lg:row-span-2">
                <Image
                src="/images/areas/kigali-area.webp"
                alt="Kigali area"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                  <span className="inline-block text-xs tracking-[0.25em] text-white/70 uppercase mb-2">
                     Shores of Kigali
                  </span>
                  <h3 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-wide">
                    Kigali City
                  </h3>
                  <p className="text-sm text-white/60 max-w-md mt-1">
                    Rwanda&apos;s capital city with government hubs, restaurants, and
                    cultural attractions along the lakeside.
                  </p>
                </div>
              </div>
              {attractions.map((attraction) => (
                <div
                  key={attraction.name}
                  className="relative aspect-[16/9] overflow-hidden"
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
                    <p className="text-sm text-white/60 mt-1">
                      {attraction.description}
                    </p>
                  </div>
                </div>
              ))}
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
              src="/images/portfolio/villa-pool-timber-deck.webp"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="relative mx-auto max-w-[1440px] px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-medium uppercase tracking-widest text-white/70">
                Secure Your Casa Petak Villa
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl md:leading-tight">
                Book a viewing today
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/70">
                 Reserve your unit with a $5,000 deposit. The previous Kigali
                 development from Ever Retreat reached full reservation quickly.
                 Don&apos;t miss your chance to own in Rwanda&apos;s dynamic
                 capital.
                dynamic area.
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


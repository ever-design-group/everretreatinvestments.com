import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DevelopmentHero } from "@/components/DevelopmentHero";
import Link from "next/link";
import Image from "next/image";

const sukuBeds = [
  {
    label: "2 Bedroom",
    image: "/images/developments/nara-exterior-1.webp",
    area: "165 sqm",
    land: "120 sqm",
    price: "From $239K USD",
    href: "/developments/suku-residences/2-bedroom",
  },
  {
    label: "3 Bedroom",
    image: "/images/developments/nara-exterior-1.webp",
    area: "210 sqm",
    land: "160 sqm",
    price: "From $289K USD",
    href: "/developments/suku-residences/3-bedroom",
  },
  {
    label: "4 Bedroom",
    image: "/images/developments/nara-exterior-1.webp",
    area: "280 sqm",
    land: "220 sqm",
    price: "From $359K USD",
    href: "/developments/suku-residences/4-bedroom",
  },
];

const features = [
  {
    number: "01",
    title: "Private Pools",
    description: "Every villa includes a private pool, sized to match the layout and positioned for privacy and sun.",
  },
  {
    number: "02",
    title: "Dedicated Butler",
    description: "On-site butler service handles everything from early morning coffee to late-night requests.",
  },
  {
    number: "03",
    title: "Airport Transfer",
    description: "Complimentary transfer service to Kigali International Airport. No parking, no hassle, just a comfortable ride to your flight.",
  },
  {
    number: "04",
    title: "Round-the-Clock Security",
    description: "24/7 gated entry and security personnel. Peace of mind for owners and guests alike.",
  },
  {
    number: "05",
    title: "Additional Features Package",
    description: "Every villa includes an features package worth up to $25,000 — furniture, appliances, and smart home setup.",
  },
  {
    number: "06",
    title: "Mountain Community",
    description: "A deliberately small site with nine villas. The compact plan creates the community feel that lifts nightly rates.",
  },
];

export const metadata = {
  title: "Virunga Villas - Volcanoes Eco-Retreats in Musanze, Rwanda | Ever Retreat",
  description:
    "Virunga Villas: 2, 3 & 4 bedroom mountain eco-retreats in Musanze, Rwanda. From $239K USD. Private pools, butler service, airport transfers, freehold & leasehold options. Near Volcanoes National Park and gorilla trekking.",
};

export default function SukuResidencesPage() {
  return (
    <>
      <Header />
      <DevelopmentHero
        name="Virunga Villas"
        tagline="New Development | Musanze, Rwanda"
        subtitle="2, 3 & 4 Bed | Mountain Community | Private Pools | Musanze"
        image="/images/developments/nara-exterior-1.webp"
        imageAlt="Virunga Villas Musanze"
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
                Virunga is built deliberately small
              </h2>
              <div className="mt-8 space-y-6 text-base leading-relaxed text-brand-gray-600">
                <p>
                  Nine villas across 2, 3, and 4-bedroom configurations, set on a single boutique site in Musanze&apos;s tourism-designated zone.
                  The compact site plan creates the community feel that drives repeat bookings and lifts nightly rates above standalone villas.
                </p>
                <p>
                  Designed as both a retreat and a long-term home, Virunga blends nature, design, and livability in a way that feels quietly luxurious and confidently different.
                  Finished in Terracotta and Grey, every villa comes with a private pool, dedicated butler, airport transfer service, and round-the-clock security.
                </p>
                <p>
                  Virunga Villas offers freehold and leasehold ownership options in a tourism-designated zone, which legally permits tourist accommodation and short-term rentals.
                  Full eligibility for the required rental licences, alignment with government-approved tourism activities, and long-term security for your investment.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-brand-gray-200 p-4">
                  <p className="text-xs uppercase tracking-wider text-brand-gray-500">Location</p>
                  <p className="mt-1 text-lg font-bold text-black">Musanze, Volcanoes Region, Rwanda</p>
                </div>
                <div className="rounded-lg border border-brand-gray-200 p-4">
                  <p className="text-xs uppercase tracking-wider text-brand-gray-500">Bedrooms</p>
                  <p className="mt-1 text-lg font-bold text-black">2, 3 & 4</p>
                </div>
                <div className="rounded-lg border border-brand-gray-200 p-4">
                  <p className="text-xs uppercase tracking-wider text-brand-gray-500">Price From</p>
                  <p className="mt-1 text-lg font-bold text-black">$239K USD</p>
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
                  ["Development", "Virunga Villas"],
                  ["Developer", "Ever Retreat"],
                  ["Location", "Musanze, Volcanoes Region, Rwanda"],
                  ["Zone", "Residential / Tourism Designated"],
                  ["Total Villas", "9"],
                  ["Bedrooms", "2, 3 & 4"],
                  ["Build Area", "165 - 280 sqm"],
                  ["Land Area", "120 - 220 sqm"],
                  ["Price From", "$239K USD"],
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

      <section id="villa-types" className="bg-brand-off-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              Villa Types
            </p>
            <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
              Three layouts. Each with a private pool.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {sukuBeds.map((bed) => (
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
              Everything. Handled.
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
              Secure Your Virunga Villa
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl md:leading-tight">
              3 of 9 villas remaining
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              Reserve your unit with a $5,000 deposit. The previous Volcanoes development from Ever Retreat reached full reservation quickly.
              Don&apos;t miss your chance to own in Rwanda&apos;s most sought-after mountain retreat.
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

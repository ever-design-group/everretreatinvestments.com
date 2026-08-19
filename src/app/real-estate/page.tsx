import { PageLayout } from "@/components/PageLayout";
import { StatsBar } from "@/components/StatsBar";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { FAQ } from "@/components/FAQ";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import { GetPricesCTA } from "@/components/CTASections";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Real Estate - Rwanda Properties for Sale | Ever Retreat",
  description:
    "Browse premium Rwanda real estate including freehold and leasehold eco-retreats, land, and investment properties. Find your perfect Rwanda property with Ever Retreat.",
};

const properties = [
  {
    id: "kivu-villas",
    name: "Kivu Waterfront Villa",
    location: "Rubavu",
    price: "$495,000",
    bedrooms: 3,
    bathrooms: 3,
    size: "420 sqm",
    type: "Leasehold",
    image: "/images/portfolio/completed-villa-4.webp",
    href: "/developments/nara-villas",
  },
  {
    id: "virunga-villas",
    name: "Virunga Mountain Villa",
    location: "Musanze",
    price: "$385,000",
    bedrooms: 4,
    bathrooms: 3,
    size: "500 sqm",
    type: "Freehold",
    image: "/images/portfolio/villa-natural.webp",
    href: "/developments/suku-residences",
  },
  {
    id: "rubavu-residences",
    name: "Rubavu Lakeside Retreat",
    location: "Rubavu",
    price: "$310,000",
    bedrooms: 3,
    bathrooms: 2.5,
    size: "380 sqm",
    type: "Leasehold",
    image: "/images/portfolio/villa-kitchen-living-open.webp",
    href: "/developments/solas-uluwatu",
  },
  {
    id: "musanze-highlands",
    name: "Musanze Highlands Villa",
    location: "Musanze",
    price: "$265,000",
    bedrooms: 2,
    bathrooms: 2,
    size: "300 sqm",
    type: "Freehold",
    image: "/images/portfolio/villa-dining-rattan-interior.webp",
    href: "/contact",
  },
  {
    id: "akagera-lodge",
    name: "Akagera Eco-Lodge",
    location: "Kayonza",
    price: "$890,000",
    bedrooms: 5,
    bathrooms: 5,
    size: "750 sqm",
    type: "Leasehold",
    image: "/images/portfolio/villa-pool-timber-deck.webp",
    href: "/contact",
  },
  {
    id: "kigali-modern",
    name: "Kigali Modern Villa",
    location: "Kigali",
    price: "$680,000",
    bedrooms: 4,
    bathrooms: 4,
    size: "520 sqm",
    type: "Freehold",
    image: "/images/portfolio/gj-villa.webp",
    href: "/contact",
  },
];

export default function RealEstatePage() {
  return (
    <PageLayout
      title="Real Estate"
      subtitle="Premium Rwanda properties for sale — from freehold villas to leasehold land opportunities."
      showCta={false}
    >
      <section className="relative h-[500px] w-full overflow-hidden">
        <Image
          src="/images/portfolio/completed-villa-4.webp"
          alt="Luxury villa in Rwanda"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/80">
            Real Estate
          </p>
          <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
            Premium Rwanda Properties
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-white/80">
            Curated selection of freehold and leasehold villas, land, and
            investment properties across Rwanda&apos;s most desirable areas.
          </p>
        </div>
      </section>

      <StatsBar />

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500">
              Available Properties
            </p>
            <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
              Current Listings
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-gray-600">
              Browse our curated portfolio of villas and land across Rwanda. Each
              property is selected for its investment potential and lifestyle
              appeal.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-3">
            <button className="rounded-full border-2 border-black px-6 py-2 text-sm font-semibold text-black">
              All
            </button>
            <button className="rounded-full border-2 border-transparent px-6 py-2 text-sm font-medium text-brand-gray-500 hover:border-black hover:text-black">
              Kigali
            </button>
            <button className="rounded-full border-2 border-transparent px-6 py-2 text-sm font-medium text-brand-gray-500 hover:border-black hover:text-black">
              Musanze
            </button>
            <button className="rounded-full border-2 border-transparent px-6 py-2 text-sm font-medium text-brand-gray-500 hover:border-black hover:text-black">
              Rubavu
            </button>
            <button className="rounded-full border-2 border-transparent px-6 py-2 text-sm font-medium text-brand-gray-500 hover:border-black hover:text-black">
              Nyungwe
            </button>
            <button className="rounded-full border-2 border-transparent px-6 py-2 text-sm font-medium text-brand-gray-500 hover:border-black hover:text-black">
              Akagera
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <Link
                key={property.id}
                href={property.href}
                className="group overflow-hidden rounded-lg bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block rounded bg-white/90 px-2 py-1 text-xs font-semibold text-black">
                      {property.type}
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-bold text-black">
                      {property.name}
                    </h3>
                    <p className="font-bold text-brand-green">
                      {property.price}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-brand-gray-500">
                    {property.location}
                  </p>
                  <div className="mt-3 grid grid-cols-3 gap-1 text-center text-xs">
                    <div>
                      <span className="font-medium text-black">
                        {property.bedrooms}
                      </span>
                      <span className="block text-brand-gray-500">
                        Beds
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-black">
                        {property.bathrooms}
                      </span>
                      <span className="block text-brand-gray-500">
                        Baths
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-black">
                        {property.size}
                      </span>
                      <span className="block text-brand-gray-500">
                        Size
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-off-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Property Investment Guide</h2>
            <p>
              Buying property in Rwanda requires understanding the legal
              frameworks available to foreign buyers. Our team guides you
              through the process, from initial property search to final
              transfer and beyond.
            </p>
            <ol>
              <li>
                <strong>Property search</strong> — We find properties matching
                your criteria, budget, and investment goals.
              </li>
              <li>
                <strong>Legal due diligence</strong> — Title verification,
                zoning compliance, and permit checks.
              </li>
              <li>
                <strong>Negotiation</strong> — Price negotiation and terms
                agreement.
              </li>
              <li>
                <strong>Purchase &amp; transfer</strong> — Notary coordination and
                deed transfer.
              </li>
              <li>
                <strong>Rental setup</strong> — Property listing, furnishing, and
                ongoing management (optional).
              </li>
            </ol>
          </div>
        </div>
      </section>

      <InvestmentMarket />

      <GetPricesCTA />

      <FAQ />

      <InterestedInInvesting />
    </PageLayout>
  );
}

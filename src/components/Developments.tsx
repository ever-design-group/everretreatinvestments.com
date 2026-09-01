"use client";

import Link from "next/link";
import Image from "next/image";

const developments = [
  {
    id: "nara-villas",
    name: "Kivu Villas",
    tag: "Rubavu / 2-3 Bed",
    badge: "3 of 6 Remaining",
    price: "From $269K USD",
    image: "/images/developments/villa-photos.jpeg",
    href: "/developments/nara-villas",
    description:
      "Premium 2-3 bedroom lakeside villas at Lake Kivu with private pools and saunas.",
    features: ["Lakeside", "15-20% Yield", "Private Pool"],
  },
  {
    id: "suku-residences",
    name: "Virunga Villas",
    tag: "Musanze / 2-4 Bed",
    badge: "3 of 9 Remaining",
    price: "From $239K USD",
    image: "/images/developments/suku-4br/suku-4br-1.webp",
    href: "/developments/suku-residences",
    description:
      "Boutique community of 2-4 bedroom mountain wellness villas in Musanze.",
    features: ["Wellness", "Musanze", "Mountain Views"],
  },
  {
    id: "dasa-ubud",
    name: "Dasa Musanze",
    tag: "Musanze / 3 Bed",
    badge: "1 Remaining",
    price: "From $349K USD",
    image: "/images/developments/dasa-ubud/dasa-ubud-banner.webp",
    href: "/developments/dasa-ubud",
    description:
      "Luxury 3-bedroom villa in Musanze with stunning mountain views.",
    features: ["Musanze", "Mountain Views", "Private Pool"],
  },
  {
    id: "solas-uluwatu",
    name: "Rubavu Residences",
    tag: "Rubavu / 3 Bed",
    badge: "3 of 11 Remaining",
    price: "From $299K USD",
    image: "/images/developments/solas-banner.webp",
    href: "/developments/solas-uluwatu",
    description:
      "Ready-to-buy 3-bedroom villa in Rubavu with panoramic lake views.",
    features: ["Lake View", "Ready to Buy", "Rubavu"],
  },
];

interface DevelopmentsProps {
  limit?: number;
  showHeader?: boolean;
  showAll?: boolean;
  variant?: "default" | "overlay";
}

export function Developments({ limit, showHeader = true, showAll = false, variant = "default" }: DevelopmentsProps) {
  const visibleDevelopments = limit ? developments.slice(0, limit) : developments;

  const gridCols = showAll
    ? "grid-cols-1 md:grid-cols-2"
    : "grid-cols-1 md:grid-cols-2";

  if (variant === "overlay") {
    return (
      <section className="bg-brand-gray-300 py-12 md:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          {showHeader && (
            <div className="mb-8 text-center sm:mb-10">
              <p className="text-[10px] font-medium uppercase tracking-widest text-brand-gray-500 sm:text-xs">
                Current Developments
              </p>
              <h2 className="mt-2 text-2xl font-bold leading-tight text-black sm:text-3xl md:text-4xl lg:text-5xl">
                Invest in Our Latest Projects
              </h2>
            </div>
          )}
          <div className={`grid ${gridCols} gap-4 sm:gap-6`}>
            {visibleDevelopments.map((dev, index) => (
              <Link
                key={dev.id}
                href={dev.href}
                className={
                  index < 2
                    ? "group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                    : "group block overflow-hidden rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
                }
              >
                {index < 2 ? (
                  <div className="relative aspect-[3/4] overflow-hidden sm:aspect-[16/10]">
                    <Image
                      src={dev.image}
                      alt={dev.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/10 sm:from-black/90 sm:via-black/40 sm:to-transparent" />
                    <div className="absolute left-4 top-4 flex items-center gap-2 sm:left-5 sm:top-5">
                      <span className="rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-black backdrop-blur-sm sm:px-3.5 sm:text-xs">
                        {dev.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 sm:p-6">
                      <p className="text-[10px] font-medium uppercase tracking-widest text-white/70 sm:text-[11px]">
                        {dev.tag}
                      </p>
                      <h3 className="mt-1.5 text-lg font-bold text-white sm:mt-2 sm:text-xl sm:text-2xl">
                        {dev.name}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                        {dev.price}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-white/85 line-clamp-2 sm:text-sm">
                        {dev.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                        {dev.features.map((feature, i) => (
                          <span
                            key={i}
                            className="rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-white sm:mt-4 sm:gap-2 sm:text-sm">
                        <span className="group-hover:underline">Explore {dev.name}</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={dev.image}
                        alt={dev.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 sm:p-5 sm:p-6">
                      <div className="flex items-center justify-between gap-2 sm:gap-3">
                        <p className="text-[10px] font-medium uppercase tracking-widest text-brand-gray-500 sm:text-xs">
                          {dev.tag}
                        </p>
                        <span className="shrink-0 rounded-full bg-brand-off-white px-2.5 py-1 text-[11px] font-semibold text-black sm:px-3 sm:text-xs">
                          {dev.badge}
                        </span>
                      </div>
                      <h3 className="mt-2 text-base font-bold text-black sm:mt-3 sm:text-lg sm:text-xl">
                        {dev.name}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-black">
                        {dev.price}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-brand-gray-600 sm:text-sm">
                        {dev.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                        {dev.features.map((feature, i) => (
                          <span
                            key={i}
                            className="rounded-full border border-brand-gray-200 bg-brand-white px-2.5 py-1 text-[11px] font-medium text-brand-gray-700 sm:px-3 sm:py-1.5 sm:text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-black sm:mt-4 sm:gap-2 sm:text-sm">
                        <span className="group-hover:underline">Explore {dev.name}</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </div>
                    </div>
                  </>
                )}
              </Link>
            ))}
          </div>
          {!showAll && (
            <div className="mt-8 text-center sm:mt-12">
              <Link
                href="/developments"
                className="text-sm font-semibold text-black underline underline-offset-4 hover:text-brand-gray-600"
              >
                View All Developments &rarr;
              </Link>
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-brand-gray-300 py-12 md:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        {showHeader && (
          <div className="mb-8 text-center sm:mb-10">
            <p className="text-[10px] font-medium uppercase tracking-widest text-brand-gray-500 sm:text-xs">
              Current Developments
            </p>
            <h2 className="mt-2 text-2xl font-bold leading-tight text-black sm:text-3xl md:text-4xl lg:text-5xl">
              Invest in Our Latest Projects
            </h2>
          </div>
        )}
        <div className={`grid ${gridCols} gap-4 sm:gap-6`}>
          {visibleDevelopments.map((dev) => (
            <Link
              key={dev.id}
              href={dev.href}
              className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={dev.image}
                  alt={dev.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-5 sm:p-6">
                <div className="flex items-center justify-between gap-2 sm:gap-3">
                  <p className="text-[10px] font-medium uppercase tracking-widest text-brand-gray-500 sm:text-xs">
                    {dev.tag}
                  </p>
                  <span className="shrink-0 rounded-full bg-brand-off-white px-2.5 py-1 text-[11px] font-semibold text-black sm:px-3 sm:text-xs">
                    {dev.badge}
                  </span>
                </div>
                <h3 className="mt-2 text-base font-bold text-black sm:mt-3 sm:text-lg sm:text-xl">
                  {dev.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-black">
                  {dev.price}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-brand-gray-600 sm:text-sm">
                  {dev.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                  {dev.features.map((feature, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-brand-gray-200 bg-brand-white px-2.5 py-1 text-[11px] font-medium text-brand-gray-700 sm:px-3 sm:py-1.5 sm:text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-black sm:mt-4 sm:gap-2 sm:text-sm">
                  <span className="group-hover:underline">Explore {dev.name}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {!showAll && (
          <div className="mt-8 text-center sm:mt-12">
            <Link
              href="/developments"
              className="text-sm font-semibold text-black underline underline-offset-4 hover:text-brand-gray-600"
            >
              View All Developments &rarr;
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type PortfolioCategory = "exteriors" | "interiors" | "amenities";

const portfolioItems: {
  title: string;
  image: string;
  imageAlt: string;
  href: string;
  category: PortfolioCategory;
}[] = [
  {
    title: "B&P Ever Retreat Villa",
    image: "/images/portfolio/nara-render.webp",
    imageAlt: "B&P Ever Retreat Villa architectural render",
    href: "/developments/nara-villas",
    category: "exteriors",
  },
  {
    title: "Villa Interior",
    image: "/images/portfolio/gj-villa.webp",
    imageAlt: "Ever Retreat villa interior",
    href: "/portfolio",
    category: "interiors",
  },
  {
    title: "Villa Pool & Deck",
    image: "/images/portfolio/villa-pool-timber-deck.webp",
    imageAlt: "Villa with private pool and timber deck",
    href: "/portfolio",
    category: "amenities",
  },
  {
    title: "Villa Terrace",
    image: "/images/portfolio/suku-terrace.webp",
    imageAlt: "Ever Retreat villa terrace view",
    href: "/portfolio",
    category: "amenities",
  },
  {
    title: "Villa Natural",
    image: "/images/portfolio/villa-natural.webp",
    imageAlt: "Villa interior with natural materials",
    href: "/portfolio",
    category: "interiors",
  },
  {
    title: "Cottage",
    image: "/images/portfolio/completed-villa-4.webp",
    imageAlt: "Completed Ever Retreat villa",
    href: "/developments/solas-kivu",
    category: "exteriors",
  },
];

interface PortfolioProps {
  enableFilters?: boolean;
}

export function Portfolio({ enableFilters = false }: PortfolioProps) {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<"all" | PortfolioCategory>("all");

  const filteredItems = useMemo(() => {
    if (!enableFilters || activeCategory === "all") return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [enableFilters, activeCategory]);

  const tabs: { key: "all" | PortfolioCategory; label: string }[] = [
    { key: "all", label: t.portfolioGallery.filterAllLabel },
    { key: "exteriors", label: t.portfolioGallery.categoryExteriors },
    { key: "interiors", label: t.portfolioGallery.categoryInteriors },
    { key: "amenities", label: t.portfolioGallery.categoryAmenities },
  ];

  const showingCount = t.portfolioGallery.showingCount
    .replace("{shown}", String(filteredItems.length))
    .replace("{total}", String(portfolioItems.length));

  return (
    <section className="bg-brand-off-white py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
            {t.portfolioGallery.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
            {t.portfolioGallery.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-gray-600">
            {t.portfolioGallery.paragraph}
          </p>
        </div>

        {enableFilters && (
          <div className="mb-8 flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveCategory(tab.key)}
                  className={`rounded-full border px-6 py-2 text-sm font-medium transition-colors ${
                    activeCategory === tab.key
                      ? "border-brand-teal text-black"
                      : "border-transparent text-brand-gray-500 hover:border-brand-teal hover:text-black"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500">
              {showingCount}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative overflow-hidden rounded-sm"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-teal/0 transition-colors duration-300 group-hover:bg-brand-teal/30" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {item.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="text-sm font-semibold text-black underline underline-offset-4 hover:text-brand-gray-600"
          >
            {t.portfolioGallery.viewFull} &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { TranslationShape } from "@/lib/i18n/translations";

function buildDevelopments(t: TranslationShape) {
  const items = t.developmentsSection.items;
  const badges = t.developmentsSection.badges;
  const propertyType = t.developmentsSection.propertyType;
  return [
    {
      id: "nara-villas",
      name: "B&P Ever Retreat Villa",
      propertyType,
      tag: "Rubavu",
      badge: badges.prototype,
      price: t.developmentsSection.notForSale,
      image: "/images/developments/villa-photos.jpeg",
      href: "/developments/nara-villas",
      description: items["nara-villas"].description,
      features: items["nara-villas"].features,
    },
    {
      id: "solas-kivu",
      name: "Cottage",
      propertyType,
      tag: "Rubavu",
      badge: badges.prototype,
      price: t.developmentsSection.notForSale,
      image: "/images/developments/villa-photos.jpeg",
      href: "/developments/solas-kivu",
      description: items["solas-kivu"].description,
      features: items["solas-kivu"].features,
    },
    {
      id: "suku-residences",
      name: "Virunga Villas",
      propertyType,
      tag: "Musanze",
      badge: badges.comingSoon,
      price: "",
      image: "/images/developments/suku-4br/suku-4br-1.webp",
      href: "/developments/suku-residences",
      description: items["suku-residences"].description,
      features: items["suku-residences"].features,
    },
    {
      id: "nyungwe-retreat",
      name: "Nyungwe Retreat",
      propertyType,
      tag: "Nyungwe, Rwanda",
      badge: badges.comingSoon,
      price: "",
      image: "/images/areas/nyungwe-area.webp",
      href: "/areas/nyungwe",
      description: items["nyungwe-retreat"].description,
      features: items["nyungwe-retreat"].features,
    },
    {
      id: "huye-villas",
      name: "Huye Villas",
      propertyType,
      tag: "Huye, Rwanda",
      badge: badges.comingSoon,
      price: "",
      image: "/images/areas/huye-area.webp",
      href: "/areas/huye",
      description: items["huye-villas"].description,
      features: items["huye-villas"].features,
    },
    {
      id: "nyanza-villas",
      name: "Nyanza Villas",
      propertyType,
      tag: "Nyanza, Rwanda",
      badge: badges.comingSoon,
      price: "",
      image: "/images/areas/kigali-area.webp",
      href: "/areas/nyanza",
      description: items["nyanza-villas"].description,
      features: items["nyanza-villas"].features,
    },
    {
      id: "akagera-retreat",
      name: "Akagera Retreat",
      propertyType,
      tag: "Akagera, Rwanda",
      badge: badges.comingSoon,
      price: "",
      image: "/images/hero/aerial-rwanda.webp",
      href: "/areas/akagera",
      description: items["akagera-retreat"].description,
      features: items["akagera-retreat"].features,
    },
    {
      id: "kigali-retreat",
      name: "Kigali Retreat",
      propertyType,
      tag: "Kigali, Rwanda",
      badge: badges.comingSoon,
      price: "",
      image: "/images/areas/kigali-area.webp",
      href: "/areas/kigali",
      description: items["kigali-retreat"].description,
      features: items["kigali-retreat"].features,
    },
  ];
}

interface DevelopmentsProps {
  limit?: number;
  showHeader?: boolean;
  showAll?: boolean;
  variant?: "default" | "overlay" | "hub";
}

export function Developments({ limit, showHeader = true, showAll = false, variant = "default" }: DevelopmentsProps) {
  const { t } = useLanguage();
  const developments = buildDevelopments(t);
  // The "hub" variant lists genuinely active/available developments only —
  // completed showcase prototypes (not for sale) don't belong in that list.
  const baseDevelopments =
    variant === "hub" ? developments.filter((dev) => dev.badge !== t.developmentsSection.badges.prototype) : developments;
  const visibleDevelopments = limit ? baseDevelopments.slice(0, limit) : baseDevelopments;

  const gridCols = showAll
    ? "grid-cols-1 md:grid-cols-2"
    : "grid-cols-1 md:grid-cols-2";

  if (variant === "overlay") {
    return (
      <section className="bg-brand-gray-300 py-12 md:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          {showHeader && (
            <div className="mb-8 sm:mb-10">
              <p className="text-xs tracking-[0.3em] text-brand-gray-500 uppercase mb-4">
                {t.developmentsSection.sectionLabel}
              </p>
              <h2 className="text-3xl md:text-5xl text-black uppercase tracking-wide leading-tight">
                <span className="font-light">{t.developmentsSection.headingLight}</span>{" "}
                <span className="font-bold">{t.developmentsSection.headingBold}</span>
              </h2>
            </div>
          )}
          {/* Stacked full-width rows, one development per row — matches
              balitecture.com's actual layout (never a side-by-side grid),
              with a scroll-triggered fade-in-up reveal per row. */}
          <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
            {visibleDevelopments.map((dev, index) => (
              <motion.div
                key={dev.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Link href={dev.href} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[3/4] md:aspect-[16/10]">
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                      <Image
                        src={dev.image}
                        alt={dev.name}
                        fill
                        sizes="100vw"
                        className="hero-bg-image object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute left-4 top-4 flex items-center gap-2 md:left-8 md:top-6">
                      <span className="bg-black/40 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md md:px-4 md:py-2 md:text-xs">
                        {dev.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-10">
                      <p className="mb-1 text-[10px] tracking-[0.2em] text-white/60 uppercase md:text-xs">
                        {dev.tag} / {dev.propertyType}
                      </p>
                      <h3 className="text-3xl font-bold uppercase tracking-wide text-white md:text-5xl lg:text-6xl">
                        {dev.name}
                      </h3>
                      {dev.price && (
                        <p className="mt-1 text-xl font-bold text-white md:text-2xl">{dev.price}</p>
                      )}
                      <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/80 md:text-base">
                        {dev.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                        {dev.features.map((feature, i) => (
                          <span
                            key={i}
                            className="bg-white/15 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white backdrop-blur-sm md:px-3 md:py-1.5 md:text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 md:mt-6">
                        <span className="inline-flex items-center gap-2 bg-white/90 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-black backdrop-blur-sm transition-all duration-300 group-hover:bg-white md:px-6 md:py-3">
                          <span>{t.developmentsSection.explorePrefix} {dev.name}</span>
                          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          {!showAll && (
            <div className="mt-8 text-center sm:mt-12">
              <Link
                href="/developments"
                className="text-sm font-semibold text-black underline underline-offset-4 hover:text-brand-gray-600"
              >
                {t.developmentsSection.viewAll} →
              </Link>
            </div>
          )}
        </div>
      </section>
    );
  }

  if (variant === "hub") {
    return (
      <section className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          {showHeader && (
            <div className="mb-10 md:mb-16">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-brand-gray-500">
                {t.developmentsPage.activeEyebrow}
              </p>
              <h2 className="text-3xl uppercase tracking-wide text-black md:text-5xl">
                <span className="font-light">{t.developmentsPage.activeHeadingLight}</span>{" "}
                <span className="font-bold">{t.developmentsPage.activeHeadingBold}</span>
              </h2>
            </div>
          )}
          <div
            className={`grid grid-cols-1 gap-8 ${
              visibleDevelopments.length > 1 ? "md:grid-cols-2" : "mx-auto max-w-xl"
            }`}
          >
            {visibleDevelopments.map((dev) => (
              <Link key={dev.id} href={dev.href} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-gray-100">
                  <Image
                    src={dev.image}
                    alt={dev.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 bg-white/20 px-3 py-1.5 backdrop-blur-sm">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white">
                      {dev.tag}
                    </span>
                  </div>
                  <div className="absolute right-4 top-4 bg-black/90 px-3 py-1.5 backdrop-blur-sm">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white">
                      {dev.badge}
                    </span>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="text-xl font-bold uppercase tracking-wide text-black transition-colors group-hover:text-brand-gray-700 md:text-2xl">
                    {dev.name}
                  </h3>
                  <div className="mt-2 flex items-center gap-4">
                    <span className="text-sm text-brand-gray-500">{dev.propertyType}</span>
                    {dev.price && (
                      <>
                        <span className="text-sm text-brand-gray-500">|</span>
                        <span className="text-sm font-semibold text-black">{dev.price}</span>
                      </>
                    )}
                  </div>
                  <span className="mt-4 inline-block border-b border-black pb-0.5 text-xs font-semibold uppercase tracking-wide text-black transition-colors group-hover:border-brand-gray-500 group-hover:text-brand-gray-500">
                    {t.developmentsSection.explorePrefix} {dev.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
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
              {t.developmentsSection.sectionLabel}
            </p>
            <h2 className="mt-2 text-2xl font-bold leading-tight text-black sm:text-3xl md:text-4xl lg:text-5xl">
              {t.developmentsSection.heading}
            </h2>
          </div>
        )}
        <div className={`grid ${gridCols} gap-4 sm:gap-6`}>
          {visibleDevelopments.map((dev) => (
            <Link
              key={dev.id}
              href={dev.href}
              className="group block overflow-hidden rounded-sm border border-brand-gray-100 bg-white transition-colors duration-300 hover:border-brand-gray-400"
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
              <div className="p-4 sm:p-5 md:p-6">
                <p className="text-[10px] font-medium uppercase tracking-widest text-brand-gray-400 sm:text-xs">
                  {dev.propertyType}
                </p>
                <div className="mt-0.5 flex items-center justify-between gap-2 sm:gap-3">
                  <p className="text-[10px] font-medium uppercase tracking-widest text-brand-gray-500 sm:text-xs">
                    {dev.tag}
                  </p>
                  <span className="shrink-0 bg-black/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm sm:px-3 sm:text-xs">
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
                  <span className="group-hover:underline">{t.developmentsSection.explorePrefix} {dev.name}</span>
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
              {t.developmentsSection.viewAll} →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

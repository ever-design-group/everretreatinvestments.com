"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { TranslationShape } from "@/lib/i18n/translations";

const SLIDE_COUNT = 2;

function buildDevelopments(t: TranslationShape) {
  return [
    {
      id: "nara-villas",
      name: "B&P Ever Retreat Villa",
      tag: "Rubavu",
      badge: t.developmentsSection.badges.prototype,
      price: t.developmentsSection.notForSale,
      image: "/images/developments/villa-photos.jpeg",
      href: "/developments/nara-villas",
      description: t.developmentsSection.items["nara-villas"].description,
      features: t.developmentsSection.items["nara-villas"].features,
    },
    {
      id: "suku-residences",
      name: "Virunga Villas",
      tag: "Musanze",
      badge: t.developmentsSection.badges.comingSoon,
      price: "",
      image: "/images/developments/suku-4br/suku-4br-1.webp",
      href: "/developments/suku-residences",
      description: t.developmentsSection.items["suku-residences"].description,
      features: t.developmentsSection.items["suku-residences"].features,
    },
  ];
}

function ChevronLeft() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export function HeroSlideshow() {
  const { t } = useLanguage();
  const developments = buildDevelopments(t);
  const [current, setCurrent] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const goTo = (index: number) => {
    if (index === current) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrent(index);
      setIsFading(false);
    }, 300);
  };

  const goNext = () => {
    goTo((current + 1) % SLIDE_COUNT);
  };

  const goPrev = () => {
    goTo((current - 1 + SLIDE_COUNT) % SLIDE_COUNT);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % SLIDE_COUNT);
        setIsFading(false);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const dev = developments[current];

  return (
    <section className="relative w-full overflow-hidden bg-brand-teal" style={{ height: "min(800px, 100svh)" }}>
      {developments.map((item, index) => (
        <div
          key={item.id}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: index === current && !isFading ? 1 : 0 }}
        >
          <Image
            src={item.image}
            alt={item.name}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 sm:px-6 text-center">
        <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 sm:tracking-[0.25em]">
          {t.heroSlideshow.label}
        </p>
        <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl lg:text-7xl tracking-tight">
          {dev.name}
        </h1>
        <p className="mt-2 text-sm uppercase tracking-[0.15em] text-white/80 sm:text-base">
          {dev.tag}
        </p>
        <p className="mt-1 text-lg font-semibold text-white sm:text-xl">
          {dev.price}
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
          {dev.description}
        </p>
        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2">
          {dev.features.map((feature, i) => (
            <span
              key={i}
              className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-medium text-white backdrop-blur-sm"
            >
              {feature}
            </span>
          ))}
        </div>
        <div className="mt-4 sm:mt-6">
          <Link
            href={dev.href}
            className="inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-black transition-colors hover:bg-brand-gray-200 sm:px-8 sm:py-4 sm:text-sm"
          >
            {t.heroSlideshow.explorePrefix} {dev.name}
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 z-20 flex items-end justify-between p-4 sm:p-6 md:p-10">
        <div className="flex gap-1.5 sm:gap-2">
          {developments.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                index === current ? "w-5 sm:w-8 bg-white" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 text-white font-mono text-[10px] tracking-widest sm:text-sm">
          {String(current + 1).padStart(2, "0")} / {String(developments.length).padStart(2, "0")}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/developments"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:underline"
          >
            {t.developmentsSection.viewAll}
            <span className="text-sm">→</span>
          </Link>
          <div className="flex gap-1.5 sm:gap-2">
            <button
              onClick={goPrev}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white transition-all hover:bg-white/10 sm:h-10 sm:w-10"
              aria-label="Previous"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={goNext}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white transition-all hover:bg-white/10 sm:h-10 sm:w-10"
              aria-label="Next"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

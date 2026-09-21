"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useCurrency } from "@/lib/currency/CurrencyContext";

export function Hero() {
  const { t } = useLanguage();
  const { formatPrice } = useCurrency();

  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      {/* Background image - slow ambient zoom/breathing loop */}
      <Image
        src="/images/hero/everretreat.jpeg"
        alt="Luxury eco-retreat development by Ever Retreat in Rwanda"
        fill
        priority
        sizes="100vw"
        className="hero-bg-image object-cover"
      />

      {/* Top gradient strip for header legibility */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent" />
      {/* Bottom-anchored gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

      {/* Content - bottom-anchored, left-aligned */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-5 pb-20 md:px-12">
        <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-white/60 md:mb-4 md:text-xs">
          {t.hero.label}
        </p>

        <h1 className="uppercase leading-[0.98] text-white">
          <span className="block text-[2.5rem] font-bold tracking-[0.05em] md:text-6xl lg:text-7xl">
            {t.hero.headlineBold}
          </span>
          <span className="mt-1.5 block text-2xl font-light tracking-[0.05em] md:mt-2 md:text-4xl lg:text-5xl">
            {t.hero.headlineLight}
          </span>
        </h1>

        <p className="mt-4 max-w-md text-[13px] leading-relaxed text-white/80 md:mt-5 md:text-base">
          {t.hero.subtext} <span className="font-semibold text-white">{formatPrice(269000)}</span>.
        </p>

        <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:gap-3 md:mt-6">
          <Button href="/developments" variant="primary" size="md" className="bg-white/90 backdrop-blur-sm hover:bg-white">
            {t.hero.ctaPrimary}
          </Button>
          <Button href="/contact" variant="secondary" size="md">
            {t.hero.ctaSecondary}
          </Button>
        </div>
      </div>
    </section>
  );
}

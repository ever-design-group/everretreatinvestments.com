"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { TranslationShape } from "@/lib/i18n/translations";

interface BlogPostHeroProps {
  image: string;
  imageAlt: string;
  category: keyof TranslationShape["blogCategories"];
  date: string;
  title: string;
  subtitle: string;
}

// Shared article-hero template used by every /blog/[post] page, matching the
// real balitecture.com blog post structure: a dark, bottom-weighted header
// (not a full-viewport centered hero) with a category tag + date row above
// the headline, then a subtitle and a byline. Kept as one component so all
// posts stay visually consistent — update once, applies everywhere.
export function BlogPostHero({ image, imageAlt, category, date, title, subtitle }: BlogPostHeroProps) {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-brand-teal pt-32 pb-20 md:pt-40 md:pb-28">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover opacity-25"
        sizes="100vw"
      />
      <div className="relative z-10 mx-auto max-w-[1440px] px-6">
        <div className="mb-6 flex flex-wrap items-center gap-3 sm:mb-8">
          <span className="bg-brand-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-black">
            {t.blogCategories[category]}
          </span>
          <span className="text-xs text-white/60">{date}</span>
        </div>
        <h1 className="max-w-4xl text-4xl font-bold uppercase leading-[0.95] tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          {subtitle}
        </p>
        <p className="mt-4 text-xs uppercase tracking-wider text-white/40">
          By the Ever Retreat Investments Team
        </p>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { TranslationShape } from "@/lib/i18n/translations";

function buildPortfolio(t: TranslationShape) {
  const items = t.portfolioSection.items;
  return [
    {
      title: items.bp.title,
      description: items.bp.description,
      image: "/images/developments/villa-photos.jpeg",
      imageAlt: "B&P Ever Retreat Villa exterior at Lake Kivu",
      href: "/developments/nara-villas",
      cta: items.bp.cta,
    },
    {
      title: items.virunga.title,
      description: items.virunga.description,
      image: "/images/developments/suku-4br/suku-4br-1.webp",
      imageAlt: "Virunga Villas exterior in Musanze",
      href: "/developments/suku-residences",
      cta: items.virunga.cta,
    },
    {
      title: items.everRetreat.title,
      description: items.everRetreat.description,
      image: "/images/portfolio/villa-pool-timber-deck.webp",
      imageAlt: "Ever Retreat villa with pool and timber deck",
      href: "/about",
      cta: items.everRetreat.cta,
    },
    {
      title: items.everDesign.title,
      description: items.everDesign.description,
      image: "/images/about/villa-architecture.webp",
      imageAlt: "Ever Design architectural project",
      href: "/services/architecture",
      cta: items.everDesign.cta,
    },
  ];
}

export function Awards() {
  const { t } = useLanguage();
  const portfolio = buildPortfolio(t);

  return (
    <section className="bg-brand-teal py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-white/70">
            {t.portfolioSection.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            {t.portfolioSection.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            {t.portfolioSection.paragraph}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group overflow-hidden rounded-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-teal/80 via-brand-teal/20 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-white/80">
                  {item.cta}
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

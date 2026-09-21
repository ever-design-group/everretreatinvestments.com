"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { TranslationShape } from "@/lib/i18n/translations";

// The 2 featured (large) areas and the 4 secondary (small) areas — matches
// balitecture.com's actual bento layout: a 2-column row of flagship areas
// followed by a separate 4-column row of the rest. Evane/Akagera stay off
// this homepage teaser (still on the full /areas page) since the reference
// only ever features 6 areas here, not all of them.
function buildFeaturedAreas(t: TranslationShape) {
  const items = t.areasSection.items;
  return [
    {
      name: "Rubavu",
      description: items.rubavu.description,
      image: "/images/areas/villa-photos.jpeg",
      imageAlt: "Rubavu - Rwanda property investment area",
      href: "/areas/rubavu",
    },
    {
      name: "Musanze",
      description: items.musanze.description,
      image: "/images/areas/musanze-area.webp",
      imageAlt: "Musanze - Rwanda property investment area",
      href: "/areas/musanze",
    },
  ];
}

function buildSecondaryAreas(t: TranslationShape) {
  const items = t.areasSection.items;
  return [
    {
      name: "Kigali",
      description: items.kigali.description,
      image: "/images/areas/kigali-area.webp",
      imageAlt: "Kigali - Rwanda property investment area",
      href: "/areas/kigali",
    },
    {
      name: "Nyungwe",
      description: items.nyungwe.description,
      image: "/images/areas/nyungwe-area.webp",
      imageAlt: "Nyungwe - Rwanda property investment area",
      href: "/areas/nyungwe",
    },
    {
      name: "Huye",
      description: items.huye.description,
      image: "/images/areas/huye-area.webp",
      imageAlt: "Huye - Rwanda property investment area",
      href: "/areas/huye",
    },
    {
      name: "Nyanza",
      description: items.nyanza.description,
      image: "/images/areas/lake-kivu-area.webp",
      imageAlt: "Nyanza - Rwanda property investment area",
      href: "/areas/nyanza",
    },
  ];
}

export function Areas() {
  const { t } = useLanguage();
  const featuredAreas = buildFeaturedAreas(t);
  const secondaryAreas = buildSecondaryAreas(t);

  return (
    <section className="bg-brand-white py-16 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="mb-10 flex items-end justify-between md:mb-14">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-brand-gray-500">
              {t.areasSection.eyebrow}
            </p>
            <h2 className="text-3xl uppercase leading-tight tracking-wide text-black md:text-5xl">
              <span className="font-light">{t.areasSection.headingLight}</span>{" "}
              <span className="font-bold">{t.areasSection.headingBold}</span>
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-brand-gray-700 md:text-base">
              {t.areasSection.paragraph}
            </p>
          </div>
          <Link
            href="/areas"
            className="group/link hidden items-center gap-2 text-sm uppercase tracking-[0.12em] text-brand-gray-500 transition-colors duration-300 hover:text-black md:inline-flex"
          >
            <span>{t.areasSection.viewAll}</span>
            <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">→</span>
          </Link>
        </div>

        {/* Row 1: 2 large featured areas */}
        <div className="mb-3 grid grid-cols-1 gap-3 md:grid-cols-2">
          {featuredAreas.map((area) => (
            <Link key={area.name} href={area.href} className="group relative block aspect-[16/9] overflow-hidden">
              <Image
                src={area.image}
                alt={area.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-all duration-500 group-hover:from-black/80" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                <h3 className="text-xl font-bold tracking-wide text-white md:text-2xl">
                  {area.name}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-white/60 md:text-sm">
                  {area.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Row 2: 4 smaller secondary areas */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {secondaryAreas.map((area) => (
            <Link key={area.name} href={area.href} className="group relative block aspect-[4/3] overflow-hidden">
              <Image
                src={area.image}
                alt={area.imageAlt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-all duration-500 group-hover:from-black/80" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
                <h3 className="text-sm font-bold tracking-wide text-white md:text-lg">
                  {area.name}
                </h3>
                <p className="mt-0.5 text-[11px] leading-snug text-white/50">
                  {area.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/areas"
          className="group/link inline-flex items-center gap-2 text-sm uppercase tracking-[0.12em] text-brand-gray-500 transition-colors duration-300 hover:text-black md:hidden"
        >
          <span>{t.areasSection.viewAll}</span>
          <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}

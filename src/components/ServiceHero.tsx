"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface ServiceHeroProps {
  name: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  badge?: string;
  tag?: string;
  ctaHref?: string;
  secondaryCtaHref?: string;
  /** Small uppercase label directly above the heading, in the bottom-anchored
   *  block — matches balitecture.com's service subpage heroes. When set, the
   *  legacy top-right tag/badge bar is skipped in favour of this. */
  eyebrow?: string;
  /** Splits `name` into a font-light lead-in + font-bold last word, matching
   *  balitecture.com's two-tone uppercase hero headings. Safe for any
   *  language since it only ever bolds the final word. Ignored when
   *  `boldSuffix` is provided. */
  twoTone?: boolean;
  /** Explicit bold second line/phrase for the two-tone heading, used when a
   *  page already has a known light/bold split (e.g. translated
   *  headingLight/headingBold pairs) instead of relying on auto-split. When
   *  set, `name` is rendered in full as the light part. */
  boldSuffix?: string;
  /** Inline stats row rendered under the CTAs, matching the reference's
   *  service subpage heroes (e.g. "120+ Villas Built"). */
  stats?: { value: string; label: string }[];
  /** Tailwind height class for the hero section. Defaults to the full
   *  viewport used historically; service subpages use "min-h-[85vh]" and the
   *  services hub uses "min-h-[70vh]" to match the reference. */
  minHeightClass?: string;
  /** Hides the CTA row entirely (the reference has no CTAs in most service
   *  subpage heroes, relying on the stats row + page CTAs instead). */
  hideCta?: boolean;
}

export function ServiceHero({
  name,
  subtitle,
  image,
  imageAlt,
  badge = "Service",
  tag,
  ctaHref = "#enquire",
  secondaryCtaHref,
  eyebrow,
  twoTone = false,
  boldSuffix,
  stats,
  minHeightClass = "h-[100svh]",
  hideCta = false,
}: ServiceHeroProps) {
  const { t } = useLanguage();
  const h = t.heroCommon;
  const [isZoomed, setIsZoomed] = useState(false);

  const nameWords = name.trim().split(" ");
  const autoBoldWord = nameWords.pop() ?? name;
  const autoLightLeadIn = nameWords.join(" ");
  const lightLeadIn = boldSuffix ? name : autoLightLeadIn;
  const boldWord = boldSuffix ?? autoBoldWord;

  // The reference-matching bottom block (eyebrow + two-tone heading + stats)
  // only replaces the legacy layout when a caller opts in via `eyebrow`, so
  // pages that don't pass it keep their exact original markup/spacing.
  const useReferenceLayout = Boolean(eyebrow);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsZoomed((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`relative ${minHeightClass} w-full overflow-hidden`}>
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className={`object-cover transition-transform duration-[5000ms] ease-in-out ${
          isZoomed ? "scale-110" : "scale-100"
        }`}
      />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

      {/* Top bar - tag + badge (legacy layout only) */}
      {!useReferenceLayout && (tag || badge) && (
        <div className="absolute left-0 right-0 top-0 flex items-start justify-between p-6 sm:p-10 md:p-16">
          <div>
            {tag && (
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                {tag}
              </p>
            )}
            <span className="mt-3 inline-block rounded-sm bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-black">
              {badge}
            </span>
          </div>
        </div>
      )}

      {useReferenceLayout ? (
        /* Reference-matching bottom caption area: eyebrow + two-tone heading + stats */
        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-5 pb-16 pt-32 md:px-12 md:pb-24">
          {eyebrow && (
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/50 md:text-sm">
              {eyebrow}
            </p>
          )}
          {twoTone ? (
            <h1 className="text-4xl uppercase leading-[0.95] tracking-wide text-white sm:text-6xl md:text-7xl lg:text-8xl">
              {lightLeadIn && <span className="font-light">{lightLeadIn}</span>}
              {lightLeadIn && <br />}
              <span className="font-bold">{boldWord}</span>
            </h1>
          ) : (
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              {name}
            </h1>
          )}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:mt-8 md:text-lg">
            {subtitle}
          </p>
          {!hideCta && (
            <div className="mt-8 flex flex-wrap gap-4 md:mt-10">
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-3 rounded-sm bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-black transition-colors hover:bg-brand-gray-200"
              >
                {h.enquireNow}
                <span className="text-lg">→</span>
              </Link>
              {secondaryCtaHref && (
                <Link
                  href={secondaryCtaHref}
                  className="inline-flex items-center gap-3 rounded-sm border border-white/40 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  {h.learnMore}
                </Link>
              )}
            </div>
          )}
          {stats && stats.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-8 md:mt-14 md:gap-16">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold tabular-nums text-white md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Legacy bottom caption area (unchanged, used by pages with no real
           balitecture.com equivalent: interior-design, landscape, project-management) */
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 md:p-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-white sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
              {name}
            </h1>
            <p className="mt-4 text-xl font-semibold text-white/90 sm:text-2xl md:text-3xl">
              {subtitle}
            </p>
            {!hideCta && (
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-3 rounded-sm bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-black transition-colors hover:bg-brand-gray-200"
                >
                  {h.enquireNow}
                  <span className="text-lg">→</span>
                </Link>
                {secondaryCtaHref && (
                  <Link
                    href={secondaryCtaHref}
                    className="inline-flex items-center gap-3 rounded-sm border border-white/40 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:border-white hover:bg-white/10"
                  >
                    {h.learnMore}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

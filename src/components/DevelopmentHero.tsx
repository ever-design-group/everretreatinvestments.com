"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface DevelopmentHeroProps {
  name: string;
  tagline: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  videoSrc?: string;
  ctaHref?: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
  showFacadeToggle?: boolean;
  statusBadge?: string;
}

export function DevelopmentHero({
  name,
  tagline,
  subtitle,
  image,
  imageAlt,
  videoSrc,
  ctaHref = "#enquire",
  secondaryCtaHref = "#villa-types",
  secondaryCtaLabel,
  showFacadeToggle = false,
  statusBadge,
}: DevelopmentHeroProps) {
  const { t } = useLanguage();
  const h = t.heroCommon;
  const resolvedSecondaryCtaLabel = secondaryCtaLabel ?? h.viewVillaTypes;
  const resolvedStatusBadge = statusBadge ?? h.salesNowOpen;
  const [facade, setFacade] = useState("both");
  const words = name.split(" ");
  const boldWord = words[0];
  const lightWord = words.slice(1).join(" ");

  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        {videoSrc ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={image}
            className="h-full w-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover hero-bg-image"
          />
        )}
      </div>
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent z-10" />
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-white/80">
          {tagline}
        </p>
        <div className="inline-flex items-center gap-2 bg-brand-white/10 border border-brand-white/30 px-4 py-2 mb-6">
          <span className="h-2 w-2 rounded-full bg-white animate-pulse inline-block" />
          <span className="text-xs font-semibold uppercase tracking-widest text-white">
            {resolvedStatusBadge}
          </span>
        </div>
        <h1 className="max-w-5xl text-4xl font-bold uppercase tracking-[0.05em] text-white md:text-7xl md:leading-tight">
          <span className="font-bold">{boldWord}</span>{" "}
          <span className="font-light">{lightWord}</span>
        </h1>
        <p className="mt-6 text-xs tracking-[0.25em] text-white/60 uppercase md:text-sm">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href={ctaHref}
            className="rounded-sm bg-white px-10 py-4 text-sm font-semibold text-black transition-colors hover:bg-brand-gray-200"
          >
            {h.enquireNow}
          </Link>
          <Link
            href={secondaryCtaHref}
            className="rounded-sm border border-white/40 px-10 py-4 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            {resolvedSecondaryCtaLabel}
          </Link>
        </div>
        {showFacadeToggle && (
          <div className="mt-8 inline-flex items-center gap-1 bg-brand-white/10 backdrop-blur-md border border-brand-white/30 p-1">
            <span className="hidden md:inline text-[10px] font-semibold uppercase tracking-wider text-white/70 px-2">
              {h.facadeLabel}
            </span>
            {[
              { key: "both", label: h.bothLabel },
              { key: "terracotta", label: h.terracottaLabel },
              { key: "grey", label: h.greyLabel },
            ].map((option) => (
              <button
                key={option.key}
                onClick={() => setFacade(option.key)}
                className={`rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                  facade === option.key
                    ? "bg-white text-black"
                    : "text-white hover:text-white"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

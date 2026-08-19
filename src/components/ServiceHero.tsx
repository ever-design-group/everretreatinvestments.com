"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ServiceHeroProps {
  name: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  badge?: string;
  tag?: string;
  ctaHref?: string;
  secondaryCtaHref?: string;
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
}: ServiceHeroProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsZoomed((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className={`object-cover transition-transform duration-[5000ms] ease-in-out ${
          isZoomed ? "scale-110" : "scale-100"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      
      {/* Top bar - tag + badge */}
      {(tag || badge) && (
        <div className="absolute left-0 right-0 top-0 flex items-start justify-between p-6 sm:p-10 md:p-16">
          <div>
            {tag && (
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                {tag}
              </p>
            )}
            <span className="mt-3 inline-block rounded bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-black">
              {badge}
            </span>
          </div>
        </div>
      )}

      {/* Bottom caption area */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 md:p-16">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold text-white sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
            {name}
          </h1>
          <p className="mt-4 text-xl font-semibold text-white/90 sm:text-2xl md:text-3xl">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-3 rounded bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-black transition-all hover:bg-white/90"
            >
              Enquire Now
              <span className="text-lg">→</span>
            </Link>
            {secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center gap-3 rounded border-2 border-white px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-white/10"
              >
                Learn More
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

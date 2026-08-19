"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

interface HeroAnimatedProps {
  slides: {
    image: string;
    imageAlt: string;
    title: string;
    subtitle: string;
  }[];
  badge?: string;
  tag?: string;
  ctaHref?: string;
  secondaryCtaHref?: string;
}

export function HeroAnimated({
  slides,
  badge = "",
  tag = "",
  ctaHref = "/contact",
  secondaryCtaHref,
}: HeroAnimatedProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides]);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.imageAlt}
            fill
            priority={index === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 text-center">
        <div className="space-y-4 sm:space-y-6">
          {tag && (
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 sm:tracking-[0.25em]">
              {tag}
            </p>
          )}
          <h1
            className={"text-2xl font-bold text-white sm:text-3xl md:text-5xl lg:text-7xl transition-all duration-700 opacity-100 translate-y-0"}
          >
            {slides[current].title}
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-white/90 sm:text-base md:text-xl transition-all duration-700 delay-300">
            {slides[current].subtitle}
          </p>
          {badge && (
            <span className="inline-block rounded bg-white/10 px-4 py-1.5 text-[10px] font-medium text-white sm:px-6 sm:py-2 sm:text-xs">
              {badge}
            </span>
          )}
        </div>

        <div className="mt-8 sm:mt-10 flex flex-col gap-3 sm:flex-row sm:gap-6">
          <Link
            href={ctaHref}
            className="rounded bg-white px-6 py-2.5 text-xs font-semibold text-black transition-all hover:bg-white/90 sm:px-8 sm:py-3 sm:text-sm"
          >
            Enquire Now
          </Link>
          {secondaryCtaHref && (
            <Link
              href={secondaryCtaHref}
              className="rounded border-2 border-white px-6 py-2.5 text-xs font-semibold text-white transition-all hover:bg-white/10 sm:px-8 sm:py-3 sm:text-sm"
            >
              Learn More
            </Link>
          )}
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 w-1.5 rounded-full transition-all sm:h-2 sm:w-2 ${
              index === current
                ? "w-6 bg-white sm:w-8"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

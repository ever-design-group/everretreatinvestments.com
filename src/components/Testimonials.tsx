"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface TestimonialsProps {
  variant?: "carousel" | "grid";
}

export function Testimonials({ variant = "carousel" }: TestimonialsProps) {
  const { t } = useLanguage();
  const testimonials = t.testimonials.quotes;
  const [activeIndex, setActiveIndex] = useState(0);

  if (variant === "grid") {
    return (
      <section className="bg-brand-teal py-16 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-sm border border-white/20 bg-white/5 p-8"
              >
                <blockquote className="text-base leading-relaxed text-white">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <p className="mt-6 text-sm font-semibold text-white/70">{item.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-brand-teal py-20 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <blockquote className="text-lg leading-relaxed text-white md:text-xl">
            &ldquo;{testimonials[activeIndex].quote}&rdquo;
          </blockquote>
          <p className="mt-6 text-sm font-semibold text-white/70">
            {testimonials[activeIndex].author}
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`View testimonial ${index + 1}`}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === activeIndex ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/testimonials"
            className="text-sm font-semibold text-white/70 underline underline-offset-4 hover:text-white"
          >
            {t.testimonials.readAll} &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

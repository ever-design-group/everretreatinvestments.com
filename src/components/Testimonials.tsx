"use client";

import Link from "next/link";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "They made the process extremely easy and take care of absolutely everything. We loved the weekly updates with photos during construction. Seeing those renders come to life was awesome. Highly recommend Ever Retreat and their management team to work with.",
    author: "Virginia B.",
  },
  {
    quote:
      "Investing abroad may be scary but the Ever Retreat team has made this very easy and safe, making me feel comfortable that my money is secured. James in particular has been very supportive and understanding since day 1.",
    author: "Joseph D.",
  },
  {
    quote:
      "The process was smooth on every stage. The whole team is professional and responsive, everyone we interacted with was so nice. The result is better than we could imagine. Special thanks to Susi and Dedi for the best communication.",
    author: "Dmitry D.",
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-brand-black py-20 md:py-32">
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
            Read All Reviews &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}


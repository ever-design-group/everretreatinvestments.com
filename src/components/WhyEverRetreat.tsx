"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface WhyEverRetreatProps {
  /** "sticky" (default) matches balitecture.com's homepage treatment (sticky
   *  left column + bordered list). "grid" matches their /about page instead
   *  (centered header + a 2-column divider-line grid of cards). */
  variant?: "sticky" | "grid";
}

export function WhyEverRetreat({ variant = "sticky" }: WhyEverRetreatProps) {
  const { t } = useLanguage();
  const w = t.whyEverRetreatSection;

  const reasons = [
    { number: "01", title: w.reason1Title, description: w.reason1Desc },
    { number: "02", title: w.reason2Title, description: w.reason2Desc },
    { number: "03", title: w.reason3Title, description: w.reason3Desc },
    { number: "04", title: w.reason4Title, description: w.reason4Desc },
    { number: "05", title: w.reason5Title, description: w.reason5Desc },
    { number: "06", title: w.reason6Title, description: w.reason6Desc },
    { number: "07", title: w.reason7Title, description: w.reason7Desc },
    { number: "08", title: w.reason8Title, description: w.reason8Desc },
  ];

  if (variant === "grid") {
    return (
      <section className="bg-brand-off-white py-20 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-brand-gray-500">
              {w.eyebrow}
            </p>
            <h2 className="mb-6 text-3xl uppercase tracking-wide text-black md:text-5xl">
              <span className="font-light">{w.headingLight}</span>{" "}
              <span className="font-bold">{w.headingBold}</span>
            </h2>
            <p className="mb-10 text-base leading-relaxed text-brand-gray-700 md:mb-16">
              {w.paragraph}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px bg-brand-gray-200 md:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.number} className="h-full bg-brand-white p-8 md:p-10">
                <div className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 text-xs font-semibold tabular-nums text-brand-gray-500">
                    {reason.number}
                  </span>
                  <div>
                    <h3 className="mb-2 text-base font-semibold tracking-wide text-black">
                      {reason.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-brand-gray-700">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-brand-off-white py-16 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
          <div>
            <div className="md:sticky md:top-28">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-brand-gray-500">
                {w.eyebrow}
              </p>
              <h2 className="text-3xl uppercase leading-tight tracking-wide text-black md:text-4xl lg:text-5xl">
                <span className="font-light">{w.heading}</span>
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-brand-gray-700 md:text-base">
                {w.paragraph}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group/btn inline-flex items-center justify-center gap-2 rounded-sm bg-black px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-brand-gray-700"
                >
                  <span>{w.talkToUs}</span>
                  <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                </Link>
                <Link
                  href="/case-study"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-black px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-black transition-all duration-300 hover:bg-black hover:text-white"
                >
                  {w.seeCaseStudy}
                </Link>
              </div>
            </div>
          </div>

          <div>
            {reasons.map((reason) => (
              <div key={reason.number} className="border-b border-brand-gray-200 py-7 last:border-0">
                <div className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 text-xs font-semibold tabular-nums text-brand-gray-500">
                    {reason.number}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-wide text-black md:text-lg">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-gray-700">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

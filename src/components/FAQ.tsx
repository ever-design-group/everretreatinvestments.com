"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function FAQ() {
  const { t } = useLanguage();
  // Homepage teaser shows only the first 4 questions — matches
  // balitecture.com's actual homepage FAQ count. The full list lives on /faq.
  const faqItems = t.faqSection.items.slice(0, 4);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-brand-off-white py-16 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start md:gap-20">
          <div>
            <div className="md:sticky md:top-32">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-brand-gray-500">
                {t.faqSection.eyebrow}
              </p>
              <h2 className="text-3xl uppercase leading-tight tracking-wide text-black md:text-4xl lg:text-5xl">
                <span className="font-light">{t.faqSection.headingLight}</span>
                <br />
                <span className="font-bold">{t.faqSection.headingBold}</span>
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-brand-gray-700 md:text-base">
                {t.faqSection.paragraph}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/faq"
                  className="group/link inline-flex items-center gap-2 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-black"
                >
                  <span>{t.faqSection.viewAll}</span>
                  <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>

          <div>
            {faqItems.map((item, index) => (
              <div key={item.question} className="border-b border-brand-gray-200 last:border-0">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  className="group flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <h3 className="pr-4 text-sm font-semibold tracking-wide text-black md:text-base">
                    {item.question}
                  </h3>
                  <span className="shrink-0 text-xl text-brand-gray-500 transition-transform duration-300 group-hover:text-black">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <p className="pb-5 text-sm leading-relaxed text-brand-gray-700">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

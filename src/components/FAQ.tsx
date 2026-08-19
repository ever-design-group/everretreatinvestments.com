"use client";

import Link from "next/link";
import { useState } from "react";

const faqItems = [
  {
    question: "Can foreigners buy property in Rwanda?",
    answer:
      "Foreigners cannot hold freehold freehold land title (LCD/SHM) in Rwanda under personal name. However, foreigners can legally secure land in Rwanda through leasehold agreements (up to 99-year leases) or via company structures. Our in-house legal team ensures every acquisition is fully compliant with Rwanda's land laws.",
  },
  {
    question: "What is the difference between freehold and leasehold?",
    answer:
      "In Rwanda, foreigners cannot own freehold land under personal name. However, foreigners can legally secure land in Rwanda through leasehold agreements (up to 99-year leases) or via company structures (PT/PMA equivalent). The leasehold route is the standard option for foreign buyers, with extension options available through the Rwanda Land Management and Use Authority (RMLA).",
  },
  {
    question: "What ROI can I expect from a Rwanda villa?",
    answer:
      "Ever Retreat-managed villas typically achieve 15-20% gross rental yield annually, depending on location, villa size, and occupancy. Returns vary by area and management quality.",
  },
  {
    question: "How long does it take to build a villa in Rwanda?",
    answer:
      "Most villa builds take 12 to 18 months from design approval to handover. All our builds use concrete structures which require proper curing time at each stage.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-brand-off-white py-16 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              Common Questions
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-black md:text-5xl md:leading-tight">
               Investing in Rwanda Real Estate
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-gray-600">
              New to Rwanda real estate? These are the questions our clients ask
              most.
            </p>
          </div>
          <Link
            href="/faq"
            className="shrink-0 text-sm font-semibold text-black underline underline-offset-4 hover:text-brand-gray-600"
          >
            View All FAQs &rarr;
          </Link>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={item.question}
              className="overflow-hidden rounded-lg bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <h3 className="text-base font-semibold text-black">
                  {item.question}
                </h3>
                <span className="ml-4 text-lg text-brand-gray-500">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="border-t border-brand-gray-100 p-5">
                  <p className="text-sm leading-relaxed text-brand-gray-600">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

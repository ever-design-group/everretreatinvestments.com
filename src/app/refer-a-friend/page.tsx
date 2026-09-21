"use client";

import { PageLayout } from "@/components/PageLayout";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import { ReferralForm } from "@/components/ReferralForm";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useState } from "react";
import Image from "next/image";

export default function ReferFriendPage() {
  const { t } = useLanguage();
  const p = t.referAFriendPage;
  const steps = [p.step1, p.step2, p.step3];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <PageLayout showCta={false}
      hero={
        <section className="relative min-h-[85vh] w-full overflow-hidden">
          <Image
            src="/images/hero/hero-2-full.webp"
            alt="Rwanda development landscape"
            fill
            priority
            className="object-cover hero-bg-image"
            sizes="100vw"
          />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
          <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-32 md:px-12 md:pb-24">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/50 md:text-sm">
              {p.heroEyebrow}
            </p>
            <h1 className="max-w-3xl text-4xl uppercase leading-[0.95] tracking-[0.05em] text-white md:text-6xl lg:text-7xl">
              {p.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:mt-8 md:text-lg">
              {p.heroSubtitle}
            </p>
          </div>
        </section>
      }
    >
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>{p.contentHeading}</h2>
            <p>
              {p.contentParagraph}
            </p>

            <h3>{p.termsHeading}</h3>
            <ul>
              <li>{p.term1}</li>
              <li>{p.term2}</li>
              <li>{p.term3}</li>
              <li>{p.term4}</li>
            </ul>
          </div>

          <div className="mx-auto max-w-4xl">
            <h3 className="text-xl font-bold text-black md:text-2xl">{p.howItWorksHeading}</h3>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {steps.map((step, index) => (
                <div key={index}>
                  <span className="block text-4xl font-light tabular-nums text-brand-gray-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-brand-gray-600">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-2xl">
            <ReferralForm />
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <h3 className="text-xl font-bold text-black md:text-2xl">{p.faqHeading}</h3>
            <div className="mt-6 space-y-4">
              {p.faqItems.map((item, index) => (
                <div key={item.question} className="overflow-hidden rounded-sm border border-brand-gray-100 bg-white">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="flex w-full items-center justify-between p-5 text-left"
                  >
                    <h4 className="text-base font-semibold text-black">{item.question}</h4>
                    <span className="ml-4 text-lg text-brand-gray-500">
                      {openFaqIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  {openFaqIndex === index && (
                    <div className="border-t border-brand-gray-100 p-5">
                      <p className="text-sm leading-relaxed text-brand-gray-600">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <InterestedInInvesting />
    </PageLayout>
  );
}

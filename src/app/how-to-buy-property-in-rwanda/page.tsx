"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PageLayout } from "@/components/PageLayout";
import { ServiceHero } from "@/components/ServiceHero";
import { ServicesSubNav } from "@/components/ServicesSubNav";
import { Developments } from "@/components/Developments";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function HowToBuyPage() {
  const { t } = useLanguage();
  const p = t.howToBuyPage;
  const land = t.serviceLandPage;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Real, already-established figures reused for the hero stats row, matching
  // balitecture.com's service-style heroes, which put a stats row directly in
  // the hero instead of a separate bar.
  const heroStats = [
    { value: "120+", label: t.statsBarSection.villasBuiltLabel },
    { value: "99-Year", label: "Leasehold Terms" },
    { value: "6-Step", label: "Buying Process" },
  ];

  // The real, condensed 6-step buying process already established on
  // /services/land (acquisitionStep1-6) — reused verbatim rather than
  // re-deriving new step copy for the same facts.
  const steps = [
    { title: land.acquisitionStep1Title, desc: land.acquisitionStep1Desc },
    { title: land.acquisitionStep2Title, desc: land.acquisitionStep2Desc },
    { title: land.acquisitionStep3Title, desc: land.acquisitionStep3Desc },
    { title: land.acquisitionStep4Title, desc: land.acquisitionStep4Desc },
    { title: land.acquisitionStep5Title, desc: land.acquisitionStep5Desc },
    { title: land.acquisitionStep6Title, desc: land.acquisitionStep6Desc },
  ];

  // Real, already-established budgeting figures only — fixed-price villa
  // packages (/packages), land price range and construction cost per sqm
  // (/services/land, /services/construction), and the architecture design
  // fee (/services/architecture). No fabricated combined "total" figure.
  const budgetRows = [
    { label: p.budgetingRow1Label, value: p.budgetingRow1Value, desc: p.budgetingRow1Desc },
    { label: p.budgetingRow2Label, value: p.budgetingRow2Value, desc: p.budgetingRow2Desc },
    { label: p.budgetingRow3Label, value: p.budgetingRow3Value, desc: p.budgetingRow3Desc },
    { label: p.budgetingRow4Label, value: p.budgetingRow4Value, desc: p.budgetingRow4Desc },
  ];

  // Real, page-specific Q&As already established sitewide in the shared
  // investment FAQ (foreigners buying, freehold vs leasehold, deposit and
  // payment process) — reused here rather than inventing new questions.
  const howToBuyFaqs = [t.faqSection.items[0], t.faqSection.items[1], t.faqSection.items[4]];

  return (
    <PageLayout
      showCta={false}
      hero={
        <ServiceHero
          name={p.heroSlide1Title}
          subtitle={p.heroSlide1Subtitle}
          image="/images/hero/rwanda-landscape.webp"
          imageAlt="Rwanda landscape with volcanoes"
          eyebrow="The Full Buying Process"
          twoTone
          minHeightClass="min-h-[85vh]"
          stats={heroStats}
          hideCta
        />
      }
    >
      <ServicesSubNav />

      {/* 1. Buying in Rwanda, Done Properly — intro */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-6">
          <p className="mb-12 text-center font-body text-xs italic text-brand-gray-500">
            All prices on this page are quoted in USD unless otherwise noted.
          </p>
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-brand-gray-500">{p.introEyebrow}</p>
          <h2 className="mb-8 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
            <span className="font-light">{p.introHeadingLight}</span> <span className="font-bold">{p.introHeadingBold}</span>
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-brand-gray-700 md:text-lg">
            <p>{p.introParagraph1}</p>
            <p>{p.introParagraph2}</p>
          </div>
        </div>
      </section>

      {/* 2. Six Steps to Buying Safely */}
      <section className="bg-brand-off-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-6">
          <div className="mb-12 text-center md:mb-16">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-brand-gray-500">{p.stepsEyebrow}</p>
            <h2 className="text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
              <span className="font-light">{p.stepsHeadingLight}</span> <span className="font-bold">{p.stepsHeadingBold}</span>
            </h2>
          </div>
          <div className="space-y-10 md:space-y-12">
            {steps.map((step, index) => (
              <div key={step.title} className="flex items-start gap-5 md:gap-8">
                <span className="shrink-0 pt-1 font-body text-2xl font-bold leading-none text-brand-gray-300 tabular-nums md:text-4xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div
                  className={`w-full ${index < steps.length - 1 ? "border-b border-brand-gray-200 pb-10 md:pb-12" : ""}`}
                >
                  <h3 className="mb-3 text-lg font-bold uppercase tracking-wide text-black md:text-xl">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-gray-700 md:text-base">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Budgeting Realistically */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-wider text-brand-gray-500">
                {p.budgetingEyebrow}
              </p>
              <h2 className="mb-6 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
                <span className="font-light">{p.budgetingHeadingLight}</span>{" "}
                <span className="font-bold">{p.budgetingHeadingBold}</span>
              </h2>
              <p className="mb-6 text-base leading-relaxed text-brand-gray-700">{p.budgetingIntro}</p>
              <div className="space-y-px border border-brand-gray-200 bg-brand-gray-200">
                {budgetRows.map((row) => (
                  <div key={row.label} className="bg-brand-white p-5 md:p-6">
                    <div className="mb-1 flex items-baseline justify-between gap-4">
                      <span className="text-base font-bold text-black">{row.label}</span>
                      <span className="text-right text-sm font-semibold text-black md:text-base">{row.value}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-brand-gray-500">{row.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-brand-gray-500">{p.budgetingNote}</p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                <Link
                  href="/build-calculator"
                  className="text-xs font-semibold uppercase tracking-wide text-black underline underline-offset-4 transition-colors hover:text-brand-gray-500"
                >
                  Try the Build Calculator
                </Link>
                <Link
                  href="/contact"
                  className="text-xs font-semibold uppercase tracking-wide text-black underline underline-offset-4 transition-colors hover:text-brand-gray-500"
                >
                  Get a Fixed Quote
                </Link>
              </div>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-brand-gray-100">
              <Image
                src="/images/about/villa-lifestyle.webp"
                alt="Ever Retreat villa lifestyle in Rwanda"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. How Foreigners Own Property — direct reuse of the real,
          already-established freehold/leasehold facts, verbatim. */}
      <section className="bg-brand-off-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-brand-gray-500">
            {p.foreignersEyebrow}
          </p>
          <h2 className="mb-8 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
            <span className="font-light">{p.foreignersHeadingLight}</span>{" "}
            <span className="font-bold">{p.foreignersHeadingBold}</span>
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-brand-gray-700 md:text-lg">
            <p>{t.faqSection.items[0].answer}</p>
            <p>{t.faqSection.items[1].answer}</p>
            <p>
              <Link
                href="/blog/can-foreigners-buy-property-in-rwanda"
                className="font-semibold text-black underline underline-offset-4 transition-colors hover:text-brand-gray-500"
              >
                {p.foreignersLinkLabel}
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* 5. Villas You Can Buy Now — reuse the existing Developments grid */}
      <section className="bg-brand-white pt-20 md:pt-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-brand-gray-500">{p.villasEyebrow}</p>
            <h2 className="mb-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
              <span className="font-light">{p.villasHeadingLight}</span> <span className="font-bold">{p.villasHeadingBold}</span>
            </h2>
            <p className="text-base leading-relaxed text-brand-gray-600">{p.villasParagraph}</p>
          </div>
        </div>
      </section>
      <Developments limit={3} showHeader={false} />

      {/* 6. Buying in Rwanda FAQs — page-specific accordion reusing 3 real,
          already-established Q&As (foreigners buying, freehold vs leasehold,
          deposit/payment process) rather than inventing new questions. */}
      <section id="how-to-buy-faq" className="bg-brand-off-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              Common Questions
            </p>
            <h2 className="text-2xl font-bold uppercase tracking-wide text-black md:text-4xl">
              <span className="font-light">Buying in Rwanda</span> <span className="font-bold">FAQs</span>
            </h2>
          </div>
          <div className="mx-auto max-w-3xl divide-y divide-brand-gray-200">
            {howToBuyFaqs.map((item, index) => (
              <div key={item.question} className="py-5">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex min-h-[44px] w-full items-center justify-between gap-4 text-left"
                >
                  <span className="pr-8 font-semibold text-black md:text-lg">{item.question}</span>
                  <span className="flex-shrink-0 text-2xl text-brand-gray-500">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                {openFaq === index && (
                  <p className="mt-3 text-sm leading-relaxed text-brand-gray-600">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Closing CTA */}
      <section className="bg-brand-teal py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mx-auto max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-widest text-white/50">{p.closingEyebrow}</p>
            <h2 className="text-3xl font-bold uppercase tracking-wide text-white md:text-5xl">
              <span className="font-light">{p.closingHeadingLight}</span>{" "}
              <span className="font-bold">{p.closingHeadingBold}</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">{p.closingParagraph}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="https://wa.me/250787524298"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#25D366] px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#20bd5a]"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>{p.closingCtaSecondary}</span>
              </Link>
              <Link
                href="/contact"
                className="rounded-sm bg-white px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-brand-teal transition-colors hover:bg-brand-gray-200"
              >
                {p.closingCtaPrimary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

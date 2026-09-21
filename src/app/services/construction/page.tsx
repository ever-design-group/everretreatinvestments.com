"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PageLayout } from "@/components/PageLayout";
import { ServiceHero } from "@/components/ServiceHero";
import { ServicesSubNav } from "@/components/ServicesSubNav";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useCurrency } from "@/lib/currency/CurrencyContext";

const moreServicesLinks = [
  { key: "architecture", href: "/services/architecture" },
  { key: "villaManagement", href: "/services/villa-management" },
  { key: "landSourcing", href: "/services/land" },
] as const;

export default function ConstructionServicePage() {
  const { t } = useLanguage();
  const { formatPrice } = useCurrency();
  const c = t.buildCalculatorSection;
  const p = t.serviceConstructionPage;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Real, established figures reused for the hero stats row (matches
  // balitecture.com's construction page, which puts a stats row directly in
  // the hero instead of a separate bar).
  const heroStats = [
    { value: "120+", label: t.statsBarSection.villasBuiltLabel },
    { value: "82+", label: t.statsBarSection.teamMembersLabel },
    { value: "10+", label: t.statsBarSection.yearsBuildingLabel },
  ];

  const introChecklist = [
    p.introChecklistItem1,
    p.introChecklistItem2,
    p.introChecklistItem3,
    p.introChecklistItem4,
    p.introChecklistItem5,
    p.introChecklistItem6,
  ];

  const pricingTiers = [
    { label: c.standardLabel, rate: 1000, desc: p.tierStandardDesc },
    { label: c.premiumLabel, rate: 1500, desc: p.tierPremiumDesc },
    { label: c.luxuryLabel, rate: 2200, desc: p.tierLuxuryDesc },
  ];

  const phases = [
    { step: "1", title: p.step1Title, desc: p.step1Desc, duration: p.step1Duration },
    { step: "2", title: p.step2Title, desc: p.step2Desc, duration: p.step2Duration },
    { step: "3", title: p.step3Title, desc: p.step3Desc, duration: p.step3Duration },
    { step: "4", title: p.step4Title, desc: p.step4Desc, duration: p.step4Duration },
    { step: "5", title: p.step5Title, desc: p.step5Desc, duration: p.step5Duration },
  ];

  const whyChooseItems = [
    p.whyChooseItem1,
    p.whyChooseItem2,
    p.whyChooseItem3,
    p.whyChooseItem4,
    p.whyChooseItem5,
    p.whyChooseItem6,
  ];

  const remoteItems = [p.remoteItem1, p.remoteItem2, p.remoteItem3, p.remoteItem4];

  const fears = [
    { label: p.fear1Label, rebuttal: p.fear1Rebuttal },
    { label: p.fear2Label, rebuttal: p.fear2Rebuttal },
    { label: p.fear3Label, rebuttal: p.fear3Rebuttal },
    { label: p.fear4Label, rebuttal: p.fear4Rebuttal },
    { label: p.fear5Label, rebuttal: p.fear5Rebuttal },
  ];

  const builtManagedItems = [
    p.builtManagedItem1,
    p.builtManagedItem2,
    p.builtManagedItem3,
    p.builtManagedItem4,
  ];

  // Real, page-specific Q&As (cost per sqm, timeline, contract scope) matching
  // the reference's page-specific "Construction FAQs" accordion, distinct from
  // the sitewide investment FAQ used elsewhere.
  const constructionFaqs = [
    { question: p.faq1Question, answer: p.faq1Answer },
    { question: p.faq2Question, answer: p.faq2Answer },
    { question: p.faq3Question, answer: p.faq3Answer },
  ];

  const nextSteps = [
    { eyebrow: "After the Build", title: t.services.items.villaManagement.title, href: "/services/villa-management" },
    { eyebrow: "Need a Design?", title: t.services.items.architecture.title, href: "/services/architecture" },
    { eyebrow: "Investment Guide", title: "Invest in Rwanda", href: "/invest-in-rwanda" },
  ];

  // Reuse the two already-existing, real blog posts most relevant to
  // construction cost and process (rather than inventing new articles).
  const relatedPosts = [
    { ...t.blogSection.posts[4], href: "/blog/cost-to-build-villa-in-rwanda" },
    { ...t.blogSection.posts[5], href: "/blog/how-to-build-a-villa-in-rwanda" },
  ];

  return (
    <PageLayout
      showCta={false}
      hero={
        <ServiceHero
          name={p.heroSlide1Title}
          subtitle={p.heroSlide1Subtitle}
          image="/images/services/villa-exterior.webp"
          imageAlt="Villa under construction in Rwanda"
          eyebrow="Build Services"
          twoTone
          minHeightClass="min-h-[85vh]"
          stats={heroStats}
          hideCta
        />
      }
    >
      <ServicesSubNav />

      {/* 1. Intro */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-24 lg:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500">
                {p.approachEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
                <span className="font-light">{p.approachHeadingLight}</span>{" "}
                <span className="font-bold">{p.approachHeadingBold}</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-gray-600">
                {p.approachParagraph1}
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-gray-600">
                {p.approachParagraph2}
              </p>
            </div>
            <div className="space-y-4">
              {introChecklist.map((item) => (
                <div key={item} className="flex items-start gap-4 border-b border-brand-gray-200 pb-4">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-teal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm text-brand-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Rwanda Building Costs — pricing tier grid */}
      <section className="bg-brand-off-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              {p.pricingEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
              {p.pricingHeading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-gray-600">{p.pricingIntro}</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-px bg-brand-gray-200 md:mt-14 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div key={tier.label} className="bg-brand-white p-10">
                <p className="text-xs uppercase tracking-widest text-brand-gray-500">{tier.label}</p>
                <p className="mt-4 text-2xl font-bold uppercase text-black md:text-3xl">
                  {formatPrice(tier.rate)}/sqm
                </p>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray-600">{tier.desc}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-brand-gray-500">
            {p.pricingDisclaimer}
          </p>
          <div className="mt-8 text-center">
            <Link
              href="/build-calculator"
              className="inline-flex items-center gap-2 rounded-sm bg-brand-teal px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-brand-teal/90"
            >
              {p.pricingCalculatorCta}
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. What Is Included in Your Build */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              {p.atGlanceEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
              {p.atGlanceHeading}
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-2">
            <div className="bg-brand-off-white p-8 md:p-10">
              <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-black">
                {p.includedLabel}
              </h3>
              <ul className="space-y-3">
                {p.atGlanceItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 text-brand-gray-400">—</span>
                    <span className="text-sm leading-relaxed text-brand-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-brand-gray-200 p-8 md:p-10">
              <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-black">
                {p.quotedSeparatelyLabel}
              </h3>
              <div className="divide-y divide-brand-gray-100">
                {p.quotedSeparatelyItems.map((item) => (
                  <p key={item} className="py-3 text-sm font-semibold leading-relaxed text-black first:pt-0">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Construction Timeline — teal, 5-phase grid */}
      <section className="bg-brand-teal py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-white/50">
              Build Process
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">{p.processHeading}</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-px md:mt-14 md:grid-cols-5">
            {phases.map((phase) => (
              <div key={phase.step} className="relative bg-white/5 p-8 md:p-10">
                <span className="pointer-events-none absolute right-6 top-4 text-6xl font-bold text-white/10 md:text-7xl">
                  {phase.step.padStart(2, "0")}
                </span>
                <p className="relative text-xs uppercase tracking-widest text-white/50">
                  Phase {phase.step.padStart(2, "0")}
                </p>
                <h3 className="relative mt-3 text-lg font-bold uppercase tracking-wide text-white">
                  {phase.title}
                </h3>
                <p className="relative mt-2 text-xs uppercase tracking-wider text-white/40">
                  {phase.duration}
                </p>
                <p className="relative mt-4 text-sm leading-relaxed text-white/60">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Our Construction Company */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-24 lg:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500">
                {p.whyChooseEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
                <span className="font-light">{p.whyChooseHeadingLight}</span>{" "}
                <span className="font-bold">{p.whyChooseHeadingBold}</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-gray-600">
                {p.whyChooseParagraph1}
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-gray-600">
                {p.whyChooseParagraph2}
              </p>
            </div>
            <div className="space-y-4">
              {whyChooseItems.map((item) => (
                <div key={item} className="flex items-start gap-4 border-b border-brand-gray-200 pb-4">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-teal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm text-brand-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Remote Build Management */}
      <section className="bg-brand-off-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-24 lg:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500">
                {p.remoteEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
                <span className="font-light">{p.remoteHeadingLight}</span>{" "}
                <span className="font-bold">{p.remoteHeadingBold}</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-gray-600">
                {p.remoteParagraph1}
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-gray-600">
                {p.remoteParagraph2}
              </p>
            </div>
            <div className="space-y-4">
              {remoteItems.map((item) => (
                <div key={item} className="flex items-start gap-4 border-b border-brand-gray-200 pb-4">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-teal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm text-brand-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Image triptych break */}
      <section className="bg-brand-teal py-0">
        <div className="grid grid-cols-3 gap-px">
          <div className="relative aspect-square md:aspect-[4/3]">
            <Image
              src="/images/portfolio/completed-villa-4.webp"
              alt="Completed Ever Retreat villa in Rwanda"
              fill
              sizes="(max-width: 768px) 33vw, 480px"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square md:aspect-[4/3]">
            <Image
              src="/images/portfolio/villa-natural.webp"
              alt="Ever Retreat villa built with natural materials"
              fill
              sizes="(max-width: 768px) 33vw, 480px"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square md:aspect-[4/3]">
            <Image
              src="/images/portfolio/villa-pool-timber-deck.webp"
              alt="Ever Retreat villa with pool and timber deck"
              fill
              sizes="(max-width: 768px) 33vw, 480px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 8. How We Build Differently — fear-busting grid */}
      <section className="bg-brand-teal py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-white/50">
              {p.fearEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-white md:text-5xl">
              <span className="font-light">{p.fearHeadingLight}</span>{" "}
              <span className="font-bold">{p.fearHeadingBold}</span>
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2">
            {fears.map((fear) => (
              <div key={fear.label} className="border-l-2 border-white/30 py-4 pl-6">
                <p className="text-xs uppercase tracking-widest text-white/40">{p.commonFearLabel}</p>
                <h3 className="mt-2 text-lg font-bold text-white">&ldquo;{fear.label}&rdquo;</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{fear.rebuttal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Premium Materials. No Shortcuts. */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              {p.materialsEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
              {p.materialsHeading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-gray-600">{p.materialsIntro}</p>
          </div>
          <div className="mx-auto mt-10 max-w-3xl border border-brand-gray-200 p-8 md:mt-14 md:p-10">
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center bg-brand-teal text-xs font-bold text-white">
                01
              </span>
              <div>
                <h3 className="text-xl font-bold uppercase tracking-wide text-black md:text-2xl">
                  {p.materialsCategoryTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray-600">
                  {p.materialsCategoryDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Case-study callout */}
      <section className="bg-brand-off-white py-12 md:py-16">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <Link
            href="/case-study"
            className="group mx-auto flex max-w-3xl flex-col items-center gap-4 border border-brand-gray-200 bg-brand-white px-8 py-10 text-center transition-colors hover:border-black md:flex-row md:justify-between md:text-left"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-brand-gray-500">
                {p.caseStudyEyebrow}
              </p>
              <h3 className="mt-2 text-xl font-bold uppercase tracking-wide text-black md:text-2xl">
                {p.caseStudyHeading}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-gray-600">{p.caseStudyParagraph}</p>
            </div>
            <span className="inline-flex flex-shrink-0 items-center gap-2 border-b border-black pb-0.5 text-xs font-semibold uppercase tracking-wide text-black transition-transform group-hover:translate-x-1">
              {p.caseStudyCta} &rarr;
            </span>
          </Link>
        </div>
      </section>

      {/* 11. Construction FAQs — page-specific accordion */}
      <section id="construction-faq" className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mb-10">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              Common Questions
            </p>
            <h2 className="text-2xl font-bold uppercase tracking-wide text-black md:text-4xl">
              <span className="font-light">Construction</span> <span className="font-bold">FAQs</span>
            </h2>
          </div>
          <div className="mx-auto max-w-3xl divide-y divide-brand-gray-200">
            {constructionFaqs.map((item, index) => (
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

      {/* 12. Next-step quick links */}
      <section className="bg-brand-off-white py-12 md:py-16">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {nextSteps.map((step) => (
              <Link
                key={step.href}
                href={step.href}
                className="group block border border-brand-gray-200 bg-brand-white p-6 transition-colors hover:border-brand-gray-500"
              >
                <p className="mb-2 text-xs uppercase tracking-widest text-brand-gray-500">
                  {step.eyebrow}
                </p>
                <p className="text-sm font-bold uppercase tracking-wide text-black transition-transform group-hover:translate-x-1">
                  {step.title} &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Built and Managed */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-24 lg:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500">
                {p.builtManagedEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
                <span className="font-light">{p.builtManagedHeadingLight}</span>{" "}
                <span className="font-bold">{p.builtManagedHeadingBold}</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-gray-600">
                {p.builtManagedParagraph1}
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-gray-600">
                {p.builtManagedParagraph2}
              </p>
            </div>
            <div className="space-y-4">
              {builtManagedItems.map((item) => (
                <div key={item} className="flex items-start gap-4 border-b border-brand-gray-200 pb-4">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-teal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm text-brand-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 14. More services */}
      <section className="bg-brand-off-white py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold uppercase tracking-wide text-black md:text-3xl">
            <span className="font-light">More</span> <span className="font-bold">Services</span>
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {moreServicesLinks.map((link) => {
              const item = t.services.items[link.key];
              return (
                <Link
                  key={link.key}
                  href={link.href}
                  className="group block border border-brand-gray-200 bg-brand-white p-8 transition-colors hover:border-black"
                >
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-black group-hover:underline">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-brand-gray-600">{item.description}</p>
                  <p className="mt-4 inline-block border-b border-black pb-0.5 text-xs font-semibold uppercase tracking-wide text-black">
                    Learn More
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 15. From the blog */}
      <section className="bg-brand-off-white py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <p className="mb-4 text-xs uppercase tracking-widest text-brand-gray-500">
            {t.blogSection.eyebrow}
          </p>
          <h2 className="mb-8 text-2xl font-bold uppercase tracking-wide text-black md:text-3xl">
            <span className="font-light">Build and</span> <span className="font-bold">Cost Guides</span>
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {relatedPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group block bg-brand-white p-6 transition-colors duration-300 hover:bg-black"
              >
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-black transition-colors group-hover:text-white">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-gray-600 transition-colors group-hover:text-brand-gray-300">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wide text-black transition-colors group-hover:text-white">
                  {t.blogSection.readMore} &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 16. Closing CTA — WhatsApp only, per the reference's construction page */}
      <section className="bg-brand-teal py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mx-auto max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-widest text-white/50">{p.closingEyebrow}</p>
            <h2 className="text-3xl font-bold uppercase tracking-wide text-white md:text-5xl">
              <span className="font-light">{p.closingHeadingLight}</span>{" "}
              <span className="font-bold">{p.closingHeadingBold}</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">{p.closingParagraph}</p>
            <div className="mt-8">
              <Link
                href="https://wa.me/250787524298"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/30 bg-[#25D366] px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#20bd5a]"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>{p.closingCtaWhatsApp}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

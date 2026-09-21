"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PageLayout } from "@/components/PageLayout";
import { ServiceHero } from "@/components/ServiceHero";
import { ServicesSubNav } from "@/components/ServicesSubNav";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const moreServicesLinks = [
  { key: "architecture", href: "/services/architecture" },
  { key: "construction", href: "/services/construction" },
  { key: "landSourcing", href: "/services/land" },
] as const;

// Real per-area yield/occupancy figures, sourced from the same metricsData
// used on the areas page (src/app/areas/page.tsx) — not new/invented numbers.
const areaYields = [
  { area: "Rubavu", yield: "15-20%", occupancy: "85%" },
  { area: "Musanze", yield: "12-18%", occupancy: "80%" },
  { area: "Akagera", yield: "12-16%", occupancy: "65%" },
  { area: "Nyungwe", yield: "10-15%", occupancy: "70%" },
  { area: "Kigali", yield: "8-12%", occupancy: "75%" },
] as const;

export default function VillaManagementServicePage() {
  const { t } = useLanguage();
  const p = t.serviceVillaManagementPage;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Real, established figures reused for the hero stats row (120 villas
  // managed, 85%+ average occupancy, and 24/7 guest support are all already
  // established elsewhere in serviceVillaManagementPage/servicePage copy),
  // matching balitecture.com's villa management page, which puts a stats row
  // directly in the hero instead of a separate bar.
  const heroStats = [
    { value: "120", label: p.statLabelVillasManaged },
    { value: "85%+", label: p.statLabelOccupancy },
    { value: "24/7", label: p.statLabelGuestSupport },
  ];

  const introChecklist = [
    p.introChecklistItem1,
    p.introChecklistItem2,
    p.introChecklistItem3,
    p.introChecklistItem4,
    p.introChecklistItem5,
    p.introChecklistItem6,
    p.introChecklistItem7,
  ];

  const includedItems = [
    { title: p.included1Title, desc: p.included1Desc },
    { title: p.included2Title, desc: p.included2Desc },
    { title: p.included3Title, desc: p.included3Desc },
    { title: p.included4Title, desc: p.included4Desc },
    { title: p.included5Title, desc: p.included5Desc },
    { title: p.included6Title, desc: p.included6Desc },
  ];

  const onboardSteps = [
    { step: "1", title: p.onboardStep1Title, desc: p.onboardStep1Desc },
    { step: "2", title: p.onboardStep2Title, desc: p.onboardStep2Desc },
    { step: "3", title: p.onboardStep3Title, desc: p.onboardStep3Desc },
    { step: "4", title: p.onboardStep4Title, desc: p.onboardStep4Desc },
    { step: "5", title: p.onboardStep5Title, desc: p.onboardStep5Desc },
  ];

  const selfManagedItems = [
    p.selfManagedItem1,
    p.selfManagedItem2,
    p.selfManagedItem3,
    p.selfManagedItem4,
    p.selfManagedItem5,
    p.selfManagedItem6,
  ];

  const managedItems = [
    p.managedItem1,
    p.managedItem2,
    p.managedItem3,
    p.managedItem4,
    p.managedItem5,
    p.managedItem6,
  ];

  const whyChooseItems = [
    p.whyChooseItem1,
    p.whyChooseItem2,
    p.whyChooseItem3,
    p.whyChooseItem4,
    p.whyChooseItem5,
    p.whyChooseItem6,
  ];

  const builtManagedItems = [
    p.builtManagedItem1,
    p.builtManagedItem2,
    p.builtManagedItem3,
    p.builtManagedItem4,
  ];

  // Real, page-specific Q&As (management fee, inclusions, reporting) matching
  // the reference's page-specific "Villa Management FAQs" accordion, distinct
  // from the sitewide investment FAQ used elsewhere.
  const villaManagementFaqs = [
    { question: p.faq1Question, answer: p.faq1Answer },
    { question: p.faq2Question, answer: p.faq2Answer },
    { question: p.faq3Question, answer: p.faq3Answer },
  ];

  const nextSteps = [
    { eyebrow: "Buy a Managed Villa", title: "Our Properties", href: "/real-estate" },
    { eyebrow: "Rental Income Data", title: "Invest in Rwanda", href: "/invest-in-rwanda" },
    { eyebrow: "Build First", title: t.services.items.construction.title, href: "/services/construction" },
  ];

  // Reuse the two already-existing, real blog posts most relevant to villa
  // management (rental income and area yield data) rather than inventing new
  // "owner guide" articles.
  const relatedPosts = [
    { ...t.blogSection.posts[0], href: "/blog/rwanda-villa-rental-income" },
    { ...t.blogSection.posts[1], href: "/blog/best-area-to-invest-in-rwanda" },
  ];

  return (
    <PageLayout
      showCta={false}
      hero={
        <ServiceHero
          name={p.heroSlide1Title}
          subtitle={p.heroSlide1Subtitle}
          image="/images/services/villa-management-hero.webp"
          imageAlt="Villa management team in Rwanda"
          eyebrow="Rental Management"
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
                {p.introEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
                <span className="font-light">{p.introHeadingLight}</span>{" "}
                <span className="font-bold">{p.introHeadingBold}</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-gray-600">
                {p.introParagraph1}
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-gray-600">
                {p.introParagraph2}
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

      {/* 2. Rwanda Rental Income — real per-area yield grid */}
      <section className="bg-brand-off-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              {p.yieldEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
              <span className="font-light">{p.yieldHeadingLight}</span>{" "}
              <span className="font-bold">{p.yieldHeadingBold}</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-gray-600">{p.yieldIntro}</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-px bg-brand-gray-200 sm:grid-cols-2 md:mt-14 lg:grid-cols-5">
            {areaYields.map((row) => (
              <div key={row.area} className="bg-brand-white p-8 md:p-10">
                <p className="text-xs uppercase tracking-widest text-brand-gray-500">{p.yieldColArea}</p>
                <p className="mt-2 text-lg font-bold uppercase tracking-wide text-black">{row.area}</p>
                <div className="mt-6 space-y-3 border-t border-brand-gray-200 pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-gray-500">{p.yieldColYield}</span>
                    <span className="font-semibold text-brand-teal">{row.yield}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-gray-500">{p.yieldColOccupancy}</span>
                    <span className="font-semibold text-black">{row.occupancy}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-brand-gray-500">
            {p.yieldSourceNote}
          </p>
          <div className="mt-8 text-center">
            <Link
              href="/build-calculator"
              className="inline-flex items-center gap-2 rounded-sm bg-brand-teal px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-brand-teal/90"
            >
              {p.yieldCta}
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Full-Service Management inclusions grid */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              {p.includedEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
              <span className="font-light">{p.includedHeadingLight}</span>{" "}
              <span className="font-bold">{p.includedHeadingBold}</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-gray-600">{p.includedIntro}</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-px bg-brand-gray-200 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
            {includedItems.map((item, index) => (
              <div key={item.title} className="bg-brand-white p-8 md:p-10">
                <p className="text-xs uppercase tracking-widest text-brand-gray-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-black">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-brand-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How We Take Over Your Villa — onboarding process, teal numbered row list */}
      <section className="bg-brand-teal py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-white/50">
              {p.onboardingEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-white md:text-5xl">
              <span className="font-light">{p.onboardingHeadingLight}</span>{" "}
              <span className="font-bold">{p.onboardingHeadingBold}</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60">{p.onboardingIntro}</p>
          </div>
          <div className="mx-auto mt-10 max-w-4xl space-y-px md:mt-14">
            {onboardSteps.map((step) => (
              <div
                key={step.step}
                className="grid grid-cols-1 gap-2 bg-white/5 p-6 md:grid-cols-[80px_220px_1fr] md:items-start md:gap-8 md:p-8"
              >
                <p className="text-xs text-white/40">{step.step.padStart(2, "0")}</p>
                <p className="font-bold uppercase tracking-wide text-white">{step.title}</p>
                <p className="text-sm leading-relaxed text-white/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Full-bleed image break */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="/images/services/villa-kitchen-lived-in.webp"
          alt="Interior of an Ever Retreat-managed villa in Rwanda"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* 6. Self-Managed vs Professionally Managed */}
      <section className="bg-brand-off-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              {p.comparisonEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
              <span className="font-light">{p.comparisonHeadingLight}</span>{" "}
              <span className="font-bold">{p.comparisonHeadingBold}</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-gray-600">{p.comparisonIntro}</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-px bg-brand-gray-200 md:mt-14 md:grid-cols-2">
            <div className="bg-brand-white p-8 md:p-10">
              <p className="mb-6 text-xs uppercase tracking-widest text-brand-gray-500">
                {p.selfManagedLabel}
              </p>
              <div className="space-y-4">
                {selfManagedItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 border-b border-brand-gray-100 pb-3 last:border-b-0 last:pb-0">
                    <span className="mt-0.5 text-sm leading-none text-brand-gray-400">×</span>
                    <p className="text-sm text-brand-gray-500">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-white p-8 md:p-10">
              <p className="mb-6 text-xs uppercase tracking-widest text-brand-gray-500">
                {p.managedLabel}
              </p>
              <div className="space-y-4">
                {managedItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 border-b border-brand-gray-100 pb-3 last:border-b-0 last:pb-0">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-teal"
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
        </div>
      </section>

      {/* 7. Why Choose Our Management Company */}
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

      {/* 8. Built and Managed — full lifecycle, mirrors the construction
          page's "Built and Managed" section from the opposite angle. */}
      <section className="bg-brand-off-white py-20 md:py-28">
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

      {/* 9. Villa Management FAQs — page-specific accordion */}
      <section id="villa-management-faq" className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mb-10">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              Common Questions
            </p>
            <h2 className="text-2xl font-bold uppercase tracking-wide text-black md:text-4xl">
              <span className="font-light">Villa Management</span> <span className="font-bold">FAQs</span>
            </h2>
          </div>
          <div className="mx-auto max-w-3xl divide-y divide-brand-gray-200">
            {villaManagementFaqs.map((item, index) => (
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

      {/* 10. Next-step quick links */}
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

      {/* 11. More services */}
      <section className="bg-brand-white py-16 md:py-20">
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
                  className="group block border border-brand-gray-200 bg-brand-off-white p-8 transition-colors hover:border-black"
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

      {/* 12. From the blog */}
      <section className="bg-brand-off-white py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <p className="mb-4 text-xs uppercase tracking-widest text-brand-gray-500">
            {t.blogSection.eyebrow}
          </p>
          <h2 className="mb-8 text-2xl font-bold uppercase tracking-wide text-black md:text-3xl">
            <span className="font-light">Owner</span> <span className="font-bold">Guides</span>
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

      {/* 13. Closing CTA — WhatsApp only, per the reference's villa management page */}
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

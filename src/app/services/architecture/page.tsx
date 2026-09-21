"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PageLayout } from "@/components/PageLayout";
import { ServiceHero } from "@/components/ServiceHero";
import { ServicesSubNav } from "@/components/ServicesSubNav";
import { Testimonials } from "@/components/Testimonials";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useCurrency } from "@/lib/currency/CurrencyContext";

const moreServicesLinks = [
  { key: "construction", href: "/services/construction" },
  { key: "villaManagement", href: "/services/villa-management" },
  { key: "landSourcing", href: "/services/land" },
] as const;

export default function ArchitectureServicePage() {
  const { t } = useLanguage();
  const { formatPrice } = useCurrency();
  const p = t.serviceArchitecturePage;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Real architecture-specific Q&As (process, working from an existing plot,
  // timeline) matching the reference's page-specific "Architecture FAQs"
  // accordion — these are genuinely different questions than the generic
  // investment FAQ used sitewide, so they're authored here rather than reused.
  const architectureFaqs = [
    { question: p.faq1Question, answer: p.faq1Answer },
    { question: p.faq2Question, answer: p.faq2Answer },
    { question: p.faq3Question, answer: p.faq3Answer },
  ];

  // Real, established figures reused for the hero stats row (formatPrice(7000)
  // from the pricing section below; 82+ team / 10+ years from the sitewide
  // trust stats) — matches balitecture.com's architecture page, which puts a
  // stats row directly in the hero instead of a separate bar.
  const heroStats = [
    { value: formatPrice(7000), label: "Design From" },
    { value: "82+", label: t.servicesPage.trustBar.stat1Label },
    { value: "10+", label: t.statsBarSection.yearsBuildingLabel },
  ];

  const stages = [
    { step: "1", title: p.stage1Title, desc: p.stage1Desc },
    { step: "2", title: p.stage2Title, desc: p.stage2Desc },
    { step: "3", title: p.stage3Title, desc: p.stage3Desc },
    { step: "4", title: p.stage4Title, desc: p.stage4Desc },
    { step: "5", title: p.stage5Title, desc: p.stage5Desc },
  ];

  const checklist = [
    p.checklistItem1,
    p.checklistItem2,
    p.checklistItem3,
    p.checklistItem4,
    p.checklistItem5,
    p.checklistItem6,
    p.checklistItem7,
  ];

  const advantageItems = [
    p.advantageItem1,
    p.advantageItem2,
    p.advantageItem3,
    p.advantageItem4,
    p.advantageItem5,
  ];

  const styles = [
    { title: p.style1Title, desc: p.style1Desc },
    { title: p.style2Title, desc: p.style2Desc },
    { title: p.style3Title, desc: p.style3Desc },
    { title: p.style4Title, desc: p.style4Desc },
  ];

  const nextSteps = [
    { eyebrow: "Next Step", title: t.services.items.construction.title, href: "/services/construction" },
    { eyebrow: "Estimate Costs", title: p.crossLinkCalculatorTitle, href: "/build-calculator" },
    { eyebrow: "Need Land First?", title: t.services.items.landSourcing.title, href: "/services/land" },
  ];

  // Reuse the two already-existing, real blog posts most relevant to
  // architecture/build (rather than inventing new "design" articles).
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
          image="/images/services/villa-design.webp"
          imageAlt="Bespoke villa architectural design in Rwanda"
          eyebrow="Design Services"
          twoTone
          minHeightClass="min-h-[85vh]"
          stats={heroStats}
          ctaHref="/contact"
          secondaryCtaHref="/portfolio"
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
              <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
                {p.approachHeading}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-gray-600">
                {p.approachParagraph1}
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-gray-600">
                {p.approachParagraph2}
              </p>
            </div>
            <div className="space-y-4">
              {checklist.map((item) => (
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

      {/* 2. Design process — teal, numbered row list (matches reference's
          black "How We Work" bar, restyled to our brand teal) */}
      <section className="bg-brand-teal py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-white/50">
              {p.processEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">{p.processHeading}</h2>
          </div>
          <div className="mx-auto mt-10 max-w-4xl space-y-px md:mt-14">
            {stages.map((stage) => (
              <div
                key={stage.step}
                className="grid grid-cols-1 gap-2 bg-white/5 p-6 md:grid-cols-[80px_200px_1fr] md:items-start md:gap-8 md:p-8"
              >
                <p className="text-xs text-white/40">{stage.step.padStart(2, "0")}</p>
                <p className="font-bold uppercase tracking-wide text-white">{stage.title}</p>
                <p className="text-sm leading-relaxed text-white/60">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Advantage */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-24 lg:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500">
                {p.advantageEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
                <span className="font-light">{p.advantageHeadingLight}</span>{" "}
                <span className="font-bold">{p.advantageHeadingBold}</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-gray-600">
                {p.advantageParagraph1}
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-gray-600">
                {p.advantageParagraph2}
              </p>
            </div>
            <div className="space-y-4">
              {advantageItems.map((item) => (
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

      {/* 4. Architectural range / styles */}
      <section className="bg-brand-off-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              {p.stylesEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
              <span className="font-light">{p.stylesHeadingLight}</span>{" "}
              <span className="font-bold">{p.stylesHeadingBold}</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-gray-600">{p.stylesIntro}</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-px bg-brand-gray-200 md:grid-cols-2 md:mt-14">
            {styles.map((style, index) => (
              <div key={style.title} className="flex h-full flex-col bg-brand-white p-10 md:p-12">
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-brand-gray-500">
                  Style {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-4 text-xl font-bold uppercase tracking-wide text-black md:text-2xl">
                  {style.title}
                </h3>
                <p className="mb-6 flex-grow text-sm leading-relaxed text-brand-gray-600">
                  {style.desc}
                </p>
                <Link
                  href="/portfolio"
                  className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:text-brand-gray-500"
                >
                  <span>View Examples</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Pricing — promo banner + tier cards */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              {p.pricingEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
              {p.pricingHeading}
            </h2>
          </div>
          <div className="mb-10 border-l-4 border-brand-teal bg-brand-off-white p-8 md:mb-14 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1.5fr_1fr]">
              <div>
                <p className="text-xs uppercase tracking-widest text-brand-gray-500">
                  Build With Ever Retreat
                </p>
                <h3 className="mt-2 text-2xl font-bold uppercase tracking-wide text-black md:text-3xl">
                  {p.pricingRow2Label}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-brand-gray-600">
                  {p.pricingRow2Note}
                </p>
              </div>
              <div className="md:text-right">
                <p className="text-5xl font-bold leading-none text-brand-teal md:text-6xl">50%</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-brand-gray-500">
                  Off Design Fees
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-px bg-brand-gray-200 md:grid-cols-2">
            <div className="bg-brand-off-white p-10">
              <p className="text-xs uppercase tracking-widest text-brand-gray-500">
                {p.pricingRow1Label}
              </p>
              <p className="mt-4 text-2xl font-bold uppercase text-black md:text-3xl">
                {t.services.pricePrefix} {formatPrice(7000)}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-gray-600">{p.pricingRow1Note}</p>
            </div>
            <div className="bg-brand-off-white p-10">
              <p className="text-xs uppercase tracking-widest text-brand-gray-500">
                {p.pricingRow2Label}
              </p>
              <p className="mt-4 text-2xl font-bold uppercase text-black md:text-3xl">
                {t.services.pricePrefix} {formatPrice(3500)}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-gray-600">{p.pricingRow2Note}</p>
            </div>
          </div>
          <p className="mt-6 text-center text-xs uppercase tracking-wider text-brand-gray-500">
            {p.pricingNote}
          </p>
          <div className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-3 border border-brand-gray-200 bg-brand-off-white px-5 py-4 md:mt-12">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-teal opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-teal" />
            </span>
            <p className="text-xs text-brand-gray-700 md:text-sm">
              Get in touch to check our current project availability.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Testimonials — real quotes, no fabricated star ratings */}
      <Testimonials />

      {/* 7. Full-bleed image break */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="/images/portfolio/nara-render.webp"
          alt="Ever Retreat architectural design portfolio"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* 8. Design philosophy + real projects list */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-24 lg:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500">
                Our Design Philosophy
              </p>
              <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
                {p.philosophyHeading}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-gray-600">
                {p.philosophyParagraph}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-gray-500">
                {p.projectsHeading}
              </p>
              <ul className="mt-4 space-y-4">
                <li className="border-b border-brand-gray-100 pb-4">
                  <span className="font-bold text-black">B&amp;P Ever Retreat Villa</span>
                  <span className="text-brand-gray-600"> — {p.projectBpDescription}</span>
                </li>
                <li className="border-b border-brand-gray-100 pb-4">
                  <span className="font-bold text-black">Cottage</span>
                  <span className="text-brand-gray-600"> — {p.projectCottageDescription}</span>
                </li>
                <li>
                  <span className="font-bold text-black">Virunga Villas</span>
                  <span className="text-brand-gray-600"> — {p.projectVirungaDescription}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. One Team, Zero Gaps */}
      <section className="bg-brand-off-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-24 lg:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500">
                {p.oneTeamEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
                <span className="font-light">{p.oneTeamHeadingLight}</span>{" "}
                <span className="font-bold">{p.oneTeamHeadingBold}</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-gray-600">
                {p.oneTeamParagraph1}
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-gray-600">
                {p.oneTeamParagraph2}
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/services/villa-exterior.webp"
                alt="Ever Retreat in-house design and build team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 10. Architecture FAQs — page-specific accordion, matching the
          reference's "Common Questions" section on this exact page rather
          than the sitewide two-column FAQ teaser used elsewhere. */}
      <section id="architecture-faq" className="bg-brand-off-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mb-10">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              Common Questions
            </p>
            <h2 className="text-2xl font-bold uppercase tracking-wide text-black md:text-4xl">
              <span className="font-light">Architecture</span> <span className="font-bold">FAQs</span>
            </h2>
          </div>
          <div className="mx-auto max-w-3xl divide-y divide-brand-gray-200">
            {architectureFaqs.map((item, index) => (
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

      {/* 11. Next-step quick links */}
      <section className="bg-brand-white py-12 md:py-16">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {nextSteps.map((step) => (
              <Link
                key={step.href}
                href={step.href}
                className="group block border border-brand-gray-200 bg-brand-off-white p-6 transition-colors hover:border-brand-gray-500"
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

      {/* 12. More services */}
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

      {/* 13. From the blog */}
      <section className="bg-brand-off-white py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <p className="mb-4 text-xs uppercase tracking-widest text-brand-gray-500">
            {t.blogSection.eyebrow}
          </p>
          <h2 className="mb-8 text-2xl font-bold uppercase tracking-wide text-black md:text-3xl">
            <span className="font-light">Design and</span> <span className="font-bold">Investment Guides</span>
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

      {/* 14. Closing CTA */}
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
                href="/contact"
                className="rounded-sm bg-white px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-brand-teal transition-colors hover:bg-brand-gray-200"
              >
                {p.closingCtaPrimary}
              </Link>
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
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

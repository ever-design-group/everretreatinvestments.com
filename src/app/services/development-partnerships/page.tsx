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
  { key: "villaManagement", href: "/services/villa-management" },
] as const;

export default function DevelopmentPartnershipsPage() {
  const { t } = useLanguage();
  const p = t.serviceDevelopmentPartnershipsPage;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Real, established figures reused for the hero stats row (matches
  // balitecture.com's development partnerships page, which puts a stats row
  // directly in the hero instead of a separate bar).
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

  const models = [
    {
      title: p.landownerTitle,
      desc: p.landownerDesc,
      yourRole: p.landownerYourRole,
      ourRole: p.landownerOurRole,
    },
    {
      title: p.investorTitle,
      desc: p.investorDesc,
      yourRole: p.investorYourRole,
      ourRole: p.investorOurRole,
    },
    {
      title: p.customTitle,
      desc: p.customDesc,
      yourRole: p.customYourRole,
      ourRole: p.customOurRole,
    },
  ];

  const flexTiles = [
    { label: p.flexTile1Label, title: p.flexTile1Title, desc: p.flexTile1Desc, services: p.flexTile1Services },
    { label: p.flexTile2Label, title: p.flexTile2Title, desc: p.flexTile2Desc, services: p.flexTile2Services },
    { label: p.flexTile3Label, title: p.flexTile3Title, desc: p.flexTile3Desc, services: p.flexTile3Services },
  ];

  const financeRows = [
    { label: p.financeBuildLabel, value: p.financeBuildValue },
    { label: p.financeYieldLabel, value: p.financeYieldValue },
    { label: p.financeFeeLabel, value: p.financeFeeValue },
    { label: p.financeShareLabel, value: p.financeShareValue },
  ];

  const stages = [
    { step: "1", title: p.step1Title, desc: p.step1Desc },
    { step: "2", title: p.step2Title, desc: p.step2Desc },
    { step: "3", title: p.step3Title, desc: p.step3Desc },
    { step: "4", title: p.step4Title, desc: p.step4Desc },
    { step: "5", title: p.step5Title, desc: p.step5Desc },
  ];

  const oneTeamItems = [
    p.oneTeamItem1,
    p.oneTeamItem2,
    p.oneTeamItem3,
    p.oneTeamItem4,
    p.oneTeamItem5,
    p.oneTeamItem6,
  ];

  const projects = [
    { name: "B&P Ever Retreat Villa", location: "Lake Kivu", units: p.projectUnitsShowcase, image: "/images/areas/lake-kivu-area.webp" },
    { name: "Cottage", location: "Lake Kivu", units: p.projectUnitsShowcase, image: "/images/areas/rubavu-area.webp" },
    { name: "Virunga Villas", location: "Musanze", units: p.projectUnitsInDesign, image: "/images/areas/musanze-area.webp" },
  ];

  // Real, page-specific Q&As (already own land, partnership structures,
  // permits/legal) matching the reference's page-specific "Partnership FAQs"
  // accordion, distinct from the sitewide investment FAQ used elsewhere.
  const partnershipFaqs = [
    { question: p.faq1Question, answer: p.faq1Answer },
    { question: p.faq2Question, answer: p.faq2Answer },
    { question: p.faq3Question, answer: p.faq3Answer },
  ];

  const nextSteps = [
    { eyebrow: "Design First?", title: t.services.items.architecture.title, href: "/services/architecture" },
    { eyebrow: "Estimate Costs", title: "Build Calculator", href: "/build-calculator" },
    { eyebrow: "After Handover", title: t.services.items.villaManagement.title, href: "/services/villa-management" },
  ];

  // Reuse the two already-existing, real blog posts most relevant to a
  // landowner considering a partnership: legal ownership structures and
  // real construction cost data (rather than inventing new articles).
  const relatedPosts = [
    { ...t.blogSection.posts[2], href: "/blog/can-foreigners-buy-property-in-rwanda" },
    { ...t.blogSection.posts[4], href: "/blog/cost-to-build-villa-in-rwanda" },
  ];

  return (
    <PageLayout
      showCta={false}
      hero={
        <ServiceHero
          name={p.heroSlide1Title}
          subtitle={p.heroSlide1Subtitle}
          image="/images/services/development-partner.webp"
          imageAlt="Multi-villa development site in Rwanda"
          eyebrow="For Landowners, Investors, and Developers"
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
              <p className="mt-6 text-base leading-relaxed text-brand-gray-600">{p.introParagraph1}</p>
              <p className="mt-4 text-base leading-relaxed text-brand-gray-600">{p.introParagraph2}</p>
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

      {/* 2. Partnership Models — 3-tile grid, real landowner/investor/custom
          structures already established sitewide */}
      <section className="bg-brand-off-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              {p.modelsEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
              <span className="font-light">{p.modelsHeadingLight}</span>{" "}
              <span className="font-bold">{p.modelsHeadingBold}</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-gray-600">{p.modelsIntro}</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-px bg-brand-gray-200 md:mt-14 md:grid-cols-3">
            {models.map((model, index) => (
              <div key={model.title} className="flex h-full flex-col bg-brand-white p-8 md:p-10">
                <p className="mb-1 text-xs uppercase tracking-[0.3em] text-brand-gray-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-4 text-base font-bold uppercase tracking-wide text-black">
                  {model.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-brand-gray-600">{model.desc}</p>
                <div className="mt-auto space-y-3 border-t border-brand-gray-200 pt-4">
                  <div>
                    <p className="mb-1 text-xs uppercase tracking-wider text-brand-gray-500">Your role</p>
                    <p className="text-sm font-semibold text-black">{model.yourRole}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs uppercase tracking-wider text-brand-gray-500">Our role</p>
                    <p className="text-sm font-semibold text-black">{model.ourRole}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Use All of Our Services. Or Just Some. — flexibility pitch built
          from our real, modular architecture/construction/villa-management
          services */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              {p.flexEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
              <span className="font-light">{p.flexHeadingLight}</span>{" "}
              <span className="font-bold">{p.flexHeadingBold}</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-gray-600">{p.flexIntro}</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-px bg-brand-gray-200 md:mt-14 md:grid-cols-3">
            {flexTiles.map((tile) => (
              <div key={tile.title} className="bg-brand-off-white p-8 md:p-10">
                <p className="mb-2 text-xs uppercase tracking-[0.3em] text-brand-gray-500">{tile.label}</p>
                <h3 className="mb-3 text-base font-bold uppercase tracking-wide text-black">{tile.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-brand-gray-600">{tile.desc}</p>
                <p className="text-xs text-brand-gray-500">
                  <span className="font-semibold uppercase tracking-wider">Services: </span>
                  {tile.services}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What Does a Partnership Look Like Financially? — qualitative
          framing only. Rather than inventing a project-level total revenue,
          margin %, or dollar example (the reference shows Bali-specific
          figures we have no Rwanda equivalent for), this reuses ONLY figures
          already established elsewhere in the codebase (BuildCalculator
          per-sqm rates, real rental yield range, real villa management fee,
          real profit-share ratio) and explicitly declines to quote a
          project total without seeing the site. */}
      <section className="bg-brand-off-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              {p.financeEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
              <span className="font-light">{p.financeHeadingLight}</span>{" "}
              <span className="font-bold">{p.financeHeadingBold}</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-gray-600">{p.financeIntro}</p>
          </div>
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-brand-gray-200 border border-brand-gray-200 bg-brand-white md:mt-14">
            {financeRows.map((row) => (
              <div key={row.label} className="flex flex-col gap-1 p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <p className="text-xs uppercase tracking-widest text-brand-gray-500">{row.label}</p>
                <p className="text-sm font-semibold text-black sm:text-right">{row.value}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-brand-gray-500">
            {p.financeNote}
          </p>
        </div>
      </section>

      {/* 5. The Development Process — teal, numbered row list, condensed
          version of the same real process used across our other service
          pages */}
      <section className="bg-brand-teal py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-white/50">
              {p.processEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-white md:text-5xl">
              <span className="font-light">{p.processHeadingLight}</span>{" "}
              <span className="font-bold">{p.processHeadingBold}</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60">{p.processIntro}</p>
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

      {/* 6. One Team. Every Discipline. */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-24 lg:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500">
                {p.oneTeamEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
                <span className="font-light">{p.oneTeamHeadingLight}</span>{" "}
                <span className="font-bold">{p.oneTeamHeadingBold}</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-gray-600">{p.oneTeamParagraph1}</p>
              <p className="mt-4 text-base leading-relaxed text-brand-gray-600">{p.oneTeamParagraph2}</p>
            </div>
            <div className="space-y-4">
              {oneTeamItems.map((item) => (
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

      {/* 7. Completed developments — real projects, matches the reference's
          "See What We Build" gallery */}
      <section className="bg-brand-off-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mb-10 text-center md:mb-14">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              {p.projectsEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
              {p.projectsHeading}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-gray-600">
              {p.projectsParagraph}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div key={project.name} className="overflow-hidden rounded-sm border border-brand-gray-200">
                <div className="relative aspect-[16/10]">
                  <Image src={project.image} alt={project.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-black">{project.name}</h3>
                  <p className="text-sm text-brand-gray-600">
                    {project.location} &middot; {project.units}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Partnership FAQs — page-specific accordion */}
      <section id="partnerships-faq" className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mb-10">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              Common Questions
            </p>
            <h2 className="text-2xl font-bold uppercase tracking-wide text-black md:text-4xl">
              <span className="font-light">Partnership</span> <span className="font-bold">FAQs</span>
            </h2>
          </div>
          <div className="mx-auto max-w-3xl divide-y divide-brand-gray-200">
            {partnershipFaqs.map((item, index) => (
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

      {/* 9. Next-step quick links */}
      <section className="bg-brand-off-white py-12 md:py-16">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {nextSteps.map((step) => (
              <Link
                key={step.href}
                href={step.href}
                className="group block border border-brand-gray-200 bg-brand-white p-6 transition-colors hover:border-brand-gray-500"
              >
                <p className="mb-2 text-xs uppercase tracking-widest text-brand-gray-500">{step.eyebrow}</p>
                <p className="text-sm font-bold uppercase tracking-wide text-black transition-transform group-hover:translate-x-1">
                  {step.title} &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. More services */}
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

      {/* 11. From the blog */}
      <section className="bg-brand-off-white py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <p className="mb-4 text-xs uppercase tracking-widest text-brand-gray-500">{t.blogSection.eyebrow}</p>
          <h2 className="mb-8 text-2xl font-bold uppercase tracking-wide text-black md:text-3xl">
            <span className="font-light">Development</span> <span className="font-bold">Guides</span>
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

      {/* 12. Closing CTA */}
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

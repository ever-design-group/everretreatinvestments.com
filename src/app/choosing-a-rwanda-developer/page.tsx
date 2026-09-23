"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PageLayout } from "@/components/PageLayout";
import { ServiceHero } from "@/components/ServiceHero";
import { ServicesSubNav } from "@/components/ServicesSubNav";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ChoosingDeveloperPage() {
  const { t } = useLanguage();
  const p = t.choosingDeveloperPage;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Real, established figures reused for the hero stats row, matching
  // balitecture.com's "Choosing a Developer" guide page (Years / In-House
  // Team / Developments shown directly in the hero — no fabricated review
  // rating, since we have no real review data to cite).
  const heroStats = [
    { value: "10+", label: t.statsBarSection.yearsBuildingLabel },
    { value: "82+", label: t.servicesPage.trustBar.stat1Label },
    { value: "8", label: t.servicesPage.trustBar.stat3Label },
  ];

  // "Developer, Builder, Agent" card grid — maps to the existing
  // roleAgentName/Focus/PaidBy/Watch etc. fields, restyled from the old
  // <table> into the reference's 4-card grid.
  const roleCards = [
    { name: p.roleAgentName, focus: p.roleAgentFocus, paidBy: p.roleAgentPaidBy, watch: p.roleAgentWatch },
    { name: p.roleArchitectName, focus: p.roleArchitectFocus, paidBy: p.roleArchitectPaidBy, watch: p.roleArchitectWatch },
    { name: p.roleBuilderName, focus: p.roleBuilderFocus, paidBy: p.roleBuilderPaidBy, watch: p.roleBuilderWatch },
    { name: p.roleManagerName, focus: p.roleManagerFocus, paidBy: p.roleManagerPaidBy, watch: p.roleManagerWatch },
  ];

  // Red flags — maps to the existing flag1-4Title/Desc content, restyled as
  // a centered narrow list instead of the old broken `prose` block.
  const redFlags = [
    { title: p.flag1Title, desc: p.flag1Desc },
    { title: p.flag2Title, desc: p.flag2Desc },
    { title: p.flag3Title, desc: p.flag3Desc },
    { title: p.flag4Title, desc: p.flag4Desc },
  ];

  // Verification items: things you can check yourself before handing over any money.
  const beforeYouPayItems = [
    p.checklistItem1,
    p.checklistItem3,
    p.checklistItem4,
    p.checklistItem6,
    p.checklistItem10,
  ];

  // Direct questions: things you ask the developer about their own setup and operations.
  const developerQuestionItems = [
    p.checklistItem2,
    p.checklistItem5,
    p.checklistItem7,
    p.checklistItem8,
    p.checklistItem9,
  ];

  const proofItems = [
    { title: p.proofItem1Title, desc: p.proofItem1Desc },
    { title: p.proofItem2Title, desc: p.proofItem2Desc },
    { title: p.proofItem3Title, desc: p.proofItem3Desc },
    { title: p.proofItem4Title, desc: p.proofItem4Desc },
    { title: p.proofItem5Title, desc: p.proofItem5Desc },
    { title: p.proofItem6Title, desc: p.proofItem6Desc },
  ];

  // Real, currently-live developments (established sitewide in Developments.tsx) —
  // the reference's "Developments You Can Vet Yourself" card grid, using our
  // actual named projects and their real routes/images, not fabricated ones.
  const developmentCards = [
    {
      name: "B&P Ever Retreat Villa",
      tag: "Rubavu",
      image: "/images/developments/villa-photos.jpeg",
      href: "/developments/nara-villas",
    },
    {
      name: "Cottage",
      tag: "Rubavu",
      image: "/images/developments/villa-photos.jpeg",
      href: "/developments/solas-kivu",
    },
    {
      name: "Virunga Villas",
      tag: "Musanze",
      image: "/images/developments/suku-4br/suku-4br-1.webp",
      href: "/developments/suku-residences",
    },
  ];

  // Real, page-specific Q&As matching the reference's "Choosing a Developer
  // FAQs" accordion — reusing already-established facts (development
  // partnerships for landowners, real build regions, fixed-price/milestone
  // payments) rather than the generic sitewide FAQ component.
  const developerFaqs = [
    { question: p.faq1Question, answer: p.faq1Answer },
    { question: p.faq2Question, answer: p.faq2Answer },
    { question: p.faq3Question, answer: p.faq3Answer },
  ];

  return (
    <PageLayout
      showCta={false}
      hero={
        <ServiceHero
          name={p.heroSlide1Title}
          subtitle={p.heroSlide1Subtitle}
          image="/images/services/villa-exterior.webp"
          imageAlt="Quality villa construction in Rwanda"
          eyebrow="The Buyer's Guide"
          twoTone
          minHeightClass="min-h-[85vh]"
          stats={heroStats}
          hideCta
        />
      }
    >
      <ServicesSubNav />

      {/* 1. The Stakes Are Higher Here */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-brand-gray-500">
            {p.stakesEyebrow}
          </p>
          <h2 className="mb-8 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
            <span className="font-light">{p.stakesHeadingLight}</span>{" "}
            <span className="font-bold">{p.stakesHeadingBold}</span>
          </h2>
          <div className="space-y-5">
            <p className="text-base leading-relaxed text-brand-gray-700 md:text-lg">
              {p.stakesParagraph1}
            </p>
            <p className="text-base leading-relaxed text-brand-gray-700 md:text-lg">
              {p.stakesParagraph2}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Developer, Builder, Agent — role comparison card grid */}
      <section className="bg-brand-off-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-brand-gray-500">
              {p.roleComparisonEyebrow}
            </p>
            <h2 className="mb-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
              {p.roleComparisonHeading}
            </h2>
            <p className="mb-12 text-base leading-relaxed text-brand-gray-700 md:mb-16">
              {p.roleComparisonIntro}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px bg-brand-gray-200 md:grid-cols-2">
            {roleCards.map((role) => (
              <div key={role.name} className="h-full bg-brand-off-white p-8 md:p-10">
                <h3 className="mb-3 text-lg font-bold uppercase tracking-wide text-black">
                  {role.name}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-brand-gray-700">
                  {role.focus} — {p.roleColPaidBy.toLowerCase()}: {role.paidBy.toLowerCase()}.
                </p>
                <p className="text-sm leading-relaxed text-brand-gray-500">
                  <span className="font-semibold text-black">{p.roleColWatch}: </span>
                  {role.watch}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-brand-gray-700 md:mt-12">
            {p.roleComparisonClosing}
          </p>
        </div>
      </section>

      {/* 3. Red Flags */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-brand-gray-500">
            {p.flagsEyebrow}
          </p>
          <h2 className="mb-8 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
            {p.redFlagsHeading}
          </h2>
          <p className="mb-8 text-base leading-relaxed text-brand-gray-700 md:text-lg">
            {p.redFlagsIntro}
          </p>
          <ul className="space-y-5">
            {redFlags.map((flag) => (
              <li key={flag.title} className="flex items-start gap-4">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center border border-black text-sm font-bold text-black">
                  !
                </span>
                <span className="text-base leading-relaxed text-brand-gray-700">
                  <span className="font-semibold text-black">{flag.title.replace(/^\d+\.\s*/, "")}. </span>
                  {flag.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Licences, Legal & Land Title */}
      <section className="bg-brand-off-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-brand-gray-500">
            {p.legalEyebrow}
          </p>
          <h2 className="mb-8 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
            <span className="font-light">{p.legalHeadingLight}</span>{" "}
            <span className="font-bold">{p.legalHeadingBold}</span>
          </h2>
          <div className="space-y-5">
            <p className="text-base leading-relaxed text-brand-gray-700 md:text-lg">
              {p.legalParagraph1}
            </p>
            <p className="text-base leading-relaxed text-brand-gray-700 md:text-lg">
              {p.legalParagraph2}
            </p>
          </div>
          <p className="mt-8 text-sm leading-relaxed text-brand-gray-600">
            Worth reading before you commit:{" "}
            <Link
              href="/how-to-buy-property-in-rwanda"
              className="font-semibold text-black underline underline-offset-4 transition-colors hover:text-brand-gray-500"
            >
              our full guide to buying property in Rwanda
            </Link>{" "}
            and{" "}
            <Link
              href="/rwanda-land-zoning"
              className="font-semibold text-black underline underline-offset-4 transition-colors hover:text-brand-gray-500"
            >
              Rwanda&rsquo;s land zoning rules
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 5. Paying Before It Exists */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-brand-gray-500">
            {p.paymentEyebrow}
          </p>
          <h2 className="mb-8 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
            <span className="font-light">{p.paymentHeadingLight}</span>{" "}
            <span className="font-bold">{p.paymentHeadingBold}</span>
          </h2>
          <div className="space-y-5">
            <p className="text-base leading-relaxed text-brand-gray-700 md:text-lg">
              {p.paymentParagraph1}
            </p>
            <p className="text-base leading-relaxed text-brand-gray-700 md:text-lg">
              {p.paymentParagraph2}
            </p>
          </div>
        </div>
      </section>

      {/* 6. The Due-Diligence Checklist */}
      <section className="bg-brand-off-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-brand-gray-500">
              {p.checklistEyebrow}
            </p>
            <h2 className="mb-12 text-3xl font-bold uppercase tracking-wide text-black md:mb-16 md:text-5xl">
              {p.checklistHeading}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-24">
            <div>
              <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-black">
                {p.beforeYouPayHeading}
              </h3>
              <ul className="space-y-4">
                {beforeYouPayItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-brand-teal" />
                    <span className="text-sm leading-relaxed text-brand-gray-700 md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-black">
                {p.developerQuestionsHeading}
              </h3>
              <ul className="space-y-4">
                {developerQuestionItems.map((item, index) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 text-sm font-bold tabular-nums text-brand-gray-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-relaxed text-brand-gray-700 md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why It Matters — one-team advantage, image + text */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-24">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/about/villa-architecture.webp"
                alt="Ever Retreat in-house architecture and construction team at work in Rwanda"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-brand-gray-500">
                {p.whyItMattersEyebrow}
              </p>
              <h2 className="mb-6 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
                <span className="font-light">{p.whyItMattersHeadingLight}</span>{" "}
                <span className="font-bold">{p.whyItMattersHeadingBold}</span>
              </h2>
              <div className="space-y-5">
                <p className="text-base leading-relaxed text-brand-gray-700">
                  {p.whyItMattersParagraph1}
                </p>
                <p className="text-base leading-relaxed text-brand-gray-700">
                  {p.whyItMattersParagraph2}
                </p>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-brand-gray-600">
                See how we structure that on our{" "}
                <Link
                  href="/about"
                  className="font-semibold text-black underline underline-offset-4 transition-colors hover:text-brand-gray-500"
                >
                  about page
                </Link>
                , or for landowners weighing a build,{" "}
                <Link
                  href="/services/development-partnerships"
                  className="font-semibold text-black underline underline-offset-4 transition-colors hover:text-brand-gray-500"
                >
                  development partnerships
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Proof, Not Promises */}
      <section className="bg-brand-off-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-brand-gray-500">
              {p.proofEyebrow}
            </p>
            <h2 className="mb-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
              <span className="font-light">{p.proofHeadingLight}</span>{" "}
              <span className="font-bold">{p.proofHeadingBold}</span>
            </h2>
            <p className="mb-12 text-base leading-relaxed text-brand-gray-700 md:mb-16">
              {p.proofIntro}
            </p>
          </div>
          <div className="mb-14 grid grid-cols-1 gap-px bg-brand-gray-200 md:mb-20 md:grid-cols-3">
            {proofItems.map((item) => (
              <div key={item.title} className="h-full bg-brand-off-white p-8 md:p-10">
                <h3 className="mb-3 text-base font-bold uppercase tracking-wide text-black">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="mb-3 text-center text-2xl font-bold uppercase tracking-wide text-black md:text-3xl">
            <span className="font-light">{p.developmentsSubheadingLight}</span>{" "}
            <span className="font-bold">{p.developmentsSubheadingBold}</span>
          </h3>
          <p className="mx-auto mb-12 max-w-xl text-center text-base leading-relaxed text-brand-gray-700">
            {p.developmentsSubIntro}
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            {developmentCards.map((dev) => (
              <Link key={dev.href} href={dev.href} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-gray-100">
                  <Image
                    src={dev.image}
                    alt={dev.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-xs uppercase tracking-widest text-brand-gray-500">{dev.tag}</p>
                <h4 className="mt-1 text-lg font-bold uppercase tracking-wide text-black">
                  {dev.name}
                </h4>
                <span className="mt-2 inline-block border-b border-black pb-0.5 text-xs font-semibold uppercase tracking-wide text-black transition-colors group-hover:border-brand-gray-500 group-hover:text-brand-gray-500">
                  View Development
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center md:mt-16">
            <Link
              href="/developments"
              className="inline-block border-b border-black pb-1 text-sm font-semibold uppercase tracking-[0.12em] text-black transition-colors hover:border-brand-gray-500 hover:text-brand-gray-500"
            >
              View All Developments &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Choosing a Developer FAQs — page-specific accordion */}
      <section id="choosing-developer-faq" className="bg-brand-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-6">
          <div className="mb-10 text-center md:mb-16">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-brand-gray-500">
              Common Questions
            </p>
            <h2 className="text-2xl font-bold uppercase tracking-wide text-black md:text-4xl">
              <span className="font-light">Choosing a Developer</span> <span className="font-bold">FAQs</span>
            </h2>
          </div>
          <div className="divide-y divide-brand-gray-200">
            {developerFaqs.map((item, index) => (
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

      {/* 10. Closing CTA — Vet Us the Same Way */}
      <section className="bg-brand-teal py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mx-auto max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-widest text-white/50">{p.closingEyebrow}</p>
            <h2 className="text-3xl font-bold uppercase tracking-wide text-white md:text-5xl">
              <span className="font-light">{p.closingHeadingLight}</span>{" "}
              <span className="font-bold">{p.closingHeadingBold}</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">{p.closingParagraph}</p>
            <ul className="mt-8 space-y-3">
              {[p.closingListItem1, p.closingListItem2, p.closingListItem3].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-white/40" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/portfolio"
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

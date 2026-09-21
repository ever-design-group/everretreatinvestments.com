"use client";

import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { ServiceHero } from "@/components/ServiceHero";
import { Portfolio } from "@/components/Portfolio";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// Real, already-established next-step destinations — same three the
// reference page links to ("Our Developments" / "Villa Construction" /
// "Architecture"), all existing pages on this site.
const nextSteps = [
  { eyebrow: "Explore More", title: "Our Developments", href: "/developments" },
  { eyebrow: "Build Your Own", title: "Villa Construction", href: "/services/construction" },
  { eyebrow: "Commission a Design", title: "Architecture", href: "/services/architecture" },
] as const;

export default function PortfolioPage() {
  const { t } = useLanguage();
  const p = t.portfolioPage;

  // Real, already-established figures reused for the hero stats row (villas
  // built / years building / in-house team / developments across Rwanda —
  // the same sitewide trust stats used on the architecture & construction
  // pages), replacing the reference's unverifiable "6 Continents" and
  // "Award-Winning Architecture" claims.
  const heroStats = [
    { value: "120+", label: t.statsBarSection.villasBuiltLabel },
    { value: "10+", label: t.statsBarSection.yearsBuildingLabel },
    { value: "82+", label: t.servicesPage.trustBar.stat1Label },
    { value: "8", label: t.servicesPage.trustBar.stat3Label },
  ];

  // Real, already-established projects (same three used in the architecture
  // page's "Projects" list) — genuine facts, not invented.
  const notableProjects = [
    { name: "B&P Ever Retreat Villa", description: p.notableBpDescription, href: "/developments/nara-villas" },
    { name: "Cottage", description: p.notableCottageDescription, href: "/developments/solas-uluwatu" },
    { name: "Virunga Villas", description: p.notableVirungaDescription, href: "/developments/suku-residences" },
  ];

  return (
    <PageLayout
      showCta={false}
      hero={
        <ServiceHero
          name={p.heroHeadingLight}
          boldSuffix={p.heroHeadingBold}
          subtitle={p.heroParagraph}
          image="/images/portfolio/completed-villa-4.webp"
          imageAlt="Completed Ever Retreat villa"
          eyebrow={p.heroEyebrow}
          twoTone
          hideCta
          minHeightClass="min-h-[90vh]"
          stats={heroStats}
        />
      }
    >
      {/* 1. Intro — "The Work" */}
      <section className="bg-brand-white py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="text-3xl uppercase tracking-wide text-black md:text-5xl">
                <span className="font-light">{p.theWorkHeadingLight}</span>{" "}
                <span className="font-bold">{p.theWorkHeadingBold}</span>
              </h2>
            </div>
            <div>
              <p className="text-base leading-relaxed text-brand-gray-600 md:text-lg">
                {p.theWorkParagraphPart1}
                <Link
                  href="/services/architecture"
                  className="font-semibold text-black underline underline-offset-4 transition-colors hover:text-brand-gray-500"
                >
                  {p.theWorkParagraphLinkLabel}
                </Link>
                {p.theWorkParagraphPart2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "Featured Projects" divider label + filterable gallery */}
      <section className="bg-brand-off-white pb-4 md:pb-6">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-brand-gray-200" />
            <p className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.3em] text-black">
              {p.filterEyebrow}
            </p>
            <div className="h-px flex-1 bg-brand-gray-200" />
          </div>
        </div>
      </section>

      <Portfolio enableFilters />

      {/* 3. Investment Results / Notable Projects */}
      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              {p.resultsHeading}
            </p>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
              {p.notableHeading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-gray-600">{p.resultsParagraph}</p>
          </div>
          <div className="grid grid-cols-1 gap-px bg-brand-gray-200 md:grid-cols-3">
            {notableProjects.map((project, index) => (
              <Link
                key={project.name}
                href={project.href}
                className="group flex h-full flex-col bg-brand-off-white p-8 transition-colors hover:bg-brand-white"
              >
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-brand-gray-500">
                  Project {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-3 text-lg font-bold uppercase tracking-wide text-black md:text-xl">
                  {project.name}
                </h3>
                <p className="flex-grow text-sm leading-relaxed text-brand-gray-600">
                  {project.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-black">
                  View Development
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Next-step quick links */}
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

      {/* 5. Closing CTA — compact, centered (matches the reference's
          smaller, centered closing section rather than the full-bleed
          two-column teal CTA used on the service pages) */}
      <section className="bg-brand-off-white py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6 text-center">
          <h2 className="text-2xl font-bold uppercase tracking-wide text-black md:text-3xl">
            {p.closingHeading}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-brand-gray-700">
            {p.closingParagraph}
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-sm bg-brand-teal px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-teal/90"
            >
              {p.closingCtaPrimary}
            </Link>
            <Link
              href="https://wa.me/250787524298"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-brand-teal px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand-teal transition-colors hover:bg-brand-teal hover:text-white"
            >
              {p.closingCtaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

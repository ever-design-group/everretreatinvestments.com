"use client";

import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PrivacyPolicyPage() {
  const { t } = useLanguage();
  const p = t.privacyPage;
  return (
    <PageLayout
      hero={
        <section className="relative h-[280px] w-full overflow-hidden bg-brand-teal sm:h-[320px] md:h-[380px] lg:h-[420px]">
          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
            }} />
          </div>
          
          {/* Content */}
          <div className="relative flex h-full flex-col items-center justify-center px-4 text-center sm:px-6">
            {/* Breadcrumb */}
            <div className="mb-2 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.15em] text-white/60 sm:mb-3 sm:text-xs">
              <Link href="/" className="transition-colors hover:text-white/90">
                {t.nav.home}
              </Link>
              <ChevronRight className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
              <span className="text-white/80">Privacy Policy</span>
            </div>

            <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight">
              Privacy Policy
            </h1>

            {/* Divider - Pure White */}
            <div className="mt-3 h-0.5 w-12 bg-white/40 sm:w-16" />

            <p className="mt-3 max-w-2xl text-xs text-white/70 sm:mt-4 sm:text-sm md:text-base">
              {p.heroSubtitle}
            </p>
          </div>
        </section>
      }
    >
      {/* Main Content */}
      <section className="px-4 py-10 sm:px-6 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          {/* Header with Last Updated */}
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex flex-col items-start justify-between gap-3 border-b border-gray-200 pb-5 sm:mb-8 sm:flex-row sm:items-center sm:gap-4 sm:pb-6">
              <p className="text-xs text-gray-500 sm:text-sm">
                <span className="font-semibold text-gray-700">{p.lastUpdatedLabel}</span> {p.lastUpdatedValue}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-900 transition-colors hover:text-gray-600 sm:text-sm"
              >
                <span>{p.questionsLabel}</span>
                <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Link>
            </div>
          </div>

          {/* Privacy Policy Content */}
          <div className="mx-auto max-w-4xl">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {/* Section 1 */}
              <div className="rounded-sm border border-gray-200 bg-white p-4 transition-all hover:border-gray-400 sm:p-5 md:p-6 lg:p-8">
                <h2 className="mt-0 flex items-center gap-2.5 text-base font-bold text-gray-900 sm:text-lg md:gap-3 md:text-xl lg:text-2xl">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm md:h-8 md:w-8">
                    1
                  </span>
                  {p.section1Heading}
                </h2>
                <p className="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm md:text-base">
                  {p.section1Intro}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-gray-600 sm:mt-3 sm:text-sm md:text-base">
                  <li>{p.section1Item1}</li>
                  <li>{p.section1Item2}</li>
                  <li>{p.section1Item3}</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="rounded-sm border border-gray-200 bg-white p-4 transition-all hover:border-gray-400 sm:p-5 md:p-6 lg:p-8">
                <h2 className="mt-0 flex items-center gap-2.5 text-base font-bold text-gray-900 sm:text-lg md:gap-3 md:text-xl lg:text-2xl">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm md:h-8 md:w-8">
                    2
                  </span>
                  {p.section2Heading}
                </h2>
                <p className="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm md:text-base">
                  {p.section2Intro}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-gray-600 sm:mt-3 sm:text-sm md:text-base">
                  <li>{p.section2Item1}</li>
                  <li>{p.section2Item2}</li>
                  <li>{p.section2Item3}</li>
                  <li>{p.section2Item4}</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="rounded-sm border border-gray-200 bg-white p-4 transition-all hover:border-gray-400 sm:p-5 md:p-6 lg:p-8">
                <h2 className="mt-0 flex items-center gap-2.5 text-base font-bold text-gray-900 sm:text-lg md:gap-3 md:text-xl lg:text-2xl">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm md:h-8 md:w-8">
                    3
                  </span>
                  {p.section3Heading}
                </h2>
                <p className="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm md:text-base">
                  {p.section3Body}
                </p>
              </div>

              {/* Section 4 */}
              <div className="rounded-sm border border-gray-200 bg-white p-4 transition-all hover:border-gray-400 sm:p-5 md:p-6 lg:p-8">
                <h2 className="mt-0 flex items-center gap-2.5 text-base font-bold text-gray-900 sm:text-lg md:gap-3 md:text-xl lg:text-2xl">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm md:h-8 md:w-8">
                    4
                  </span>
                  {p.section4Heading}
                </h2>
                <p className="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm md:text-base">
                  {p.section4Body}
                </p>
              </div>

              {/* Section 5 */}
              <div className="rounded-sm border border-gray-200 bg-white p-4 transition-all hover:border-gray-400 sm:p-5 md:p-6 lg:p-8">
                <h2 className="mt-0 flex items-center gap-2.5 text-base font-bold text-gray-900 sm:text-lg md:gap-3 md:text-xl lg:text-2xl">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm md:h-8 md:w-8">
                    5
                  </span>
                  {p.section5Heading}
                </h2>
                <p className="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm md:text-base">
                  {p.section5Body}
                </p>
              </div>

              {/* Section 6 */}
              <div className="rounded-sm border border-gray-200 bg-white p-4 transition-all hover:border-gray-400 sm:p-5 md:p-6 lg:p-8">
                <h2 className="mt-0 flex items-center gap-2.5 text-base font-bold text-gray-900 sm:text-lg md:gap-3 md:text-xl lg:text-2xl">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm md:h-8 md:w-8">
                    6
                  </span>
                  {p.section6Heading}
                </h2>
                <p className="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm md:text-base">
                  {p.section6BodyPre}{" "}
                  <a
                    href="mailto:info@everretreat.com"
                    className="font-medium text-gray-900 transition-colors hover:text-gray-600"
                  >
                    info@everretreat.com
                  </a>
                  {" "}{p.section6BodyPost}
                </p>
              </div>

              {/* Section 7 */}
              <div className="rounded-sm border border-gray-200 bg-white p-4 transition-all hover:border-gray-400 sm:p-5 md:p-6 lg:p-8">
                <h2 className="mt-0 flex items-center gap-2.5 text-base font-bold text-gray-900 sm:text-lg md:gap-3 md:text-xl lg:text-2xl">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm md:h-8 md:w-8">
                    7
                  </span>
                  {p.section7Heading}
                </h2>
                <p className="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm md:text-base">
                  {p.section7Body}
                </p>
              </div>

              {/* Section 8 */}
              <div className="rounded-sm border border-gray-200 bg-white p-4 transition-all hover:border-gray-400 sm:p-5 md:p-6 lg:p-8">
                <h2 className="mt-0 flex items-center gap-2.5 text-base font-bold text-gray-900 sm:text-lg md:gap-3 md:text-xl lg:text-2xl">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm md:h-8 md:w-8">
                    8
                  </span>
                  {p.section8Heading}
                </h2>
                <p className="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm md:text-base">
                  {p.section8BodyPre}{" "}
                  <a
                    href="mailto:info@everretreat.com"
                    className="font-medium text-gray-900 transition-colors hover:text-gray-600"
                  >
                    info@everretreat.com
                  </a>
                  {" "}{p.section8BodyMid}{" "}
                  <a
                    href="https://wa.me/250787524298"
                    className="font-medium text-gray-900 transition-colors hover:text-gray-600"
                  >
                    +250 787 524 298
                  </a>
                  {p.section8BodyPost}
                </p>
              </div>
            </div>

            {/* CTA Section - Pure Black & White */}
            <div className="mt-8 rounded-sm border border-white/20 bg-gray-900 p-6 text-center sm:mt-10 sm:p-8 md:p-10 lg:p-12">
              <h3 className="text-lg font-bold text-white sm:text-xl md:text-2xl">
                {p.ctaHeading}
              </h3>
              <p className="mt-2 text-xs text-gray-400 sm:text-sm md:text-base">
                {p.ctaParagraph}
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:mt-6 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-sm bg-white px-5 py-2.5 text-xs font-semibold text-gray-900 transition-all hover:bg-gray-100 sm:px-6 sm:py-3 sm:text-sm"
                >
                  {p.contactUsButton}
                  <ChevronRight className="ml-1.5 h-3.5 w-3.5 sm:ml-2 sm:h-4 sm:w-4" />
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-sm border border-white/20 px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-white/10 sm:px-6 sm:py-3 sm:text-sm"
                >
                  {p.returnHomeButton}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
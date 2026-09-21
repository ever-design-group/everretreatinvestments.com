"use client";

import { PageLayout } from "@/components/PageLayout";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Image from "next/image";

export default function CaseStudyPage() {
  const { t } = useLanguage();
  const p = t.caseStudyPage;
  return (
    <PageLayout
      showCta={false}
      hero={
        <section className="relative min-h-[85vh] w-full overflow-hidden">
          <Image
            src="/images/portfolio/completed-villa-4.webp"
            alt="B&P Ever Retreat Villa waterfront pool"
            fill
            priority
            className="object-cover hero-bg-image"
            sizes="100vw"
          />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
          <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-32 md:px-12 md:pb-24">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/50 md:text-sm">
              Ever Retreat Rwanda
            </p>
            <h1 className="max-w-3xl text-4xl uppercase leading-[0.95] tracking-[0.05em] text-white md:text-6xl lg:text-7xl">
              {p.pageTitle}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:mt-8 md:text-lg">
              {p.pageSubtitle}
            </p>
          </div>
        </section>
      }
    >
      <section className="bg-brand-off-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              {p.timelineEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
              <span className="font-light">{p.timelineHeadingLight}</span>{" "}
              <span className="font-bold">{p.timelineHeadingBold}</span>
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            {[
              { label: p.challengeHeading, text: p.challengeParagraph },
              { label: p.solutionHeading, text: p.solutionParagraph },
              { label: p.resultsHeading, text: p.resultsParagraph },
            ].map((phase, index) => (
              <div
                key={phase.label}
                className="flex gap-6 rounded-sm border border-brand-gray-100 bg-brand-white p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-teal text-white">
                  <span className="text-sm font-bold">{index + 1}</span>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500">
                    {p.phaseLabel} {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-black">{phase.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-gray-600">{phase.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              {p.outcomeEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
              <span className="font-light">{p.outcomeHeadingLight}</span>{" "}
              <span className="font-bold">{p.outcomeHeadingBold}</span>
            </h2>
          </div>

          <div className="mx-auto mb-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: t.naraVillasPage.locationLabel, value: t.naraVillasPage.locationValue },
              { label: t.naraVillasPage.totalVillasLabel, value: t.naraVillasPage.totalVillasValue },
              { label: t.naraVillasPage.statusLabel, value: t.naraVillasPage.statusValue },
              { label: t.naraVillasPage.buildStatusLabel, value: t.naraVillasPage.buildStatusValue },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-sm border border-brand-gray-100 p-5 text-center"
              >
                <p className="text-sm font-bold text-black md:text-base">{stat.value}</p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-brand-gray-500 md:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4">
            <Image
              src="/images/portfolio/gj-villa.webp"
              alt="B&P Ever Retreat Villa interior"
              width={500}
              height={300}
              className="rounded-sm object-cover"
            />
            <Image
              src="/images/portfolio/suku-terrace.webp"
              alt="B&P Ever Retreat Villa exterior"
              width={500}
              height={300}
              className="rounded-sm object-cover"
            />
            <Image
              src="/images/portfolio/villa-natural.webp"
              alt="B&P Ever Retreat Villa pool"
              width={500}
              height={300}
              className="rounded-sm object-cover"
            />
            <Image
              src="/images/portfolio/completed-villa-4.webp"
              alt="B&P Ever Retreat Villa sauna"
              width={500}
              height={300}
              className="rounded-sm object-cover"
            />
          </div>
        </div>
      </section>
      <InterestedInInvesting />
    </PageLayout>
  );
}

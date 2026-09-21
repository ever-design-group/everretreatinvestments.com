"use client";

import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Link from "next/link";
import Image from "next/image";

export default function FormsPage() {
  const { t } = useLanguage();
  const p = t.formsPage;
  const items = [
    { title: p.item1Title, time: p.item1Time, description: p.item1Desc },
    { title: p.item2Title, time: p.item2Time, description: p.item2Desc },
    { title: p.item3Title, time: p.item3Time, description: p.item3Desc },
    { title: p.item4Title, time: p.item4Time, description: p.item4Desc },
  ];
  return (
    <PageLayout
      hero={
        <section className="relative min-h-[85vh] w-full overflow-hidden">
          <Image
            src="/images/hero/rwanda-landscape.webp"
            alt="Rwanda hills landscape"
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
          <p className="text-center text-sm font-medium uppercase tracking-wider text-brand-gray-500">
            {p.sectionEyebrow}
          </p>
          <h2 className="mt-2 text-center text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
            <span className="font-light">{p.sectionHeadingLight}</span>{" "}
            <span className="font-bold">{p.sectionHeadingBold}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-brand-gray-600">
            {p.sectionParagraph}
          </p>

          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {items.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-4 rounded-sm border border-brand-gray-100 p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold text-black">{item.title}</h3>
                    <span className="rounded-full bg-brand-gray-100 px-2.5 py-0.5 text-xs font-medium text-brand-gray-700">
                      {item.time}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-brand-gray-600">{item.description}</p>
                  <p className="mt-1 text-xs text-brand-gray-500">{p.availableLabel}</p>
                </div>
                <Link
                  href="/contact"
                  className="shrink-0 rounded-sm bg-brand-teal px-6 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-teal/80"
                >
                  {p.requestButtonLabel}
                </Link>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-sm border border-brand-gray-100 bg-brand-off-white p-6 text-center">
            <h3 className="font-semibold text-black">{p.notSureHeading}</h3>
            <p className="mx-auto mt-1 max-w-xl text-sm text-brand-gray-600">{p.notSureBody}</p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center justify-center rounded-sm bg-brand-teal px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-teal/80"
            >
              {p.notSureCta}
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

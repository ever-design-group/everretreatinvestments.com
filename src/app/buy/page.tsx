"use client";

import { PageLayout } from "@/components/PageLayout";
import { ReservationForm } from "@/components/ReservationForm";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Image from "next/image";

export default function BuyPage() {
  const { t } = useLanguage();
  const p = t.buyPage;

  const trustPoints = [
    { title: p.trustPoint1Title, description: p.trustPoint1Desc },
    { title: p.trustPoint2Title, description: p.trustPoint2Desc },
    { title: p.trustPoint3Title, description: p.trustPoint3Desc },
  ];

  return (
    <PageLayout
      hero={
        <section className="relative h-[600px] w-full overflow-hidden">
          <Image
            src="/images/hero/nara-hero-poster.webp"
            alt="B&P Ever Retreat Villa lakeside development"
            fill
            priority
            className="object-cover hero-bg-image"
            sizes="100vw"
          />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 sm:tracking-[0.25em]">
              {p.heroEyebrow}
            </p>
            <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
              {p.heroTitle}
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base md:text-lg">
              {p.heroSubtitle}
            </p>
          </div>
        </section>
      }
    >
      <section className="bg-brand-white py-12 md:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            {trustPoints.map((point) => (
              <div key={point.title} className="rounded-sm border border-brand-gray-100 bg-white p-6 sm:p-8">
                <h3 className="text-base font-bold text-black">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-teal py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-white/70">
                {p.formEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
                {p.formHeading}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/70">
                {p.formParagraph}
              </p>
            </div>
            <ReservationForm context="Villa Reservation Request — Ever Retreat" className="rounded-sm bg-white p-8" />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

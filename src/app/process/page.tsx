"use client";

import { PageLayout } from "@/components/PageLayout";
import { HowItWorks } from "@/components/HowItWorks";
import { ProcessSteps } from "@/components/ProcessSteps";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Image from "next/image";

export default function ProcessPage() {
  const { t } = useLanguage();
  const p = t.processPage;
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
      <HowItWorks />
      <ProcessSteps />
    </PageLayout>
  );
}

"use client";

import { PageLayout } from "@/components/PageLayout";
import { BuildCalculator } from "@/components/BuildCalculator";
import { BringVillaToLifeCTA } from "@/components/CTASections";
import { StatsBar } from "@/components/StatsBar";
import { PricingForm } from "@/components/PricingForm";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { FAQ } from "@/components/FAQ";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import { WhyEverRetreat } from "@/components/WhyEverRetreat";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function BuildCalculatorPage() {
  const { t } = useLanguage();
  const p = t.buildCalculatorPage;

  return (
    <PageLayout showCta={false}
      hero={
        <section className="bg-brand-teal pb-16 pt-32 md:pb-20 md:pt-40">
          <div className="mx-auto max-w-[1440px] px-5 md:px-6">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/50">
              Free Investment Tool
            </p>
            <h1 className="mb-6 max-w-3xl text-4xl uppercase leading-none text-white md:text-6xl lg:text-7xl">
              {p.heroSlide1Title}
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-brand-gray-200 md:text-lg">
              {p.heroSlide1Subtitle}
            </p>
            <p className="mt-4 text-xs text-white/40">
              Estimates are indicative only and subject to detailed scope review. Contact us for a precise quote.
            </p>
          </div>
        </section>
      }
    >

      <StatsBar />

      <BuildCalculator />

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="article-body mx-auto max-w-3xl">
            <h2>{p.processHeading}</h2>
            <p>
              {p.processIntro}
            </p>
            <ol>
              <li>
                <strong>{p.step1Title}</strong> — {p.step1Desc}
              </li>
              <li>
                <strong>{p.step2Title}</strong> — {p.step2Desc}
              </li>
              <li>
                <strong>{p.step3Title}</strong> — {p.step3Desc}
              </li>
              <li>
                <strong>{p.step4Title}</strong> — {p.step4Desc}
              </li>
              <li>
                <strong>{p.step5Title}</strong> — {p.step5Desc}
              </li>
            </ol>
          </div>
        </div>
      </section>

      <WhyEverRetreat />

      <PricingForm />

      <InvestmentMarket />

      <FAQ />

      <BringVillaToLifeCTA />

      <InterestedInInvesting />
    </PageLayout>
  );
}

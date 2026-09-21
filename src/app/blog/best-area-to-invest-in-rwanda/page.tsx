"use client";

import { PageLayout } from "@/components/PageLayout";
import { BlogPostHero } from "@/components/BlogPostHero";
import { Breadcrumb } from "@/components/Breadcrumb";
import { KeepReading } from "@/components/KeepReading";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { estimateReadingTime } from "@/lib/readingTime";

export default function BestAreaToInvestPage() {
  const { t } = useLanguage();
  const p = t.blogBestAreaPage;
  const readingMinutes = estimateReadingTime(p);

  return (
    <PageLayout
      hero={
        <BlogPostHero
          image="/images/areas/lake-kivu-area.webp"
          imageAlt="Lake Kivu investment area"
          category="location"
          date="April 2026"
          title={p.heroTitle}
          subtitle={p.heroSubtitle}
        />
      }
    >
      <Breadcrumb
        items={[
          { label: t.nav.blog, href: "/blog" },
          { label: t.blogCategories.location },
          { label: p.heroTitle },
        ]}
        readingMinutes={readingMinutes}
      />
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="article-body mx-auto max-w-3xl">
            <h2>{p.kigaliHeading}</h2>
            <p>
              <strong>{p.statsLandPriceLabel}</strong> $50-120/sqm<br />
              <strong>{p.statsGrossYieldLabel}</strong> 8-12%<br />
              <strong>{p.statsOccupancyLabel}</strong> 75%
            </p>
            <p>{p.kigaliParagraph}</p>

            <h2>{p.musanzeHeading}</h2>
            <p>
              <strong>{p.statsLandPriceLabel}</strong> $30-60/sqm<br />
              <strong>{p.statsGrossYieldLabel}</strong> 12-18%<br />
              <strong>{p.statsOccupancyLabel}</strong> 80%
            </p>
            <p>{p.musanzeParagraph}</p>

            <h2>{p.rubavuHeading}</h2>
            <p>
              <strong>{p.statsLandPriceLabel}</strong> $40-80/sqm<br />
              <strong>{p.statsGrossYieldLabel}</strong> 15-20%<br />
              <strong>{p.statsOccupancyLabel}</strong> 85%
            </p>
            <p>{p.rubavuParagraph}</p>

            <h2>{p.nyungweHeading}</h2>
            <p>
              <strong>{p.statsLandPriceLabel}</strong> $15-30/sqm<br />
              <strong>{p.statsGrossYieldLabel}</strong> 10-15%<br />
              <strong>{p.statsOccupancyLabel}</strong> 70%
            </p>
            <p>{p.nyungweParagraph}</p>

            <h2>{p.akageraHeading}</h2>
            <p>
              <strong>{p.statsLandPriceLabel}</strong> $10-25/sqm<br />
              <strong>{p.statsGrossYieldLabel}</strong> 12-16%<br />
              <strong>{p.statsOccupancyLabel}</strong> 65%
            </p>
            <p>{p.akageraParagraph}</p>

            <h2>{p.recommendationHeading}</h2>
            <p>
              {p.recommendationPart1}
              <strong>{p.recommendationStrong1}</strong>
              {p.recommendationPart2}
              <strong>{p.recommendationStrong2}</strong>
              {p.recommendationPart3}
              <strong>{p.recommendationStrong3}</strong>
              {p.recommendationPart4}
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <KeepReading currentHref="/blog/best-area-to-invest-in-rwanda" />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

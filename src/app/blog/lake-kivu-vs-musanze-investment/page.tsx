"use client";

import { PageLayout } from "@/components/PageLayout";
import { BlogPostHero } from "@/components/BlogPostHero";
import { Breadcrumb } from "@/components/Breadcrumb";
import { KeepReading } from "@/components/KeepReading";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { estimateReadingTime } from "@/lib/readingTime";

export default function LakeKivuVsMusanzePage() {
  const { t } = useLanguage();
  const p = t.blogLakeKivuPage;
  const readingMinutes = estimateReadingTime(p);

  return (
    <PageLayout
      bg="off-white"
      hero={
        <BlogPostHero
          image="/images/areas/lake-kivu-area.webp"
          imageAlt="Lake Kivu waterfront"
          category="location"
          date="March 2026"
          title={p.pageTitle}
          subtitle={p.pageSubtitle}
        />
      }
    >
      <Breadcrumb
        items={[
          { label: t.nav.blog, href: "/blog" },
          { label: t.blogCategories.location },
          { label: p.pageTitle },
        ]}
        readingMinutes={readingMinutes}
      />
      <section className="px-6 py-12 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="article-body mx-auto max-w-3xl">

            <h2>{p.atGlanceHeading}</h2>
            <table>
              <thead>
                <tr>
                  <th>{p.tableFactorHeader}</th>
                  <th>Lake Kivu (Rubavu)</th>
                  <th>Musanze</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{p.tableAvgLandPrice}</td>
                  <td>$40-80/sqm</td>
                  <td>$30-60/sqm</td>
                </tr>
                <tr>
                  <td>{p.tableAvgGrossYield}</td>
                  <td>15-20%</td>
                  <td>12-18%</td>
                </tr>
                <tr>
                  <td>{p.tableAvgOccupancyRow}</td>
                  <td>85%</td>
                  <td>80%</td>
                </tr>
                <tr>
                  <td>{p.tableNightlyRateRange}</td>
                  <td>$250-450</td>
                  <td>$180-350</td>
                </tr>
                <tr>
                  <td>{p.tableCapitalAppreciation}</td>
                  <td>7-10%</td>
                  <td>10-15%</td>
                </tr>
              </tbody>
            </table>

            <h2>{p.lakeKivuHeading}</h2>
            <p>
              <strong>{p.lakeKivuProsLabel}</strong> {p.lakeKivuPros}
            </p>
            <p>
              <strong>{p.lakeKivuConsLabel}</strong> {p.lakeKivuCons}
            </p>

            <h2>{p.musanzeHeading}</h2>
            <p>
              <strong>{p.musanzeProsLabel}</strong> {p.musanzePros}
            </p>
            <p>
              <strong>{p.musanzeConsLabel}</strong> {p.musanzeCons}
            </p>

            <h2>{p.whichHeading}</h2>
            <p>
              {p.whichParagraph1Pre}
              <strong>{p.whichParagraph1Strong1}</strong>
              {p.whichParagraph1Mid}
              <strong>{p.whichParagraph1Strong2}</strong>
              {p.whichParagraph1Post}
            </p>
            <p>{p.whichParagraph2}</p>
          </div>
          <div className="mx-auto max-w-3xl">
            <KeepReading currentHref="/blog/lake-kivu-vs-musanze-investment" />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

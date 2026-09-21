"use client";

import { PageLayout } from "@/components/PageLayout";
import { BlogPostHero } from "@/components/BlogPostHero";
import { Breadcrumb } from "@/components/Breadcrumb";
import { KeepReading } from "@/components/KeepReading";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { estimateReadingTime } from "@/lib/readingTime";

export default function CostToBuildVillaInRwandaPage() {
  const { t } = useLanguage();
  const p = t.blogCostToBuildPage;
  const readingMinutes = estimateReadingTime(p);

  return (
    <PageLayout
      hero={
        <BlogPostHero
          image="/images/services/villa-exterior.webp"
          imageAlt="Villa construction in Rwanda"
          category="building"
          date="February 2026"
          title={p.heroTitle}
          subtitle={p.heroSubtitle}
        />
      }
    >
      <Breadcrumb
        items={[
          { label: t.nav.blog, href: "/blog" },
          { label: t.blogCategories.building },
          { label: p.heroTitle },
        ]}
        readingMinutes={readingMinutes}
      />
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="article-body mx-auto max-w-3xl">
            <h2>{p.breakdownHeading}</h2>
            <p>{p.breakdownParagraph}</p>

            <h3>{p.costBySizeHeading}</h3>
            <table>
              <thead>
                <tr>
                  <th>{p.tableVillaType}</th>
                  <th>{p.tableBuiltArea}</th>
                  <th>{p.tableCostRange}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{p.row1Type}</td>
                  <td>80 sqm</td>
                  <td>$80K - $120K</td>
                </tr>
                <tr>
                  <td>{p.row2Type}</td>
                  <td>120 sqm</td>
                  <td>$120K - $180K</td>
                </tr>
                <tr>
                  <td>{p.row3Type}</td>
                  <td>180 sqm</td>
                  <td>$180K - $270K</td>
                </tr>
                <tr>
                  <td>{p.row4Type}</td>
                  <td>250 sqm</td>
                  <td>$250K - $375K</td>
                </tr>
              </tbody>
            </table>

            <h2>{p.landCostsHeading}</h2>
            <p>{p.landCostsParagraph}</p>

            <h3>{p.landPriceRangesHeading}</h3>
            <ul>
              <li>
                <strong>Kigali</strong> — $50-120/sqm {p.landPriceKigaliDesc}
              </li>
              <li>
                <strong>Rubavu (Lake Kivu)</strong> — $40-80/sqm {p.landPriceRubavuDesc}
              </li>
              <li>
                <strong>Musanze</strong> — $30-60/sqm {p.landPriceMusanzeDesc}
              </li>
              <li>
                <strong>Nyungwe Area</strong> — $15-30/sqm {p.landPriceNyungweDesc}
              </li>
              <li>
                <strong>Akagera Area</strong> — $10-25/sqm {p.landPriceAkageraDesc}
              </li>
            </ul>

            <h2>{p.totalBudgetHeading}</h2>
            <p>{p.totalBudgetParagraph1}</p>
            <p>{p.totalBudgetParagraph2}</p>
          </div>
          <div className="mx-auto max-w-3xl">
            <KeepReading currentHref="/blog/cost-to-build-villa-in-rwanda" />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

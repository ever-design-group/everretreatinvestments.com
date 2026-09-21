"use client";

import { PageLayout } from "@/components/PageLayout";
import { BlogPostHero } from "@/components/BlogPostHero";
import { Breadcrumb } from "@/components/Breadcrumb";
import { KeepReading } from "@/components/KeepReading";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { estimateReadingTime } from "@/lib/readingTime";

export default function RentalIncomePage() {
  const { t } = useLanguage();
  const p = t.blogRentalIncomePage;
  const readingMinutes = estimateReadingTime(p);

  return (
    <PageLayout
      hero={
        <BlogPostHero
          image="/images/portfolio/villa-dining-rattan-interior.webp"
          imageAlt="Luxury villa interior in Rwanda"
          category="investment"
          date="April 2026"
          title={p.heroTitle}
          subtitle={p.heroSubtitle}
        />
      }
    >
      <Breadcrumb
        items={[
          { label: t.nav.blog, href: "/blog" },
          { label: t.blogCategories.investment },
          { label: p.heroTitle },
        ]}
        readingMinutes={readingMinutes}
      />
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="article-body mx-auto max-w-3xl">
            <h2>{p.yieldHeading}</h2>
            <p>{p.yieldIntro}</p>

            <table>
              <thead>
                <tr>
                  <th>{p.tableAreaHeader}</th>
                  <th>{p.tableNightlyRateHeader}</th>
                  <th>{p.tableOccupancyHeader}</th>
                  <th>{p.tableYieldHeader}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lake Kivu (Rubavu)</td>
                  <td>$250-450</td>
                  <td>85%</td>
                  <td>15-20%</td>
                </tr>
                <tr>
                  <td>Musanze Highlands</td>
                  <td>$180-350</td>
                  <td>80%</td>
                  <td>12-18%</td>
                </tr>
                <tr>
                  <td>Kigali</td>
                  <td>$300-600</td>
                  <td>75%</td>
                  <td>8-12%</td>
                </tr>
                <tr>
                  <td>Nyungwe Area</td>
                  <td>$150-280</td>
                  <td>70%</td>
                  <td>10-15%</td>
                </tr>
              </tbody>
            </table>

            <h2>{p.managementHeading}</h2>
            <p>{p.managementIntro}</p>
            <ul>
              {p.managementItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mx-auto max-w-3xl">
            <KeepReading currentHref="/blog/rwanda-villa-rental-income" />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

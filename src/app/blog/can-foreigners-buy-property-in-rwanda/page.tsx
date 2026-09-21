"use client";

import { PageLayout } from "@/components/PageLayout";
import { BlogPostHero } from "@/components/BlogPostHero";
import { Breadcrumb } from "@/components/Breadcrumb";
import { KeepReading } from "@/components/KeepReading";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { estimateReadingTime } from "@/lib/readingTime";

export default function CanForeignersBuyPage() {
  const { t } = useLanguage();
  const p = t.blogForeignersPage;
  const readingMinutes = estimateReadingTime(p);

  return (
    <PageLayout
      hero={
        <BlogPostHero
          image="/images/hero/aerial-rwanda.webp"
          imageAlt="Rwanda aerial landscape"
          category="legal"
          date={p.dateLabel}
          title={p.heroTitle}
          subtitle={p.heroSubtitle}
        />
      }
    >
      <Breadcrumb
        items={[
          { label: t.nav.blog, href: "/blog" },
          { label: t.blogCategories.legal },
          { label: p.heroTitle },
        ]}
        readingMinutes={readingMinutes}
      />
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="article-body mx-auto max-w-3xl">
            <h2>{p.section1Heading}</h2>
            <p>{p.section1Paragraph}</p>

            <h3>{p.leaseholdHeading}</h3>
            <p>{p.leaseholdParagraph}</p>
            <ul>
              {p.leaseholdItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>{p.companyHeading}</h3>
            <p>{p.companyParagraph}</p>
            <ul>
              {p.companyItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2>{p.mistakesHeading}</h2>
            <ol>
              {p.mistakesItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>

            <h2>{p.processHeading}</h2>
            <ol>
              {p.processItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>

            <h2>{p.workWithUsHeading}</h2>
            <p>{p.workWithUsParagraph}</p>
          </div>
          <div className="mx-auto max-w-3xl">
            <KeepReading currentHref="/blog/can-foreigners-buy-property-in-rwanda" />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

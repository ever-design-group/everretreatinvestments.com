"use client";

import { PageLayout } from "@/components/PageLayout";
import { BlogPostHero } from "@/components/BlogPostHero";
import { Breadcrumb } from "@/components/Breadcrumb";
import { KeepReading } from "@/components/KeepReading";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { estimateReadingTime } from "@/lib/readingTime";

export default function HowToBuildVillaInRwandaPage() {
  const { t } = useLanguage();
  const p = t.blogHowToBuildPage;
  const readingMinutes = estimateReadingTime(p);

  return (
    <PageLayout
      hero={
        <BlogPostHero
          image="/images/hero/aerial-rwanda.webp"
          imageAlt="Rwanda aerial landscape"
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
            <h2>{p.landSourcingHeading}</h2>
            <p>{p.landSourcingParagraph}</p>

            <h3>{p.whatWeCheckHeading}</h3>
            <ul>
              {p.whatWeCheckItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2>{p.designHeading}</h2>
            <p>{p.designParagraph}</p>

            <h2>{p.permitHeading}</h2>
            <p>{p.permitParagraph}</p>

            <h2>{p.constructionHeading}</h2>
            <p>{p.constructionParagraph}</p>

            <h3>{p.timelineHeading}</h3>
            <ul>
              {p.timelineItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2>{p.rentalSetupHeading}</h2>
            <p>{p.rentalSetupParagraph}</p>
          </div>
          <div className="mx-auto max-w-3xl">
            <KeepReading currentHref="/blog/how-to-build-a-villa-in-rwanda" />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

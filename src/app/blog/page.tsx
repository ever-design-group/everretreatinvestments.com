"use client";

import { PageLayout } from "@/components/PageLayout";
import { BlogCard, buildBlogPosts } from "@/components/Blog";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function BlogPage() {
  const { t } = useLanguage();
  const p = t.blogIndexPage;
  // The hub shows every real post (not the 3-up homepage teaser), matching
  // balitecture.com/blog's "Recent Posts" section, which lists the full set.
  const blogPosts = buildBlogPosts(t, t.blogSection.posts.length);

  return (
    <PageLayout
      hero={
        <section className="relative overflow-hidden bg-brand-teal pt-32 pb-20 md:pt-40 md:pb-24">
          <Image
            src="/images/hero/hero-1-full.webp"
            alt="Ever Retreat villa interior"
            fill
            priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-6">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/50 md:text-sm">
              {p.heroEyebrow}
            </p>
            <h1 className="max-w-3xl text-4xl uppercase leading-[0.95] tracking-wide text-white md:text-7xl lg:text-8xl">
              <span className="font-light">{p.heroTitle}</span>
              <br />
              <span className="font-bold">{p.heroSubtitle}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
              {p.heroIntro}
            </p>
          </div>
        </section>
      }
    >
      <section className="bg-brand-off-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-6">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-brand-gray-500">
            {p.postsEyebrow}
          </p>
          <h2 className="mb-10 text-3xl uppercase tracking-wide text-black md:mb-16 md:text-5xl">
            <span className="font-light">{t.blogSection.headingLight}</span>{" "}
            <span className="font-bold">{t.blogSection.headingBold}</span>
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            {blogPosts.map((post) => (
              <BlogCard key={post.href} post={post} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

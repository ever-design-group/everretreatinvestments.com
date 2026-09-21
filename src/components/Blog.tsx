"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { TranslationShape } from "@/lib/i18n/translations";

export const blogMeta = [
  {
    date: "April 2026",
    image: "/images/blog/rwanda-villa-rental-income-blog-hero.webp",
    href: "/blog/rwanda-villa-rental-income",
    category: "investment" as const,
  },
  {
    date: "April 2026",
    image: "/images/blog/best-area-to-invest-in-rwanda-blog-hero.webp",
    href: "/blog/best-area-to-invest-in-rwanda",
    category: "location" as const,
  },
  {
    date: "March 2026",
    image: "/images/blog/can-foreigners-buy-property-in-rwanda-blog-hero.webp",
    href: "/blog/can-foreigners-buy-property-in-rwanda",
    category: "legal" as const,
  },
  {
    date: "March 2026",
    image: "/images/blog/lake-kivu-vs-musanze-investment-blog-hero.webp",
    href: "/blog/lake-kivu-vs-musanze-investment",
    category: "location" as const,
  },
  {
    date: "February 2026",
    image: "/images/services/villa-exterior.webp",
    href: "/blog/cost-to-build-villa-in-rwanda",
    category: "building" as const,
  },
  {
    date: "February 2026",
    image: "/images/hero/aerial-rwanda.webp",
    href: "/blog/how-to-build-a-villa-in-rwanda",
    category: "building" as const,
  },
];

export function buildBlogPosts(t: TranslationShape, limit = 3) {
  // Homepage teaser shows only the 3 most recent posts — matches
  // balitecture.com's actual "From the Blog" section (a 3-up grid, not the
  // full list). The /blog hub page passes a higher limit to show all of them.
  return t.blogSection.posts.slice(0, limit).map((post, index) => ({
    ...post,
    ...blogMeta[index],
    imageAlt: post.title,
  }));
}

export type BlogPostCard = ReturnType<typeof buildBlogPosts>[number];

// Shared card used by both the homepage teaser and the /blog hub's full grid
// — the real balitecture.com "Recent Posts" card: image with a category tag,
// date, uppercase bold title, excerpt, and an underlined "Read More" link.
export function BlogCard({ post }: { post: BlogPostCard }) {
  const { t } = useLanguage();

  return (
    <Link href={post.href} className="group block">
      <div className="relative aspect-[16/9] overflow-hidden bg-brand-gray-100">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 bg-brand-black px-3 py-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-white">
            {t.blogCategories[post.category]}
          </span>
        </div>
      </div>
      <p className="mb-3 mt-6 text-xs uppercase tracking-wider text-brand-gray-500">
        {post.date}
      </p>
      <h3 className="text-xl font-bold uppercase leading-snug tracking-wide text-brand-black transition-colors group-hover:text-brand-gray-700 md:text-2xl">
        {post.title}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-brand-gray-700">
        {post.excerpt}
      </p>
      <span className="mt-5 inline-block border-b border-brand-black pb-0.5 text-xs font-semibold uppercase tracking-wide text-brand-black transition-colors group-hover:border-brand-gray-500 group-hover:text-brand-gray-500">
        {t.blogSection.readMore}
      </span>
    </Link>
  );
}

export function Blog() {
  const { t } = useLanguage();
  const blogPosts = buildBlogPosts(t);

  return (
    <section className="bg-brand-white py-16 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-brand-gray-500">
              {t.blogSection.eyebrow}
            </p>
            <h2 className="text-3xl uppercase tracking-wide text-black md:text-5xl">
              <span className="font-light">{t.blogSection.headingLight}</span>{" "}
              <span className="font-bold">{t.blogSection.headingBold}</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="group/link hidden items-center gap-2 text-sm uppercase tracking-[0.15em] text-brand-gray-500 transition-colors duration-300 hover:text-black md:inline-flex"
          >
            <span>{t.blogSection.viewAll}</span>
            <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.href} post={post} />
          ))}
        </div>

        <Link
          href="/blog"
          className="group/link mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-brand-gray-500 transition-colors duration-300 hover:text-black md:hidden"
        >
          <span>{t.blogSection.viewAll}</span>
          <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}

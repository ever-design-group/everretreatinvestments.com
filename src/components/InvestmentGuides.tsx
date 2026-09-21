"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// Matches Blog.tsx's real post set exactly — same 6 real blog pages, same
// title/excerpt translations, so this section and the homepage Blog section
// never show mismatched content. Only the first 4 show here (matches
// balitecture.com's own "Before You Buy" section, which picks 4 too) — the
// rest stay reachable via "View All Posts".
const blogMeta = [
  { href: "/blog/rwanda-villa-rental-income" },
  { href: "/blog/best-area-to-invest-in-rwanda" },
  { href: "/blog/can-foreigners-buy-property-in-rwanda" },
  { href: "/blog/lake-kivu-vs-musanze-investment" },
];

export function InvestmentGuides() {
  const { t } = useLanguage();
  const g = t.investmentGuidesSection;
  const blogPosts = blogMeta.map((meta, i) => ({
    ...t.blogSection.posts[i],
    ...meta,
  }));

  return (
    <section className="bg-brand-off-white py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mb-8">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-brand-gray-500">
            {g.eyebrow}
          </p>
          <h2 className="text-2xl uppercase tracking-wide text-black md:text-3xl">
            <span className="font-light">{g.headingLight}</span>{" "}
            <span className="font-bold">{g.headingBold}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group block bg-brand-white p-6 transition-colors duration-300 hover:bg-black"
            >
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-black transition-colors group-hover:text-white">
                {post.title}
              </h3>
              <p className="text-sm leading-relaxed text-brand-gray-700 transition-colors group-hover:text-brand-gray-300">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wide text-black transition-colors group-hover:text-white">
                {g.readMore} →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/blog"
            className="group/link inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-black"
          >
            <span>{g.viewAll}</span>
            <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

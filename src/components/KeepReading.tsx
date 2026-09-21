"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// Same 6 real posts as Blog.tsx / InvestmentGuides.tsx, in the same order as
// t.blogSection.posts, so every blog page can look up title/excerpt by index
// and show a "Keep Reading" pair that excludes itself.
const blogMeta = [
  { href: "/blog/rwanda-villa-rental-income", category: "investment" as const },
  { href: "/blog/best-area-to-invest-in-rwanda", category: "location" as const },
  { href: "/blog/can-foreigners-buy-property-in-rwanda", category: "legal" as const },
  { href: "/blog/lake-kivu-vs-musanze-investment", category: "location" as const },
  { href: "/blog/cost-to-build-villa-in-rwanda", category: "building" as const },
  { href: "/blog/how-to-build-a-villa-in-rwanda", category: "building" as const },
];

interface KeepReadingProps {
  currentHref: string;
}

// Matches the real balitecture.com blog post template's "Related reading"
// block: nested inside the same max-w-3xl article column as a bordered-top
// divider (not a separate full-bleed section) — confirmed against the live
// reference's `<div class="border-t border-brand-gray-200 pt-10 mt-10">`
// wrapper — with flat, image-less, hover-invert cards.
export function KeepReading({ currentHref }: KeepReadingProps) {
  const { t } = useLanguage();

  const posts = blogMeta
    .map((meta, i) => ({
      ...t.blogSection.posts[i],
      ...meta,
      categoryLabel: t.blogCategories[meta.category],
    }))
    .filter((post) => post.href !== currentHref)
    .slice(0, 2);

  return (
    <div className="mt-10 border-t border-brand-gray-200 pt-10">
      <p className="mb-6 text-xs uppercase tracking-[0.3em] text-brand-gray-500">
        Related reading
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.href}
            href={post.href}
            className="group flex items-start gap-4 bg-brand-off-white p-5 transition-colors duration-300 hover:bg-brand-black"
          >
            <div>
              <span className="text-xs font-medium uppercase tracking-wider text-brand-gray-500 transition-colors group-hover:text-brand-gray-400">
                {post.categoryLabel}
              </span>
              <p className="mt-1 text-sm font-bold uppercase leading-snug tracking-wide text-brand-black transition-colors group-hover:text-brand-white">
                {post.title}
              </p>
            </div>
            <span className="ml-auto shrink-0 text-lg text-brand-gray-400 transition-colors group-hover:text-brand-white">
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

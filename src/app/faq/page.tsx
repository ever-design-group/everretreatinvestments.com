"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// Real blog posts (dates/images/hrefs paired positionally with t.blogSection.posts —
// translated text can't carry non-text data like image paths or routes).
const blogMeta = [
  { date: "April 2026", image: "/images/blog/rwanda-villa-rental-income-blog-hero.webp", href: "/blog/rwanda-villa-rental-income" },
  { date: "April 2026", image: "/images/blog/best-area-to-invest-in-rwanda-blog-hero.webp", href: "/blog/best-area-to-invest-in-rwanda" },
  { date: "March 2026", image: "/images/blog/can-foreigners-buy-property-in-rwanda-blog-hero.webp", href: "/blog/can-foreigners-buy-property-in-rwanda" },
];

const serviceHrefs = [
  "/services/architecture",
  "/services/construction",
  "/services/villa-management",
  "/services/land",
  "/services/development-partnerships",
] as const;

// Groups the 9 shared FAQ items (t.faqSection.items, in their fixed established
// order) into 4 topical sections, matching the reference site's topic-grouped
// accordion pattern instead of one long undifferentiated list.
const topicGroups = [
  { topicKey: "topicBuying", indices: [0, 1, 7] },
  { topicKey: "topicInvestment", indices: [2, 8] },
  { topicKey: "topicBuilding", indices: [3, 4] },
  { topicKey: "topicOngoing", indices: [5, 6] },
] as const;

export default function FAQPage() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>("0-0");
  const faqItems = t.faqSection.items;
  const blogPosts = blogMeta.map((meta, i) => ({ ...t.blogSection.posts[i], ...meta }));
  const services = serviceHrefs.map((href, i) => {
    const keys = ["architecture", "construction", "villaManagement", "landSourcing", "developmentPartnerships"] as const;
    const item = t.servicesPage.serviceItems[keys[i]];
    return { href, tagline: item.tagline, cta: item.cta };
  });

  return (
    <>

      {/* 1. Hero */}
      <section className="relative min-h-[85vh] w-full overflow-hidden">
        <Image
          src="/images/hero/hero-2-full.webp"
          alt="Rwanda hillside landscape with Ever Retreat villas"
          fill
          priority
          className="object-cover hero-bg-image"
          sizes="100vw"
        />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-32 md:px-12 md:pb-24">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/50 md:text-sm">
            Ever Retreat Rwanda
          </p>
          <h1 className="max-w-3xl text-4xl uppercase leading-[0.95] tracking-[0.05em] text-white md:text-6xl lg:text-7xl">
            <span className="font-light">Frequently Asked</span> <span className="font-bold">Questions</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:mt-8 md:text-lg">
            Answers to the questions we get asked most about building villas in Rwanda.
          </p>
        </div>
      </section>

      {/* 2. Intro */}
      <section className="bg-brand-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
            {t.faqSection.eyebrow}
          </p>
          <h2 className="mt-4 text-2xl font-bold text-black md:text-4xl">
            {t.faqSection.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-gray-600">
            {t.faqSection.paragraph}
          </p>
        </div>
      </section>

      {/* 3-6. Four topic-grouped accordion sections */}
      {topicGroups.map((group, groupIndex) => (
        <section
          key={group.topicKey}
          className={`py-12 md:py-16 ${groupIndex % 2 === 0 ? "bg-brand-off-white" : "bg-brand-white"}`}
        >
          <div className="mx-auto max-w-3xl px-6">
            <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-black">
              {t.faqPage[group.topicKey]}
            </h3>
            <div className="divide-y divide-brand-gray-200">
              {group.indices.map((itemIndex) => {
                const item = faqItems[itemIndex];
                const id = `${groupIndex}-${itemIndex}`;
                const isOpen = openId === id;
                return (
                  <div key={id} className="py-4">
                    <button
                      onClick={() => setOpenId(isOpen ? null : id)}
                      className="flex w-full min-h-[44px] items-center justify-between text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="pr-8 font-semibold text-black">{item.question}</span>
                      <span className="flex-shrink-0 text-2xl text-brand-gray-500">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="mt-3 leading-relaxed text-brand-gray-700">{item.answer}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* 7. Related resources grid */}
      <section className="bg-brand-off-white py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-6">
          <p className="mb-2 text-center text-xs font-medium uppercase tracking-widest text-brand-gray-500">
            {t.faqPage.resourcesEyebrow}
          </p>
          <h3 className="mb-10 text-center text-2xl font-bold text-black md:text-3xl">
            {t.faqPage.resourcesHeading}
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {blogPosts.map((post) => (
              <Link key={post.href} href={post.href} className="group overflow-hidden rounded-sm bg-white">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-brand-gray-400">{post.date}</p>
                  <h4 className="mt-2 text-base font-semibold leading-snug text-black">{post.title}</h4>
                  <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-black">
                    {t.faqPage.exploreLabel}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Services grid */}
      <section className="bg-brand-white py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-6">
          <p className="mb-2 text-center text-xs font-medium uppercase tracking-widest text-brand-gray-500">
            {t.faqPage.servicesEyebrow}
          </p>
          <h3 className="mb-10 text-center text-2xl font-bold text-black md:text-3xl">
            {t.faqPage.servicesHeading}
          </h3>
          <div className="grid grid-cols-1 gap-px bg-brand-gray-200 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex h-full flex-col justify-between bg-brand-white p-6 transition-colors hover:bg-brand-off-white"
              >
                <p className="text-sm font-semibold text-black">{service.tagline}</p>
                <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wide text-black transition-colors group-hover:text-brand-gray-500">
                  {service.cta} &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Closing CTA */}
      <section className="bg-brand-teal py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-white/50">
            {t.faqPage.closingEyebrow}
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold text-white md:text-5xl">
            <span className="font-light">{t.faqPage.closingHeadingLight}</span>{" "}
            <span className="font-bold">{t.faqPage.closingHeadingBold}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70">
            {t.faqPage.closingParagraph}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-brand-teal transition-colors hover:bg-brand-gray-200"
            >
              {t.faqPage.closingCtaPrimary}
            </Link>
            <Link
              href="/developments"
              className="border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white/10"
            >
              {t.faqPage.closingCtaSecondary}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

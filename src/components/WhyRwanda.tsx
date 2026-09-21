"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function WhyRwanda() {
  const { t } = useLanguage();

  return (
    <section className="bg-brand-white py-16 md:py-32">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <Image
              src="/images/hero/villa-photos.jpeg"
              alt="Rwanda landscape with mountains and lakes"
              width={800}
              height={600}
              className="w-full rounded-sm object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              {t.whyRwanda.eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-black sm:text-3xl md:text-5xl md:leading-tight">
              {t.whyRwanda.heading}
            </h2>
            <p className="mt-4 sm:mt-6 text-sm leading-relaxed text-brand-gray-600 md:text-base">
              {t.whyRwanda.paragraph}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
              {t.whyRwanda.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-black md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-brand-gray-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/invest-in-rwanda"
              className="mt-8 inline-block text-sm font-semibold text-black underline underline-offset-4 hover:text-brand-gray-600"
            >
              {t.whyRwanda.cta} &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


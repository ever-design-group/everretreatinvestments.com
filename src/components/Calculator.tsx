"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Calculator() {
  const { t } = useLanguage();

  return (
    <section className="bg-brand-off-white py-16 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              {t.calculator.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-black md:text-5xl md:leading-tight">
              {t.calculator.heading}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-brand-gray-600">
              {t.calculator.paragraph}
            </p>
            <Link
              href="/build-calculator"
              className="mt-8 inline-block text-sm font-semibold text-black underline underline-offset-4 hover:text-brand-gray-600"
            >
              {t.calculator.cta} &rarr;
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/images/services/calculator-lifestyle.webp"
              alt="Woman relaxing at infinity pool overlooking Rwanda landscape"
              width={800}
              height={600}
              className="w-full rounded-sm object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

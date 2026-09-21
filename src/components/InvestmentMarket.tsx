"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function InvestmentMarket() {
  const { t } = useLanguage();
  const m = t.investmentMarket;

  const stats = [
    { value: "15-20%", label: m.sideStat1Label },
    { value: "85%+", label: m.sideStat2Label },
    { value: "120", label: m.sideStat3Label },
    { value: "10+", label: m.sideStat4Label },
  ];

  return (
    <section className="bg-brand-teal py-16 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/hero/aerial-rwanda.webp"
              alt="Aerial view of Rwanda's landscape"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/50">
              {m.eyebrow}
            </p>
            <h2 className="text-3xl uppercase leading-tight tracking-wide text-white md:text-4xl lg:text-5xl">
              {m.heading}
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
              {m.paragraph}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold tabular-nums text-white md:text-3xl">
                    {stat.value}
                  </div>
                  <p className="mt-0.5 text-xs uppercase tracking-wider text-white/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/invest-in-rwanda"
              className="group/link mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-white"
            >
              <span>{m.cta}</span>
              <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


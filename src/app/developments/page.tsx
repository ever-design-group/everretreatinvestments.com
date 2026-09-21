"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Developments } from "@/components/Developments";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { PreviousDevelopments } from "@/components/PreviousDevelopments";
import { InvestmentGuides } from "@/components/InvestmentGuides";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useCurrency } from "@/lib/currency/CurrencyContext";
import Image from "next/image";
import Link from "next/link";

export default function DevelopmentsPage() {
  const { t } = useLanguage();
  const { formatPrice } = useCurrency();
  const d = t.developmentsPage;
  const de = t.developmentsPageExtras;
  const serviceLinks = [
    { kicker: de.calculatorKicker, title: de.calculatorTitle, href: "/build-calculator" },
    { kicker: de.constructionKicker, title: de.constructionTitle, href: "/services/construction" },
    { kicker: de.villaManagementKicker, title: de.villaManagementTitle, href: "/services/villa-management" },
  ];
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative min-h-[85vh] w-full overflow-hidden">
          <div className="absolute inset-0">
            <Image
               src="/images/hero/aerial-rwanda.webp"
               alt="Rwanda aerial landscape"
              fill
              priority
              sizes="100vw"
              className="object-cover hero-bg-image"
            />
          </div>
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent z-10" />
          <div className="relative z-20 mx-auto flex min-h-[85vh] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-32 md:px-12 md:pb-24">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/50 md:text-sm">
              {d.heroEyebrow}
            </p>
            <h1 className="text-4xl uppercase leading-[0.95] tracking-[0.05em] text-white md:text-7xl lg:text-8xl">
              <span className="font-light">{d.heroHeadingLine1}</span>
              <br />
              <span className="font-bold">{d.heroHeadingLine2}</span>
            </h1>
            <div className="mt-10 flex flex-wrap gap-8 md:mt-14 md:gap-16">
              <div>
                <p className="text-3xl font-bold text-white md:text-4xl">{formatPrice(220000)}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-white/40">{d.stat1Label}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white md:text-4xl">15-20%</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-white/40">{d.stat2Label}</p>
              </div>
              <div>
                <p className="text-3xl font-bold tabular-nums text-white md:text-4xl">3</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-white/40">{d.stat3Label}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white md:text-4xl">Full</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-white/40">{d.stat4Label}</p>
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-3 md:mt-12 md:w-auto md:flex-row">
              <Link
                href="/contact"
                className="w-full rounded-sm bg-white/90 px-8 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.12em] text-black backdrop-blur-sm transition-all duration-300 hover:bg-white md:w-auto"
              >
                {d.ctaPrimary}
              </Link>
              <Link
                href="https://wa.me/250787524298"
                className="w-full rounded-sm border border-white/30 px-8 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-white/10 md:w-auto"
              >
                {d.ctaSecondary}
              </Link>
            </div>
          </div>
        </section>

        <Developments showAll variant="hub" />

        <section className="bg-brand-white py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {serviceLinks.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group border border-brand-gray-200 bg-brand-white p-6 transition-colors hover:border-brand-gray-500"
                >
                  <p className="mb-2 text-xs uppercase tracking-[0.3em] text-brand-gray-500">
                    {service.kicker}
                  </p>
                  <p className="text-sm font-bold uppercase tracking-wider text-black transition-transform group-hover:translate-x-1">
                    {service.title} →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <InvestmentMarket />

        <PreviousDevelopments />

        <InvestmentGuides />

        <InterestedInInvesting />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}


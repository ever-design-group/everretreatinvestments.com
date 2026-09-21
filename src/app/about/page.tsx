"use client";

import { Footer } from "@/components/Footer";
import { Team } from "@/components/Team";
import { WhyRwanda } from "@/components/WhyRwanda";
import { WhyEverRetreat } from "@/components/WhyEverRetreat";
import { Awards } from "@/components/Awards";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Image from "next/image";

const galleryImages = [
  "/images/portfolio/nara-pool.webp",
  "/images/portfolio/villa-kitchen-living-open.webp",
  "/images/portfolio/suku-terrace.webp",
  "/images/portfolio/villa-dining-rattan-interior.webp",
  "/images/portfolio/villa-natural.webp",
  "/images/portfolio/suku-bedroom.webp",
];

export default function AboutPage() {
  const { t } = useLanguage();
  const p = t.aboutPageExtra;

  return (
    <>
      <main className="flex-1">
        <section className="relative min-h-[85vh] w-full overflow-hidden">
          <Image
            src="/images/hero/aerial-rwanda.webp"
            alt="Aerial view of Ever Retreat landscape in Rwanda"
            fill
            priority
            className="object-cover hero-bg-image"
          />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
          <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-32 md:px-12 md:pb-24">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/50 md:text-sm">
              {p.heroEyebrow}
            </p>
            <h1 className="text-4xl uppercase leading-[0.95] tracking-wide text-white md:text-7xl lg:text-8xl">
              <span className="font-light">{p.heroTitleLight}</span>
              <br />
              <span className="font-light">{p.heroTitleLine2}</span>
              <br />
              <span className="font-bold">{p.heroTitleBold}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:mt-8 md:text-lg">
              {p.heroSubtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-8 md:mt-14 md:gap-16">
              {[
                { value: "120", label: t.statsBarSection.villasBuiltLabel },
                { value: "82", label: t.statsBarSection.teamMembersLabel },
                { value: "10+", label: t.statsBarSection.yearsBuildingLabel },
                { value: "95%", label: t.statsBarSection.avgOccupancyLabel },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold tabular-nums text-white md:text-4xl">
                    {stat.value}
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-wider text-white/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-white py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-brand-gray-500">
                  {p.originEyebrow}
                </p>
                <h2 className="text-3xl uppercase leading-tight tracking-wide text-black md:text-4xl lg:text-5xl">
                  <span className="font-light">{p.originHeadingLight}</span>
                  <br />
                  <span className="font-bold">{p.originHeadingBold}</span>
                </h2>
              </div>
              <div className="space-y-6 md:col-span-7">
                <p className="text-base leading-relaxed text-brand-gray-700 md:text-lg">{p.originParagraph1}</p>
                <p className="text-base leading-relaxed text-brand-gray-700 md:text-lg">{p.originParagraph2}</p>
                <p className="text-base leading-relaxed text-brand-gray-700 md:text-lg">{p.originParagraph3}</p>
              </div>
            </div>
          </div>
        </section>

        <WhyEverRetreat variant="grid" />

        <section className="bg-brand-white py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
              {galleryImages.map((src) => (
                <div key={src} className="relative aspect-square overflow-hidden rounded-sm">
                  <Image
                    src={src}
                    alt="Ever Retreat villa"
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <WhyRwanda />

        <Awards />

        <Testimonials />

        <Team />

        <FAQ />
      </main>
      <FinalCTA />
      <Footer />
    </>
  );
}

"use client";

import { useState } from "react";
import { Footer } from "@/components/Footer";
import { DevelopmentHero } from "@/components/DevelopmentHero";
import { Team } from "@/components/Team";
import { ZoneMatters } from "@/components/ZoneMatters";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Link from "next/link";
import Image from "next/image";

const relatedDevelopments = [
  { id: "solas-uluwatu", name: "Cottage", tag: "Rubavu", image: "/images/developments/villa-photos.jpeg", href: "/developments/solas-uluwatu" },
  { id: "suku-residences", name: "Virunga Villas", tag: "Musanze", image: "/images/developments/suku-4br/suku-4br-1.webp", href: "/developments/suku-residences" },
];

export default function NaraVillasPage() {
  const { t } = useLanguage();
  const p = t.naraVillasPage;
  const dx = t.devDetailExtras;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const features = [
    { number: "01", title: p.feature1Title, description: p.feature1Desc },
    { number: "02", title: p.feature2Title, description: p.feature2Desc },
    { number: "03", title: p.feature3Title, description: p.feature3Desc },
    { number: "04", title: p.feature4Title, description: p.feature4Desc },
    { number: "05", title: p.feature5Title, description: p.feature5Desc },
  ];

  const attractions = [
    {
      name: p.attraction1Name,
      time: p.attraction1Time,
      image: "/images/areas/lake-kivu-area.webp",
      description: p.attraction1Desc,
    },
    {
      name: p.attraction2Name,
      time: p.attraction2Time,
      image: "/images/areas/lake-kivu-area.webp",
      description: p.attraction2Desc,
    },
  ];

  const glanceRows = [
    { id: "development", label: p.glanceDevelopmentLabel, value: p.glanceDevelopmentValue },
    { id: "developer", label: p.glanceDeveloperLabel, value: p.glanceDeveloperValue },
    { id: "location", label: p.glanceLocationLabel, value: p.glanceLocationValue },
    { id: "zone", label: p.glanceZoneLabel, value: p.glanceZoneValue },
    { id: "totalVillas", label: p.glanceTotalVillasLabel, value: p.glanceTotalVillasValue },
    { id: "buildStatus", label: p.glanceBuildStatusLabel, value: p.glanceBuildStatusValue },
    { id: "status", label: p.glanceStatusLabel, value: p.glanceStatusValue },
  ];

  return (
    <>
      <DevelopmentHero
        name={p.heroName}
        tagline={p.heroTagline}
        subtitle={p.heroSubtitle}
        image="/images/developments/villa-photos.jpeg"
        imageAlt={p.heroImageAlt}
        ctaHref="#enquire"
        secondaryCtaHref="#enquire"
        secondaryCtaLabel={p.heroSecondaryCtaLabel}
        statusBadge={p.heroStatusBadge}
      />

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
                {p.developmentEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl md:leading-tight">
                {p.developmentHeading}
              </h2>
              <div className="mt-8 space-y-6 text-base leading-relaxed text-brand-gray-600">
                <p>{p.developmentParagraph1}</p>
                <p>{p.developmentParagraph2}</p>
                <p>{p.developmentParagraph3}</p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-sm border border-brand-gray-200 p-4">
                  <p className="text-xs uppercase tracking-wider text-brand-gray-500">{p.locationLabel}</p>
                  <Link
                    href="/areas/rubavu"
                    className="mt-1 block text-lg font-bold text-black underline-offset-4 hover:underline"
                  >
                    {p.locationValue}
                  </Link>
                </div>
                <div className="rounded-sm border border-brand-gray-200 p-4">
                  <p className="text-xs uppercase tracking-wider text-brand-gray-500">{p.totalVillasLabel}</p>
                  <p className="mt-1 text-lg font-bold text-black">{p.totalVillasValue}</p>
                </div>
                <div className="rounded-sm border border-brand-gray-200 p-4">
                  <p className="text-xs uppercase tracking-wider text-brand-gray-500">{p.statusLabel}</p>
                  <p className="mt-1 text-lg font-bold text-black">{p.statusValue}</p>
                </div>
                <div className="rounded-sm border border-brand-gray-200 p-4">
                  <p className="text-xs uppercase tracking-wider text-brand-gray-500">{p.buildStatusLabel}</p>
                  <p className="mt-1 text-lg font-bold text-black">{p.buildStatusValue}</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
                {p.glanceEyebrow}
              </p>
              <div className="mt-4 divide-y divide-brand-gray-200 rounded-sm border border-brand-gray-200">
                {glanceRows.map((row) => (
                  <div key={row.id} className="flex justify-between px-6 py-3">
                    <span className="text-sm text-brand-gray-500">{row.label}</span>
                    {row.id === "location" ? (
                      <Link
                        href="/areas/rubavu"
                        className="text-sm font-semibold text-black underline-offset-4 hover:underline"
                      >
                        {row.value}
                      </Link>
                    ) : (
                      <span className="text-sm font-semibold text-black">{row.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ZoneMatters />

      <section className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
        <Image
          src="/images/developments/villa-photos.jpeg"
          alt={p.longViewImageAlt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/60 via-brand-teal/20 to-transparent" />
        <div className="absolute inset-0 flex items-end p-8 md:p-14">
          <div className="max-w-lg">
            <p className="text-xs tracking-[0.3em] text-white/50 uppercase mb-3">{p.longViewLabel}</p>
            <p className="text-xl md:text-2xl font-light text-white leading-snug">
              {p.longViewText}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              {p.featuresEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
              {p.featuresHeading}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.number} className="flex gap-4">
                <span className="text-2xl font-bold text-brand-gray-300">{feature.number}</span>
                <div>
                  <h3 className="text-lg font-bold text-black">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-off-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              {p.attractionsEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
              {p.attractionsHeading}
            </h2>
            <Link
              href="/areas/rubavu"
              className="mt-4 inline-block border-b border-black pb-0.5 text-xs font-semibold uppercase tracking-[0.12em] text-black transition-colors hover:text-brand-gray-500"
            >
              {p.exploreAreaLink}
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="relative aspect-[16/9] overflow-hidden lg:row-span-2">
              <Image
                src="/images/areas/lake-kivu-area.webp"
                alt={p.lakeKivuImageAlt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-teal/70 via-brand-teal/10 to-transparent" />
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                <span className="inline-block text-xs tracking-[0.25em] text-white/70 uppercase mb-2">
                  {p.lakeKivuBadge}
                </span>
                <h3 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-wide">
                  {p.lakeKivuTitle}
                </h3>
                <p className="text-sm text-white/60 font-body mt-1 max-w-md">
                  {p.lakeKivuDesc}
                </p>
              </div>
            </div>
            {attractions.map((attraction) => (
              <div
                key={attraction.name}
                className="relative aspect-[16/9] overflow-hidden"
              >
                <Image
                  src={attraction.image}
                  alt={attraction.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-teal/70 via-brand-teal/10 to-transparent" />
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                  <span className="inline-block text-xs tracking-[0.25em] text-white/70 uppercase mb-2">
                    {attraction.time}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-wide">
                    {attraction.name}
                  </h3>
                  <p className="text-sm text-white/60 font-body mt-1">
                    {attraction.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-off-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-center text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              {dx.faqEyebrow}
            </p>
            <h2 className="mb-10 text-center text-3xl font-bold text-black md:text-5xl">
              {dx.faqHeading}
            </h2>
            <div className="divide-y divide-brand-gray-200">
              {dx.naraFaq.map((item, index) => (
                <div key={item.question} className="py-5">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex min-h-[44px] w-full items-center justify-between text-left"
                  >
                    <span className="pr-8 font-semibold text-black md:text-lg">{item.question}</span>
                    <span className="flex-shrink-0 text-2xl text-brand-gray-500">
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="mt-3">
                      <p className="leading-relaxed text-brand-gray-700 md:text-base">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              {dx.relatedEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
              {dx.relatedHeading}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {relatedDevelopments.map((dev) => (
              <Link
                key={dev.id}
                href={dev.href}
                className="group block overflow-hidden rounded-sm border border-brand-gray-100 bg-white transition-colors duration-300 hover:border-brand-gray-400"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={dev.image}
                    alt={dev.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">{dev.tag}</p>
                  <h3 className="mt-2 text-lg font-bold text-black">{dev.name}</h3>
                  <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-wide text-black">
                    {dx.relatedViewLabel} &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Team />

      <section id="enquire" className="relative overflow-hidden bg-brand-teal py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/developments/villa-photos.jpeg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-white/70">
              {p.ctaEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl md:leading-tight">
              {p.ctaHeading}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              {p.ctaParagraph}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
              <Link
                href="/contact"
                className="rounded-sm bg-white px-10 py-4 text-sm font-semibold text-black transition-colors hover:bg-brand-gray-200"
              >
                {p.ctaEnquireLabel}
              </Link>
              <Link
                href="/developments"
                className="rounded-sm border border-white/40 px-10 py-4 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                {p.ctaViewAllLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

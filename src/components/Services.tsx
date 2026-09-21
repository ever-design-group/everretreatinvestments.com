"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useCurrency } from "@/lib/currency/CurrencyContext";
import type { TranslationShape } from "@/lib/i18n/translations";

function buildServices(t: TranslationShape, formatPrice: (usd: number) => string) {
  const items = t.services.items;
  return [
    {
      title: items.architecture.title,
      price: `${t.services.pricePrefix} ${formatPrice(7000)} ${items.architecture.priceSuffix}`,
      description: items.architecture.description,
      image: "/images/services/villa-design.webp",
      imageAlt: "Architecture & Design - Ever Retreat",
      href: "/services/architecture",
    },
    {
      title: items.construction.title,
      price: `${t.services.pricePrefix} ${formatPrice(1000)}${items.construction.priceSuffix}`,
      description: items.construction.description,
      image: "/images/services/villa-exterior.webp",
      imageAlt: "Construction - Ever Retreat",
      href: "/services/construction",
    },
    {
      title: items.villaManagement.title,
      price: items.villaManagement.price,
      description: items.villaManagement.description,
      image: "/images/services/villa-kitchen-lived-in.webp",
      imageAlt: "Villa Management - Ever Retreat",
      href: "/services/villa-management",
    },
    {
      title: items.landSourcing.title,
      price: items.landSourcing.price,
      description: items.landSourcing.description,
      image: "/images/services/land-aerial.webp",
      imageAlt: "Land Sourcing - Ever Retreat",
      href: "/services/land",
    },
  ];
}

export function Services() {
  const { t } = useLanguage();
  const { formatPrice } = useCurrency();
  const services = buildServices(t, formatPrice);

  return (
    <section className="bg-brand-white py-12 sm:py-16 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="mb-8 grid grid-cols-1 items-end gap-6 sm:mb-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-brand-gray-500">
              {t.services.eyebrow}
            </p>
            <h2 className="text-2xl uppercase leading-tight tracking-wide text-black sm:text-3xl md:text-5xl">
              <span className="font-light">{t.services.headingLight}</span>
              <br />
              <span className="font-bold">{t.services.headingBold}</span>
            </h2>
          </div>
          <div>
            <p className="max-w-lg text-sm leading-relaxed text-brand-gray-700 md:text-base">
              {t.services.paragraph}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />
                <span className="absolute bottom-4 right-4 border border-white/30 bg-white/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                  {service.price}
                </span>
              </div>
              <div className="pb-6 pt-4">
                <h3 className="text-lg font-semibold uppercase tracking-wide text-black">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-gray-500">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2">
          <Link href="/services/development-partnerships" className="group block">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/services/development-partner.webp"
                alt="Completed multi-villa development by Ever Retreat"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />
            </div>
            <div className="pb-6 pt-4">
              <p className="text-xs uppercase tracking-widest text-brand-gray-500">
                {t.services.partnershipsEyebrow}
              </p>
              <h3 className="mt-2 text-lg font-semibold uppercase tracking-wide text-black">
                {t.services.partnershipsTitle}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-gray-500">
                {t.services.partnershipsDescription}
              </p>
              <div className="mt-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-black">
                {t.services.learnMore}
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>

          <Link href="/packages" className="group block">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/portfolio/villa-dining-rattan-interior.webp"
                alt="Villa Packages"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />
            </div>
            <div className="pb-6 pt-4">
              <p className="text-xs uppercase tracking-widest text-brand-gray-500">
                {t.services.pricePrefix} {formatPrice(220000)}
              </p>
              <h3 className="mt-2 text-lg font-semibold uppercase tracking-wide text-black">
                {t.services.packagesTitle}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-gray-500">
                {t.services.packagesDescriptionPrefix} {formatPrice(220000)}.
              </p>
              <div className="mt-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-black">
                {t.services.viewPackages}
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-8 text-center sm:mt-8">
          <p className="text-xs font-medium text-brand-gray-500 sm:text-sm">
            {t.services.fixedPriceQuestion}
          </p>
          <p className="mt-2 text-sm text-black sm:text-base">
            {t.services.packagesDescriptionPrefix} {formatPrice(220000)}.
          </p>
          <Link
            href="/packages"
            className="mt-4 inline-block text-xs font-semibold text-black underline underline-offset-4 hover:text-brand-gray-600 sm:text-sm"
          >
            {t.services.viewPackages} &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}


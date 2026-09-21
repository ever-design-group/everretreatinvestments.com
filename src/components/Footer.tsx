"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { TranslationShape } from "@/lib/i18n/translations";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/everretreatrw" },
  { label: "Facebook", href: "https://facebook.com/everretreatrw" },
  { label: "LinkedIn", href: "https://linkedin.com/company/everretreat" },
  { label: "YouTube", href: "https://youtube.com/@everretreat" },
  { label: "TikTok", href: "https://tiktok.com/@everretreat" },
];

function buildFooterLinks(t: TranslationShape) {
  const companyLinks = [
    { label: t.footer.company.about, href: "/about" },
    { label: t.footer.company.howWeWork, href: "/process" },
    { label: t.footer.company.portfolio, href: "/portfolio" },
    { label: t.footer.company.villaTours, href: "/villa-tours" },
    { label: t.footer.company.testimonials, href: "/testimonials" },
    { label: t.footer.company.blog, href: "/blog" },
    { label: t.footer.company.caseStudy, href: "/case-study" },
    { label: t.footer.company.clientForms, href: "/forms" },
    { label: t.footer.company.payDeposit, href: "/buy" },
    { label: t.footer.company.referFriend, href: "/refer-a-friend" },
    { label: t.footer.company.contact, href: "/contact" },
  ];

  const serviceLinks = [
    { label: t.footer.services.architecture, href: "/services/architecture" },
    { label: t.footer.services.construction, href: "/services/construction" },
    { label: t.footer.services.villaManagement, href: "/services/villa-management" },
    { label: t.footer.services.landSourcing, href: "/services/land" },
    { label: t.footer.services.developmentPartnerships, href: "/services/development-partnerships" },
    { label: t.footer.services.choosingDeveloper, href: "/choosing-a-rwanda-developer" },
    { label: t.footer.services.villaPackages, href: "/packages" },
    { label: t.footer.services.buildCalculator, href: "/build-calculator" },
  ];

  const investLinks = [
    { label: t.footer.invest.developments, href: "/developments" },
    { label: t.footer.invest.areaGuides, href: "/areas" },
    { label: t.footer.invest.investInRwanda, href: "/invest-in-rwanda" },
    { label: t.footer.invest.howToBuy, href: "/how-to-buy-property-in-rwanda" },
    { label: t.footer.invest.fractionalOwnership, href: "/fractional-ownership" },
    { label: t.footer.invest.landZoning, href: "/rwanda-land-zoning" },
    { label: t.footer.invest.faq, href: "/faq" },
  ];

  return { companyLinks, serviceLinks, investLinks };
}

export function Footer() {
  const { t } = useLanguage();
  const { companyLinks, serviceLinks, investLinks } = buildFooterLinks(t);

  return (
    <footer className="bg-brand-teal text-white">
      <div className="mx-auto max-w-[1440px] px-5 pb-12 pt-16 md:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="relative block h-20 w-64 md:h-24 md:w-72">
              <Image
                src="/images/logos/Ever_retreat_logo__2_-removebg-preview.png"
                alt="Ever Retreat - Rwanda Property, Architecture & Construction"
                fill
                sizes="(max-width: 768px) 256px, 288px"
                className="object-contain object-left"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {t.footer.tagline}
            </p>
            <div className="mt-6 space-y-1">
              <Link
                href="https://wa.me/250787524298"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-1 text-sm text-white/80 hover:text-white"
              >
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-green" />
                +250 787 524 298
              </Link>
              <Link
                href="mailto:info@everretreat.com"
                className="block py-1 text-sm text-white/80 hover:text-white"
              >
                info@everretreat.com
              </Link>
              <p className="pt-1 text-xs text-white/50">{t.footer.hours}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-xs text-white/60 hover:text-white"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:col-span-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                {t.footer.companyHeading}
              </p>
              <ul className="mt-4 space-y-1">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block py-1.5 text-sm text-white/60 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                {t.footer.servicesHeading}
              </p>
              <ul className="mt-4 space-y-1">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block py-1.5 text-sm text-white/60 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                {t.footer.investHeading}
              </p>
              <ul className="mt-4 space-y-1">
                {investLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block py-1.5 text-sm text-white/60 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 md:grid-cols-3">
          <div>
            <p className="text-xs font-semibold text-white/70">{t.footer.rwandaHq}</p>
            <p className="mt-1 text-xs text-white/50">
              KG 541 St, Kimihurura, Kigali
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-white/70">{t.footer.everRetreatOffice}</p>
            <p className="mt-1 text-xs text-white/50">
              Kigali, Rwanda
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-white/70">{t.footer.ourLocation}</p>
            <p className="mt-1 text-xs text-white/50">
            42 KG 670 St, Kimihurura , Kigali
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/50">
            {t.footer.copyright}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link href="/privacy-policy" className="text-xs text-white/50 hover:text-white">
              {t.footer.privacy}
            </Link>
            <Link href="/terms-and-conditions" className="text-xs text-white/50 hover:text-white">
              {t.footer.terms}
            </Link>
            <span className="text-xs text-white/50">{t.footer.licensed}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

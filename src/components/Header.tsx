"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/Button";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useCurrency } from "@/lib/currency/CurrencyContext";
import type { TranslationShape } from "@/lib/i18n/translations";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

// Keeps the nav visually consistent regardless of which language produced the
// label — a longer translated word (e.g. French) shrinks slightly instead of
// pushing the layout wider or wrapping.
function navLabelSizeClass(label: string): string {
  if (label.length > 14) return "text-[11px]";
  if (label.length > 9) return "text-[12px]";
  return "text-[13px]";
}

function buildNavItems(t: TranslationShape): NavItem[] {
  return [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    {
      label: t.nav.developments,
      href: "/developments",
      children: [
        { label: t.nav.developmentsMenu.bp, href: "/developments/nara-villas" },
        { label: t.nav.developmentsMenu.virunga, href: "/developments/suku-residences" },
        { label: t.nav.developmentsMenu.cottage, href: "/developments/solas-uluwatu" },
        { label: t.nav.developmentsMenu.kigaliRetreat, href: "/areas/kigali" },
        { label: t.nav.developmentsMenu.nyungweRetreat, href: "/areas/nyungwe" },
        { label: t.nav.developmentsMenu.huyeVillas, href: "/areas/huye" },
        { label: t.nav.developmentsMenu.nyanzaVillas, href: "/areas/nyanza" },
        { label: t.nav.developmentsMenu.akageraRetreat, href: "/areas/akagera" },
        { label: t.nav.developmentsMenu.viewAll, href: "/developments" },
      ],
    },
    {
      label: t.nav.services,
      href: "/services",
      children: [
        { label: t.nav.servicesMenu.architecture, href: "/services/architecture" },
        { label: t.nav.servicesMenu.construction, href: "/services/construction" },
        { label: t.nav.servicesMenu.villaManagement, href: "/services/villa-management" },
        { label: t.nav.servicesMenu.landSourcing, href: "/services/land" },
        { label: t.nav.servicesMenu.developmentPartnerships, href: "/services/development-partnerships" },
        { label: t.nav.servicesMenu.developerGuide, href: "/choosing-a-rwanda-developer" },
        { label: t.nav.servicesMenu.howToBuy, href: "/how-to-buy-property-in-rwanda" },
      ],
    },
    { label: t.nav.realEstate, href: "/real-estate" },
    { label: t.nav.portfolio, href: "/portfolio" },
    { label: t.nav.areas, href: "/areas" },
    { label: t.nav.blog, href: "/blog" },
  ];
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, toggleLanguage, t } = useLanguage();
  const { currency, setCurrency, toggleCurrency } = useCurrency();
  const pathname = usePathname();

  const navItems = buildNavItems(t);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Reset mobile menu states on route change
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);

    setOpenDropdown(null);

    setMobileExpanded(null);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter] duration-500 ${
        scrolled ? "bg-brand-teal/95 backdrop-blur-sm border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 items-center justify-between px-4 xl:px-6 max-w-[1440px] md:h-24">
        {/* Logo */}
        <Link
          href="/"
          className="relative h-[50px] w-[250px] md:h-[58px] md:w-[265px] 2xl:h-[66px] 2xl:w-[297px] flex-shrink-0"
        >
          <Image
            src="/images/logos/Ever_retreat_logo__2_-removebg-preview.png"
            alt="Ever Retreat"
            fill
            sizes="(max-width: 768px) 250px, (max-width: 1536px) 265px, 297px"
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden xl:flex items-center gap-4">
          {navItems.map((item) => (
            <li
              key={item.href}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.children ? item.label : null)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={`inline-flex items-center gap-1 ${navLabelSizeClass(item.label)} font-semibold uppercase tracking-[0.1em] whitespace-nowrap transition-colors hover:text-white ${
                  isActive(item.href) ? "text-white" : "text-white/70"
                }`}
              >
                {item.label}
                {item.children && (
                  <svg
                    className="h-3 w-3 opacity-50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>

              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                  <div className="min-w-[200px] overflow-hidden rounded-sm border border-white/10 bg-brand-teal/95 backdrop-blur-sm">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-2.5 ${navLabelSizeClass(child.label)} font-semibold uppercase tracking-[0.1em] text-white/70 transition-colors hover:bg-white/5 hover:text-white whitespace-nowrap`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right side - Language, Currency & Contact — ml-4 is a guaranteed floor so
            this can never touch the last nav link, even if justify-between's own
            distributed gap collapses to zero on a long-language row (e.g. French) */}
        <div className="hidden xl:flex items-center gap-4 ml-4 flex-shrink-0">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1 rounded-sm border border-white/25 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/70 transition-colors hover:text-white"
            aria-label="Toggle language"
          >
            {language === "en" ? "EN" : "FR"}
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Currency Toggle */}
          <button
            onClick={toggleCurrency}
            className="flex items-center gap-1.5 border border-white/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-white hover:border-white/40"
            aria-label="Toggle currency"
          >
            {currency === "usd" ? "USD" : "RWF"}
            <svg className="h-2.5 w-2.5 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Contact Button */}
          <Button href="/contact" variant="primary" size="sm">
            {t.nav.contact}
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="relative z-[70] flex h-11 w-11 flex-col items-center justify-center gap-1.5 xl:hidden"
        >
          <span
            className={`block h-px w-6 origin-center bg-white transition-all duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-px w-6 origin-center bg-white transition-all duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu — full-screen overlay, matching the reference's layout:
          logo + close row, centered nav, language/currency pill rows, bordered
          WhatsApp CTA pinned near the bottom. */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-brand-teal xl:hidden">
          {/* Logo — the header's own hamburger button (already animated into an
              X, fixed above this overlay at z-[70]) is the only close control;
              a second close icon here would just duplicate it. */}
          <div className="flex items-center px-6 pb-4 pt-6">
            <Link href="/" className="relative h-9 w-44 flex-shrink-0">
              <Image
                src="/images/logos/Ever_retreat_logo__2_-removebg-preview.png"
                alt="Ever Retreat"
                fill
                sizes="176px"
                className="object-contain object-left"
              />
            </Link>
          </div>

          {/* Centered nav */}
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-6">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.href} className="flex flex-col items-center">
                  <div className="flex items-center gap-2">
                    <Link
                      href={item.href}
                      className={`text-lg font-bold uppercase tracking-wide ${
                        isActive(item.href) ? "text-white" : "text-white/70"
                      }`}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                      }
                      aria-label={`${mobileExpanded === item.label ? "Collapse" : "Expand"} ${item.label} submenu`}
                      aria-expanded={mobileExpanded === item.label}
                      className="p-1 text-white/70"
                    >
                      <svg
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          mobileExpanded === item.label ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M3 5l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                  {mobileExpanded === item.label && (
                    <div className="mt-3 flex flex-col items-center gap-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="text-xs font-semibold uppercase tracking-[0.1em] text-white/50 hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-lg font-bold uppercase tracking-wide ${
                    isActive(item.href) ? "text-white" : "text-white/70"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Language, currency, and WhatsApp CTA */}
          <div className="border-t border-white/10 px-6 pb-8 pt-6">
            <p className="text-center text-xs uppercase tracking-widest text-white/40">
              {t.nav.languageLabel}
            </p>
            <div className="mt-3 flex justify-center gap-2">
              <button
                onClick={() => setLanguage("en")}
                className={`rounded-sm border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                  language === "en"
                    ? "border-white bg-white text-black"
                    : "border-white/25 text-white/60 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("fr")}
                className={`rounded-sm border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                  language === "fr"
                    ? "border-white bg-white text-black"
                    : "border-white/25 text-white/60 hover:text-white"
                }`}
              >
                FR
              </button>
            </div>

            <p className="mt-6 text-center text-xs uppercase tracking-widest text-white/40">
              {t.nav.currencyLabel}
            </p>
            <div className="mt-3 flex justify-center gap-2">
              <button
                onClick={() => setCurrency("usd")}
                className={`rounded-sm border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                  currency === "usd"
                    ? "border-white bg-white text-black"
                    : "border-white/25 text-white/60 hover:text-white"
                }`}
              >
                USD
              </button>
              <button
                onClick={() => setCurrency("rwf")}
                className={`rounded-sm border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                  currency === "rwf"
                    ? "border-white bg-white text-black"
                    : "border-white/25 text-white/60 hover:text-white"
                }`}
              >
                RWF
              </button>
            </div>

            <Link
              href="https://wa.me/250787524298"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full border border-white py-4 text-center text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-black"
            >
              {t.nav.whatsappUs}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

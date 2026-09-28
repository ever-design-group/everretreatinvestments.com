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
        { label: t.nav.developmentsMenu.cottage, href: "/developments/solas-kivu" },
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

  // Lock background scroll while the mobile overlay is open — prevents the
  // page underneath from scrolling (and the resulting fixed-position/touch
  // interaction quirks that causes on iOS Safari specifically).
  useEffect(() => {
    if (menuOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [menuOpen]);

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
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Background/blur lives on its own layer, never on <header> itself.
          <header> is the direct ancestor of the fixed-position mobile menu
          overlay below — a `backdrop-filter` (Tailwind's backdrop-blur-*)
          anywhere on that ancestor chain creates a new containing block for
          `position: fixed` descendants, so the overlay would stop sizing
          itself to the viewport and collapse to this bar's own ~80px height
          instead. That was the real bug: the full-screen mobile menu only
          worked at scrollY 0 (bg-transparent, no filter) and collapsed into
          a thin strip the moment the header went solid+blurred on scroll. */}
      <div
        className={`absolute inset-0 -z-10 transition-[background-color,backdrop-filter] duration-500 ${
          scrolled ? "bg-brand-teal/95 backdrop-blur-sm border-b border-white/10" : "bg-transparent"
        }`}
      />
      {/* Own scrim so the logo/nav/hamburger stay legible against ANY hero
          image, instead of depending on each page's hero to darken its top —
          the hamburger in particular is just 1px lines with no fill, so it
          was going fully invisible over light sky/cloud photos. Dropped once
          scrolled, since the solid teal bar above already gives full contrast. */}
      {!scrolled && (
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/15 to-transparent" />
      )}
      <nav className="relative mx-auto flex h-20 items-center px-5 md:px-6 max-w-[1440px] md:h-24">
        {/* Logo + nav + controls travel together as ONE group so leftover
            width on very wide screens splits evenly on both sides (xl:mx-auto
            centers this whole group within the 1440px row) instead of
            piling up on just one edge — the user specifically asked for the
            left-of-logo and right-of-Contact gaps to match. Internal
            spacing (logo-to-nav, nav-to-controls) stays fixed regardless,
            so this doesn't reintroduce the old elastic gap between Blog and
            the language toggle; only the space *outside* the group grows,
            and it grows symmetrically. This is a deliberate improvement
            over balitecture.com's own reference behavior, which actually
            left-anchors this same cluster and dumps all leftover width on
            the right (confirmed by screenshotting their live site at
            1920px) — matching that exactly would mean asymmetric margins,
            which is the opposite of what was asked for here. */}
        {/* Left-anchored, not centered — the logo must sit at the exact
            same x-position as the Footer's own logo, which only has ONE
            level of centering (the outer <div className="mx-auto
            max-w-[1440px]"> shared by both header and footer). Centering
            this inner group too (an earlier xl:mx-auto attempt) added a
            SECOND, independent centering step here that the footer never
            had, which is exactly what was pushing the header logo to the
            right of the footer logo at every width above 1280px — confirmed
            by measuring both simultaneously via getBoundingClientRect. */}
        <div className="flex items-center gap-6 xl:gap-8">
          {/* Logo — Ever Design Group's mark is ~2:1 (wide icon + wordmark),
              much less elongated than the old Ever Retreat logo (~4.5:1), so
              box dimensions are sized by height (to fit the h-20/h-24 header
              comfortably) with width following the real aspect ratio, rather
              than reusing the old logo's width-driven box. */}
          <Link
            href="/"
            className="relative h-10 w-[82px] sm:h-11 sm:w-[90px] md:h-14 md:w-[114px] 2xl:h-16 2xl:w-[131px] flex-shrink-0"
          >
            <Image
              src="/images/logos/ever-design-group-logo-cropped.png"
              alt="Ever Design Group"
              fill
              sizes="(max-width: 768px) 90px, (max-width: 1536px) 114px, 131px"
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop nav + right-side controls: fixed gap between them
              (not stretchy). English keeps the larger text-sm/gap-8/gap-6;
              French drops one size (text-[13px]) and tightens gaps
              (gap-6/gap-4) purely as extra safety margin on top of the
              shortened translations ("Portefeuille" -> "Portfolio") — belt
              and suspenders, so French keeps comfortable room to spare
              rather than sitting at the exact same edge as English. */}
          <div className={`hidden items-center xl:flex ${language === "fr" ? "gap-6" : "gap-8"}`}>
          <ul className={`flex items-center ${language === "fr" ? "gap-4" : "gap-6"}`}>
            {navItems.map((item) => (
              <li
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.children ? item.label : null)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-[0.1em] whitespace-nowrap transition-colors hover:text-white ${
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
                          className="block whitespace-nowrap px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-white/70 transition-colors hover:bg-white/5 hover:text-white"
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

          <div className="flex items-center gap-4 flex-shrink-0">
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
          </div>
        </div>

        {/* Mobile menu button — ml-auto pushes it to the far right on its
            own now that <nav> no longer uses justify-between (that was only
            there to split logo/hamburger on mobile; removing it is what
            lets the desktop cluster above sit packed instead of stretched). */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="relative z-[70] ml-auto flex h-11 w-11 flex-col items-center justify-center gap-1.5 xl:hidden"
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
        <div className="fixed inset-0 z-[60] flex flex-col bg-brand-teal xl:hidden">
          {/* Logo — pinned outside the scrollable area below (flex-shrink-0,
              not part of the overflow-y-auto wrapper), so a tall nav list
              scrolls underneath it instead of carrying it away. This row
              mirrors the closed header's own box exactly — same height
              (h-20/md:h-24), same items-center, same px-4 — not just the
              same logo size classes, so the logo sits at the identical x/y
              position in both states and never visibly jumps when the menu
              opens or closes. The header's own hamburger button (already
              animated into an X, fixed above this overlay at z-[70]) is the
              only close control — a second close icon here would just
              duplicate it. */}
          <div className="flex h-20 flex-shrink-0 items-center px-5 md:h-24 md:px-6">
            <Link
              href="/"
              className="relative h-10 w-[82px] sm:h-11 sm:w-[90px] md:h-14 md:w-[114px] 2xl:h-16 2xl:w-[131px] flex-shrink-0"
            >
              <Image
                src="/images/logos/ever-design-group-logo-cropped.png"
                alt="Ever Design Group"
                fill
                sizes="(max-width: 768px) 90px, (max-width: 1536px) 114px, 131px"
                className="object-contain object-left"
              />
            </Link>
          </div>

          {/* Scrollable body — nav + language/currency/WhatsApp — independent
              of the logo row above so scrolling this never carries the logo
              off-screen. */}
          <div
            className="flex flex-1 flex-col overflow-y-auto"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
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
                className="mt-6 block w-full border border-white/30 py-4 text-center text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-white hover:bg-white/10"
              >
                {t.nav.whatsappUs}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

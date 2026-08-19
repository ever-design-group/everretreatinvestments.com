"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Developments",
    href: "/developments",
    children: [
      { label: "Kivu Villas", href: "/developments/nara-villas" },
      { label: "Virunga Villas", href: "/developments/suku-residences" },
      { label: "Musanze Villa", href: "/developments/dasa-ubud" },
      { label: "Rubavu Residences", href: "/developments/solas-uluwutu" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Architecture & Design", href: "/services/architecture" },
      { label: "Construction", href: "/services/construction" },
      { label: "Villa Management", href: "/services/villa-management" },
      { label: "Land Sourcing", href: "/services/land" },
      { label: "Development Partnerships", href: "/services/development-partnerships" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Areas", href: "/areas" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState<"en" | "fr">("en");
  const [currency, setCurrency] = useState<"usd" | "rwf">("usd");
  const pathname = usePathname();

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-4 xl:px-6">
        <div className="flex h-24 items-center justify-between">
          {/* Logo - Larger */}
          <Link
            href="/"
            className="relative h-20 w-64 md:h-24 md:w-72 flex-shrink-0"
          >
            <Image
              src="/images/logos/Ever_retreat_logo__2_-removebg-preview.png"
              alt="Ever Retreat"
              fill
              sizes="(max-width: 768px) 256px, 288px"
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop Navigation - Compact but readable */}
          <ul className="hidden xl:flex items-center gap-x-0">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.children ? item.label : null)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-0.5 px-2.5 py-2 text-sm font-medium tracking-wide transition-colors hover:text-white whitespace-nowrap ${
                    isActive(item.href) ? "text-white" : "text-white/70"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <svg
                      className={`h-2.5 w-2.5 transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 5l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>

                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                    <div className="min-w-[200px] overflow-hidden rounded-lg border border-white/10 bg-black/95 backdrop-blur-sm shadow-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white whitespace-nowrap"
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

          {/* Right side - Language, Currency & Contact */}
          <div className="hidden xl:flex items-center gap-2 flex-shrink-0">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === "en" ? "fr" : "en")}
              className="flex items-center gap-1 rounded-full border border-white/15 px-3 py-1 text-sm font-medium text-white/60 transition-all hover:border-white/40 hover:text-white"
              aria-label="Toggle language"
            >
              {language === "en" ? "EN" : "FR"}
            </button>

            {/* Currency Toggle */}
            <button
              onClick={() => setCurrency(currency === "usd" ? "rwf" : "usd")}
              className="flex items-center gap-1 rounded-full border border-white/15 px-3 py-1 text-sm font-medium text-white/60 transition-all hover:border-white/40 hover:text-white"
              aria-label="Toggle currency"
            >
              {currency === "usd" ? "USD" : "RWF"}
            </button>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="rounded-full bg-white px-5 py-1.5 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90 hover:scale-105"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center text-white xl:hidden"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-sm px-6 py-4 xl:hidden">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                      }
                      className="flex w-full items-center justify-between py-3 text-sm font-medium text-white/70"
                    >
                      {item.label}
                      <svg
                        className={`h-3 w-3 transition-transform duration-200 ${
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
                    {mobileExpanded === item.label && (
                      <div className="ml-4 border-l border-white/10 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block py-2.5 text-sm font-medium text-white/50 hover:text-white"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block py-3 text-sm font-medium ${
                      isActive(item.href) ? "text-white" : "text-white/70"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Language & Currency */}
          <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
            <button
              onClick={() => setLanguage(language === "en" ? "fr" : "en")}
              className="flex items-center gap-1.5 rounded-full border border-white/20 px-3.5 py-1.5 text-sm font-medium text-white/70 transition-all hover:border-white/50 hover:text-white"
            >
              {language === "en" ? "EN" : "FR"}
            </button>
            <button
              onClick={() => setCurrency(currency === "usd" ? "rwf" : "usd")}
              className="flex items-center gap-1.5 rounded-full border border-white/20 px-3.5 py-1.5 text-sm font-medium text-white/70 transition-all hover:border-white/50 hover:text-white"
            >
              {currency === "usd" ? "USD" : "RWF"}
            </button>
          </div>

          <Link
            href="/contact"
            className="mt-4 block rounded-full bg-white px-6 py-2.5 text-center text-sm font-medium text-black"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
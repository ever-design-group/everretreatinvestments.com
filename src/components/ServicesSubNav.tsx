"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function ServicesSubNav() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const m = t.nav.servicesMenu;

  const subNavItems = [
    { label: t.servicesSubNavOverview, href: "/services" },
    { label: m.architecture, href: "/services/architecture" },
    { label: m.construction, href: "/services/construction" },
    { label: m.villaManagement, href: "/services/villa-management" },
    { label: m.landSourcing, href: "/services/land" },
    { label: m.developmentPartnerships, href: "/services/development-partnerships" },
    { label: m.developerGuide, href: "/choosing-a-rwanda-developer" },
    { label: m.howToBuy, href: "/how-to-buy-property-in-rwanda" },
  ];

  const isActive = (href: string) => {
    if (href === "/services") return pathname === "/services";
    return pathname === href;
  };

  return (
    <nav
      aria-label="Services sub-navigation"
      className="sticky top-20 z-40 border-b border-brand-teal/5 bg-brand-white/95 backdrop-blur-sm md:top-24"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <ul className="no-scrollbar -mb-px flex items-center gap-1 overflow-x-auto whitespace-nowrap py-3 sm:gap-2 sm:py-4">
          {subNavItems.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:px-4 sm:py-2 sm:text-sm ${
                    active
                      ? "bg-brand-teal text-white"
                      : "text-brand-gray-600 hover:bg-brand-teal/5 hover:text-black"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

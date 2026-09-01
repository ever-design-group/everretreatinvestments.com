"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const subNavItems = [
  { label: "Overview", href: "/services" },
  { label: "Architecture & Design", href: "/services/architecture" },
  { label: "Construction", href: "/services/construction" },
  { label: "Villa Management", href: "/services/villa-management" },
  { label: "Land Sourcing", href: "/services/land" },
  { label: "Development Partnerships", href: "/services/development-partnerships" },
];

export function ServicesSubNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/services") return pathname === "/services";
    return pathname === href;
  };

  return (
    <nav
      aria-label="Services sub-navigation"
      className="sticky top-24 z-40 border-b border-black/5 bg-brand-white/95 backdrop-blur-sm"
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
                      ? "bg-black text-white"
                      : "text-brand-gray-600 hover:bg-black/5 hover:text-black"
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

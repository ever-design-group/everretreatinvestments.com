"use client";

import type { ReactNode } from "react";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { CurrencyProvider } from "@/lib/currency/CurrencyContext";
import { PageTransition } from "@/components/PageTransition";
import { Header } from "@/components/Header";

// Header renders as a sibling of PageTransition's animated wrapper, not a
// descendant of it — any transform Framer Motion applies to the page-content
// wrapper would otherwise break position:fixed for everything nested inside
// it (a real bug this fixed: the header scrolled away with the page instead
// of staying pinned to the viewport).
export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <CurrencyProvider>
        <Header />
        <PageTransition>{children}</PageTransition>
      </CurrencyProvider>
    </LanguageProvider>
  );
}

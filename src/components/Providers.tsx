"use client";

import type { ReactNode } from "react";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { CurrencyProvider } from "@/lib/currency/CurrencyContext";
import { PageTransition } from "@/components/PageTransition";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <CurrencyProvider>
        <PageTransition>{children}</PageTransition>
      </CurrencyProvider>
    </LanguageProvider>
  );
}

"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Currency = "usd" | "rwf";

// Static approximate rate — not live market data. Update this constant if the
// real exchange rate moves meaningfully; there is no live API wired in.
export const USD_TO_RWF_RATE = 1300;

interface CurrencyContextValue {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  toggleCurrency: () => void;
  formatPrice: (usdAmount: number, options?: { compact?: boolean }) => string;
}

const CurrencyContext = createContext<CurrencyContextValue | undefined>(undefined);

const STORAGE_KEY = "ever-retreat-currency";

function formatCompact(amount: number): string {
  if (amount >= 1_000_000) {
    const millions = amount / 1_000_000;
    return `${millions % 1 === 0 ? millions.toFixed(0) : millions.toFixed(1)}M`;
  }
  if (amount >= 1_000) {
    const thousands = amount / 1_000;
    return `${thousands % 1 === 0 ? thousands.toFixed(0) : thousands.toFixed(1)}K`;
  }
  return amount.toFixed(0);
}

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>("usd");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "usd" || stored === "rwf") {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCurrencyState(stored);
      }
    } catch {
      // localStorage unavailable — fall back to default currency
    }
  }, []);

  const setCurrency = (next: Currency) => {
    setCurrencyState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage unavailable — in-memory state still updates
    }
  };

  const toggleCurrency = () => setCurrency(currency === "usd" ? "rwf" : "usd");

  const formatPrice: CurrencyContextValue["formatPrice"] = (usdAmount, options) => {
    const compact = options?.compact ?? true;
    if (currency === "usd") {
      return compact ? `$${formatCompact(usdAmount)}` : `$${usdAmount.toLocaleString("en-US")}`;
    }
    const rwfAmount = usdAmount * USD_TO_RWF_RATE;
    return compact ? `RWF ${formatCompact(rwfAmount)}` : `RWF ${Math.round(rwfAmount).toLocaleString("en-US")}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, toggleCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}

"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Language, type TranslationShape } from "./translations";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: TranslationShape;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "ever-retreat-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "fr") {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLanguageState(stored);
      }
    } catch {
      // localStorage unavailable — fall back to default language
    }
  }, []);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage unavailable — in-memory state still updates
    }
  };

  const toggleLanguage = () => setLanguage(language === "en" ? "fr" : "en");

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, toggleLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

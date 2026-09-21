"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          theme?: "light" | "dark";
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        }
      ) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

interface TurnstileWidgetProps {
  onVerify: (token: string | null) => void;
  theme?: "dark" | "light";
}

const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js";

// Public site key — safe to expose client-side. Until this env var is set
// (see .env.local.example), the widget renders nothing and forms fall back
// to working without a bot check, exactly like before this was added.
export const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function TurnstileWidget({ onVerify, theme = "dark" }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const onVerifyRef = useRef(onVerify);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    onVerifyRef.current = onVerify;
  }, [onVerify]);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return;
    if (window.turnstile) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setScriptLoaded(true);
      return;
    }
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (existing) {
      existing.addEventListener("load", () => setScriptLoaded(true));
      return;
    }
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => setScriptLoaded(true);
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (!scriptLoaded || !TURNSTILE_SITE_KEY || !containerRef.current || !window.turnstile) return;
    window.turnstile.render(containerRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      theme: theme === "dark" ? "dark" : "light",
      callback: (token) => onVerifyRef.current(token),
      "expired-callback": () => onVerifyRef.current(null),
      "error-callback": () => onVerifyRef.current(null),
    });
  }, [scriptLoaded, theme]);

  if (!TURNSTILE_SITE_KEY) return null;

  return <div ref={containerRef} />;
}

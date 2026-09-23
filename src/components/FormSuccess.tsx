import type { ReactNode } from "react";

interface FormSuccessProps {
  theme?: "dark" | "light";
  /** "success" = WhatsApp opened, checkmark badge. "blocked" = the popup was
   *  blocked, amber alert badge — paired with an `action` fallback link. */
  variant?: "success" | "blocked";
  title: string;
  body: string;
  action?: ReactNode;
  className?: string;
}

// Shared success/fallback state for every form — centered icon badge, bold
// heading, subtext, optional action. Used once a form passes validation (and
// Turnstile, if configured) and either the WhatsApp message opened, or the
// popup was blocked and the visitor needs a manual link instead.
export function FormSuccess({ theme = "dark", variant = "success", title, body, action, className = "" }: FormSuccessProps) {
  const isDark = theme === "dark";
  const isBlocked = variant === "blocked";
  return (
    <div className={`flex flex-col items-center justify-center py-4 text-center ${className}`}>
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-full ${
          isBlocked ? "bg-brand-yellow" : isDark ? "bg-white" : "bg-brand-teal"
        }`}
      >
        {isBlocked ? (
          <svg
            className="h-7 w-7 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
          </svg>
        ) : (
          <svg
            className={`h-7 w-7 ${isDark ? "text-black" : "text-white"}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
      <p className={`mt-4 text-xl font-bold ${isDark ? "text-white" : "text-black"}`}>{title}</p>
      <p className={`mt-2 max-w-xs text-sm ${isDark ? "text-white/70" : "text-brand-gray-600"}`}>{body}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

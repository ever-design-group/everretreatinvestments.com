interface FormSuccessProps {
  theme?: "dark" | "light";
  title: string;
  body: string;
  className?: string;
}

// Shared success state for every form — centered checkmark badge, bold
// heading, subtext. Used after a form passes validation (and Turnstile, if
// configured) and the WhatsApp message has been opened.
export function FormSuccess({ theme = "dark", title, body, className = "" }: FormSuccessProps) {
  const isDark = theme === "dark";
  return (
    <div className={`flex flex-col items-center justify-center py-4 text-center ${className}`}>
      <div className={`flex h-14 w-14 items-center justify-center rounded-full ${isDark ? "bg-white" : "bg-brand-teal"}`}>
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
      </div>
      <p className={`mt-4 text-xl font-bold ${isDark ? "text-white" : "text-black"}`}>{title}</p>
      <p className={`mt-2 max-w-xs text-sm ${isDark ? "text-white/70" : "text-brand-gray-600"}`}>{body}</p>
    </div>
  );
}

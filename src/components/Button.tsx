import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md";

interface ButtonProps {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-white text-black hover:bg-white/90",
  secondary: "border border-white/30 text-white hover:bg-white hover:text-black",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-6 py-2.5 text-xs",
  md: "px-7 py-3 md:px-8 md:py-3.5 text-[13px] md:text-sm",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  target,
  rel,
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`inline-flex items-center justify-center gap-2 rounded-sm text-center font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

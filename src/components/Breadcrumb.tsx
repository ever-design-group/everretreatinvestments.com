import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  readingMinutes?: number;
}

export function Breadcrumb({ items, readingMinutes }: BreadcrumbProps) {
  return (
    <div className="border-b border-brand-gray-100 bg-brand-white px-6 py-4">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-2">
        <nav className="flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-widest text-brand-gray-500">
          {items.map((item, index) => (
            <span key={index} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="h-3 w-3 text-brand-gray-400" />}
              {item.href ? (
                <Link href={item.href} className="transition-colors hover:text-black">
                  {item.label}
                </Link>
              ) : (
                <span className="text-black">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
        {typeof readingMinutes === "number" && (
          <span className="text-[11px] font-medium uppercase tracking-widest text-brand-gray-500">
            {readingMinutes} min read
          </span>
        )}
      </div>
    </div>
  );
}

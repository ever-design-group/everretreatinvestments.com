"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const socialLinks = [
  { platform: "Instagram", href: "https://www.instagram.com/bp_beachvilla_everretreat/" },
  { platform: "Facebook", href: "https://facebook.com/everretreatrw" },
  { platform: "X", href: "https://x.com/EverRetreat" },
  { platform: "TikTok", href: "https://www.tiktok.com/@bp_beach_villa" },
  { platform: "LinkedIn", href: "https://www.linkedin.com/company/ever-retreat/posts/?feedView=all" },
];

export function SocialFollowing() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-brand-gray-100 bg-brand-white py-10 md:py-14">
      <div className="mx-auto max-w-[1440px] px-6">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-brand-gray-500">
          {t.socialFollowing.joinLine}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {socialLinks.map((social) => (
            <Link
              key={social.platform}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold uppercase tracking-wider text-black transition-opacity hover:opacity-70"
            >
              {social.platform}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

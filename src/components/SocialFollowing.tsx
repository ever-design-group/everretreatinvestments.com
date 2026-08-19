import Link from "next/link";

const socialLinks = [
  { platform: "Instagram", followers: "1.2M+", href: "https://instagram.com/everretreatrw" },
  { platform: "Facebook", followers: "464K+", href: "https://facebook.com/everretreatrw" },
  { platform: "YouTube", followers: "375K+", href: "https://youtube.com/@everretreat" },
  { platform: "TikTok", followers: "68K+", href: "https://tiktok.com/@everretreat" },
  { platform: "LinkedIn", followers: "1K+", href: "https://linkedin.com/company/everretreat" },
];

export function SocialFollowing() {
  return (
    <section className="border-y border-brand-gray-100 bg-brand-white py-10 md:py-14">
      <div className="mx-auto max-w-[1440px] px-6">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-brand-gray-500">
          Join 2M+ people following our journey
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {socialLinks.map((social) => (
            <Link
              key={social.platform}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center transition-opacity hover:opacity-70"
            >
              <p className="text-2xl font-bold text-black md:text-3xl">
                {social.followers}
              </p>
              <p className="mt-1 text-xs text-brand-gray-500">
                {social.platform}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "How We Work", href: "/process" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Villa Tours", href: "/villa-tours" },
  { label: "Awards & Press", href: "/awards-and-press" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "News", href: "/news" },
  { label: "Case Study", href: "/case-study" },
  { label: "Client Forms", href: "/forms" },
  { label: "Pay Villa Deposit", href: "/buy" },
  { label: "Refer a Friend", href: "/refer-a-friend" },
  { label: "Scholarship", href: "/scholarship" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Architecture & Design", href: "/services/architecture" },
  { label: "Construction", href: "/services/construction" },
  { label: "Villa Management", href: "/services/villa-management" },
  { label: "Land Sourcing", href: "/services/land" },
  { label: "Development Partnerships", href: "/services/development-partnerships" },
  { label: "Choosing a Developer", href: "/choosing-a-rwanda-developer" },
  { label: "Villa Packages", href: "/packages" },
  { label: "Build Calculator", href: "/build-calculator" },
];

const investLinks = [
  { label: "Developments", href: "/developments" },
  { label: "Area Guides", href: "/areas" },
  { label: "Invest in Rwanda", href: "/invest-in-rwanda" },
  { label: "How to Buy Property in Rwanda", href: "/how-to-buy-property-in-rwanda" },
  { label: "Fractional Ownership", href: "/fractional-ownership" },
  { label: "Land Zoning Guide", href: "/rwanda-land-zoning" },
  { label: "FAQ", href: "/faq" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/everretreatrw" },
  { label: "Facebook", href: "https://facebook.com/everretreatrw" },
  { label: "LinkedIn", href: "https://linkedin.com/company/everretreat" },
  { label: "YouTube", href: "https://youtube.com/@everretreat" },
  { label: "TikTok", href: "https://tiktok.com/@everretreat" },
];

export function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/logos/logo-white-full.webp"
                alt="Ever Retreat - Rwanda Property, Architecture & Construction"
                width={160}
                height={22}
                className="h-5 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
               Ever retreat company in Rwanda.
              Architecture, construction, villa management
              all under one roof.
            </p>
            <div className="mt-6 space-y-2">
              <p className="text-sm text-white/80">
              +250785035071
              </p>
              <Link
                href="mailto:hello@everretreat.com"
                className="block text-sm text-white/80 hover:text-white"
              >
                info@everretreat.com
              </Link>
              <p className="mt-2 text-xs text-white/50">Mon-Fri 8am-5pm CAT</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-xs text-white/60 hover:text-white"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
              Company
            </p>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
              Services
            </p>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
              Invest
            </p>
            <ul className="mt-4 space-y-2">
              {investLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 md:grid-cols-3">
          <div>
            <p className="text-xs font-semibold text-white/70">Rwanda HQ</p>
            <p className="mt-1 text-xs text-white/50">
              KG 541 St, Kimihurura, Kigali
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-white/70">Ever retreat Office</p>
            <p className="mt-1 text-xs text-white/50">
              Kigali, Rwanda
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-white/70">Our Location</p>
            <p className="mt-1 text-xs text-white/50">
            42 KG 670 St, Kimihurura , Kigali
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/50">
            &copy; 2026 Ever Retreat. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link href="/privacy-policy" className="text-xs text-white/50 hover:text-white">
              Privacy
            </Link>
            <Link href="/terms-and-conditions" className="text-xs text-white/50 hover:text-white">
              Terms
            </Link>
            <button className="text-xs text-white/50 hover:text-white">
              Cookie settings
            </button>
            <span className="text-xs text-white/50">Fully Licensed</span>
            <span className="text-xs text-white/50">AREBI Member</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

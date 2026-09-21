"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { ContactForm } from "@/components/ContactForm";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Image from "next/image";
import Link from "next/link";

// Same real, already-published social links used in Footer.tsx — reused here
// rather than invented, so the handles stay consistent sitewide.
const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/everretreatrw" },
  { label: "Facebook", href: "https://facebook.com/everretreatrw" },
  { label: "LinkedIn", href: "https://linkedin.com/company/everretreat" },
  { label: "YouTube", href: "https://youtube.com/@everretreat" },
  { label: "TikTok", href: "https://tiktok.com/@everretreat" },
];

export default function ContactPage() {
  const { t } = useLanguage();
  const c = t.contactPage;

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative min-h-[85vh] w-full overflow-hidden">
          <Image
            src="/images/hero/aerial-rwanda.webp"
            alt="Rwanda landscape"
            fill
            priority
            className="object-cover hero-bg-image"
          />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
          <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-32 md:px-12 md:pb-24">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/50 md:text-sm">
              {c.heroEyebrow}
            </p>
            <h1 className="max-w-3xl text-4xl uppercase leading-[0.95] tracking-[0.05em] text-white md:text-6xl lg:text-7xl">
              {c.heroHeading}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:mt-8 md:text-lg">
              {c.heroParagraph}
            </p>
            <div className="mt-10">
              <Link
                href="#enquire"
                className="inline-block rounded-sm bg-white/90 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-black backdrop-blur-sm transition-all duration-300 hover:bg-white"
              >
                {c.heroCta}
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-brand-white py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
               <h3 className="text-lg font-semibold text-black">{c.officeRwandaHqLabel}</h3>
                <p className="mt-2 text-sm text-brand-gray-600">
                  KG 541 St, Kacyiru, Kigali
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">{c.officeDesignStudioLabel}</h3>
                <p className="mt-2 text-sm text-brand-gray-600">
                  Kigali, Rwanda
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold text-black">{c.whatsappLabel}</h3>
                <p className="mt-2 text-sm text-brand-gray-600">
                  <a
                    href="https://wa.me/250787524298"
                    className="hover:text-black"
                  >
                      +250 787 524 298
                  </a>
                </p>
                <p className="mt-1 text-xs text-brand-gray-500">
                  {c.whatsappHours}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">{c.emailLabel}</h3>
                <p className="mt-2 text-sm text-brand-gray-600">
                  <a
                    href="mailto:info@everretreat.com"
                    className="hover:text-black"
                  >
                    info@everretreat.com
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">{c.hoursLabel}</h3>
                <p className="mt-2 text-sm text-brand-gray-600">
                  Monday - Friday
                  <br />
                  {c.hoursValue}
                </p>
              </div>
            </div>

            <div className="mt-12 border-t border-brand-gray-100 pt-8">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-gray-500">
                Follow Us
              </h3>
              <div className="mt-4 flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-brand-gray-100 px-4 py-1.5 text-sm text-brand-gray-600 transition-colors hover:border-brand-teal hover:text-black"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="enquire" className="bg-brand-off-white py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="mb-12 text-center">
              <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
                {c.formEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
                <span className="font-light">{c.formHeadingLight}</span>{" "}
                <span className="font-bold">{c.formHeadingBold}</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-gray-600">
                {c.formParagraph}
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <ContactForm />
            </div>
          </div>
        </section>

        <section className="bg-brand-white py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="mb-12 text-center">
              <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500">
                {c.faqEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
                <span className="font-light">{c.faqHeadingLight}</span>{" "}
                <span className="font-bold">{c.faqHeadingBold}</span>
              </h2>
            </div>
            <div className="mx-auto max-w-3xl">
              <FAQ />
            </div>
          </div>
        </section>

      </main>
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

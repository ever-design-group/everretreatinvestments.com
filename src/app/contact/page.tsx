"use client";

import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Image from "next/image";
import Link from "next/link";

// Same real, already-published social links used in Footer.tsx — reused here
// rather than invented, so the handles stay consistent sitewide.
const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/bp_beachvilla_everretreat/" },
  { label: "Facebook", href: "https://facebook.com/everretreatrw" },
  { label: "X", href: "https://x.com/EverRetreat" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ever-retreat/posts/?feedView=all" },
  { label: "TikTok", href: "https://www.tiktok.com/@bp_beach_villa" },
];

export default function ContactPage() {
  const { t } = useLanguage();
  const c = t.contactPage;

  return (
    <>
      <main className="flex-1">
        {/* Hero — matches balitecture.com/contact exactly: dark bg with a
            30%-opacity photo (not full-bleed like the rest of the site's
            hero sections), min-h-[50vh] (shorter than a typical hero
            section), and just an eyebrow + light/bold split heading — no
            paragraph or CTA button crowding it, those live in the form
            section below instead where they're actually actionable. */}
        <section className="relative min-h-[50vh] w-full overflow-hidden bg-brand-teal">
          <Image
            src="/images/hero/aerial-rwanda.webp"
            alt="Ever Retreat office in Rwanda"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="relative z-10 mx-auto flex min-h-[50vh] max-w-[1440px] flex-col justify-end px-5 pb-12 pt-32 md:px-12 md:pb-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/50 md:text-sm">
              {c.heroEyebrow}
            </p>
            <h1 className="text-4xl uppercase leading-[0.95] tracking-wide text-white md:text-6xl lg:text-7xl">
              <span className="font-light">{c.heroHeadingLine1}</span>{" "}
              <span className="font-bold">{c.heroHeadingLine2}</span>
            </h1>
          </div>
        </section>

        {/* Contact info strip — dark bg, 3-column divided grid, each a
            clickable link with an icon badge (WhatsApp green, others
            white/10), matching balitecture.com's own treatment exactly. */}
        <section className="border-t border-white/10 bg-brand-teal">
          <div className="mx-auto max-w-[1440px] px-5 md:px-6">
            <div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
              <a
                href="https://wa.me/250787524298"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-6 md:py-8 md:pr-8"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-green">
                  <svg className="h-5 w-5 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="mb-0.5 text-xs uppercase tracking-wider text-white/40">{c.whatsappLabel}</p>
                  <p className="text-sm font-semibold text-white transition-colors group-hover:text-white/80">
                    +250 787 524 298
                  </p>
                </div>
              </a>
              <a
                href="mailto:info@everretreatinvestments.com"
                className="group flex items-center gap-4 py-6 md:px-8 md:py-8"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <p className="mb-0.5 text-xs uppercase tracking-wider text-white/40">{c.emailLabel}</p>
                  <p className="text-sm font-semibold text-white transition-colors group-hover:text-white/80">
                    info@everretreatinvestments.com
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-4 py-6 md:py-8 md:pl-8">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.75v5.25l3 1.5" />
                  </svg>
                </div>
                <div>
                  <p className="mb-0.5 text-xs uppercase tracking-wider text-white/40">{c.hoursLabel}</p>
                  <p className="text-sm font-semibold text-white">{c.hoursValue}</p>
                  <p className="text-[10px] text-white/30">{c.whatsappHours}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Send a Message + Reach Us Directly — 2-column layout matching
            balitecture.com/contact's own "Send a Message" / "Prefer a Call?"
            side-by-side pattern. The right column is adapted to Ever
            Retreat's actual contact options (office visit + WhatsApp)
            rather than balitecture's Calendly booking links, which Ever
            Retreat has no equivalent of. */}
        <section className="bg-brand-white py-20 md:py-28">
          <div className="mx-auto max-w-[1440px] px-5 md:px-6">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-24">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-brand-gray-500">{c.formEyebrow}</p>
                <h2 className="mb-3 text-2xl uppercase tracking-wide text-black md:text-3xl">
                  <span className="font-light">{c.formHeadingLight}</span>{" "}
                  <span className="font-bold">{c.formHeadingBold}</span>
                </h2>
                <p className="mb-8 text-sm text-brand-gray-700">{c.formParagraph}</p>
                <ContactForm />
              </div>

              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-brand-gray-500">{c.consultationEyebrow}</p>
                <h2 className="mb-3 text-2xl uppercase tracking-wide text-black md:text-3xl">
                  <span className="font-light">{c.consultationHeadingLight}</span>{" "}
                  <span className="font-bold">{c.consultationHeadingBold}</span>
                </h2>
                <p className="mb-8 text-sm text-brand-gray-700">{c.consultationParagraph}</p>

                <div className="space-y-4">
                  <div className="border border-brand-gray-200 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="mb-1 text-sm font-bold uppercase tracking-wide text-black">
                          {c.visitOfficeTitle}
                        </p>
                        <p className="text-xs text-brand-gray-500">{c.visitOfficeDesc}</p>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/250787524298"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-brand-green p-6 transition-colors hover:bg-brand-green/90"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="mb-1 text-sm font-bold uppercase tracking-wide text-white">
                          {c.whatsappCardTitle}
                        </p>
                        <p className="text-xs text-white/70">{c.whatsappCardDesc}</p>
                      </div>
                      <span className="text-white transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </a>
                </div>

                <div className="mt-10 border-t border-brand-gray-200 pt-8">
                  <p className="mb-4 text-xs uppercase tracking-[0.3em] text-brand-gray-500">{c.followUsLabel}</p>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold uppercase tracking-wider text-brand-gray-700 transition-colors hover:text-black"
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-off-white py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="mb-12 text-center">
              <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500">{c.faqEyebrow}</p>
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
      <Footer />
      <WhatsAppButton />
    </>
  );
}

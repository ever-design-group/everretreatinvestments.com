"use client";

import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import { FormSuccess } from "@/components/FormSuccess";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { buildWhatsAppUrl, openWhatsApp } from "@/lib/forms";
import Image from "next/image";

export default function VillaToursPage() {
  const { t } = useLanguage();
  const p = t.villaToursPage;
  const [bookStatus, setBookStatus] = useState<"idle" | "success" | "blocked">("idle");
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  function handleBookTour() {
    const url = buildWhatsAppUrl(p.heroTitle, {});
    setWhatsappUrl(url);
    setBookStatus(openWhatsApp(url) === "blocked" ? "blocked" : "success");
  }

  return (
    <PageLayout showCta={false}
      hero={
        <section className="relative min-h-[85vh] w-full overflow-hidden">
          <Image
            src="/images/portfolio/completed-villa-4.webp"
            alt="Completed Ever Retreat villa with pool"
            fill
            priority
            className="object-cover hero-bg-image"
            sizes="100vw"
          />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
          <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-32 md:px-12 md:pb-24">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/50 md:text-sm">
              {p.heroEyebrow}
            </p>
            <h1 className="max-w-3xl text-4xl uppercase leading-[0.95] tracking-[0.05em] text-white md:text-6xl lg:text-7xl">
              {p.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:mt-8 md:text-lg">
              {p.heroSubtitle}
            </p>
          </div>
        </section>
      }
    >
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-center text-sm font-medium uppercase tracking-wider text-brand-gray-500">
            {p.scheduleEyebrow}
          </p>
          <h2 className="mt-2 text-center text-3xl font-bold uppercase tracking-wide text-black md:text-5xl">
            <span className="font-light">{p.scheduleHeadingLight}</span>{" "}
            <span className="font-bold">{p.scheduleHeadingBold}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-brand-gray-600">
            {p.scheduleParagraph}
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-sm border border-brand-gray-100 p-6">
                <h3 className="text-lg font-semibold text-black">{p.onGroundTitle}</h3>
                <p className="mt-2 text-sm text-brand-gray-600">
                  {p.onGroundDesc}
                </p>
              </div>
              <div className="rounded-sm border border-brand-gray-100 p-6">
                <h3 className="text-lg font-semibold text-black">{p.virtualTourTitle}</h3>
                <p className="mt-2 text-sm text-brand-gray-600">
                  {p.virtualTourDesc}
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              {bookStatus === "idle" && (
                <button
                  onClick={handleBookTour}
                  className="rounded-sm bg-brand-teal px-10 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-teal/80"
                >
                  {p.bookTourButton}
                </button>
              )}
              {bookStatus === "success" && (
                <FormSuccess theme="light" title={t.forms.successTitle} body={t.forms.successBody} />
              )}
              {bookStatus === "blocked" && (
                <FormSuccess
                  theme="light"
                  variant="blocked"
                  title={t.forms.popupBlockedTitle}
                  body={t.forms.popupBlockedBody}
                  action={
                    <a
                      href={whatsappUrl ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-sm bg-brand-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-teal/90"
                    >
                      {t.forms.openWhatsAppManually}
                    </a>
                  }
                />
              )}
            </div>
          </div>
        </div>
      </section>
      <InterestedInInvesting />
    </PageLayout>
  );
}

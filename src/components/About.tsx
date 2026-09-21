"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section className="bg-brand-white py-16 md:py-32 w-full">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Image (top on mobile, left on desktop) — plain, no border/card chrome */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative aspect-[4/3] overflow-hidden"
          >
            <Image
              src="/images/about/Villa 1.jpeg"
              alt="Ever Retreat architectural design in Rwanda"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </motion.div>

          {/* Content (bottom on mobile, right on desktop) — plain flowing text, no pills/borders */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] text-brand-gray-500 uppercase mb-4">
              {t.about.badge}
            </p>

            <h2 className="text-brand-black uppercase tracking-wide leading-tight">
              <span className="block font-light text-2xl sm:text-3xl md:text-4xl lg:text-[2.85rem] tracking-normal">
                {t.about.headingLine1}
              </span>
              <span className="block font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                {t.about.headingLine2}
              </span>
            </h2>

            <p className="mt-6 text-sm md:text-base text-brand-gray-700 leading-relaxed max-w-xl">
              {t.about.paragraph}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-2 sm:gap-5">
              <Link
                href="/about"
                className="group/link inline-flex items-center gap-2 text-sm font-semibold text-brand-black uppercase tracking-[0.12em] py-2"
              >
                <span>{t.about.ctaAbout}</span>
                <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">→</span>
              </Link>
              <Link
                href="/contact"
                className="group/link inline-flex items-center gap-2 text-sm text-brand-gray-500 uppercase tracking-[0.12em] hover:text-brand-black transition-colors duration-300 py-2"
              >
                <span>{t.about.ctaContact}</span>
                <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
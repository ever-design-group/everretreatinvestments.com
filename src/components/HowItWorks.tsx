"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useCurrency } from "@/lib/currency/CurrencyContext";

export function HowItWorks() {
  const { t } = useLanguage();
  const { formatPrice } = useCurrency();
  const price = formatPrice(5000);
  const steps = t.howItWorks.steps.map((step, index) => ({
    number: String(index + 1).padStart(2, "0"),
    timeline: step.timeline,
    title: step.title.replace("{price}", price),
    description: step.description.replace("{price}", price),
  }));

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.3, 1], ["0%", "50%", "100%"]);

  return (
    <section ref={sectionRef} className="bg-brand-teal py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-white/70">
            {t.howItWorks.eyebrow.toUpperCase()}
          </p>
          {/* Two-line light+bold split, matching balitecture.com's own
              heading treatment for this section (font-light first line,
              bold second line) — previously this rendered as one uniform
              bold line with no emphasis contrast at all. */}
          <h2 className="mt-4 text-3xl leading-tight text-white md:text-5xl lg:text-6xl">
            <span className="font-light">{t.howItWorks.headingLine1}</span>
            <br />
            <span className="font-bold">{t.howItWorks.headingLine2}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/70">
            {t.howItWorks.paragraph}
          </p>
        </div>

        {/* Mobile & Tablet: Vertical Timeline - CLEAN & PROFESSIONAL */}
        <div className="relative mb-8 md:hidden">
          {/* Vertical Line - Centered and Thin */}
          <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-white/20">
            <motion.div
              className="w-full bg-white"
              style={{
                height: lineHeight,
                transformOrigin: "top",
              }}
            />
          </div>

          {/* Steps */}
          <div className="relative space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative flex items-start justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {/* LEFT SIDE: Timeline Badge */}
                <div className="flex w-[45%] items-center justify-end pr-5 text-right">
                  <div className="inline-block rounded-full border border-white/20 px-3 py-1">
                    <span className="text-[10px] font-medium uppercase tracking-wider text-white/60">
                      {step.timeline}
                    </span>
                  </div>
                </div>

                {/* CENTER: The Bullseye Dot */}
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                  <motion.div
                    className="relative h-3.5 w-3.5 flex-shrink-0 rounded-full border-[1.5px] border-white bg-brand-teal"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.3 }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <div className="absolute inset-[3px] rounded-full bg-white" />
                  </motion.div>
                </div>

                {/* RIGHT SIDE: Step Content */}
                <div className="w-[45%] pl-5 text-left">
                  {/* Number */}
                  <div className="mb-1 text-2xl font-bold text-white/20">
                    {step.number}
                  </div>
                  
                  {/* Title */}
                  <h3 className="mb-1.5 text-base font-semibold text-white leading-tight">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm leading-relaxed text-white/60">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Steps - Desktop: connected timeline strip + flat columns */}
        <div className="hidden md:block">
          {/* Timeline strip: single line with a dot + label per step */}
          <div className="relative mb-10">
            <div className="absolute left-0 right-0 top-3 h-px overflow-hidden bg-white/10">
              <motion.div
                className="h-full w-full origin-left bg-white/30"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>
            <div className="grid grid-cols-4">
              {steps.map((step, index) => (
                <div key={step.number} className="flex flex-col items-start">
                  <motion.div
                    className="z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 + index * 0.35 }}
                    viewport={{ once: true }}
                  >
                    <div className="h-2 w-2 rounded-full bg-brand-teal" />
                  </motion.div>
                  <motion.p
                    className="mt-2 text-[10px] uppercase tracking-wider text-white/30"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 + index * 0.35 }}
                    viewport={{ once: true }}
                  >
                    {step.timeline}
                  </motion.p>
                </div>
              ))}
            </div>
          </div>

          {/* Step content: flat columns, no card chrome */}
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 + index * 0.35 }}
                viewport={{ once: true }}
              >
                <span className="block text-3xl font-light tabular-nums text-white/15">
                  {step.number}
                </span>
                <h3 className="mt-2 text-base font-semibold tracking-wide text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/40">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <motion.div 
          className="mt-12 md:mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="group relative overflow-hidden rounded-sm bg-white px-8 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">{t.howItWorks.ctaPrimary.toUpperCase()}</span>
            <div className="absolute inset-0 bg-white/90 transition-transform duration-300 group-hover:translate-x-full" />
          </Link>
          <Link
            href="/process"
            className="rounded-sm border border-white/40 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10 hover:scale-105"
          >
            {t.howItWorks.ctaSecondary.toUpperCase()}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

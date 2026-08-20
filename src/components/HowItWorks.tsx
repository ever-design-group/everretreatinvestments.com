"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    timeline: "WEEK 1",
    title: "Pick Your Development",
    description:
      "Browse our developments and find the one that fits your goals and budget.",
  },
  {
    number: "02",
    timeline: "WEEK 2-4",
    title: "Reserve With $5,000 USD",
    description:
      "A $5,000 USD deposit holds your villa. The rest comes in stages tied to construction.",
  },
  {
    number: "03",
    timeline: "MONTH 3-18",
    title: "Pay As It's Built",
    description:
      "Four payments tied to real construction milestones. No surprises.",
  },
  {
    number: "04",
    timeline: "MONTH 18+",
    title: "Start Earning",
    description:
      "Villa goes under management and starts generating rental income.",
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.3, 1], ["0%", "50%", "100%"]);

  return (
    <section ref={sectionRef} className="bg-brand-black py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-white/70">
            HOW IT WORKS
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl lg:text-6xl">
            How Does Investing <br className="hidden sm:block" />
            In An Ever Retreat Villa Work?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/70">
            From first enquiry to rental income in four straightforward steps. No
            hidden stages, no complexity.
          </p>
        </div>

        {/* Desktop: Horizontal Line with Points */}
        <div className="relative mb-16 hidden md:block">
          <div className="relative h-[2px] w-full bg-white/10">
            <motion.div
              className="h-full bg-white"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            />
            <div className="absolute inset-0 flex justify-between px-0">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="relative -mt-1.5 flex items-center"
                  style={{
                    left: index === 0 ? "0%" : index === steps.length - 1 ? "100%" : `${(index / (steps.length - 1)) * 100}%`,
                    transform: index === 0 ? "translateX(0)" : index === steps.length - 1 ? "translateX(-100%)" : "translateX(-50%)",
                    position: "absolute",
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="h-3 w-3 rounded-full bg-white" />
                </motion.div>
              ))}
            </div>
          </div>
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
                    className="relative h-3.5 w-3.5 flex-shrink-0 rounded-full border-[1.5px] border-white bg-brand-black"
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

        {/* Steps Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="group relative rounded-lg p-6 transition-all duration-500 hover:bg-white/5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="mb-4 inline-block rounded-full border border-white/20 px-3 py-1">
                <span className="text-xs font-medium text-white/60">
                  {step.timeline}
                </span>
              </div>

              <div className="mb-3 text-4xl font-bold text-white/20 transition-colors group-hover:text-white/40">
                {step.number}
              </div>

              <h3 className="mb-3 text-lg font-semibold text-white">
                {step.title}
              </h3>

              <p className="text-sm leading-relaxed text-white/60">
                {step.description}
              </p>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
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
            href="/journey"
            className="group relative overflow-hidden rounded bg-white px-8 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">START YOUR JOURNEY →</span>
            <div className="absolute inset-0 bg-white/90 transition-transform duration-300 group-hover:translate-x-full" />
          </Link>
          <Link
            href="/process"
            className="rounded border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:scale-105"
          >
            SEE FULL PROCESS
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

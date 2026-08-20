"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
  return (
    <section className="bg-brand-black py-16 md:py-24 w-full relative">
      {/* Subtle glow effect at the top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Image (Top on Mobile, Left on Desktop) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-2xl w-full"
          >
            <Image
              src="/images/about/Villa 1.jpeg"
              alt="Ever Retreat architectural design in Rwanda"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          {/* RIGHT COLUMN: Content (Bottom on Mobile, Right on Desktop) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            {/* Tagline Badge */}
            <div className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm w-fit mb-4">
              <span className="text-[10px] font-medium uppercase tracking-widest text-white/50">
                About Ever Retreat
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Award-Winning Rwanda <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                Property Developer
              </span>
            </h2>

            {/* Divider */}
            <div className="mt-4 h-px w-16 bg-white/20" />

            {/* Paragraph */}
            <p className="mt-5 text-[15px] leading-relaxed text-white/70 sm:text-base md:text-lg max-w-xl">
              Ever Retreat is an Rwandan-owned, Rwanda-based property
              company. 200+ projects completed. 160+ in-house professionals.
              Architecture, construction, villa management, and real estate -
              everything under one roof. The most complete property proposition
              in East Africa.
            </p>

            {/* STATS - Presented as sleek badges instead of giant numbers */}
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { value: "200+", label: "Projects Built" },
                { value: "160+", label: "Team Members" },
                { value: "10+", label: "Years in Rwanda" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
                  <span className="text-sm font-bold text-white">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-wider text-white/40">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="group flex items-center gap-2 rounded border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                About Us
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded border border-white/10 px-6 py-2.5 text-sm font-medium text-white/70 transition-all duration-300 hover:border-white/40 hover:text-white"
              >
                Talk to Us
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle glow effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
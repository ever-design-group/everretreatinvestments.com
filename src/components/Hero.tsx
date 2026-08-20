"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      {/* 1. Cinematic Background Image */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <Image
          src="/images/hero/everretreat.jpeg"
          alt="Luxury eco-retreat development by Ever Retreat in Rwanda"
          fill
          priority
          sizes="100vw"
          className="hero-bg-image object-cover"
        />
      </motion.div>

      {/* 2. Layered gradients for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

      {/* 3. Premium Content Container */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-28 pb-6 text-center sm:pt-32 sm:px-6">
        
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="max-w-5xl text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl"
        >
          <span className="block text-white/90">Rwanda Eco-Retreats</span>
          <span className="block bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
            Built by Ever Retreat
          </span>
        </motion.h1>

        {/* Elegant Divider Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "4rem" }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="mt-4 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-3 max-w-2xl text-[13px] font-light leading-relaxed tracking-wide text-white/80 sm:text-base md:text-lg"
        >
          Luxury eco-retreats across Rubavu, Musanze, Kigali, and Nyungwe, with full rental management. From <span className="font-semibold text-white">$269K USD</span>.
        </motion.p>

        {/* 4. SLIM, COMPACT, AND PERFECTLY SIZED BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-4"
        >
          <Link
            href="/developments"
            className="w-[200px] max-w-full rounded bg-white px-5 py-2.5 text-center text-[13px] font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] sm:w-auto sm:px-8 sm:py-3 sm:text-sm"
          >
            Explore Developments
          </Link>
          
          <Link
            href="/contact"
            className="w-[200px] max-w-full rounded border border-white/30 bg-white/5 px-5 py-2.5 text-center text-[13px] font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] sm:w-auto sm:px-8 sm:py-3 sm:text-sm"
          >
            Enquire Now
          </Link>
        </motion.div>
      </div>

      {/* 5. Bottom Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/40">Scroll</span>
        <div className="h-8 w-[1px] bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
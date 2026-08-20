"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export function StatsBar() {
  const stats = [
    { value: 200, suffix: "+", label: "Villas Built" },
    { value: 160, suffix: "+", label: "Team Members" },
    { value: 10, suffix: "+", label: "Years Building in Rwanda" },
    { value: 95, suffix: "%", label: "Avg Occupancy" },
  ];

  return (
    <section className="bg-brand-white py-10 md:py-16 w-full border-b border-brand-gray-200/50">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-4 sm:gap-8">
          {stats.map((stat, index) => (
            <StatItem 
              key={stat.label} 
              target={stat.value} 
              suffix={stat.suffix} 
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ target, suffix, label, index }: { target: number; suffix: string; label: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000; 
    const stepTime = Math.abs(Math.floor(duration / target));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <p className="text-2xl font-bold tracking-tight text-brand-black sm:text-3xl md:text-4xl lg:text-5xl">
        {count}{suffix}
      </p>
      <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-brand-gray-500 sm:text-xs md:text-sm">
        {label}
      </p>
    </motion.div>
  );
}
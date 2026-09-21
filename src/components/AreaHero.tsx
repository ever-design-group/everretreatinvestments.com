"use client";

import Image from "next/image";

interface AreaHeroProps {
  name: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  eyebrow?: string;
}

// Centered, full-bleed area-guide hero matching balitecture.com/areas/[slug]:
// shorter viewport height than the entity-page hero (DevelopmentHero), no
// CTA buttons — just eyebrow, area name, and a one-line "best for" summary.
export function AreaHero({ name, subtitle, image, imageAlt, eyebrow = "Area Guide · Rwanda" }: AreaHeroProps) {
  return (
    <section className="relative h-[55vh] w-full overflow-hidden md:h-[65vh]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover hero-bg-image"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/75" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/70">{eyebrow}</p>
        <h1 className="text-4xl uppercase tracking-[0.05em] text-white md:text-7xl lg:text-8xl">
          {name}
        </h1>
        <p className="mt-4 max-w-lg text-sm text-brand-gray-200 md:text-base">{subtitle}</p>
      </div>
    </section>
  );
}

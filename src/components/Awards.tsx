import Link from "next/link";
import Image from "next/image";

const awards = [
  {
    title: "Kivu Villas",
    subtitle: "International Property Awards 2025",
    image: "/images/awards/award-16.webp",
    imageAlt: "Kivu Villas - International Property Awards 2025",
    href: "/portfolio/kivu-villas-3bdr",
    linkText: "See the project",
  },
  {
    title: "International Property & Travel",
    subtitle: "Property Paradise feature, 2025",
    image: "/images/awards/award-14.webp",
    imageAlt: "International Property & Travel - Property Paradise feature, 2025",
    href: "https://issuu.com/intprop/docs/ipt_v31n6",
    linkText: "Read the article",
  },
  {
    title: "Marie Claire Lifestyle",
    subtitle: "Creative Retreats feature, 2025",
    image: "/images/awards/marie-claire-lifestyle.webp",
    imageAlt: "Marie Claire Lifestyle - Creative Retreats feature, 2025",
    href: "https://www.marieclaire.com.au/life/home/ever-retreat-rwanda-luxury-villa-feature/",
    linkText: "Read the article",
  },
  {
    title: "Virunga Villas",
    subtitle: "International Property Awards 2025",
    image: "/images/awards/award-15.webp",
    imageAlt: "Virunga Villas - International Property Awards 2025",
    href: "/portfolio/virunga-villas-3bdr",
    linkText: "See the project",
  },
];

export function Awards() {
  return (
    <section className="bg-brand-black py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-white/70">
            Featured In
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Awards & Achievements
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            Two-time International Property Awards winner (2025) and featured
            in global property publications, Marie Claire, Int&apos;l Property &
            Travel, and designboom.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {awards.map((award) => (
            <Link
              key={award.title}
              href={award.href}
              className="group overflow-hidden rounded-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={award.image}
                  alt={award.imageAlt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-white">
                  {award.title}
                </h3>
                <p className="mt-1 text-sm text-white/60">{award.subtitle}</p>
                <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-white/80">
                  {award.linkText}
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


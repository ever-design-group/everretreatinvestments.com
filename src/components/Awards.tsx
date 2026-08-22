import Link from "next/link";
import Image from "next/image";

const portfolio = [
  {
    title: "Kivu Villas",
    description: "Luxury villa architecture inspired by the landscape and lifestyle of Lake Kivu.",
    image: "/images/developments/nara-exterior-1.webp",
    imageAlt: "Kivu Villas exterior at Lake Kivu",
    href: "/developments/nara-villas",
    cta: "Explore project",
  },
  {
    title: "Virunga Villas",
    description: "Contemporary villas designed for comfort, privacy, and long-term investment value.",
    image: "/images/developments/suku-4br/suku-4br-1.webp",
    imageAlt: "Virunga Villas exterior in Musanze",
    href: "/developments/suku-residences",
    cta: "Explore project",
  },
  {
    title: "Ever Retreat",
    description: "A hospitality destination combining architecture, nature, and the unique experience of Lake Kivu.",
    image: "/images/portfolio/villa-pool-timber-deck.webp",
    imageAlt: "Ever Retreat villa with pool and timber deck",
    href: "/about",
    cta: "Discover Ever Retreat",
  },
  {
    title: "Ever Design",
    description: "Architecture and construction solutions for clients looking to create their own property in Rwanda.",
    image: "/images/about/villa-architecture.webp",
    imageAlt: "Ever Design architectural project",
    href: "/services/architecture",
    cta: "Start your project",
  },
];

export function Awards() {
  return (
    <section className="bg-brand-black py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-white/70">
            Our Portfolio
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Designed for Living. Built for Investment.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            Explore selected villas, architectural concepts, and development
            projects that showcase our approach to modern design, quality
            construction, and investment-focused property development in Rwanda.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group overflow-hidden rounded-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-white/80">
                  {item.cta}
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

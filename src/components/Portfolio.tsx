import Link from "next/link";
import Image from "next/image";

const portfolioItems = [
  {
    title: "Nara Render",
    image: "/images/portfolio/nara-render.webp",
    imageAlt: "Nara Villas architectural render",
    href: "/portfolio",
  },
  {
    title: "GJ Villa",
    image: "/images/portfolio/gj-villa.webp",
    imageAlt: "GJ Villa interior",
    href: "/portfolio",
  },
  {
    title: "Villa Pool & Deck",
    image: "/images/portfolio/villa-pool-timber-deck.webp",
    imageAlt: "Villa with private pool and timber deck",
    href: "/portfolio",
  },
  {
    title: "Suku Terrace",
    image: "/images/portfolio/suku-terrace.webp",
    imageAlt: "Suku Residences terrace view",
    href: "/portfolio",
  },
  {
    title: "Villa Natural",
    image: "/images/portfolio/villa-natural.webp",
    imageAlt: "Villa interior with natural materials",
    href: "/portfolio",
  },
  {
    title: "Completed Villa",
    image: "/images/portfolio/completed-villa-4.webp",
    imageAlt: "Completed Ever Retreat villa",
    href: "/portfolio",
  },
];

export function Portfolio() {
  return (
    <section className="bg-brand-off-white py-16 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
            Our Work
          </p>
          <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
             200+ Projects Built. Still Counting.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-gray-600">
             Ten years building across Rwanda - from Rubavu to Musanze, Kigali to
              Huye.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {item.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="text-sm font-semibold text-black underline underline-offset-4 hover:text-brand-gray-600"
          >
            View Full Portfolio &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}


import Link from "next/link";
import Image from "next/image";

const newsItems = [
  {
    title: "Kivu Villas Wins Architizer A+ Award 2026",
    date: "April 2026",
    excerpt:
      "Our lakeside villa project in Rubavu receives international recognition for sustainable design.",
    image: "/images/awards/architizer-award.webp",
    href: "/news/nara-villas-architizer-award-2026",
  },
  {
    title: "Rwanda Tourism Reaches New Highs",
    date: "March 2026",
    excerpt:
      "2025 arrivals data shows Rwanda continues to attract strong property investment interest across all regions.",
    image: "/images/blog/rwanda-tourism-2026-blog-hero.webp",
    href: "/news/rwanda-tourism-2026",
  },
  {
    title: "Virunga Villas Launches Phase 2",
    date: "February 2026",
    excerpt:
      "Four new wellness villas now available for early-bird pricing in Musanze.",
    image: "/images/developments/suku-4br/suku-4br-1.webp",
    href: "/news/suku-residences-phase-2-launch",
  },
];

export function News() {
  return (
    <section className="bg-brand-white py-16 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              Latest News
            </p>
            <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
              News & Press
            </h2>
          </div>
          <Link
            href="/news"
            className="text-sm font-semibold text-black underline underline-offset-4 hover:text-brand-gray-600"
          >
            View All News &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {newsItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group overflow-hidden rounded-lg bg-white"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-brand-gray-400">{item.date}</p>
                <h3 className="mt-2 text-lg font-bold text-black group-hover:underline">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray-600">
                  {item.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-black">
                  Read More
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

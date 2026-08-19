import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    title: "How Much Rental Income Does a Rwanda Villa Actually Earn?",
    date: "April 2026",
    excerpt:
      "Real nightly rates, occupancy data, and net yield breakdowns by area. Two worked case studies showing what investors actually take home after all costs.",
    image: "/images/blog/rwanda-villa-rental-income-blog-hero.webp",
    imageAlt: "How Much Rental Income Does a Rwanda Villa Actually Earn?",
    href: "/blog/rwanda-villa-rental-income",
  },
  {
    title: "Best Area to Invest in Rwanda (2026)",
    date: "April 2026",
    excerpt:
      "Comparing Rubavu, Musanze, Kigali, Nyungwe, and Huye. Real yield data and land prices from a team that builds across all five areas.",
    image: "/images/blog/best-area-to-invest-in-rwanda-blog-hero.webp",
    imageAlt: "Best Area to Invest in Rwanda (2026)",
    href: "/blog/best-area-to-invest-in-rwanda",
  },
  {
    title: "Can Foreigners Buy Property in Rwanda?",
    date: "March 2026",
    excerpt:
      "Yes, through leasehold or company structures. Complete guide to legal ownership structures, costs, common mistakes, and a step-by-step buying process.",
    image: "/images/blog/can-foreigners-buy-property-in-rwanda-blog-hero.webp",
    imageAlt: "Can Foreigners Buy Property in Rwanda?",
    href: "/blog/can-foreigners-buy-property-in-rwanda",
  },
  {
    title: "Lake Kivu vs Musanze Investment Comparison",
    date: "March 2026",
    excerpt:
      "Comparing land prices, yields, and lifestyle factors between Rwanda's two premier villa investment destinations.",
    image: "/images/blog/lake-kivu-vs-musanze-investment-blog-hero.webp",
    imageAlt: "Lake Kivu vs Musanze Investment Comparison",
    href: "/blog/lake-kivu-vs-musanze-investment",
  },
];

export function Blog() {
  return (
    <section className="bg-brand-white py-16 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
            From the Blog
          </p>
          <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
            Latest Insights
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.title}
              href={post.href}
              className="group overflow-hidden rounded-lg bg-white"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-brand-gray-400">{post.date}</p>
                <h3 className="mt-2 text-base font-semibold leading-snug text-black">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray-600">
                  {post.excerpt}
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

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="text-sm font-semibold text-black underline underline-offset-4 hover:text-brand-gray-600"
          >
            View All Posts &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

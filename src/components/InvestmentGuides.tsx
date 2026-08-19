import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    title: "How to Build a Villa in Rwanda: Step by Step",
    date: "April 2026",
    excerpt:
      "The full process from land to first guest - legal structure, design, permits, construction, and management.",
    image: "/images/hero/hero-1-full.webp",
    href: "/blog/how-to-build-a-villa-in-rwanda",
  },
  {
    title: "What Does It Cost to Build a Villa in Rwanda?",
    date: "April 2026",
    excerpt:
      "Real construction costs from $1,000 per sqm. Budget examples for 1-3 bedroom villas.",
    image: "/images/hero/hero-2-full.webp",
    href: "/blog/cost-to-build-villa-in-rwanda",
  },
  {
    title: "How Much Rental Income Does a Rwanda Villa Generate?",
    date: "March 2026",
    excerpt:
      "The return case for building to rent. Real yield data and case studies.",
    image: "/images/blog/rwanda-villa-rental-income-blog-hero.webp",
    href: "/blog/rwanda-villa-rental-income",
  },
  {
    title: "Can Foreigners Buy Property in Rwanda?",
    date: "March 2026",
    excerpt:
      "Ownership structures before construction - leasehold vs company structures.",
    image: "/images/blog/can-foreigners-buy-property-in-rwanda-blog-hero.webp",
    href: "/blog/can-foreigners-buy-property-in-rwanda",
  },
];

export function InvestmentGuides() {
  return (
    <section className="bg-brand-gray-300 py-16 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
            From the Blog
          </p>
          <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
            Investment Guides
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {blogPosts.map((post) => (
            <Link
              key={post.title}
              href={post.href}
              className="group block"
            >
              <div className="mb-4 overflow-hidden rounded-lg">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
                {post.date}
              </p>
              <h3 className="mt-2 text-lg font-bold text-black group-hover:underline">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-brand-gray-600">
                {post.excerpt}
              </p>
              <div className="mt-3 text-sm font-semibold text-black">
                Read More &rarr;
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

import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "#1", label: "Investment Market in Rwanda" },
  { value: "1.5M+", label: "Annual Visitors" },
  { value: "15-20%", label: "Rental Yield" },
  { value: "7-15%", label: "Annual Appreciation" },
  { value: "85%+", label: "Avg. Occupancy Rate" },
];

export function WhyRwanda() {
  return (
    <section className="bg-brand-white py-16 md:py-32">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <Image
              src="/images/hero/rwanda-landscape.webp"
              alt="Rwanda landscape with mountains and lakes"
              width={800}
              height={600}
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              Why Rwanda
            </p>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-black sm:text-3xl md:text-5xl md:leading-tight">
              Rwanda&apos;s Premier Property Investment Destination
            </h2>
            <p className="mt-4 sm:mt-6 text-sm leading-relaxed text-brand-gray-600 md:text-base">
              Rwanda is one of Africa&apos;s strongest emerging property investment
              markets. Consistent tourism growth, limited developable land in
              prime areas, and high rental yields make Rwanda one of the best
              property investment destinations in the world.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-black md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-brand-gray-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/invest-in-rwanda"
              className="mt-8 inline-block text-sm font-semibold text-black underline underline-offset-4 hover:text-brand-gray-600"
            >
              Read our Rwanda property investment guide &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


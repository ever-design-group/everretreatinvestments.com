import Link from "next/link";
import Image from "next/image";

export function About() {
  return (
    <section className="bg-brand-white py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-[3/4]">
            <Image
              src="/images/about/villa-architecture.webp"
              alt="Ever Retreat architectural design in Rwanda"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              About Ever Retreat
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-black md:text-5xl md:leading-tight">
              Award-Winning Rwanda Property Developer
            </h2>
            <p className="mt-6 text-base leading-relaxed text-brand-gray-600 md:text-lg">
              Ever Retreat is an Australian-owned, Rwanda-based property
              company. 200+ projects completed. 160+ in-house professionals.
              Architecture, construction, villa management, and real estate -
              everything under one roof. The most complete property proposition
              in East Africa.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
              {[
                { value: "200+", label: "Projects Built" },
                { value: "160+", label: "Team Members" },
                { value: "10+", label: "Years in Rwanda" },
              ].map((stat) => (
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
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/about"
                className="text-sm font-semibold text-black underline underline-offset-4 hover:text-brand-gray-600"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold text-black underline underline-offset-4 hover:text-brand-gray-600"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import Link from "next/link";
import Image from "next/image";

const previousProjects = [
  {
    name: "Kivu Villas",
    image: "/images/portfolio/villa-pool-timber-deck.webp",
    href: "/portfolio/tukad-huts-3bdr",
  },
  {
    name: "Dasa Musanze",
    image: "/images/portfolio/gj-villa.webp",
    href: "/portfolio/dasa-uluwatu-3bdr",
  },
  {
    name: "The Hut",
    image: "/images/portfolio/the-hut.webp",
    href: "/portfolio",
  },
  {
    name: "Virunga Villas",
    image: "/images/portfolio/suku-terrace.webp",
    href: "/portfolio",
  },
  {
    name: "Kivu Portfolio",
    image: "/images/portfolio/villa-dining-rattan-interior.webp",
    href: "/portfolio",
  },
  {
    name: "Completed Villa",
    image: "/images/portfolio/completed-villa-4.webp",
    href: "/portfolio",
  },
];

export function PreviousDevelopments() {
  return (
    <section className="py-16 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
            Completed
          </p>
          <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
            Previous Developments
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {previousProjects.map((project) => (
            <Link
              key={project.name}
              href={project.href}
              className="group overflow-hidden rounded-lg bg-white"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black">{project.name}</h3>
                <div className="mt-4 flex items-center text-sm font-semibold text-black">
                  View Project
                  <span className="ml-1 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-brand-gray-600">
          Plus many more completed developments across Kigali, Musanze, Rubavu,
          and the Volcanoes region.
        </p>
      </div>
    </section>
  );
}

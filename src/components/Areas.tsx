import Link from "next/link";
import Image from "next/image";

const areas = [
  {
    name: "Kigali",
    description:
      "Capital city with the highest land values and consistent rental demand from expats and business travelers.",
    image: "/images/areas/kigali-area.webp",
    imageAlt: "Kigali - Rwanda property investment area",
    href: "/areas/kigali",
  },
  {
    name: "Musanze",
    description:
      "Volcanoes region — gorilla trekking, luxury lodges, and mountain retreats with strong tourism demand.",
    image: "/images/areas/musanze-area.webp",
    imageAlt: "Musanze - Rwanda property investment area",
    href: "/areas/musanze",
  },
  {
    name: "Rubavu",
    description:
      "Lake Kivu waterfront — premium holiday rentals and luxury lakeside villas with high nightly rates.",
    image: "/images/areas/rubavu-area.webp",
    imageAlt: "Rubavu - Rwanda property investment area",
    href: "/areas/rubavu",
  },
  {
    name: "Nyungwe",
    description:
      "Forest edge — eco-tourism accommodation and sustainable lodge investments with growing demand.",
    image: "/images/areas/nyungwe-area.webp",
    imageAlt: "Nyungwe - Rwanda property investment area",
    href: "/areas/nyungwe",
  },
  {
    name: "Huye",
    description:
      "Southern province cultural hub — university town near Nyungwe and Lake Kivu with affordable land.",
    image: "/images/areas/huye-area.webp",
    imageAlt: "Huye - Rwanda property investment area",
    href: "/areas/huye",
  },
  {
    name: "Nyanza",
    description:
      "Former capital city near Lake Kivu and Nyungwe — historical hub with growing tourism and affordable entry.",
    image: "/images/areas/lake-kivu-area.webp",
    imageAlt: "Nyanza - Rwanda property investment area",
    href: "/areas/nyanza",
  },
];

export function Areas() {
  return (
    <section className="bg-brand-white py-16 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
            Explore Rwanda
          </p>
          <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
            Where to Invest
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-gray-600">
            Each area of Rwanda has its own character, price point, and
            investment profile. Here is where our clients are building villas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <Link
              key={area.name}
              href={area.href}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={area.image}
                  alt={area.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-bold text-white">{area.name}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/80">
                    {area.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

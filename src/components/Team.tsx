import Link from "next/link";
import Image from "next/image";

const teamMembers = [
  {
    name: "Theophile",
    role: "CEO",
    image: "/images/team/dan.webp",
    imageAlt: "Theophile - CEO at Ever Retreat",
  },
  {
    name: "Yvette",
    role: "Architecture Manager",
    image: "/images/team/irene.webp",
    imageAlt: "Yvette - Architecture Manager at Ever Retreat",
  },
  {
    name: "Doris",
    role: "Hospitality Manager",
    image: "/images/team/james.webp",
    imageAlt: "Doris - Hospitality Manager at Ever Retreat",
  },
  {
    name: "Sophie",
    role: "Accountant",
    image: "/images/team/agung.webp",
    imageAlt: "Sophie - Accountant at Ever Retreat",
  },
  {
    name: "Joseph",
    role: "Operations Manager",
    image: "/images/team/nyoman.webp",
    imageAlt: "Joseph - Operations Manager at Ever Retreat",
  },
  {
    name: "Ben",
    role: "Site Engineer",
    image: "/images/team/ben.webp",
    imageAlt: "Ben - Site Engineer at Ever Retreat",
  },
  {
    name: "Eric",
    role: "IT",
    image: "/images/team/yogi.webp",
    imageAlt: "Eric - IT at Ever Retreat",
  },
  {
    name: "Rusagara",
    role: "Procurement Officer",
    image: "/images/team/dedi.webp",
    imageAlt: "Rusagara - Procurement Officer at Ever Retreat",
  },
];

export function Team() {
  return (
    <section className="bg-brand-white py-16 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              Our Team
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-black md:text-5xl md:leading-tight">
              The People Behind the Build
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-gray-600">
              A hands-on team of 160+ architects, engineers, project managers,
              legal advisors, and property managers based in Rwanda. You deal
              directly with the people doing the work.
            </p>
          </div>
          <Link
            href="/about"
            className="shrink-0 text-sm font-semibold text-black underline underline-offset-4 hover:text-brand-gray-600"
          >
            Meet the Full Team &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="group">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-3 text-sm font-semibold text-black">{member.name}</p>
              <p className="mt-1 text-xs text-brand-gray-500">{member.role}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-brand-gray-500">
          and 160+ other people work at Ever Retreat
        </p>
      </div>
    </section>
  );
}

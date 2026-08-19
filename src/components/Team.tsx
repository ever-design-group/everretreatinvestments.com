import Link from "next/link";
import Image from "next/image";

const teamMembers = [
  {
    name: "Daniel",
    role: "Co-Founder & Director",
    image: "/images/team/dan.webp",
    imageAlt: "Daniel - Co-Founder & Director at Ever Retreat",
  },
  {
    name: "Byron",
    role: "General Manager",
    image: "/images/team/byron.webp",
    imageAlt: "Byron - General Manager at Ever Retreat",
  },
  {
    name: "Dedi",
    role: "Principal Architect",
    image: "/images/team/dedi.webp",
    imageAlt: "Dedi - Principal Architect at Ever Retreat",
  },
  {
    name: "Nyoman",
    role: "Project Manager",
    image: "/images/team/nyoman.webp",
    imageAlt: "Nyoman - Project Manager at Ever Retreat",
  },
  {
    name: "James",
    role: "Sales Manager",
    image: "/images/team/james.webp",
    imageAlt: "James - Sales Manager at Ever Retreat",
  },
  {
    name: "Irene",
    role: "Head of Villa Management",
    image: "/images/team/irene.webp",
    imageAlt: "Irene - Head of Villa Management at Ever Retreat",
  },
  {
    name: "Yogi",
    role: "Legal Advisor",
    image: "/images/team/yogi.webp",
    imageAlt: "Yogi - Legal Advisor at Ever Retreat",
  },
  {
    name: "Agung",
    role: "Head QS",
    image: "/images/team/agung.webp",
    imageAlt: "Agung - Head QS at Ever Retreat",
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
      </div>
    </section>
  );
}


import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Architecture & Design",
    price: "From $7K · 50% off with build",
    description:
      "Award-winning architects with an in-house team. 200+ tropical modern villas designed for the Rwandan climate. Custom architecture built for rental performance and climate compliance.",
    image: "/images/services/villa-design.webp",
    imageAlt: "Architecture & Design - Ever Retreat",
    href: "/services/architecture",
  },
  {
    title: "Construction",
    price: "From $1,000/sqm",
    description:
      "End-to-end build management with a 160-strong in-house team. Fixed-price contracts from foundation to handover.",
    image: "/images/services/villa-exterior.webp",
    imageAlt: "Construction - Ever Retreat",
    href: "/services/construction",
  },
  {
    title: "Villa Management",
    price: "From 20% per booking",
    description:
      "Hands-off rental income. Listing, guest management, dynamic pricing, and maintenance - all handled.",
    image: "/images/services/villa-kitchen-lived-in.webp",
    imageAlt: "Villa Management - Ever Retreat",
    href: "/services/villa-management",
  },
  {
    title: "Land Sourcing",
    price: "Freehold & Leasehold",
    description:
      "We source and evaluate land across Rwanda's prime investment zones. Legal due diligence, zoning checks, and negotiation - all before you commit.",
    image: "/images/services/land-aerial.webp",
    imageAlt: "Land Sourcing - Ever Retreat",
    href: "/services/land",
  },
];

export function Services() {
  return (
    <section className="bg-brand-white py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
            What We Do
          </p>
          <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
            End-to-End Property Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-gray-600">
            From finding land to managing your completed villa, our 160-strong
            in-house team handles every stage of the property lifecycle. No
            middlemen, no handoffs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group overflow-hidden rounded-lg bg-white"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded bg-white/90 px-3 py-1 text-xs font-semibold text-black">
                  {service.price}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-black">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray-600">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Link
            href="/services/development-partnerships"
            className="group overflow-hidden rounded-lg bg-white"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/services/development-partner.webp"
                alt="Completed multi-villa development by Ever Retreat"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
                For Landowners & Investors
              </p>
              <h3 className="mt-2 text-lg font-semibold text-black">
                Development Partnerships
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-gray-600">
                Already own land or looking to develop? We partner with
                landowners and investors to design, build, sell, and manage
                full villa developments.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-black">
                Learn More
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>

          <Link
            href="/packages"
            className="group overflow-hidden rounded-lg bg-white"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/portfolio/villa-dining-rattan-interior.webp"
                alt="Villa Packages"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
                From $220K
              </p>
              <h3 className="mt-2 text-lg font-semibold text-black">
                Villa Packages
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-gray-600">
                Browse our popular villa packages from $220K.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-black">
                View Villa Packages
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm font-medium text-brand-gray-500">
            Looking for a fixed-price option?
          </p>
          <p className="mt-2 text-base text-black">
            Browse our popular villa packages from $220K.
          </p>
          <Link
            href="/packages"
            className="mt-4 inline-block text-sm font-semibold text-black underline underline-offset-4 hover:text-brand-gray-600"
          >
            View Villa Packages &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}


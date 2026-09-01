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
    <section className="bg-brand-white py-12 sm:py-16 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="mb-8 text-center sm:mb-12">
          <p className="text-[10px] font-medium uppercase tracking-widest text-brand-gray-500 sm:text-xs">
            What We Do
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-black sm:mt-4 sm:text-3xl md:text-5xl">
            End-to-End Property Services
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-brand-gray-600 sm:mt-4 sm:text-base">
            From finding land to managing your completed villa, our 160-strong
            in-house team handles every stage of the property lifecycle. No
            middlemen, no handoffs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8">
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
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 rounded bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-black sm:bottom-4 sm:left-4 sm:px-3 sm:text-xs">
                  {service.price}
                </span>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base font-semibold text-black sm:text-lg">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-brand-gray-600 sm:text-sm">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 md:gap-8">
          <Link
            href="/services/development-partnerships"
            className="group overflow-hidden rounded-lg bg-white"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/services/development-partner.webp"
                alt="Completed multi-villa development by Ever Retreat"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4 sm:p-6">
              <p className="text-[10px] font-medium uppercase tracking-widest text-brand-gray-500 sm:text-xs">
                For Landowners & Investors
              </p>
              <h3 className="mt-2 text-base font-semibold text-black sm:text-lg">
                Development Partnerships
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-brand-gray-600 sm:text-sm">
                Already own land or looking to develop? We partner with
                landowners and investors to design, build, sell, and manage
                full villa developments.
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-black sm:mt-4 sm:gap-2 sm:text-sm">
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
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4 sm:p-6">
              <p className="text-[10px] font-medium uppercase tracking-widest text-brand-gray-500 sm:text-xs">
                From $220K
              </p>
              <h3 className="mt-2 text-base font-semibold text-black sm:text-lg">
                Villa Packages
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-brand-gray-600 sm:text-sm">
                Browse our popular villa packages from $220K.
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-black sm:mt-4 sm:gap-2 sm:text-sm">
                View Villa Packages
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-8 text-center sm:mt-8">
          <p className="text-xs font-medium text-brand-gray-500 sm:text-sm">
            Looking for a fixed-price option?
          </p>
          <p className="mt-2 text-sm text-black sm:text-base">
            Browse our popular villa packages from $220K.
          </p>
          <Link
            href="/packages"
            className="mt-4 inline-block text-xs font-semibold text-black underline underline-offset-4 hover:text-brand-gray-600 sm:text-sm"
          >
            View Villa Packages &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}


import Image from "next/image";
import Link from "next/link";

const pressLogos = [
  { 
    src: "/images/trust/EVER DESIGN GROUP-01.png", 
    alt: "Ever Design Group",
    size: "large"  // ← Mark this one as large
  },
  { src: "/images/trust/BK+Logo+Portrait(3)_Page_2.webp", alt: "Marie Claire" },
  { src: "/images/trust/rtta.png", alt: "Rwanda Tourism" },
  { src: "/images/trust/rdb.png", alt: "Rwanda Development Board" },
];

export function FeaturedIn() {
  return (
    <section className="border-y border-gray-100 bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-gray-500 mb-2">
          Our Partners
        </p>
        <p className="text-center text-xs text-gray-400 mb-10">
          Trusted by leading organizations across Africa
        </p>
        
        {/* ===== LOGOS ===== */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {pressLogos.map((logo) => (
            <Link
              key={logo.alt}
              href="/awards-and-press"
              className="grayscale opacity-60 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.size === "large" ? 300 : 200}
                height={logo.size === "large" ? 100 : 70}
                className={logo.size === "large" ? "h-20 w-auto object-contain" : "h-12 w-auto object-contain"}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
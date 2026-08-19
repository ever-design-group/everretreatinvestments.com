import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/aerial-rwanda.webp"
          alt="Luxury eco-retreat development by Ever Retreat in Rwanda"
          fill
          priority
          sizes="100vw"
          className="hero-bg-image object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 text-center">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 sm:text-xs sm:tracking-widest">
          Award-Winning Rwanda Property Developer
        </p>
        <h1 className="max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
           <span className="block">Rwanda Eco-Retreats</span>
           <span className="block">Designed and Built by Ever Retreat</span>
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base md:text-lg">
          Luxury eco-retreats across Rubavu, Musanze, Kigali, and Nyungwe, with
          full rental management. From $269K USD.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/developments"
            className="rounded bg-white px-6 py-2.5 text-sm font-semibold text-black transition-all hover:bg-white/90 sm:px-8 sm:py-3"
          >
            Explore Our Developments
          </Link>
          <Link
            href="/contact"
            className="rounded border border-white px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/10 sm:px-8 sm:py-3"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </section>
  );
}


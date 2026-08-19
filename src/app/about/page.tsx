import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StatsBar } from "@/components/StatsBar";
import { Team } from "@/components/Team";
import { About } from "@/components/About";
import { WhyRwanda } from "@/components/WhyRwanda";
import { Awards } from "@/components/Awards";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import Image from "next/image";

export const metadata = {
  title: "About Ever Retreat - Rwanda Property Investment | Ever Retreat",
  description:
    "Australian-owned, Rwanda-based property company with 160+ in-house professionals. Architecture, construction, villa management, and real estate - all under one roof.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative h-[100svh] w-full overflow-hidden">
          <Image
            src="/images/hero/aerial-rwanda.webp"
            alt="Aerial view of Ever Retreat landscape in Rwanda"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 sm:tracking-[0.25em]">
              About Ever Retreat
            </p>
            <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
              Award-Winning Rwanda Developer
            </h1>
            <p className="mt-4 sm:mt-6 max-w-2xl text-sm text-white/90 sm:text-base md:text-xl">
              Rwanda-owned, Ever Retreat-based property company. 160+ in-house
              professionals. From architecture to rental management - all under
              one roof.
            </p>
          </div>
        </section>

        <StatsBar />

        <About />

        <WhyRwanda />

        <section className="relative py-20 md:py-32 overflow-hidden">
          <Image
            src="/images/portfolio/villa-pool-timber-deck.webp"
            alt="Villa with pool"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative mx-auto max-w-[1440px] px-6 text-center">
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              200+ Villas. Still Counting.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
              Ten years building across Kigali, Musanze, Rubavu, Huye, and
              Nyanza. Each project a testament to quality, design, and
              investment performance.
            </p>
          </div>
        </section>

        <Awards />

        <Testimonials />

        <Team />

        <FAQ />

        <InterestedInInvesting />
      </main>
      <FinalCTA />
      <Footer />
    </>
  );
}

import { PageLayout } from "@/components/PageLayout";
import { Testimonials } from "@/components/Testimonials";
import Image from "next/image";

export const metadata = {
  title: "Client Stories | Ever Retreat Rwanda",
  description:
    "Read real stories from villa owners and investors who built with Ever Retreat in Rwanda.",
};

export default function TestimonialsPage() {
  return (
    <PageLayout
      hero={
        <section className="relative h-[600px] w-full overflow-hidden">
          <Image
            src="/images/hero/hero-1-full.webp"
            alt="Ever Retreat villa living room interior"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 sm:tracking-[0.25em]">
              Ever Retreat Rwanda
            </p>
            <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
              Client Stories
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base md:text-lg">
              Real stories from villa owners and investors who built with us in Rwanda.
            </p>
          </div>
        </section>
      }
    >
      <Testimonials />
    </PageLayout>
  );
}

import { PageLayout } from "@/components/PageLayout";
import { FAQ as FAQComponent } from "@/components/FAQ";
import Image from "next/image";

export const metadata = {
  title: "FAQ - Building a Villa in Rwanda | Ever Retreat",
  description:
    "Frequently asked questions about building villas in Rwanda. Legal structures, build costs, timelines, yields, and more.",
};

export default function FAQPage() {
  return (
    <PageLayout
      hero={
        <section className="relative h-[600px] w-full overflow-hidden">
          <Image
            src="/images/hero/hero-2-full.webp"
            alt="Rwanda hillside landscape with Ever Retreat villas"
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
              Frequently Asked Questions
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base md:text-lg">
              Answers to the questions we get asked most about building villas in Rwanda.
            </p>
          </div>
        </section>
      }
    >
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto max-w-3xl">
            <FAQComponent />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

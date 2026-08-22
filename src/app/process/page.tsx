import { PageLayout } from "@/components/PageLayout";
import { HowItWorks } from "@/components/HowItWorks";
import { ProcessSteps } from "@/components/ProcessSteps";
import Image from "next/image";

export const metadata = {
  title: "The Ever Retreat Process | Rwanda Villa Construction",
  description:
    "From vision to villa. Our step-by-step process for building your dream villa in Rwanda - land sourcing, design, permits, construction, and management.",
};

export default function ProcessPage() {
  return (
    <PageLayout
      hero={
        <section className="relative h-[600px] w-full overflow-hidden">
          <Image
            src="/images/hero/rwanda-landscape.webp"
            alt="Rwanda hills landscape"
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
              The Process
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base md:text-lg">
              Building a villa in Rwanda doesn&apos;t have to be overwhelming. Here is
              exactly what happens, step by step.
            </p>
          </div>
        </section>
      }
    >
      <ProcessSteps />
      <HowItWorks />
    </PageLayout>
  );
}

import { PageLayout } from "@/components/PageLayout";
import { Developments } from "@/components/Developments";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { PricingForm } from "@/components/PricingForm";
import Image from "next/image";

export const metadata = {
  title: "Buy a Ready-Made Villa | Ever Retreat Rwanda",
  description:
    "Browse off-plan and ready-to-buy villas in Rwanda. From $220K with 15-20% yield potential.",
};

export default function BuyPage() {
  return (
    <PageLayout
      hero={
        <section className="relative h-[600px] w-full overflow-hidden">
          <Image
            src="/images/hero/nara-hero-poster.webp"
            alt="Kivu Villas lakeside development"
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
              Buy a Villa
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base md:text-lg">
              Browse available off-plan and ready-to-buy villas across Rwanda.
            </p>
          </div>
        </section>
      }
    >
      <Developments showAll showHeader={true} />
      <InvestmentMarket />
      <PricingForm />
    </PageLayout>
  );
}

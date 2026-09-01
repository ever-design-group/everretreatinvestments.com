import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Developments } from "@/components/Developments";
import { PricingForm } from "@/components/PricingForm";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { PreviousDevelopments } from "@/components/PreviousDevelopments";
import { InvestmentGuides } from "@/components/InvestmentGuides";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Rwanda Off-Plan & Ready-to-Buy Villas from $220K | Ever Retreat",
  description:
    "Explore our latest off-plan and ready-to-buy villa developments in Rubavu, Musanze, Kigali, and Nyungwe. From $220K USD with 15-20% yield.",
};

export default function DevelopmentsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative h-[100svh] w-full overflow-hidden">
          <div className="dev-hero-bg absolute inset-0">
            <Image
               src="/images/hero/aerial-rwanda.webp"
               alt="Rwanda aerial landscape"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />
          <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-white/80">
              Off-Plan and Ready-to-Buy
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">
              <span className="block">Invest in Our</span>
              <span className="block">Developments</span>
            </h1>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white">$220K</span>
                <span className="text-sm text-white/70">From</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white">15-20%</span>
                <span className="text-sm text-white/70">Yield</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white">7</span>
                <span className="text-sm text-white/70">Projects</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-white">Full</span>
                <span className="text-sm text-white/70">Management</span>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="rounded bg-white px-8 py-3 text-sm font-semibold text-black transition-all hover:bg-white/90"
              >
                Enquire Now
              </Link>
              <Link
                href="https://wa.me/250787524298"
                className="rounded bg-brand-green px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-green/90"
              >
                WhatsApp Us
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-brand-gray-300 py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
            <div className="mb-12 text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-brand-gray-500">
                Available Now
              </p>
              <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
                Active Developments
              </h2>
            </div>

            <Developments showAll showHeader={false} variant="overlay" />
          </div>
        </section>

        <PricingForm />

        <InvestmentMarket />

        <PreviousDevelopments />

        <InvestmentGuides />

        <InterestedInInvesting />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}


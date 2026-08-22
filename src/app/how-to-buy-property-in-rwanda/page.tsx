"use client";

import { PageLayout } from "@/components/PageLayout";
import { HeroAnimated } from "@/components/HeroAnimated";
import { BringVillaToLifeCTA } from "@/components/CTASections";
import { StatsBar } from "@/components/StatsBar";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { FAQ } from "@/components/FAQ";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import { WhyEverRetreat } from "@/components/WhyEverRetreat";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  ChevronRight, CheckCircle2, FileText, LandPlot, Users, 
  Building2, ClipboardCheck, Calendar, ArrowRight, ShieldCheck, 
  TrendingUp, MapPin 
} from "lucide-react";

// Fade-in animation component
function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function HowToBuyPage() {
  const heroSlides = [
    {
      image: "/images/hero/rwanda-landscape.webp",
      imageAlt: "Rwanda landscape with volcanoes",
      title: "How to Buy Property in Rwanda",
      subtitle: "Your complete step-by-step guide to real estate investment in Rwanda.",
    },
    {
      image: "/images/areas/lake-kivu-area.webp",
      imageAlt: "Lake Kivu waterfront property",
      title: "Legal Clarity",
      subtitle: "Foreign buyers can secure property through leasehold, freehold, and corporate structures.",
    },
    {
      image: "/images/developments/dasa-ubud/dasa-ubud-banner.webp",
      imageAlt: "Completed villa development in Rwanda",
      title: "Expert Support",
      subtitle: "Our in-house legal team guides you through every step, stress-free.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Define Your Budget and Goals",
      description:
        "Start with the goal: a holiday home, a rental investment, or both. That decides whether you want a finished villa, an off-plan build, land, or a house, and which area fits. Kigali and Rubavu lead for rental yield, Musanze and Nyungwe for lifestyle and value. Set a realistic budget before you fall for a listing.",
    },
    {
      number: "02",
      title: "Understand How Foreigners Own Property Here",
      description:
        "Foreign buyers can secure property through leasehold (20-99 year renewable) or corporate structures. Freehold is available in designated areas. Which one fits depends on whether the villa is for personal use or income. This is the single most important thing to get right, so understand it before you shortlist anything.",
    },
    {
      number: "03",
      title: "Property Search and Due Diligence",
      description:
        "Browse listings, off-plan developments, and resale properties across Kigali, Musanze, Rubavu, Nyungwe, Akagera, and Nyanza. For a new build, the developer matters as much as the villa — check our track record, licences, and completed projects. Our team conducts full legal due diligence before you commit.",
    },
    {
      number: "04",
      title: "Negotiation and Offer",
      description:
        "We negotiate on your behalf, leveraging local market knowledge and relationships. For development land, we can structure joint-venture partnerships where you contribute the land and we handle design, construction, and management.",
    },
    {
      number: "05",
      title: "Legal Transfer and Post-Purchase",
      description:
        "Final transfer is handled by a licensed notary. After purchase, we coordinate site surveys, building permits, and if applicable, begin the design-build process for your villa. We stay with you beyond the sale.",
    },
  ];

  const ownershipTypes = [
    {
      icon: FileText,
      title: "Leasehold (PDL/Lease)",
      description: "20-99 year renewable lease, standard for foreigners. Available on most residential and development sites.",
      features: ["Renewable after term", "Foreigner-friendly", "Most common structure"],
    },
    {
      icon: ShieldCheck,
      title: "Freehold (Title Deed)",
      description: "Perpetual ownership, available in designated areas. Our legal team verifies eligibility before purchase.",
      features: ["Perpetual ownership", "Full property rights", "Available in select areas"],
    },
    {
      icon: ClipboardCheck,
      title: "Corporate Structure",
      description: "Local share company ownership for commercial-scale projects. Requires legal setup but offers flexibility.",
      features: ["Commercial flexibility", "Investment vehicle", "Professional setup"],
    },
  ];

  const fees = [
    { name: "Transfer Tax (5%)", cost: "$2,500 (on $50K land)" },
    { name: "Notary/Transfer Fees", cost: "~$1,500" },
    { name: "Legal Due Diligence", cost: "~$500" },
    { name: "Building Permit", cost: "~$300" },
  ];

  const areas = [
    { 
      name: "Kigali", 
      description: "Capital city, highest land values, consistent rental demand, urban luxury living.", 
      badge: "Popular",
    },
    { 
      name: "Musanze", 
      description: "Volcanoes region, gorilla tourism, luxury lodge market, eco-adventure hub.", 
      badge: "High Growth",
    },
    { 
      name: "Rubavu", 
      description: "Lake Kivu waterfront, high-end holiday rentals, stunning sunset views.", 
      badge: "Premium",
    },
    { 
      name: "Nyungwe", 
      description: "Forest edge, eco-tourism, lower entry costs, canopy walkway access.", 
      badge: "Emerging",
    },
    { 
      name: "Akagera", 
      description: "National park proximity, safari lodge market, wildlife investment opportunity.", 
      badge: "Unique",
    },
    { 
      name: "Nyanza", 
      description: "Historic royal capital, cultural tourism, growing residential development, southern region hub.", 
      badge: "Up & Coming",
    },
  ];

  return (
    <PageLayout
      hero={
        <HeroAnimated
          slides={heroSlides}
          badge="Free Guide"
          tag="Ever Retreat"
          ctaHref="#guide"
          secondaryCtaHref="/packages"
        />
      }
    >
      {/* Introduction */}
      <section id="guide" className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <FadeInSection>
            <div className="text-center">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#124341] sm:text-xs">
                Your Complete Guide
              </p>
              <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:mt-4 sm:text-3xl md:text-4xl">
                How to Buy Property in Rwanda
              </h2>
              <p className="mt-3 text-sm text-gray-600 sm:mt-4 sm:text-base max-w-3xl mx-auto">
                Buying property in Rwanda is straightforward when you work with the right team.
                Our in-house legal experts handle all compliance, title verification, and transfer
                documentation — so you can focus on finding the perfect property.
              </p>
            </div>
          </FadeInSection>

          {/* Steps - Clean Numbered Design with Lines */}
          <div className="mt-10 sm:mt-12">
            {steps.map((step, index) => (
              <FadeInSection key={index} delay={index * 0.08}>
                <div className="py-6 sm:py-8">
                  {/* Step Number and Title */}
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="text-2xl font-bold text-[#124341] sm:text-3xl shrink-0">
                      {step.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="mt-2 pl-12 sm:pl-14">
                    <p className="text-sm text-gray-600 sm:text-base">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Divider Line - except after last step */}
                  {index < steps.length - 1 && (
                    <div className="mt-6 border-t border-gray-200" />
                  )}
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* Ownership Types */}
          <FadeInSection delay={0.3}>
            <div className="mt-14 pt-6 border-t border-gray-200">
              <h3 className="mb-6 text-center text-lg font-bold text-gray-900 sm:text-xl md:text-2xl">
                Ownership Structures for Foreign Buyers
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {ownershipTypes.map((type, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-gray-200 bg-gray-50 p-5 transition-all hover:shadow-md hover:border-[#124341] sm:p-6"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#124341] sm:h-12 sm:w-12">
                      <type.icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                    </div>
                    <h4 className="mt-3 text-sm font-bold text-gray-900 sm:text-base">
                      {type.title}
                    </h4>
                    <p className="mt-1.5 text-xs text-gray-600 sm:mt-2 sm:text-sm">
                      {type.description}
                    </p>
                    <ul className="mt-3 space-y-1">
                      {type.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-gray-600 sm:text-sm">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#124341]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <StatsBar />

      <WhyEverRetreat />

      {/* Cost Breakdown */}
      <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            <FadeInSection>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#124341] sm:text-xs">
                  Cost Breakdown
                </p>
                <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:mt-4 sm:text-3xl md:text-4xl">
                  What You&apos;ll Pay
                </h2>
                <p className="mt-3 text-sm text-gray-600 sm:mt-4 sm:text-base">
                  Beyond the purchase price, budget 10-15% for transaction costs:
                  notary fees, transfer tax, stamp duty, and legal fees. Our
                  transparent fee structure means no hidden costs.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-[#124341] px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#0d332f] hover:shadow-lg sm:px-6 sm:py-3 sm:text-sm"
                  >
                    Get a Detailed Quote
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 sm:ml-2 sm:h-4 sm:w-4" />
                  </Link>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                  Transaction Fees Breakdown
                </h3>
                <div className="mt-4 space-y-3">
                  {fees.map((fee, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between border-b border-gray-100 pb-2.5 last:border-0 last:pb-0"
                    >
                      <span className="text-xs text-gray-600 sm:text-sm">{fee.name}</span>
                      <span className="text-xs font-semibold text-gray-900 sm:text-sm">
                        {fee.cost}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-lg bg-[#e8f0ef] p-3 text-center sm:p-4">
                  <p className="text-xs font-bold text-[#124341] sm:text-sm">
                    Total Transaction Costs: ~10-15% of Purchase Price
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <InvestmentMarket />

      {/* Top Areas */}
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <FadeInSection>
            <div className="text-center">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#124341] sm:text-xs">
                Location Guide
              </p>
              <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:mt-4 sm:text-3xl md:text-4xl">
                Top Areas for Property Investment
              </h2>
              <p className="mt-3 text-sm text-gray-600 sm:mt-4 sm:text-base max-w-2xl mx-auto">
                Rwanda offers diverse investment opportunities across its most
                desirable regions. Each area has unique characteristics and growth potential.
              </p>
            </div>
          </FadeInSection>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {areas.map((area, index) => (
              <FadeInSection key={index} delay={index * 0.08}>
                <div className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-[#124341] sm:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#124341]" />
                      <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                        {area.name}
                      </h3>
                    </div>
                    <span className="rounded-full bg-[#e8f0ef] px-2.5 py-0.5 text-[10px] font-medium text-[#124341] sm:text-xs">
                      {area.badge}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm">
                    {area.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      <BringVillaToLifeCTA />

      <InterestedInInvesting />
    </PageLayout>
  );
}
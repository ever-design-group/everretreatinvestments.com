"use client";

import { PageLayout } from "@/components/PageLayout";
import { BringVillaToLifeCTA } from "@/components/CTASections";
import { StatsBar } from "@/components/StatsBar";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import { WhyEverRetreat } from "@/components/WhyEverRetreat";
import { FreeGuide } from "@/components/FreeGuide";
import { InvestmentGuides } from "@/components/InvestmentGuides";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronRight, MapPin, ArrowRight } from "lucide-react";

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

export default function InvestInRwandaPage() {
  const heroStats = [
    { value: "12-18%", label: "Rental Yield" },
    { value: "1.5M+", label: "Annual Visitors" },
    { value: "5-7 Yrs", label: "Break-Even" },
    { value: "$220K", label: "Entry From" },
  ];

  // Strategy areas - Rwanda specific
  const strategyAreas = [
    { name: "Kigali", description: "Capital city, consistent rental demand" },
    { name: "Musanze", description: "Volcanoes region, gorilla tourism" },
    { name: "Rubavu", description: "Lake Kivu waterfront, premium" },
    { name: "Nyungwe", description: "Rainforest edge, eco-tourism" },
    { name: "Akagera", description: "National park, safari lodge" },
    { name: "Nyanza", description: "Cultural tourism, up & coming" },
  ];

  // ROI breakdown - Rwanda specific
  const roiData = [
    { strategy: "Short-Term Holiday Rental", yield: "12 to 18%", notes: "Kigali, Musanze, Rubavu prime locations" },
    { strategy: "Long-Term Lease", yield: "8 to 12%", notes: "Stable income, lower management overhead" },
    { strategy: "Capital Appreciation", yield: "7 to 15% / yr", notes: "Prime land in emerging sub-markets" },
    { strategy: "Combined (Rental + Capital)", yield: "15 to 25%+", notes: "Best-in-class locations, ROI-designed builds" },
  ];

  // Investment tiers - Rwanda specific
  const tiers = [
    {
      title: "Starter Investment",
      description: "A compact 1-2 bedroom villa in an emerging area like Nyanza or Nyungwe outskirts. Simple, modern design with private garden. Ideal for first-time Rwanda investors.",
      return: "Expected annual rental income: $18,000 - $30,000 USD.",
      breakEven: "Break-even in 5 to 7 years with professional management",
    },
    {
      title: "Premium Investment",
      description: "A 2-3 bedroom villa in a prime location like Kigali, Musanze, or Rubavu. High-end finishes, designed landscaping. Strong rental appeal with higher nightly rates.",
      return: "Expected annual rental income: $35,000 - $60,000 USD.",
      breakEven: "The sweet spot for investors wanting both strong returns and a personal-use holiday home.",
    },
    {
      title: "Luxury / Multi-Unit",
      description: "A 3-4 bedroom luxury villa with resort-grade finishes, or a multi-unit development with 2-4 villas on a single plot. Lake Kivu views, Musanze mountain views, or boutique resort concepts.",
      return: "Expected annual rental income: $60,000 - $120,000+ USD.",
      breakEven: "Multiple revenue streams with portfolio-level diversification.",
    },
  ];

  // Comparison data - Rwanda vs African Countries
  const comparisonData = [
    { metric: "Entry Price (2BR Villa)", rwanda: "$150K - $250K", kenya: "$200K - $450K", tanzania: "$180K - $350K", uganda: "$120K - $250K", southAfrica: "$100K - $300K" },
    { metric: "Management Cost", rwanda: "$2K - $5K/yr", kenya: "$5K - $10K/yr", tanzania: "$4K - $8K/yr", uganda: "$2K - $5K/yr", southAfrica: "$4K - $9K/yr" },
    { metric: "Foreign Ownership", rwanda: "Leasehold / Freehold", kenya: "Leasehold (99 years)", tanzania: "Leasehold (99 years)", uganda: "Leasehold / Freehold", southAfrica: "Freehold (restricted)" },
    { metric: "Capital Appreciation", rwanda: "7-15%/yr", kenya: "5-10%/yr", tanzania: "4-8%/yr", uganda: "5-10%/yr", southAfrica: "3-7%/yr" },
    { metric: "Break-Even Period", rwanda: "5-7 years", kenya: "8-12 years", tanzania: "7-10 years", uganda: "6-9 years", southAfrica: "10-15 years" },
  ];

  // Process steps - Rwanda specific
  const processSteps = [
    { step: "Discovery Call", description: "We learn your goals, budget, and preferred timeline. No obligation, just a straight conversation about what is possible in Rwanda." },
    { step: "Land and Strategy", description: "Our land sourcing team identifies opportunities across Kigali, Musanze, Rubavu, Nyungwe, Akagera, and Nyanza that match your criteria." },
    { step: "Design and Build", description: "Our architects design for ROI from day one. We project manage the full construction process, keeping you informed at every stage." },
    { step: "Rental Management", description: "Our villa management team lists, manages, and optimises your property for maximum occupancy. You collect returns while we handle operations." },
  ];

  // Single image path - UPDATE THIS TO YOUR ACTUAL IMAGE
  const developmentImage = "/images/developments/investment/aamzing-vill-colm-color-everretreat-offplan.jpg";

  // Rwanda Developments Data - All using the same image
  const developments = [
    {
      title: "B&P Ever Retreat Villa",
      location: "Rubavu, Lake Kivu",
      beds: "",
      availability: "Prototype",
      price: "Not For Sale",
      link: "/developments/nara-villas",
    },
    {
      title: "Cottage",
      location: "Rubavu, Lake Kivu",
      beds: "3 Bed",
      availability: "Prototype",
      price: "Not For Sale",
      link: "/developments/solas-kivu",
    },
    {
      title: "Virunga Villas",
      location: "Musanze",
      beds: "2-4 Bed",
      availability: "Coming Soon",
      price: "",
      link: "/developments/suku-residences",
    },
    {
      title: "Nyungwe Retreat",
      location: "Nyungwe",
      beds: "",
      availability: "Coming Soon",
      price: "",
      link: "/areas/nyungwe",
    },
    {
      title: "Huye Villas",
      location: "Huye",
      beds: "",
      availability: "Coming Soon",
      price: "",
      link: "/areas/huye",
    },
    {
      title: "Nyanza Villas",
      location: "Nyanza",
      beds: "",
      availability: "Coming Soon",
      price: "",
      link: "/areas/nyanza",
    },
    {
      title: "Akagera Retreat",
      location: "Akagera",
      beds: "",
      availability: "Coming Soon",
      price: "",
      link: "/areas/akagera",
    },
    {
      title: "Kigali Retreat",
      location: "Kigali",
      beds: "",
      availability: "Coming Soon",
      price: "",
      link: "/areas/kigali",
    },
  ];

  // FAQ data
  const faqItems = [
    { q: "Can foreigners buy property in Rwanda?", a: "Yes, foreigners can legally secure property in Rwanda through leasehold agreements (20-99 years), freehold title deeds in designated areas, or corporate structures. Our legal team ensures every acquisition is fully compliant." },
    { q: "Is Rwanda a good investment compared to other African countries?", a: "Rwanda offers competitive returns with entry prices comparable to other African markets. Gross yields of 12-18% with 85%+ occupancy rates make it one of Africa's strongest property investment markets." },
    { q: "What rental income can I expect from a Rwanda villa?", a: "Depending on location and property type, annual rental income ranges from $18,000 for starter villas to $60,000+ for luxury properties in prime locations like Kigali, Musanze, and Rubavu." },
    { q: "How much does it cost to build a villa in Rwanda?", a: "Build costs in Rwanda are competitive, typically ranging from $150,000 to $350,000+ depending on size, location, and finishes. Contact our team for a detailed quote." },
    { q: "What are the ongoing costs of owning a villa in Rwanda?", a: "Ongoing costs include management fees (typically 15-20% of rental income), maintenance, utilities, and property insurance. These are significantly lower than in Western markets." },
    { q: "What is the difference between freehold and leasehold in Rwanda?", a: "Freehold (Title Deed) offers perpetual ownership and is available in designated areas. Leasehold (PDL/Lease) is a 20-99 year renewable lease, standard for foreigners and the most common structure." },
  ];

  return (
    <PageLayout showCta={false}
      hero={
        <section className="relative flex min-h-[85vh] w-full flex-col justify-end overflow-hidden bg-brand-teal">
          <Image
            src="/images/hero/aerial-rwanda.webp"
            alt="Aerial view of Rwanda landscape"
            fill
            priority
            className="object-cover opacity-70"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-16 pt-32 md:px-12 md:pb-24">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/50 md:text-sm">
              The Investor&apos;s Guide
            </p>
            <h1 className="text-4xl uppercase leading-[0.95] tracking-wide text-white md:text-7xl lg:text-8xl">
              <span className="font-light">Rwanda Property</span>
              <br />
              <span className="font-bold">Investment</span>
            </h1>
            <div className="mt-10 flex flex-wrap gap-8 md:mt-14 md:gap-16">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold tabular-nums text-white md:text-4xl">
                    {stat.value}
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-wider text-white/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      }
    >
      {/* Introduction Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                Rwanda property investment means buying or building villas and land in Rwanda for rental income
                and capital growth. Once a frontier market, it has become a serious real estate asset
                class. Infrastructure is expanding, digital nomad migration is rising, and international buyers
                are putting more capital into the country&apos;s property market. The window to buy at pre-
                appreciation prices in emerging sub-markets is narrowing. Whether you want to buy an off-
                plan villa or browse existing properties for sale, we can guide you through the process.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      <StatsBar />

      <WhyEverRetreat />

      {/* Our Strategy Section */}
      <section className="bg-gray-50 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">Our Strategy</h2>
              <p className="mt-4 text-base text-gray-600 sm:text-lg">
                We deliberately avoid saturated markets where yields have been compressed by oversupply. Instead,
                we target emerging and under-served areas where infrastructure is improving and demand is building,
                giving our clients first-mover advantage across Rwanda.
              </p>
            </FadeInSection>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {strategyAreas.map((area, index) => (
                <FadeInSection key={index} delay={index * 0.08}>
                  <div className="rounded-sm border border-gray-200 bg-white p-4 text-center transition-all hover:border-[#124341] sm:p-6">
                    <MapPin className="mx-auto h-6 w-6 text-[#124341]" />
                    <h3 className="mt-2 text-base font-bold text-gray-900">{area.name}</h3>
                    <p className="mt-1 text-xs text-gray-600 sm:text-sm">{area.description}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Breakdown */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">Returns by Strategy</h2>
              <p className="mt-2 text-base text-gray-600 sm:text-lg">ROI Breakdown</p>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse text-sm sm:text-base">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="pb-3 text-left font-semibold text-gray-900">Strategy</th>
                      <th className="pb-3 text-left font-semibold text-gray-900">Typical Yield</th>
                      <th className="pb-3 text-left font-semibold text-gray-900">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {roiData.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 text-gray-800">{item.strategy}</td>
                        <td className="py-3 font-semibold text-[#124341]">{item.yield}</td>
                        <td className="py-3 text-gray-600">{item.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Comparison Section - Rwanda vs African Countries */}
      <section className="bg-gray-50 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">Rwanda vs Other African Investment Markets</h2>
              <p className="mt-4 text-base text-gray-600 sm:text-lg">
                International property investors are increasingly comparing Rwanda with other African markets like Kenya, Tanzania, Uganda, and South Africa. Here is how the numbers stack up across the metrics that matter most.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse text-xs sm:text-sm md:text-base">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-100">
                      <th className="p-3 text-left font-semibold text-gray-900">Metric</th>
                      <th className="p-3 text-left font-semibold text-[#124341]">Rwanda</th>
                      <th className="p-3 text-left font-semibold text-gray-900">Kenya</th>
                      <th className="p-3 text-left font-semibold text-gray-900">Tanzania</th>
                      <th className="p-3 text-left font-semibold text-gray-900">Uganda</th>
                      <th className="p-3 text-left font-semibold text-gray-900">South Africa</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="p-3 font-medium text-gray-800">{item.metric}</td>
                        <td className="p-3 font-semibold text-[#124341]">{item.rwanda}</td>
                        <td className="p-3 text-gray-600">{item.kenya}</td>
                        <td className="p-3 text-gray-600">{item.tanzania}</td>
                        <td className="p-3 text-gray-600">{item.uganda}</td>
                        <td className="p-3 text-gray-600">{item.southAfrica}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInSection>

            {/* East Africa Comparison Note */}
            <FadeInSection delay={0.3}>
              <div className="mt-8 rounded-sm border border-[#124341] bg-[#e8f0ef] p-6">
                <h3 className="text-lg font-bold text-[#124341] sm:text-xl">Why Rwanda Stands Out in East Africa</h3>
                <p className="mt-3 text-sm text-gray-700 sm:text-base">
                  For East African investors, Rwanda offers a compelling combination of stability, ease of doing business, and investor-friendly policies. The Rwanda Development Board (RDB) has simplified property acquisition, and the country consistently ranks as one of Africa&apos;s easiest places to do business.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-sm bg-white p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Ease of Doing Business</p>
                    <p className="mt-1 text-sm font-semibold text-gray-900">Kenya: 56th</p>
                    <p className="text-sm font-semibold text-[#124341]">Rwanda: 38th (Africa&apos;s #1)</p>
                  </div>
                  <div className="rounded-sm bg-white p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Property Registration Time</p>
                    <p className="mt-1 text-sm font-semibold text-gray-900">Kenya: ~30 days</p>
                    <p className="text-sm font-semibold text-[#124341]">Rwanda: ~7 days</p>
                  </div>
                  <div className="rounded-sm bg-white p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Rental Yields</p>
                    <p className="mt-1 text-sm font-semibold text-gray-900">Kenya: 6-10%</p>
                    <p className="text-sm font-semibold text-[#124341]">Rwanda: 12-18%</p>
                  </div>
                  <div className="rounded-sm bg-white p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Annual GDP Growth</p>
                    <p className="mt-1 text-sm font-semibold text-gray-900">Kenya: 5-6%</p>
                    <p className="text-sm font-semibold text-[#124341]">Rwanda: 7-10%</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Investment Tiers */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">Investment Tiers</h2>
            </FadeInSection>

            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {tiers.map((tier, index) => (
                <FadeInSection key={index} delay={index * 0.1}>
                  <div className="rounded-sm border border-gray-200 bg-white p-6 transition-all hover:border-[#124341]">
                    <h3 className="text-lg font-bold text-gray-900">{tier.title}</h3>
                    <p className="mt-3 text-sm text-gray-600">{tier.description}</p>
                    <p className="mt-3 text-sm font-semibold text-[#124341]">{tier.return}</p>
                    <p className="mt-2 text-xs text-gray-500">{tier.breakEven}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>

            <FadeInSection delay={0.3}>
              <div className="mt-8 text-center">
                <Link
                  href="/developments"
                  className="inline-flex items-center justify-center rounded-sm bg-[#124341] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#0d332f] sm:px-8 sm:py-3.5"
                >
                  Browse Current Developments
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Developments Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Where We&apos;re Building
              </h2>
              <p className="mt-4 text-base text-gray-600 sm:text-lg">
                Every Ever Retreat development is designed, built, and managed in-house — from
                completed showcase villas to developments in design across Rwanda.
              </p>
            </div>
          </FadeInSection>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {developments.map((development, index) => (
              <FadeInSection key={index} delay={index * 0.08}>
                <div className="group rounded-sm border border-gray-200 bg-white overflow-hidden transition-all hover:border-[#124341]">
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100 sm:h-52">
                    <Image
                      src={developmentImage}
                      alt={development.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/images/placeholder-villa.webp";
                      }}
                    />
                  </div>
                  
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-bold text-gray-900">{development.title}</h3>
                    <p className="text-sm text-gray-500">{development.location}</p>
                    
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-500">{development.beds}</span>
                        <span className="text-xs text-gray-500">{development.availability}</span>
                      </div>
                      <span className="text-sm font-bold text-[#124341]">{development.price}</span>
                    </div>

                    <Link
                      href={development.link}
                      className="mt-4 flex w-full items-center justify-center rounded-sm border border-[#124341] px-4 py-2.5 text-sm font-semibold text-[#124341] transition-all hover:bg-[#124341] hover:text-white"
                    >
                      View Development
                      <ChevronRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={0.3}>
            <div className="mt-10 text-center">
              <Link
                href="/developments"
                className="inline-flex items-center justify-center rounded-sm bg-[#124341] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#0d332f]"
              >
                View All Developments
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      <InvestmentMarket />

      {/* What to Consider */}
      <section className="bg-gray-50 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">What to Consider Before You Invest in Rwanda</h2>
              <p className="mt-4 text-base text-gray-600 sm:text-lg">
                No investment is without risk, and we believe you deserve an honest picture before committing capital.
                Here are the main considerations for Rwanda property investors.
              </p>
            </FadeInSection>

            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Leasehold vs Freehold",
                  description: "Foreign investors typically hold property on leasehold (20-99 years) or freehold (Title Deed) in designated areas. Lease extensions are common but not guaranteed."
                },
                {
                  title: "Regulatory Changes Can Happen",
                  description: "Rwanda property law has become more investor-friendly over the past decade, but regulations can change. Working with a licensed, locally established company like Ever Retreat reduces your exposure."
                },
                {
                  title: "Not All Areas Perform Equally",
                  description: "Rwanda is not one market. Occupancy rates, nightly rates, and capital appreciation vary significantly by location. Our investment strategy focuses on emerging areas with strong demand."
                },
                {
                  title: "Construction Quality Varies Widely",
                  description: "Rwanda has many builders, but quality and accountability range from excellent to disastrous. This is why we manage every build with our own team."
                },
                {
                  title: "Currency Risk",
                  description: "Rwanda rental income is typically earned in USD or RWF, while your home currency may be AUD, EUR, or GBP. Exchange rate movements can impact your returns."
                }
              ].map((item, index) => (
                <FadeInSection key={index} delay={index * 0.06}>
                  <div className="rounded-sm border border-gray-200 bg-white p-5 transition-all hover:border-[#124341] sm:p-6">
                    <h4 className="text-base font-bold text-gray-900">{item.title}</h4>
                    <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>

            <FadeInSection delay={0.3}>
              <p className="mt-6 text-center text-sm text-gray-600 sm:text-base">
                None of these risks are deal-breakers for the right investor, but they should be understood clearly.
                Our job is to help you make an informed decision — not to oversell an opportunity.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">The Process</h2>
              <p className="mt-2 text-base text-gray-600 sm:text-lg">How It Works</p>
            </FadeInSection>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-6">
              {processSteps.map((item, index) => (
                <FadeInSection key={index} delay={index * 0.08}>
                  <div className="rounded-sm border border-gray-200 bg-gray-50 p-5 transition-all hover:border-[#124341] sm:p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#124341] text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <h4 className="text-base font-bold text-gray-900">{item.step}</h4>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>

            <FadeInSection delay={0.3}>
              <div className="mt-8 text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-sm bg-[#124341] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#0d332f] sm:px-8 sm:py-3.5"
                >
                  Start Your Investment Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl text-center">
                Frequently Asked Questions
              </h2>
            </FadeInSection>

            <div className="mt-6 space-y-4">
              {faqItems.map((item, index) => (
                <FadeInSection key={index} delay={index * 0.06}>
                  <div className="rounded-sm border border-gray-200 bg-white p-5 transition-all hover:border-gray-400 sm:p-6">
                    <h4 className="text-base font-bold text-gray-900">{item.q}</h4>
                    <p className="mt-2 text-sm text-gray-600">{item.a}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FreeGuide />

      <InvestmentGuides />

      <BringVillaToLifeCTA />

      <InterestedInInvesting />
    </PageLayout>
  );
}
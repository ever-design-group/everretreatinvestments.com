import { PageLayout } from "@/components/PageLayout";
import { HeroAnimated } from "@/components/HeroAnimated";
import { BringVillaToLifeCTA } from "@/components/CTASections";
import { StatsBar } from "@/components/StatsBar";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { FAQ } from "@/components/FAQ";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import { WhyEverRetreat } from "@/components/WhyEverRetreat";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, DollarSign, TrendingUp, Users, ShieldCheck, Building2, Clock, Leaf } from "lucide-react";

export const metadata = {
  title: "Fractional Ownership - Shared Rwanda Villa Ownership | Ever Retreat",
  description:
    "Explore fractional ownership opportunities in Rwanda. Own a share of premium villa properties with full usage rights, rental income potential, and hassle-free management.",
};

export default function FractionalOwnershipPage() {
  const heroSlides = [
    {
      image: "/images/portfolio/villa-pool-timber-deck.webp",
      imageAlt: "Luxury villa pool area",
      title: "Fractional Ownership",
      subtitle: "Own a share of premium Rwanda villas without the full cost.",
    },
    {
      image: "/images/portfolio/completed-villa-4.webp",
      imageAlt: "Completed luxury villa interior",
      title: "Luxury Access",
      subtitle: "Premium villas in Kigali, Musanze, Rubavu, and Nyungwe.",
    },
    {
      image: "/images/areas/lake-kivu-area.webp",
      imageAlt: "Lake Kivu waterfront",
      title: "Smart Investment",
      subtitle: "Rental income, shared costs, and professional management.",
    },
  ];

  const shares = [
    {
      project: "Kivu Villas",
      location: "Lake Kivu, Rubavu",
      share: "1/4",
      weeks: "13 weeks",
      price: "$180,000",
      yield: "16-18%",
      image: "/images/portfolio/villa-pool-timber-deck.webp",
      featured: true,
    },
    {
      project: "Virunga Villas",
      location: "Musanze",
      share: "1/3",
      weeks: "17 weeks",
      price: "$159,000",
      yield: "15-17%",
      image: "/images/portfolio/completed-villa-4.webp",
      featured: false,
    },
    {
      project: "Nyungwe Eco-Lodges",
      location: "Nyungwe Rainforest",
      share: "1/4",
      weeks: "13 weeks",
      price: "$210,000",
      yield: "14-16%",
      image: "/images/areas/nyungwe-area.webp",
      featured: false,
    },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Lower Entry Cost",
      description: "Own luxury for a fraction of the full price — typically 1/2, 1/3, or 1/4 shares.",
    },
    {
      icon: TrendingUp,
      title: "Rental Income",
      description: "Earn rental returns when you're not using your villa — all properties achieve 90-95% occupancy.",
    },
    {
      icon: Users,
      title: "Full Management",
      description: "Our team handles everything: maintenance, cleaning, guest communication, and dynamic pricing.",
    },
    {
      icon: ShieldCheck,
      title: "Shared Costs",
      description: "Maintenance, taxes, and insurance are split proportionally among all co-owners.",
    },
    {
      icon: Clock,
      title: "Guaranteed Usage",
      description: "Each share grants you exclusive weeks of use every year, scheduled in advance.",
    },
    {
      icon: Building2,
      title: "Exit Flexibility",
      description: "Shares can be sold or transferred after a minimum holding period of 12-24 months.",
    },
  ];

  return (
    <PageLayout
      hero={
        <HeroAnimated
          slides={heroSlides}
          badge="Shared Ownership"
          tag="Ever Retreat"
          ctaHref="#shares"
          secondaryCtaHref="/packages"
        />
      }
    >
      {/* How It Works */}
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#124341] sm:text-xs">
                How It Works
              </p>
              <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl">
                Co-Own Luxury. <br className="hidden sm:block" />
                Pay Less. Earn More.
              </h2>
              <p className="mt-4 text-sm text-gray-600 sm:mt-6 sm:text-base md:text-lg">
                Fractional ownership lets you own a percentage of a premium
                villa in Rwanda&apos;s most desirable locations. Typically 1/2,
                1/3, or 1/4 shares, each granting you exclusive weeks of use
                plus rental income when you&apos;re not there.
              </p>
              <p className="mt-3 text-sm text-gray-600 sm:mt-4 sm:text-base">
                Our current offerings include shares in Kivu Villas at Lake Kivu,
                Virunga Villas in Musanze, and Nyungwe Eco-Lodges in the rainforest
                — all achieving{" "}
                <span className="font-semibold text-[#124341]">90-95% occupancy</span> and{" "}
                <span className="font-semibold text-[#124341]">14-18% gross yields</span>.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
                <Link
                  href="#shares"
                  className="inline-flex items-center justify-center rounded-lg bg-[#124341] px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#0d332f] hover:shadow-lg sm:px-6 sm:py-3 sm:text-sm"
                >
                  View Available Shares
                  <ChevronRight className="ml-1.5 h-3.5 w-3.5 sm:ml-2 sm:h-4 sm:w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-2.5 text-xs font-semibold text-gray-700 transition-all hover:bg-gray-50 sm:px-6 sm:py-3 sm:text-sm"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/portfolio/villa-kitchen-living-open.webp"
                alt="Fractional ownership villa interior"
                width={600}
                height={400}
                className="w-full rounded-xl object-cover shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 rounded-lg bg-white px-4 py-3 shadow-lg sm:-bottom-6 sm:-right-6 sm:px-6 sm:py-4">
                <p className="text-xs font-bold text-[#124341] sm:text-sm">95%</p>
                <p className="text-[10px] text-gray-500 sm:text-xs">Occupancy Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsBar />

      {/* Available Shares */}
      <section id="shares" className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#124341] sm:text-xs">
              Investment Opportunities
            </p>
            <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:mt-4 sm:text-3xl md:text-4xl">
              Available Shares
            </h2>
            <p className="mt-3 text-sm text-gray-600 sm:mt-4 sm:text-base">
              Choose from our current fractional ownership offerings in Rwanda&apos;s
              most sought-after locations.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {shares.map((share, index) => (
              <div
                key={index}
                className={`group overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-lg ${
                  share.featured ? "border-[#124341] ring-1 ring-[#124341]" : "border-gray-200"
                }`}
              >
                <div className="relative h-48 overflow-hidden sm:h-52">
                  <Image
                    src={share.image}
                    alt={share.project}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {share.featured && (
                    <span className="absolute right-3 top-3 rounded-full bg-[#124341] px-2.5 py-0.5 text-[10px] font-semibold text-white sm:right-4 sm:top-4 sm:text-xs">
                      Best Value
                    </span>
                  )}
                  {share.project === "Nyungwe Eco-Lodges" && (
                    <span className="absolute left-3 top-3 rounded-full bg-[#124341] px-2.5 py-0.5 text-[10px] font-semibold text-white sm:left-4 sm:top-4 sm:text-xs">
                      <Leaf className="mr-1 inline h-2.5 w-2.5" />
                      Eco-Luxury
                    </span>
                  )}
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                        {share.project}
                      </h3>
                      <p className="text-xs text-gray-500 sm:text-sm">{share.location}</p>
                    </div>
                    {share.project === "Nyungwe Eco-Lodges" && (
                      <Leaf className="h-5 w-5 text-[#124341] sm:h-6 sm:w-6" />
                    )}
                  </div>
                  
                  <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="rounded-lg bg-gray-50 p-2.5 text-center sm:p-3">
                      <p className="text-[10px] text-gray-500 sm:text-xs">Share</p>
                      <p className="text-sm font-bold text-gray-900 sm:text-base">{share.share}</p>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-2.5 text-center sm:p-3">
                      <p className="text-[10px] text-gray-500 sm:text-xs">Weeks/Year</p>
                      <p className="text-sm font-bold text-gray-900 sm:text-base">{share.weeks}</p>
                    </div>
                    <div className="rounded-lg bg-[#124341] p-2.5 text-center text-white sm:p-3">
                      <p className="text-[10px] text-[#8aa9a6] sm:text-xs">Price</p>
                      <p className="text-sm font-bold sm:text-base">{share.price}</p>
                    </div>
                    <div className="rounded-lg bg-[#e8f0ef] p-2.5 text-center sm:p-3">
                      <p className="text-[10px] text-[#124341] sm:text-xs">Yield</p>
                      <p className="text-sm font-bold text-[#124341] sm:text-base">{share.yield}</p>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-4 flex w-full items-center justify-center rounded-lg border border-[#124341] px-4 py-2.5 text-xs font-semibold text-[#124341] transition-all hover:bg-[#124341] hover:text-white sm:mt-5 sm:py-3 sm:text-sm"
                  >
                    Enquire About This Share
                    <ChevronRight className="ml-1 h-3.5 w-3.5 sm:ml-1.5 sm:h-4 sm:w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyEverRetreat />

      {/* Benefits */}
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#124341] sm:text-xs">
              Why Choose Fractional
            </p>
            <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:mt-4 sm:text-3xl md:text-4xl">
              Key Benefits
            </h2>
            <p className="mt-3 text-sm text-gray-600 sm:mt-4 sm:text-base">
              Fractional ownership offers a smarter way to invest in Rwanda&apos;s
              luxury villa market.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-[#124341] sm:p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#124341] sm:h-12 sm:w-12">
                  <benefit.icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                </div>
                <h3 className="mt-3 text-sm font-bold text-gray-900 sm:mt-4 sm:text-base">
                  {benefit.title}
                </h3>
                <p className="mt-1.5 text-xs text-gray-600 sm:mt-2 sm:text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InvestmentMarket />

      <FAQ />

      <BringVillaToLifeCTA />

      <InterestedInInvesting />
    </PageLayout>
  );
}
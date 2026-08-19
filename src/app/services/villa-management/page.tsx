import { PageLayout } from "@/components/PageLayout";
import { HeroAnimated } from "@/components/HeroAnimated";
import { BringVillaToLifeCTA } from "@/components/CTASections";
import { StatsBar } from "@/components/StatsBar";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { FAQ } from "@/components/FAQ";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import { WhyEverRetreat } from "@/components/WhyEverRetreat";
import Image from "next/image";

export const metadata = {
  title: "Villa Management Services - Rwanda Property Management | Ever Retreat",
  description:
    "Full-service villa and eco-lodge management across Rwanda. Listing, guest management, dynamic pricing, and maintenance - all handled by our expert team.",
};

export default function VillaManagementServicePage() {
  const heroSlides = [
    {
      image: "/images/services/villa-management-hero.webp",
      imageAlt: "Villa management team in Rwanda",
      title: "Villa Management",
      subtitle: "Hands-off rental income across Rwanda&apos;s top destinations.",
    },
    {
      image: "/images/services/villa-kitchen-lived-in.webp",
      imageAlt: "Furnished villa interior managed by Ever Retreat",
      title: "Full Service",
      subtitle: "From listings to guest communication, we handle everything.",
    },
    {
      image: "/images/portfolio/villa-pool-timber-deck.webp",
      imageAlt: "Luxury villa pool area in Rwanda",
      title: "Proven Results",
      subtitle: "85%+ average occupancy. 16-20% gross yields across all properties.",
    },
  ];

  return (
    <PageLayout
      hero={
      <HeroAnimated
        slides={heroSlides}
        badge="85%+ Occupancy"
        tag="Ever Retreat Management"
        ctaHref="/contact"
        secondaryCtaHref="/packages"
      />
    }
    >

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500">
                Our Service
              </p>
              <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
                Maximise Your Rwanda Property Income
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-gray-600">
                Whether you own a villa at Lake Kivu, a mountain retreat near
                the volcanoes, or a city home in Kigali, our management team
                handles everything — professional photography, listings on all
                platforms, dynamic pricing, guest communication, cleaning, and
                24/7 maintenance support.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-gray-600">
                We manage 200+ properties across Kigali, Musanze, Rubavu,
                Nyungwe, and Akagera with an average occupancy of 85% and
                gross yields of 16-20%.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/services/villa-management-hero.webp"
                alt="Villa management in Rwanda"
                width={600}
                height={400}
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-off-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500">
              Performance
            </p>
            <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
              Average Results
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-black">85%+</p>
              <p className="mt-1 text-xs text-brand-gray-500">Avg Occupancy</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-black">16-20%</p>
              <p className="mt-1 text-xs text-brand-gray-500">Gross Yield</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-black">200+</p>
              <p className="mt-1 text-xs text-brand-gray-500">Villas Managed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-black">95%</p>
              <p className="mt-1 text-xs text-brand-gray-500">
                Avg Occupancy Rate
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsBar />

      <WhyEverRetreat />

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>What&apos;s Included</h2>
            <ul>
              <li>Professional photography and staging</li>
              <li>Listing on Airbnb, VRBO, Booking.com, and local platforms</li>
              <li>Dynamic pricing (daily adjustments)</li>
              <li>Guest communication and 24/7 support</li>
              <li>Professional cleaning between bookings</li>
              <li>Maintenance and repair coordination</li>
              <li>Monthly performance reports</li>
              <li>Owner portal for live booking and revenue data</li>
            </ul>
            <p>
              Management fees start from 20% per booking, with volume
              discounts for multi-property portfolios.
            </p>
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

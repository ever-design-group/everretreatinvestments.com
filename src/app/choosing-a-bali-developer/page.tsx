import { PageLayout } from "@/components/PageLayout";
import { HeroAnimated } from "@/components/HeroAnimated";
import { BringVillaToLifeCTA } from "@/components/CTASections";
import { StatsBar } from "@/components/StatsBar";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { FAQ } from "@/components/FAQ";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import { WhyEverRetreat } from "@/components/WhyEverRetreat";

export const metadata = {
  title: "Choosing a Developer - Rwanda Property Investment Guide | Ever Retreat",
  description:
    "How to choose the right developer for your Rwanda property investment. Red flags, what to look for, and why quality matters for long-term returns.",
};

export default function ChoosingDeveloperPage() {
  const heroSlides = [
    {
      image: "/images/services/villa-exterior.webp",
      imageAlt: "Quality villa construction in Rwanda",
      title: "Choosing a Developer",
      subtitle: "Your guide to selecting the right partner for your Rwanda property investment.",
    },
    {
      image: "/images/portfolio/completed-villa-4.webp",
      imageAlt: "Completed Ever Retreat villa in Rwanda",
      title: "Quality Matters",
      subtitle: "The right developer makes the difference between profit and loss.",
    },
    {
      image: "/images/services/development-partner.webp",
      imageAlt: "Development partnership in Rwanda",
      title: "Proven Track Record",
      subtitle: "200+ completed projects across Kigali, Musanze, Rubavu, and Nyungwe.",
    },
  ];

  return (
    <PageLayout
      hero={
      <HeroAnimated
        slides={heroSlides}
        badge="Expert Guide"
        tag="Ever Retreat"
        ctaHref="#guide"
        secondaryCtaHref="/how-to-buy-property-in-rwanda"
      />
    }
    >

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Red Flags to Watch For</h2>
            <p>
              Rwanda has no shortage of builders offering low prices. But
              underqualified operators, permit issues, and abandoned projects
              are common. Here is what to look for:
            </p>
            <h3>1. No Physical Office or Website</h3>
            <p>
              Always meet your developer in person. If they only operate online
              or avoid face-to-face meetings, walk away. We have offices in
              Kigali and Hong Kong — walk in and meet the team.
            </p>
            <h3>2. Vague or Missing Permits</h3>
            <p>
              Ask for copies of building permits (RDC), zoning clearance, and
              title verification. A reputable developer provides these upfront.
              Our in-house legal team handles all permit acquisition.
            </p>
            <h3>3. No References or Completed Projects</h3>
            <p>
              Look for completed projects you can visit. Our developments
              include Kivu Villas at Lake Kivu, Virunga Villas in Musanze, and
              Rubavu Residences — all with verifiable track records and
              consistent rental income.
            </p>
            <h3>4. Unrealistic Timelines or Prices</h3>
            <p>
              If a quote is significantly below market rate, they&apos;re likely
              cutting corners. Our fixed-price contracts guarantee no surprises,
              with payments tied to real construction milestones.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-off-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500">
              What to Look For
            </p>
            <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
              Checklist Before Committing
            </h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-4">
              {[
                "Physical office in Kigali or Hong Kong",
                "IAI-licensed architects on staff",
                "Completed projects you can visit",
                "Transparent, fixed-price contracts",
                "In-house legal and permit team",
                "Google reviews with real client names",
                "Full insurance coverage on projects",
                "English-speaking project manager assigned",
                "Weekly progress photo updates",
                "10-year structural warranty included",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-brand-gray-100 p-4"
                >
                  <span className="mt-0.5 text-brand-green">✓</span>
                  <span className="text-sm text-brand-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StatsBar />

      <WhyEverRetreat />

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Why Choose Ever Retreat?</h2>
            <p>
              We built Kivu Villas (8 waterfront eco-lodges at Lake Kivu),
              Virunga Villas (9 mountain retreats in Musanze), and Rubavu
              Residences (luxury lakeside villas). These projects achieved 95%
              occupancy, 15-20% gross yields, and 8-15% annual capital
              appreciation — outperforming the broader Rwanda property market.
            </p>
            <p>
              Unlike solo operators, we handle everything in-house: architecture,
              construction, legal, permits, and rental management. One company,
              one point of contact.
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

import { PageLayout } from "@/components/PageLayout";
import { HeroAnimated } from "@/components/HeroAnimated";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import { StatsBar } from "@/components/StatsBar";

export const metadata = {
  title: "Huye Property Investment | Ever Retreat",
  description:
    "Huye property investment guide. Southern province near Nyungwe and Lake Kivu. Cultural and educational hub with affordable land and growing tourism demand.",
};

export default function HuyeAreaPage() {
  const heroSlides = [
    {
      image: "/images/areas/huye-area.webp",
      imageAlt: "Huye city skyline",
      title: "Huye",
      subtitle: "Southern province cultural hub — near Nyungwe National Park and Lake Kivu.",
    },
    {
      image: "/images/areas/nyungwe-area.webp",
      imageAlt: "Huye highlands landscape",
      title: "Educational Center",
      subtitle: "Home to the University of Rwanda, with steady rental demand from students and staff.",
    },
  ];

  return (
    <PageLayout
      hero={
        <HeroAnimated
          slides={heroSlides}
          badge="Southern Province"
          tag="Ever Retreat Areas"
          ctaHref="/contact"
          secondaryCtaHref="/areas"
        />
      }
    >

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Huye Property Market</h2>
            <p>
              Huye (formerly Butare) is a city in Rwanda&apos;s southern
              province, located between Kigali and Lake Kivu. It serves as a
              cultural and educational hub, home to the University of Rwanda
              College of Arts and Social Sciences and the National Museum of
              Rwanda. The area is also a gateway to Nyungwe National Park and
              Lake Kivu, attracting tourists and researchers year-round.
            </p>
            <p>
              Land prices here offer strong value compared to Kigali and
              Rubavu, making it attractive for mid-range residential developments
              and eco-lodges serving the growing tourism corridor.
            </p>
            <h3>Investment Metrics</h3>
            <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-black">$15-35/sqm</p>
                <p className="mt-1 text-xs text-brand-gray-500">Land Price</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">10-15%</p>
                <p className="mt-1 text-xs text-brand-gray-500">Gross Yield</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">70%</p>
                <p className="mt-1 text-xs text-brand-gray-500">Avg Occupancy</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">5-10%</p>
                <p className="mt-1 text-xs text-brand-gray-500">Appreciation</p>
              </div>
            </div>
            <h3>Why Invest in Huye</h3>
            <ul>
              <li>
                <strong>Affordable entry</strong> — Lower land prices than Kigali
                or Rubavu with growing demand.
              </li>
              <li>
                <strong>Educational demand</strong> — Steady rental demand from
                university students and staff.
              </li>
              <li>
                <strong>Tourism access</strong> — Gateway to Nyungwe National
                Park and Lake Kivu attractions.
              </li>
              <li>
                <strong>Developing infrastructure</strong> — Government
                investment in roads and utilities improving accessibility.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <StatsBar />

      <InvestmentMarket />

      <InterestedInInvesting />
    </PageLayout>
  );
}

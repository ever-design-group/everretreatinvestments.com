import { PageLayout } from "@/components/PageLayout";
import { HeroAnimated } from "@/components/HeroAnimated";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Rwanda Areas - Where to Invest in Property | Ever Retreat",
  description:
    "Explore Rwanda's top property investment areas: Kigali, Musanze, Rubavu, Nyungwe, Akagera, Huye, Evane, and Nyanza. Find the perfect location for your investment.",
};

const areas = [
  {
    name: "Kigali",
    description:
      "Capital city with the highest land values and consistent rental demand from expats and business travelers.",
    image: "/images/areas/kigali-area.webp",
    href: "/areas/kigali",
  },
  {
    name: "Musanze",
    description:
      "Volcanoes region — gorilla trekking, luxury lodges, and mountain retreats with strong tourism demand.",
    image: "/images/areas/musanze-area.webp",
    href: "/areas/musanze",
  },
  {
    name: "Rubavu",
    description:
      "Lake Kivu waterfront — premium holiday rentals and luxury lakeside villas with high nightly rates.",
    image: "/images/areas/rubavu-area.webp",
    href: "/areas/rubavu",
  },
  {
    name: "Nyungwe",
    description:
      "Forest edge — eco-tourism accommodation and sustainable lodge investments with growing demand.",
    image: "/images/areas/nyungwe-area.webp",
    href: "/areas/nyungwe",
  },
  {
    name: "Huye",
    description:
      "Southern province cultural hub — university town near Nyungwe and Lake Kivu with affordable land.",
    image: "/images/areas/huye-area.webp",
    href: "/areas/huye",
  },
  {
    name: "Evane",
    description:
      "Northern highlands hill station between Kigali and Musanze — scenic landscapes at accessible prices.",
    image: "/images/areas/lake-kivu-area.webp",
    href: "/areas/evane",
  },
  {
    name: "Nyanza",
    description:
      "Southern province former capital near Lake Kivu and Nyungwe — historical hub with growing tourism.",
    image: "/images/areas/kigali-area.webp",
    href: "/areas/nyanza",
  },
  {
    name: "Akagera",
    description:
      "National park proximity — safari lodges and exclusive eco-retreats with luxury pricing.",
    image: "/images/areas/huye-area.webp",
    href: "/areas/akagera",
  },
];

export default function AreasPage() {
  const heroSlides = [
    {
      image: "/images/hero/aerial-rwanda.webp",
      imageAlt: "Aerial view of Rwanda landscape",
      title: "Rwanda Investment Areas",
      subtitle: "From Kigali&apos;s business district to Akagera&apos;s safari lodges — each area offers distinct investment potential.",
    },
    {
      image: "/images/areas/lake-kivu-area.webp",
      imageAlt: "Lake Kivu waterfront",
      title: "Prime Locations",
      subtitle: "Curated properties across Rwanda&apos;s most desirable areas.",
    },
    {
      image: "/images/areas/musanze-area.webp",
      imageAlt: "Musanze volcano views",
      title: "Proven Returns",
      subtitle: "15-20% gross yields across our developments in Kigali, Musanze, and Rubavu.",
    },
  ];

  return (
    <PageLayout
      hero={
      <HeroAnimated
        slides={heroSlides}
        badge="Investment Areas"
        tag="Ever Retreat"
        ctaHref="/contact"
         secondaryCtaHref="/invest-in-rwanda"
      />
    }
    >

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500">
              Where We Build
            </p>
            <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
              Prime Investment Areas
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-gray-600">
              Each area of Rwanda has its own character, price point, and
              investment profile. Here is where our clients are building villas.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl font-bold text-white">{area.name}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-white/80">
                      {area.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-off-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Investment Metrics by Area</h2>
            <p>
              Each Rwanda investment area offers different advantages. Here is
              a quick comparison to help you decide where to focus:
            </p>
            <table>
              <thead>
                <tr>
                  <th>Area</th>
                  <th>Land Price</th>
                  <th>Avg Yield</th>
                  <th>Occupancy</th>
                  <th>Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Kigali</td>
                  <td>$50-120/sqm</td>
                  <td>8-12%</td>
                  <td>75%</td>
                  <td>Capital growth, stable demand</td>
                </tr>
                <tr>
                  <td>Musanze</td>
                  <td>$30-60/sqm</td>
                  <td>12-18%</td>
                  <td>80%</td>
                  <td>Tourism, mountain retreats</td>
                </tr>
                <tr>
                  <td>Rubavu</td>
                  <td>$40-80/sqm</td>
                  <td>15-20%</td>
                  <td>85%</td>
                  <td>Waterfront, holiday rentals</td>
                </tr>
                <tr>
                  <td>Nyungwe</td>
                  <td>$15-30/sqm</td>
                  <td>10-15%</td>
                  <td>70%</td>
                  <td>Eco-tourism, lower entry</td>
                </tr>
                <tr>
                  <td>Akagera</td>
                  <td>$10-25/sqm</td>
                  <td>12-16%</td>
                  <td>65%</td>
                  <td>Safari lodges, exclusivity</td>
                </tr>
                <tr>
                  <td>Huye</td>
                  <td>$15-35/sqm</td>
                  <td>10-15%</td>
                  <td>70%</td>
                  <td>Eco-tourism, student rentals</td>
                </tr>
                <tr>
                  <td>Evane</td>
                  <td>$20-45/sqm</td>
                  <td>12-16%</td>
                  <td>75%</td>
                  <td>Mountain retreats, hill stations</td>
                </tr>
                <tr>
                  <td>Nyanza</td>
                  <td>$20-50/sqm</td>
                  <td>13-17%</td>
                  <td>72%</td>
                  <td>Cultural tourism, gateway location</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <InvestmentMarket />

      <InterestedInInvesting />
    </PageLayout>
  );
}

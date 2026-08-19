import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DevelopmentHero } from "@/components/DevelopmentHero";
import { PricingForm } from "@/components/PricingForm";

export const metadata = {
  title: "Musanze Villa - Volcanoes Eco-Retreat in Musanze, Rwanda | Ever Retreat",
  description:
    "Musanze Villa: Premium eco-retreat at the foot of the Volcanoes. Mountain views, gorilla trekking access, and luxury living. From $349K USD.",
};

export default function DasaUbudPage() {
  return (
    <>
      <Header />
      <DevelopmentHero
        name="Musanze Villa"
        tagline="New Development | Musanze, Rwanda"
        subtitle="Premium | Volcanoes Region | Mountain Views | Gorilla Trekking Access"
        image="/images/developments/dasa-ubud/dasa-ubud-banner.webp"
        imageAlt="Musanze Villa - Volcanoes Region"
        ctaHref="#enquire"
        secondaryCtaHref="#villa-types"
      />
      <PricingForm />
      <Footer />
    </>
  );
}

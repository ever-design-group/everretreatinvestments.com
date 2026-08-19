import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DevelopmentHero } from "@/components/DevelopmentHero";
import { PricingForm } from "@/components/PricingForm";

export const metadata = {
  title: "Rubavu Residences - Lake Kivu Luxury Retreats in Rwanda | Ever Retreat",
  description:
    "Rubavu Residences: Luxury lakeside living on the shores of Lake Kivu. Panoramic lake views, modern architecture, and exceptional holiday rental potential.",
};

export default function SolasUluwatuPage() {
  return (
    <>
      <Header />
      <DevelopmentHero
        name="Rubavu Residences"
        tagline="New Development | Rubavu, Rwanda"
        subtitle="Luxury | Lake Kivu | Panoramic Views | Lakeside Living"
        image="/images/developments/nara-exterior-1.webp"
        imageAlt="Rubavu Residences - Lake Kivu"
        ctaHref="#enquire"
        secondaryCtaHref="#villa-types"
      />
      <PricingForm />
      <Footer />
    </>
  );
}

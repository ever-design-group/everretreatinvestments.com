import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DevelopmentHero } from "@/components/DevelopmentHero";
import { PricingForm } from "@/components/PricingForm";

export const metadata = {
  title: "Kigali Residence - Urban Eco-Retreat in Kigali, Rwanda | Ever Retreat",
  description:
    "Kigali Residence: Premium urban retreat in Rwanda's capital. Close to business hubs, restaurants, and cultural attractions. From $199K USD.",
};

export default function CasitaAlasPage() {
  return (
    <>
      <Header />
      <DevelopmentHero
        name="Kigali Residence"
        tagline="New Development | Kigali, Rwanda"
        subtitle="Urban | Premium | City Views | Business Hub"
        image="/images/developments/casita-alas/casita-alas-5.webp"
        imageAlt="Kigali Residence - Urban Eco-Retreat"
        ctaHref="#enquire"
        secondaryCtaHref="#villa-types"
      />
      <PricingForm />
      <Footer />
    </>
  );
}

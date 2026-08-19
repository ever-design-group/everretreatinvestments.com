import { PageLayout } from "@/components/PageLayout";
import { ServiceHero } from "@/components/ServiceHero";
import { Services } from "@/components/Services";

export const metadata = {
  title: "Our Services - Rwanda Property Services | Ever Retreat",
  description:
    "Architecture, construction, villa management, and land sourcing in Rwanda. End-to-end property services from our 160-strong in-house team.",
};

export default function ServicesPage() {
  return (
    <PageLayout
      hero={
        <ServiceHero
          name="Our Services"
          subtitle="From finding land to managing your completed villa, our 160-strong in-house team handles every stage of the property lifecycle."
          image="/images/hero/aerial-rwanda.webp"
          imageAlt="Ever Retreat Services - Rwanda"
          badge="Services"
          tag="Ever Retreat"
          ctaHref="/contact"
          secondaryCtaHref="/developments"
        />
      }
    >
      <Services />
    </PageLayout>
  );
}

import { PageLayout } from "@/components/PageLayout";
import { Testimonials } from "@/components/Testimonials";

export const metadata = {
  title: "Client Stories | Ever Retreat Rwanda",
  description:
    "Read real stories from villa owners and investors who built with Ever Retreat in Rwanda.",
};

export default function TestimonialsPage() {
  return (
    <PageLayout
      title="Client Stories"
      subtitle="Real stories from villa owners and investors who built with us in Rwanda."
      showCta={false}
    >
      <Testimonials />
    </PageLayout>
  );
}

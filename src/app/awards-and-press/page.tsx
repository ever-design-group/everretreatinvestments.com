import { PageLayout } from "@/components/PageLayout";
import { Awards } from "@/components/Awards";
import { Testimonials } from "@/components/Testimonials";

export const metadata = {
  title: "Awards & Press | Ever Retreat Rwanda",
  description:
    "Awards and recognition received by Ever Retreat for architecture and development in Rwanda.",
};

export default function AwardsPressPage() {
  return (
    <PageLayout
      title="Awards & Press"
      subtitle="Recognition for excellence in Rwanda property development."
      showCta={false}
    >
      <Awards />
      <Testimonials />
    </PageLayout>
  );
}

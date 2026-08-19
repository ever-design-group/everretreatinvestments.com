import { PageLayout } from "@/components/PageLayout";
import { HowItWorks } from "@/components/HowItWorks";
import { ProcessSteps } from "@/components/ProcessSteps";

export const metadata = {
  title: "The Ever Retreat Process | Rwanda Villa Construction",
  description:
    "From vision to villa. Our step-by-step process for building your dream villa in Rwanda - land sourcing, design, permits, construction, and management.",
};

export default function ProcessPage() {
  return (
    <PageLayout
      title="The Process"
      subtitle="Building a villa in Rwanda doesn't have to be overwhelming. Here is exactly what happens, step by step."
      showCta={false}
    >
      <ProcessSteps />
      <HowItWorks />
    </PageLayout>
  );
}

import { PageLayout } from "@/components/PageLayout";
import { FAQ as FAQComponent } from "@/components/FAQ";

export const metadata = {
  title: "FAQ - Building a Villa in Rwanda | Ever Retreat",
  description:
    "Frequently asked questions about building villas in Rwanda. Legal structures, build costs, timelines, yields, and more.",
};

export default function FAQPage() {
  return (
    <PageLayout
      title="Frequently Asked Questions"
      subtitle="Answers to the questions we get asked most about building villas in Rwanda."
      showCta={false}
    >
      <section className="px-6 py-12 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto max-w-3xl">
            <FAQComponent />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

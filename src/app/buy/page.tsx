import { PageLayout } from "@/components/PageLayout";
import { Developments } from "@/components/Developments";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { PricingForm } from "@/components/PricingForm";

export const metadata = {
  title: "Buy a Ready-Made Villa | Ever Retreat Rwanda",
  description:
    "Browse off-plan and ready-to-buy villas in Rwanda. From $220K with 15-20% yield potential.",
};

export default function BuyPage() {
  return (
    <PageLayout
      title="Buy"
      subtitle="Browse available off-plan and ready-to-buy villas across Rwanda."
      showCta={false}
    >
      <Developments showAll showHeader={true} />
      <InvestmentMarket />
      <PricingForm />
    </PageLayout>
  );
}

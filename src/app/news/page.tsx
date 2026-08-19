import { PageLayout } from "@/components/PageLayout";
import { News } from "@/components/News";

export const metadata = {
  title: "News | Ever Retreat Rwanda Property Updates",
  description:
    "Latest news, press releases, and property market updates from Ever Retreat in Rwanda.",
};

export default function NewsPage() {
  return (
    <PageLayout
      title="News"
      subtitle="Latest updates from Ever Retreat."
      showCta={false}
    >
      <News />
    </PageLayout>
  );
}

import { PageLayout } from "@/components/PageLayout";
import { Blog } from "@/components/Blog";

export const metadata = {
  title: "Blog - Rwanda Property Investment & Real Estate Tips | Ever Retreat",
  description:
    "Read our latest articles and insights about Rwanda property investment, villa construction, architecture, and real estate.",
};

export default function BlogPage() {
  return (
    <PageLayout title="Blog" subtitle="Insights & Guides">
      <Blog />
    </PageLayout>
  );
}

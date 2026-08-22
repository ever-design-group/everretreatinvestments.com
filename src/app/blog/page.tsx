import { PageLayout } from "@/components/PageLayout";
import { Blog } from "@/components/Blog";
import Image from "next/image";

export const metadata = {
  title: "Blog - Rwanda Property Investment & Real Estate Tips | Ever Retreat",
  description:
    "Read our latest articles and insights about Rwanda property investment, villa construction, architecture, and real estate.",
};

export default function BlogPage() {
  return (
    <PageLayout
      hero={
        <section className="relative h-[600px] w-full overflow-hidden">
          <Image
            src="/images/hero/hero-1-full.webp"
            alt="Ever Retreat villa interior"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 sm:tracking-[0.25em]">
              Ever Retreat Rwanda
            </p>
            <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
              Blog
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base md:text-lg">
              Insights & Guides
            </p>
          </div>
        </section>
      }
    >
      <Blog />
    </PageLayout>
  );
}

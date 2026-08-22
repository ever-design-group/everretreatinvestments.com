import { PageLayout } from "@/components/PageLayout";
import Image from "next/image";

export const metadata = {
  title: "Forms & Documents | Ever Retreat Rwanda",
  description:
    "Download property purchase, build agreement, and management forms for your Rwanda villa project.",
};

export default function FormsPage() {
  return (
    <PageLayout
      hero={
        <section className="relative h-[600px] w-full overflow-hidden">
          <Image
            src="/images/hero/rwanda-landscape.webp"
            alt="Rwanda hills landscape"
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
              Forms & Documents
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base md:text-lg">
              Download the forms you need for your Rwanda property project.
            </p>
          </div>
        </section>
      }
    >
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-center text-sm font-medium uppercase tracking-wider text-brand-gray-500">
            Downloadable Forms
          </p>
          <h2 className="mt-2 text-center text-3xl font-bold text-black md:text-5xl">
            Forms & Documents
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-brand-gray-600">
            Download the forms you need for your property purchase, build
            agreement, or management setup.
          </p>

          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            <div className="flex items-center justify-between rounded-lg border border-brand-gray-100 p-6">
              <div>
                <h3 className="font-semibold text-black">Property Purchase Agreement</h3>
                <p className="mt-1 text-sm text-brand-gray-600">PDF, 2.1 MB</p>
              </div>
              <button className="rounded bg-black px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-black/80">
                Download
              </button>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-brand-gray-100 p-6">
              <div>
                <h3 className="font-semibold text-black">Build Management Agreement</h3>
                <p className="mt-1 text-sm text-brand-gray-600">PDF, 1.5 MB</p>
              </div>
              <button className="rounded bg-black px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-black/80">
                Download
              </button>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-brand-gray-100 p-6">
              <div>
                <h3 className="font-semibold text-black">Villa Management Agreement</h3>
                <p className="mt-1 text-sm text-brand-gray-600">PDF, 1.8 MB</p>
              </div>
              <button className="rounded bg-black px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-black/80">
                Download
              </button>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-brand-gray-100 p-6">
              <div>
                <h3 className="font-semibold text-black">Investment Return Projection Template</h3>
                <p className="mt-1 text-sm text-brand-gray-600">XLSX, 45 KB</p>
              </div>
              <button className="rounded bg-black px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-black/80">
                Download
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

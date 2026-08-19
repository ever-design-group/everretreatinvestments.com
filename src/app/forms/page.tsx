import { PageLayout } from "@/components/PageLayout";

export const metadata = {
  title: "Forms | Ever Retreat Rwanda",
  description:
    "Download property purchase, build agreement, and management forms for your Rwanda villa project.",
};

export default function FormsPage() {
  return (
    <PageLayout
      title="Forms & Documents"
      subtitle="Download the forms you need for your Rwanda property project."
      showCta={false}
    >
      <section className="px-6 py-12 md:py-24">
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

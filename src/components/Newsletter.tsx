export function Newsletter() {
  return (
    <section className="bg-brand-white py-16 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
            Stay Ahead of the Market
          </p>
          <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
            Get Exclusive Investment Insights
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-gray-600">
            Market reports, new development launches, and ROI data. Delivered
            monthly to serious investors. No fluff.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address for Rwanda property investment newsletter"
              className="w-full rounded border border-brand-gray-100 px-4 py-3 text-sm text-black placeholder:text-brand-gray-400 focus:border-brand-gray-400 focus:outline-none"
            />
            <button className="rounded bg-black px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-black/80">
              Send Me the Reports
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const guidePoints = [
  "How foreigners can legally own property in Rwanda",
  "Yield ranges for every key area, with 2026 land prices",
  "What an all-in 2-bedroom build actually costs",
  "The tax obligations most agents skip past",
];

export function FreeGuide() {
  return (
    <section className="relative overflow-hidden bg-brand-black py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-white/70">
              Free 2026 Edition
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl md:leading-tight">
              The Ever Retreat Guide to Investing in Rwanda
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              Eighty pages of what we wish every investor knew before they
              bought. Legal structures, area-by-area yield data, build costs,
              tax treatment, and the real risks. Updated for 2026.
            </p>
            <ul className="mt-8 space-y-3">
              {guidePoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="mt-1 text-white/40">&middot;</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg bg-white/5 p-8">
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-xs font-medium text-white/70">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="w-full rounded border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-white/70">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="w-full rounded border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none"
                />
              </div>
              <button className="w-full rounded bg-white px-8 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90">
                Send Me the Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


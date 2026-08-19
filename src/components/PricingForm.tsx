export function PricingForm() {
  return (
    <section className="bg-brand-black py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-white/70">
              See a villa you like?
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
              Which One Fits You?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              Tell us your budget and timeline and we send back the developments
              that match, with current pricing, what is still available, and
              honest yield figures. No sales pressure.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-brand-green">✓</span>
                <span className="text-sm text-white/80">Matched to your budget and goals</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-brand-green">✓</span>
                <span className="text-sm text-white/80">Current pricing and real availability</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-brand-green">✓</span>
                <span className="text-sm text-white/80">Straight answers on yields, ownership, and timelines</span>
              </div>
            </div>
          </div>
          <form className="rounded-lg bg-white/5 p-8">
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
              <div>
                <label className="mb-1 block text-xs font-medium text-white/70">
                  WhatsApp number
                </label>
                <div className="flex gap-2">
                  <button className="rounded border border-white/20 px-3 text-sm text-white/70">
                    +250
                  </button>
                  <input
                    type="tel"
                    placeholder="WhatsApp number *"
                    className="w-full rounded border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-white/70">
                  Tell us more
                </label>
                <textarea
                  placeholder="Tell us more"
                  rows={3}
                  className="w-full rounded border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none"
                />
              </div>
              <button className="w-full rounded bg-white px-8 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90">
                SEND ENQUIRY
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export function InterestedInInvesting() {
  return (
    <section className="bg-brand-black py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-white/70">
              Free Consultation
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl md:leading-tight">
              Interested in Investing?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              Whether you have a plot or are still exploring options, our team
              gives you straight answers. No obligation, no pressure - just real
              advice from people who have done this 200+ times.
            </p>
            <div className="mt-8 space-y-3">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-brand-green">?</span>
                <span className="text-sm text-white/80">Honest advice on locations, budgets, and returns</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-brand-green">?</span>
                <span className="text-sm text-white/80">Clear answers on foreign ownership and legal structures</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-brand-green">?</span>
                <span className="text-sm text-white/80">No sales pressure - we answer questions, you decide</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-brand-green">?</span>
                <span className="text-sm text-white/80">Respond within 24 hours, Mon-Fri 8am-5pm CAT</span>
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <Link
                href="https://wa.me/250787524298"
                aria-label="WhatsApp Us"
                className="inline-flex items-center justify-center rounded bg-brand-green px-4 py-3.5 text-white transition-colors hover:bg-brand-green/90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-block rounded border-2 border-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-white/10"
              >
                ENQUIRE NOW
              </Link>
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



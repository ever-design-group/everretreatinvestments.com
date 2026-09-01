import Link from "next/link";

export function InvestmentMarket() {
  return (
    <section className="bg-brand-black py-16 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-white/70">
              A Proven Investment Market
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
              Invest in Rwanda Property
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              Rwanda property investment means buying or building villas in
              Rwanda for rental income and capital growth. With consistent
              15-20% gross rental yields, high occupancy rates, and strong
              capital appreciation, our 160-strong team handles everything from
              land sourcing to rental income.
            </p>
            <div className="mt-8 flex gap-6">
              <div>
                <p className="text-2xl font-bold text-white">15-20%</p>
                <p className="text-xs text-white/60">Gross Yield</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">160+</p>
                <p className="text-xs text-white/60">Team Members</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Full</p>
                <p className="text-xs text-white/60">Management</p>
              </div>
            </div>
            <Link
              href="/invest-in-rwanda"
              className="mt-6 inline-block text-sm font-semibold text-white underline underline-offset-4"
            >
              LEARN ABOUT INVESTING IN RWANDA &rarr;
            </Link>
          </div>
          <div className="flex justify-end">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-3xl font-bold text-white">12-18%</p>
                <p className="mt-1 text-xs text-white/60">Average Gross Yield</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">85%+</p>
                <p className="mt-1 text-xs text-white/60">Avg Occupancy</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">200+</p>
                <p className="mt-1 text-xs text-white/60">Projects Built</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">10+</p>
                <p className="mt-1 text-xs text-white/60">Years in Rwanda</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const InvestmentGuide = () => (
  <section className="bg-brand-off-white py-16 md:py-28">
    <div className="mx-auto max-w-[1440px] px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
          Free 2026 Edition
        </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-black md:text-5xl">
            The Ever Retreat Guide to Investing in Rwanda
          </h2>
          <p className="mt-6 text-base leading-relaxed text-brand-gray-600">
            Everything you need to know before investing in Rwanda property - legal
            structures, area-by-area yield tables, build costs, and tax treatment.
            80 pages, updated for 2026.
          </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row justify-center">
          <Link
            href="https://wa.me/250787524298"
            className="rounded bg-brand-green px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-green/90"
          >
            Download the Guide
          </Link>
        </div>
      </div>
    </div>
  </section>
);



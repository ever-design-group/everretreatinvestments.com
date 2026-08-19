import Link from "next/link";

const steps = [
  {
    number: "01",
    timeline: "Week 1",
    title: "Discovery Call",
    description:
      "Every project starts with a conversation. We learn about your goals, your budget, your preferred timeline, and whether the villa is a personal retreat, an investment property, or both.",
  },
  {
    number: "02",
    timeline: "2-6 Weeks",
    title: "Land Sourcing",
    description:
      "Finding the right plot is the foundation of a profitable build. Our land team searches across Rwanda for sites that match your criteria.",
  },
  {
    number: "03",
    timeline: "3-5 Months",
    title: "Architectural Design",
    description:
      "This is where your villa takes shape. Our architects design from the ground up, tailored to your site, your style, and your investment strategy.",
  },
  {
    number: "04",
    timeline: "4-8 Weeks",
    title: "Permits & Legal",
    description:
      "Building in Rwanda requires specific permits and legal documentation. Our legal team handles the entire process.",
  },
  {
    number: "05",
    timeline: "8-14 Months",
    title: "Construction",
    description:
      "This is the longest phase. Our construction team builds from the same documentation our architects produced.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-brand-black py-16 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-white/70">
            How It Works
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            From Vision to Villa
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            One team handles everything - land, architecture, permits,
            construction, interiors, and rental management. Here is how it works.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="rounded-lg bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-white/40">{step.number}</span>
                <span className="text-xs font-medium text-white/60">{step.timeline}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/process"
            className="rounded bg-white px-8 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90"
          >
            See Full Process &rarr;
          </Link>
          <Link
            href="https://wa.me/250788000000"
            aria-label="Chat on WhatsApp"
            className="inline-flex items-center justify-center rounded bg-white px-4 py-3 text-black transition-colors hover:bg-white/90"
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
        </div>
      </div>
    </section>
  );
}


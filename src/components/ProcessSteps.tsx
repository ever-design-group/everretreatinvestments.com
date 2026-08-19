const steps = [
  {
    step: 1,
    title: "Project Brief",
    description:
      "We start with a 90-minute call to understand your site, budget, and goals for your Rwanda villa.",
  },
  {
    step: 2,
    title: "Land Sourcing",
    description:
      "If you don't yet own land, we search our network of 700+ listings and shortlist 3-5 sites that match your brief.",
  },
  {
    step: 3,
    title: "Site Visit",
    description:
      "We arrange a site visit where you meet the local agent, review zoning, and confirm the land is suitable.",
  },
  {
    step: 4,
    title: "Due Diligence",
    description:
      "Our legal team verifies the land certificate, checks zoning compliance, and reviews any encumbrances.",
  },
  {
    step: 5,
    title: "Purchase & Contracts",
    description:
      "We negotiate the purchase price, arrange transfer funds through our nominated lawyer, and sign the sale and purchase agreement.",
  },
  {
    step: 6,
    title: "Design Brief",
    description:
      "We brief our architects on your style, villa size, and program - then create 3 concept designs.",
  },
  {
    step: 7,
    title: "Architectural Design",
    description:
      "Our architects produce detailed drawings, 3D renders, and structural plans - ready for permit submission.",
  },
  {
    step: 8,
    title: "Permit Submission",
    description:
      "We submit all documents to the relevant authorities and track approvals through the process.",
  },
  {
    step: 9,
    title: "Construction",
    description:
      "Our construction team builds the villa from foundations to handover, with weekly photo updates.",
  },
  {
    step: 10,
    title: "Interiors & Styling",
    description:
      "We handle interior design, furniture selection, and styling - or project-manage your own selections.",
  },
  {
    step: 11,
    title: "Handover",
    description:
      "We conduct a final walkthrough, fix any punch list items, and hand you the keys.",
  },
  {
    step: 12,
    title: "Rental Setup",
    description:
      "Our villa management team sets up listings, professional photography, dynamic pricing, and guest management.",
  },
];

export function ProcessSteps() {
  return (
    <section className="bg-brand-white py-16 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
            From Vision to Villa
          </p>
          <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
            The 12-Step Process
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-gray-600">
            Every project follows the same proven path - from your initial
            brief to receiving the first guest booking.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
          {steps.map((step) => (
            <div
              key={step.step}
              className="flex gap-6 rounded-lg border border-brand-gray-100 bg-brand-white p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-white">
                <span className="text-sm font-bold">{step.step}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-brand-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

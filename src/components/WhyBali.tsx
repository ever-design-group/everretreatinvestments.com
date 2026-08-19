import Link from "next/link";

export function WhyBali() {
  return (
    <section className="bg-brand-off-white py-16 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              Why Ever Retreat
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-black md:text-5xl md:leading-tight">
              Why Choose Ever Retreat in Rwanda?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-brand-gray-600">
              Rwanda&apos;s property market has no shortage of operators offering
              low prices. But underqualified teams, permit issues, and abandoned
              projects are common. We exist because investors deserve better.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="text-sm font-semibold text-black underline underline-offset-4 hover:text-brand-gray-600"
              >
                Talk to Us
              </Link>
              <Link
                href="/case-study"
                className="text-sm font-semibold text-black underline underline-offset-4 hover:text-brand-gray-600"
              >
                See Case Study
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                number: "01",
                title: "Australian-Owned & Managed",
                description:
                  "Western project management, transparent pricing, full accountability.",
              },
              {
                number: "02",
                title: "200+ Completed Projects",
                description:
                  "Built across Rwanda. Visible, verifiable track record.",
              },
              {
                number: "03",
                title: "Award-Winning Eco-Architecture",
                description:
                  "International Property Awards 2025. Featured in global property publications.",
              },
              {
                number: "04",
                title: "In-House Legal Team",
                description:
                  "Permits, land titles, zoning, and foreign ownership handled in-house.",
              },
              {
                number: "05",
                title: "160+ In-House Professionals",
                description:
                  "Architects, engineers, project managers, designers - all under one roof.",
              },
              {
                number: "06",
                title: "End-to-End Under One Roof",
                description:
                  "Land to rental income. One company, one point of contact.",
              },
              {
                number: "07",
                title: "Fixed-Price Contracts",
                description:
                  "No surprise costs. Payments tied to real construction milestones.",
              },
              {
                number: "08",
                title: "Physical Offices in Rwanda & Hong Kong",
                description:
                  "Office in Kigali and Hong Kong. Walk in and meet the team.",
              },
            ].map((reason) => (
              <div key={reason.number} className="flex gap-4">
                <span className="text-sm font-semibold text-brand-gray-400">
                  {reason.number}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-black">
                    {reason.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-gray-600">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


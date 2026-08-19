import { PageLayout } from "@/components/PageLayout";

export const metadata = {
  title: "Scholarship Program | Ever Retreat Rwanda",
  description:
    "The Ever Retreat Scholarship for Rwandan students pursuing architecture and design degrees.",
};

export default function ScholarshipPage() {
  return (
    <PageLayout
      title="Ever Retreat Scholarship"
      subtitle="Supporting the next generation of Rwandan architects and designers."
      showCta={false}
    >
      <section className="px-6 py-12 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>The Ever Retreat Scholarship</h2>
            <p>
              The Ever Retreat Scholarship provides financial support to
              Rwandan students pursuing architecture, interior design, or
              civil engineering degrees at accredited universities in Rwanda.
            </p>

            <h3>Opportunity Details</h3>
            <ul>
              <li>RWF 60,000,000 per academic year</li>
              <li>Available to 3 students annually</li>
              <li>Includes internship placement with Ever Retreat</li>
              <li>Open to final-year undergraduate and graduate students</li>
            </ul>

            <h3>Eligibility</h3>
            <ul>
              <li>Rwandan citizen</li>
              <li>Enrolled in architecture, interior design, or civil engineering</li>
              <li>Minimum GPA of 3.5/4.0</li>
              <li>Completed minimum 6 semesters of study</li>
            </ul>

            <h3>Application Deadline</h3>
            <p>
              Applications open on March 1st and close on May 31st each year.
              Winners are announced in June.
            </p>

            <div className="mt-8 text-center">
              <a
                href="mailto:scholarship@everretreat.com"
                className="rounded bg-black px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-black/80"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

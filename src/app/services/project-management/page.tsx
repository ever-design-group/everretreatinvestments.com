import { PageLayout } from "@/components/PageLayout";
import { ServiceHero } from "@/components/ServiceHero";
import { BringVillaToLifeCTA } from "@/components/CTASections";
import { StatsBar } from "@/components/StatsBar";
import { InvestmentMarket } from "@/components/InvestmentMarket";
import { FAQ } from "@/components/FAQ";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import { Developments } from "@/components/Developments";
import Image from "next/image";

export const metadata = {
  title: "Project Management Services - Villa Construction Management in Rwanda | Ever Retreat",
  description:
    "Expert project management for villa construction in Rwanda. On-time delivery, transparent communication, and quality assurance from our experienced team.",
};

export default function ProjectManagementServicePage() {
  return (
    <PageLayout
      hero={
        <ServiceHero
          name="Project Management"
          subtitle="Expert oversight ensuring your villa build stays on time, on budget, and to spec."
          image="/images/services/villa-exterior.webp"
          imageAlt="Project Management - Ever Retreat Rwanda"
          badge="Manage"
          tag="Ever Retreat"
          ctaHref="/contact"
          secondaryCtaHref="/services/architecture"
        />
      }
    >
      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500">
                Our Process
              </p>
              <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
                On-Time. On-Budget. On-Spec.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-gray-600">
                Managing a villa build in Rwanda from overseas is challenging.
                Our certified project managers handle everything — scheduling,
                quality control, budgeting, and communication. You get weekly
                progress reports, photo updates, and transparent billing.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-gray-600">
                We manage 200+ projects across Rwanda with an average on-time
                completion rate of 95%. Our team includes English-fluent
                managers, certified engineers, and skilled site supervisors.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/portfolio/completed-villa-4.webp"
                alt="Construction site management"
                width={600}
                height={400}
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-off-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500">
              Weekly Reporting
            </p>
            <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
              Stay Informed
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-gray-600">
              Our project management platform gives you real-time visibility
              into your build, from anywhere in the world.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Daily Photos",
                desc: "Photo updates uploaded daily to your client portal.",
              },
              {
                title: "Weekly Reports",
                desc: "Detailed progress reports with budget and timeline updates.",
              },
              {
                title: "Budget Tracking",
                desc: "Real-time budget tracking with transparent invoicing.",
              },
              {
                title: "Schedule Alerts",
                desc: "Notifications for milestones, delays, and decision points.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-brand-gray-100 p-6 text-center"
              >
                <h3 className="text-lg font-bold text-black">{item.title}</h3>
                <p className="mt-2 text-sm text-brand-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsBar />

      <InvestmentMarket />

      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Our Management Services</h2>
            <ul>
              <li>Project scheduling and timeline management</li>
              <li>Budget tracking and cost control</li>
              <li>Quality assurance and inspections</li>
              <li>Subcontractor coordination and oversight</li>
              <li>Permit and compliance management</li>
              <li>Communication and reporting</li>
              <li>Risk assessment and mitigation</li>
              <li>Final handover and snagging</li>
            </ul>
          </div>
        </div>
      </section>

      <Developments showAll />

      <FAQ />

      <BringVillaToLifeCTA />

      <InterestedInInvesting />
    </PageLayout>
  );
}

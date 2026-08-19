import { PageLayout } from "@/components/PageLayout";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";

export const metadata = {
  title: "Villa Tours | Ever Retreat Rwanda",
  description:
    "Schedule a private villa tour in Rwanda. See our completed developments and off-plan projects in Kigali, Musanze, Rubavu, and more.",
};

export default function VillaToursPage() {
  return (
    <PageLayout
      title="Villa Tours"
      subtitle="Schedule a private viewing of our completed developments and off-plan projects across Rwanda."
      showCta={false}
    >
      <section className="px-6 py-12 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-center text-sm font-medium uppercase tracking-wider text-brand-gray-500">
            Schedule a Tour
          </p>
          <h2 className="mt-2 text-center text-3xl font-bold text-black md:text-5xl">
            Experience Our Developments Firsthand
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-brand-gray-600">
            We arrange private tours of our completed villas and off-plan
            developments. See the quality of our craftsmanship, the detail in our
            designs, and the lifestyle our villas offer.
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-brand-gray-100 p-6">
                <h3 className="text-lg font-semibold text-black">On the Ground</h3>
                <p className="mt-2 text-sm text-brand-gray-600">
                   Visit our office in Kigali. Meet our team, browse
                   development plans, and discuss your project in person.
                </p>
              </div>
              <div className="rounded-lg border border-brand-gray-100 p-6">
                <h3 className="text-lg font-semibold text-black">Virtual Tour</h3>
                <p className="mt-2 text-sm text-brand-gray-600">
                  Prefer to explore remotely? We can arrange private virtual
                  tours of our developments via video call.
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <button className="rounded bg-black px-10 py-4 text-sm font-semibold text-white transition-colors hover:bg-black/80">
                Book a Villa Tour
              </button>
            </div>
          </div>
        </div>
      </section>
      <InterestedInInvesting />
    </PageLayout>
  );
}

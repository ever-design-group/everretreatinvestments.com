import { PageLayout } from "@/components/PageLayout";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import Image from "next/image";

export const metadata = {
  title: "Villa Tours | Ever Retreat Rwanda",
  description:
    "Schedule a private villa tour in Rwanda. See our completed developments and off-plan projects in Kigali, Musanze, Rubavu, and more.",
};

export default function VillaToursPage() {
  return (
    <PageLayout
      hero={
        <section className="relative h-[600px] w-full overflow-hidden">
          <Image
            src="/images/portfolio/completed-villa-4.webp"
            alt="Completed Ever Retreat villa with pool"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 sm:tracking-[0.25em]">
              Ever Retreat Rwanda
            </p>
            <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
              Villa Tours
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base md:text-lg">
              Schedule a private viewing of our completed developments and off-plan projects across Rwanda.
            </p>
          </div>
        </section>
      }
    >
      <section className="px-6 py-16 md:py-24">
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

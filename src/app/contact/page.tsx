import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Contact Us - Get in Touch | Ever Retreat Rwanda",
  description:
    "Contact Ever Retreat for architecture, construction, and property services in Rwanda. Our team is ready to help with your villa project.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative h-[600px] w-full overflow-hidden">
          <Image
            src="/images/hero/aerial-rwanda.webp"
            alt="Rwanda landscape"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/80">
              Contact Us
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl lg:text-7xl tracking-tight">
               Start Your Rwanda Villa Project
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-white/80">
              Whether you have a plot or are still exploring options, our team
              gives you straight answers. No obligation, no pressure.
            </p>
            <div className="mt-8">
              <Link
                href="#enquire"
                className="rounded bg-white px-8 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-brand-white py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div>
               <h3 className="text-lg font-semibold text-black">Rwanda HQ</h3>
                <p className="mt-2 text-sm text-brand-gray-600">
                  KG 541 St, Kacyiru, Kigali
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">Design Studio</h3>
                <p className="mt-2 text-sm text-brand-gray-600">
                  Kigali, Rwanda
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">Hong Kong</h3>
                <p className="mt-2 text-sm text-brand-gray-600">
                  Bayfield Building, 99 Hennessy Road, Wan Chai
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold text-black">WhatsApp</h3>
                <p className="mt-2 text-sm text-brand-gray-600">
                  <a
                    href="https://wa.me/250787524298"
                    className="hover:text-black"
                  >
                      +250 788-000-000
                  </a>
                </p>
                <p className="mt-1 text-xs text-brand-gray-500">
                  Mon-Fri 8am-5pm CAT
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">Email</h3>
                <p className="mt-2 text-sm text-brand-gray-600">
                  <a
                    href="mailto:hello@everretreat.com"
                    className="hover:text-black"
                  >
                    hello@everretreat.com
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">Office Hours</h3>
                <p className="mt-2 text-sm text-brand-gray-600">
                  Monday - Friday
                  <br />
                  8:00 AM - 5:00 PM (CAT)
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="enquire" className="bg-brand-off-white py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="mb-12 text-center">
              <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
                Send Us a Message
              </p>
              <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
                Tell Us About Your Project
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-gray-600">
                Whether it&apos;s a new villa build, land acquisition, or rental
                management inquiry, our team will respond within 24 hours.
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <form className="grid grid-cols-1 gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-black">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="mt-2 w-full rounded border border-brand-gray-100 bg-white px-4 py-3 text-base text-black focus:border-black focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="mt-2 w-full rounded border border-brand-gray-100 bg-white px-4 py-3 text-base text-black focus:border-black focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-black">
                    WhatsApp Number
                  </label>
                  <div className="mt-2 flex gap-2">
                    <button className="rounded border border-brand-gray-200 px-3 text-sm text-brand-gray-600">
                      +250
                    </button>
                    <input
                      type="tel"
                      placeholder="788-000-00"
                      className="w-full rounded border border-brand-gray-100 bg-white px-4 py-3 text-base text-black focus:border-black focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-black">
                    I&apos;m Interested In
                  </label>
                  <select className="mt-2 w-full rounded border border-brand-gray-100 bg-white px-4 py-3 text-base text-black focus:border-black focus:outline-none">
                    <option>Building a villa in Rwanda</option>
                    <option>Land sourcing</option>
                    <option>Villa investment</option>
                    <option>Villa management</option>
                    <option>General enquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-black">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="mt-2 w-full rounded border border-brand-gray-100 bg-white px-4 py-3 text-base text-black focus:border-black focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded bg-black px-10 py-4 text-sm font-semibold text-white transition-colors hover:bg-black/80"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="bg-brand-white py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="mb-12 text-center">
              <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500">
                FAQ
              </p>
              <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
                Need More Help?
              </h2>
            </div>
            <div className="mx-auto max-w-3xl">
              <FAQ />
            </div>
          </div>
        </section>

        <InterestedInInvesting />
      </main>
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </>
  );
}



import { PageLayout } from "@/components/PageLayout";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Ever Retreat Rwanda",
  description:
    "Privacy policy for Ever Retreat. How we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <PageLayout
      hero={
        <section className="relative h-[280px] w-full overflow-hidden bg-black sm:h-[320px] md:h-[380px] lg:h-[420px]">
          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
            }} />
          </div>
          
          {/* Content */}
          <div className="relative flex h-full flex-col items-center justify-center px-4 text-center sm:px-6">
            {/* Breadcrumb */}
            <div className="mb-2 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.15em] text-white/60 sm:mb-3 sm:text-xs">
              <Link href="/" className="transition-colors hover:text-white/90">
                Home
              </Link>
              <ChevronRight className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
              <span className="text-white/80">Privacy Policy</span>
            </div>

            <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight">
              Privacy Policy
            </h1>
            
            {/* Divider - Pure White */}
            <div className="mt-3 h-0.5 w-12 bg-white/40 sm:w-16" />
            
            <p className="mt-3 max-w-2xl text-xs text-white/70 sm:mt-4 sm:text-sm md:text-base">
              How we collect, use, and protect your personal information.
            </p>
          </div>
        </section>
      }
    >
      {/* Main Content */}
      <section className="px-4 py-10 sm:px-6 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          {/* Header with Last Updated */}
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex flex-col items-start justify-between gap-3 border-b border-gray-200 pb-5 sm:mb-8 sm:flex-row sm:items-center sm:gap-4 sm:pb-6">
              <p className="text-xs text-gray-500 sm:text-sm">
                <span className="font-semibold text-gray-700">Last Updated:</span> January 2026
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-900 transition-colors hover:text-gray-600 sm:text-sm"
              >
                <span>Questions?</span>
                <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Link>
            </div>
          </div>

          {/* Privacy Policy Content */}
          <div className="mx-auto max-w-4xl">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {/* Section 1 */}
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md sm:p-5 md:rounded-2xl md:p-6 lg:p-8">
                <h2 className="mt-0 flex items-center gap-2.5 text-base font-bold text-gray-900 sm:text-lg md:gap-3 md:text-xl lg:text-2xl">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm md:h-8 md:w-8">
                    1
                  </span>
                  Information We Collect
                </h2>
                <p className="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm md:text-base">
                  We collect personal information that you provide directly to us,
                  including:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-gray-600 sm:mt-3 sm:text-sm md:text-base">
                  <li>Name and contact information (email, phone)</li>
                  <li>Property preferences and investment goals</li>
                  <li>Communication records and correspondence</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md sm:p-5 md:rounded-2xl md:p-6 lg:p-8">
                <h2 className="mt-0 flex items-center gap-2.5 text-base font-bold text-gray-900 sm:text-lg md:gap-3 md:text-xl lg:text-2xl">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm md:h-8 md:w-8">
                    2
                  </span>
                  How We Use Your Information
                </h2>
                <p className="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm md:text-base">
                  We use your information to:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-gray-600 sm:mt-3 sm:text-sm md:text-base">
                  <li>Respond to your enquiries and provide property services</li>
                  <li>Send you newsletters and updates (if opted in)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md sm:p-5 md:rounded-2xl md:p-6 lg:p-8">
                <h2 className="mt-0 flex items-center gap-2.5 text-base font-bold text-gray-900 sm:text-lg md:gap-3 md:text-xl lg:text-2xl">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm md:h-8 md:w-8">
                    3
                  </span>
                  Cookies
                </h2>
                <p className="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm md:text-base">
                  We use cookies to remember your preferences and improve your
                  experience on our website. You can control cookie settings through
                  your browser.
                </p>
              </div>

              {/* Section 4 */}
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md sm:p-5 md:rounded-2xl md:p-6 lg:p-8">
                <h2 className="mt-0 flex items-center gap-2.5 text-base font-bold text-gray-900 sm:text-lg md:gap-3 md:text-xl lg:text-2xl">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm md:h-8 md:w-8">
                    4
                  </span>
                  Third-Party Services
                </h2>
                <p className="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm md:text-base">
                  We may share your information with trusted partners for property
                  services, marketing, and analytics. All partners are contractually
                  bound to protect your data.
                </p>
              </div>

              {/* Section 5 */}
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md sm:p-5 md:rounded-2xl md:p-6 lg:p-8">
                <h2 className="mt-0 flex items-center gap-2.5 text-base font-bold text-gray-900 sm:text-lg md:gap-3 md:text-xl lg:text-2xl">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm md:h-8 md:w-8">
                    5
                  </span>
                  Data Security
                </h2>
                <p className="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm md:text-base">
                  We implement industry-standard security measures to protect your
                  personal information. However, no method of transmission over the
                  internet is 100% secure.
                </p>
              </div>

              {/* Section 6 */}
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md sm:p-5 md:rounded-2xl md:p-6 lg:p-8">
                <h2 className="mt-0 flex items-center gap-2.5 text-base font-bold text-gray-900 sm:text-lg md:gap-3 md:text-xl lg:text-2xl">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm md:h-8 md:w-8">
                    6
                  </span>
                  Your Rights
                </h2>
                <p className="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm md:text-base">
                  You have the right to access, correct, or delete your personal
                  information. Contact us at{" "}
                  <a
                    href="mailto:info@everretreat.com"
                    className="font-medium text-gray-900 transition-colors hover:text-gray-600"
                  >
                    info@everretreat.com
                  </a>
                  {" "}to exercise these rights.
                </p>
              </div>

              {/* Section 7 */}
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md sm:p-5 md:rounded-2xl md:p-6 lg:p-8">
                <h2 className="mt-0 flex items-center gap-2.5 text-base font-bold text-gray-900 sm:text-lg md:gap-3 md:text-xl lg:text-2xl">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm md:h-8 md:w-8">
                    7
                  </span>
                  Changes to This Policy
                </h2>
                <p className="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm md:text-base">
                  We may update this privacy policy from time to time. Any changes
                  will be posted on this page.
                </p>
              </div>

              {/* Section 8 */}
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md sm:p-5 md:rounded-2xl md:p-6 lg:p-8">
                <h2 className="mt-0 flex items-center gap-2.5 text-base font-bold text-gray-900 sm:text-lg md:gap-3 md:text-xl lg:text-2xl">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm md:h-8 md:w-8">
                    8
                  </span>
                  Contact Us
                </h2>
                <p className="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm md:text-base">
                  If you have questions about this privacy policy, please contact us
                  at{" "}
                  <a
                    href="mailto:info@everretreat.com"
                    className="font-medium text-gray-900 transition-colors hover:text-gray-600"
                  >
                    info@everretreat.com
                  </a>
                  {" "}or WhatsApp{" "}
                  <a
                    href="https://wa.me/250787524298"
                    className="font-medium text-gray-900 transition-colors hover:text-gray-600"
                  >
                    +250 788-000-000
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* CTA Section - Pure Black & White */}
            <div className="mt-8 rounded-xl bg-gray-900 p-6 text-center shadow-xl sm:mt-10 sm:p-8 md:rounded-2xl md:p-10 lg:p-12">
              <h3 className="text-lg font-bold text-white sm:text-xl md:text-2xl">
                Have Questions About Your Privacy?
              </h3>
              <p className="mt-2 text-xs text-gray-400 sm:text-sm md:text-base">
                Our team is here to help with any privacy concerns you may have.
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:mt-6 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-xs font-semibold text-gray-900 transition-all hover:bg-gray-100 hover:shadow-lg sm:px-6 sm:py-3 sm:text-sm"
                >
                  Contact Us
                  <ChevronRight className="ml-1.5 h-3.5 w-3.5 sm:ml-2 sm:h-4 sm:w-4" />
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-white/10 sm:px-6 sm:py-3 sm:text-sm"
                >
                  Return Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
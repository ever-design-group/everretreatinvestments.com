import { PageLayout } from "@/components/PageLayout";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Ever Retreat Rwanda",
  description:
    "Terms and conditions for using the Ever Retreat website and services.",
};

export default function TermsPage() {
  return (
    <PageLayout
      hero={
        <section className="relative h-[280px] w-full overflow-hidden sm:h-[320px] md:h-[380px] lg:h-[420px]">
          {/* Background Image */}
          <Image
            src="/images/hero/rwanda-landscape.webp"
            alt="Rwanda landscape at sunset"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          
          {/* Overlay - Black & White only */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          
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
              <span className="text-white/80">Terms & Conditions</span>
            </div>

            <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight">
              Terms & Conditions
            </h1>
            
            {/* Divider - Pure White */}
            <div className="mt-3 h-0.5 w-12 bg-white/40 sm:w-16" />
            
            <p className="mt-3 max-w-2xl text-xs text-white/70 sm:mt-4 sm:text-sm md:text-base">
              Terms and conditions for using the Ever Retreat website and services.
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

          {/* Terms Content */}
          <div className="mx-auto max-w-4xl">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {/* Section 1 */}
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md sm:p-5 md:rounded-2xl md:p-6 lg:p-8">
                <h2 className="mt-0 flex items-center gap-2.5 text-base font-bold text-gray-900 sm:text-lg md:gap-3 md:text-xl lg:text-2xl">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm md:h-8 md:w-8">
                    1
                  </span>
                  Acceptance of Terms
                </h2>
                <p className="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm md:text-base">
                  By accessing or using the Ever Retreat website, you agree to be
                  bound by these Terms and Conditions. If you do not agree, please
                  do not use our website.
                </p>
              </div>

              {/* Section 2 */}
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md sm:p-5 md:rounded-2xl md:p-6 lg:p-8">
                <h2 className="mt-0 flex items-center gap-2.5 text-base font-bold text-gray-900 sm:text-lg md:gap-3 md:text-xl lg:text-2xl">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm md:h-8 md:w-8">
                    2
                  </span>
                  Property Listings
                </h2>
                <p className="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm md:text-base">
                  Property listings, pricing, and availability on this website are
                  subject to change without notice. We make no warranties regarding
                  the accuracy or completeness of any listing information.
                </p>
              </div>

              {/* Section 3 */}
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md sm:p-5 md:rounded-2xl md:p-6 lg:p-8">
                <h2 className="mt-0 flex items-center gap-2.5 text-base font-bold text-gray-900 sm:text-lg md:gap-3 md:text-xl lg:text-2xl">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm md:h-8 md:w-8">
                    3
                  </span>
                  Property Investment
                </h2>
                <p className="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm md:text-base">
                  All property investment decisions involve risks. You should
                  conduct your own due diligence and seek independent legal and
                  financial advice before making any investment.
                </p>
              </div>

              {/* Section 4 */}
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md sm:p-5 md:rounded-2xl md:p-6 lg:p-8">
                <h2 className="mt-0 flex items-center gap-2.5 text-base font-bold text-gray-900 sm:text-lg md:gap-3 md:text-xl lg:text-2xl">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm md:h-8 md:w-8">
                    4
                  </span>
                  User Content
                </h2>
                <p className="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm md:text-base">
                  You are responsible for any content you submit through our
                  website. By submitting content, you grant us a non-exclusive
                  right to use, modify, and display it.
                </p>
              </div>

              {/* Section 5 */}
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md sm:p-5 md:rounded-2xl md:p-6 lg:p-8">
                <h2 className="mt-0 flex items-center gap-2.5 text-base font-bold text-gray-900 sm:text-lg md:gap-3 md:text-xl lg:text-2xl">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm md:h-8 md:w-8">
                    5
                  </span>
                  Intellectual Property
                </h2>
                <p className="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm md:text-base">
                  All content on this website, including text, images, logos, and
                  trademarks, is the property of Ever Retreat or its licensors.
                  You may not reproduce or distribute our content without permission.
                </p>
              </div>

              {/* Section 6 */}
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md sm:p-5 md:rounded-2xl md:p-6 lg:p-8">
                <h2 className="mt-0 flex items-center gap-2.5 text-base font-bold text-gray-900 sm:text-lg md:gap-3 md:text-xl lg:text-2xl">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm md:h-8 md:w-8">
                    6
                  </span>
                  Limitation of Liability
                </h2>
                <p className="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm md:text-base">
                  To the fullest extent permitted by law, Ever Retreat shall not be
                  liable for any indirect, incidental, or consequential damages
                  arising from your use of our website or services.
                </p>
              </div>

              {/* Section 7 */}
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md sm:p-5 md:rounded-2xl md:p-6 lg:p-8">
                <h2 className="mt-0 flex items-center gap-2.5 text-base font-bold text-gray-900 sm:text-lg md:gap-3 md:text-xl lg:text-2xl">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm md:h-8 md:w-8">
                    7
                  </span>
                  Governing Law
                </h2>
                <p className="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm md:text-base">
                  These terms are governed by the laws of Rwanda. Any disputes
                  shall be subject to the exclusive jurisdiction of the courts in
                  Kigali, Rwanda.
                </p>
              </div>

              {/* Section 8 */}
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md sm:p-5 md:rounded-2xl md:p-6 lg:p-8">
                <h2 className="mt-0 flex items-center gap-2.5 text-base font-bold text-gray-900 sm:text-lg md:gap-3 md:text-xl lg:text-2xl">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm md:h-8 md:w-8">
                    8
                  </span>
                  Changes to Terms
                </h2>
                <p className="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm md:text-base">
                  We may update these terms from time to time. The latest version
                  will be posted on this page.
                </p>
              </div>

              {/* Section 9 */}
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md sm:p-5 md:rounded-2xl md:p-6 lg:p-8">
                <h2 className="mt-0 flex items-center gap-2.5 text-base font-bold text-gray-900 sm:text-lg md:gap-3 md:text-xl lg:text-2xl">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm md:h-8 md:w-8">
                    9
                  </span>
                  Contact
                </h2>
                <p className="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm md:text-base">
                  For questions regarding these terms, contact us at{" "}
                  <a
                    href="mailto:info@everretreat.com"
                    className="font-medium text-gray-900 transition-colors hover:text-gray-600"
                  >
                    info@everretreat.com
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* CTA Section - Pure Black & White */}
            <div className="mt-8 rounded-xl bg-gray-900 p-6 text-center shadow-xl sm:mt-10 sm:p-8 md:rounded-2xl md:p-10 lg:p-12">
              <h3 className="text-lg font-bold text-white sm:text-xl md:text-2xl">
                Have Questions About Our Terms?
              </h3>
              <p className="mt-2 text-xs text-gray-400 sm:text-sm md:text-base">
                Our team is here to help clarify any questions you may have.
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
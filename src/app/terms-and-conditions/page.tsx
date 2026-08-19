import { PageLayout } from "@/components/PageLayout";

export const metadata = {
  title: "Terms & Conditions | Ever Retreat Rwanda",
  description:
    "Terms and conditions for using the Ever Retreat website and services.",
};

export default function TermsPage() {
  return (
    <PageLayout title="Terms & Conditions" subtitle="" showCta={false}>
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <p>
              <strong>Last Updated:</strong> January 2026
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Ever Retreat website, you agree to be
              bound by these Terms and Conditions. If you do not agree, please
              do not use our website.
            </p>

            <h2>2. Property Listings</h2>
            <p>
              Property listings, pricing, and availability on this website are
              subject to change without notice. We make no warranties regarding
              the accuracy or completeness of any listing information.
            </p>

            <h2>3. Property Investment</h2>
            <p>
              All property investment decisions involve risks. You should
              conduct your own due diligence and seek independent legal and
              financial advice before making any investment.
            </p>

            <h2>4. User Content</h2>
            <p>
              You are responsible for any content you submit through our
              website. By submitting content, you grant us a non-exclusive
              right to use, modify, and display it.
            </p>

            <h2>5. Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and
              trademarks, is the property of Ever Retreat or its licensors.
              You may not reproduce or distribute our content without permission.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Ever Retreat shall not be
              liable for any indirect, incidental, or consequential damages
              arising from your use of our website or services.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              These terms are governed by the laws of Rwanda. Any disputes
              shall be subject to the exclusive jurisdiction of the courts in
              Kigali, Rwanda.
            </p>

            <h2>8. Changes to Terms</h2>
            <p>
              We may update these terms from time to time. The latest version
              will be posted on this page.
            </p>

            <h2>9. Contact</h2>
            <p>
              For questions regarding these terms, contact us at
              info@everretreat.com.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

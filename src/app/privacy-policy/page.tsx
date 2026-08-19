import { PageLayout } from "@/components/PageLayout";

export const metadata = {
  title: "Privacy Policy | Ever Retreat Rwanda",
  description:
    "Privacy policy for Ever Retreat. How we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <PageLayout title="Privacy Policy" subtitle="" showCta={false}>
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <p>
              <strong>Last Updated:</strong> January 2026
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              We collect personal information that you provide directly to us,
              including:
            </p>
            <ul>
              <li>Name and contact information (email, phone)</li>
              <li>Property preferences and investment goals</li>
              <li>Communication records and correspondence</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Respond to your enquiries and provide property services</li>
              <li>Send you newsletters and updates (if opted in)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>3. Cookies</h2>
            <p>
              We use cookies to remember your preferences and improve your
              experience on our website. You can control cookie settings through
              your browser.
            </p>

            <h2>4. Third-Party Services</h2>
            <p>
              We may share your information with trusted partners for property
              services, marketing, and analytics. All partners are contractually
              bound to protect your data.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your
              personal information. However, no method of transmission over the
              internet is 100% secure.
            </p>

            <h2>6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal
              information. Contact us at info@everretreat.com to exercise these
              rights.
            </p>

            <h2>7. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Any changes
              will be posted on this page.
            </p>

            <h2>8. Contact Us</h2>
            <p>
              If you have questions about this privacy policy, please contact us
              at info@everretreat.com or WhatsApp +250 788-000-000.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}


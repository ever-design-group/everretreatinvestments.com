import { PageLayout } from "@/components/PageLayout";
import { InterestedInInvesting } from "@/components/InterestedInInvesting";

export const metadata = {
  title: "Refer a Friend | Ever Retreat Rwanda",
  description:
    "Refer a friend to Ever Retreat and both receive benefits on your villa project.",
};

export default function ReferFriendPage() {
  return (
    <PageLayout
      title="Refer a Friend"
      subtitle="Share the Ever Retreat experience and both benefit."
      showCta={false}
    >
      <section className="px-6 py-12 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Refer a Friend, Get Rewarded</h2>
            <p>
              When your friend builds a villa with Ever Retreat and you refer
              them, both of you benefit. As a thank you, you receive a USD
              $5,000 credit towards your construction costs, and your friend
              receives priority scheduling and a complimentary design consultation.
            </p>

            <h3>How It Works</h3>
            <ol>
              <li>
                Submit your friend&apos;s details via the form below or contact us
                directly.
              </li>
              <li>
                Your friend mentions your referral when they enquire about their
                project.
              </li>
              <li>
                Both credits are applied once your friend&apos;s project commences
                construction.
              </li>
            </ol>

            <h3>Terms</h3>
            <ul>
              <li>The referrer must have an active or completed project with Ever Retreat</li>
              <li>The referred friend must be new to Ever Retreat</li>
              <li>Credits are applied at the start of construction phase</li>
              <li>Program closes when either party reaches final payment</li>
            </ul>
          </div>

          <div className="mx-auto mt-12 max-w-2xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-black">
                  Your Name
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded border border-brand-gray-100 bg-white px-4 py-3 text-base text-black focus:border-black focus:outline-none"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black">
                  Friend&apos;s Name
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded border border-brand-gray-100 bg-white px-4 py-3 text-base text-black focus:border-black focus:outline-none"
                  placeholder="Your friend&apos;s full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black">
                  Friend&apos;s Email
                </label>
                <input
                  type="email"
                  className="mt-2 w-full rounded border border-brand-gray-100 bg-white px-4 py-3 text-base text-black focus:border-black focus:outline-none"
                  placeholder="friend@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black">
                  Friend&apos;s WhatsApp
                </label>
                <input
                  type="tel"
                  className="mt-2 w-full rounded border border-brand-gray-100 bg-white px-4 py-3 text-base text-black focus:border-black focus:outline-none"
                  placeholder="+250 788-000-000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black">
                  Message (optional)
                </label>
                <textarea
                  rows={4}
                  className="mt-2 w-full rounded border border-brand-gray-100 bg-white px-4 py-3 text-base text-black focus:border-black focus:outline-none"
                  placeholder="What would you like us to know?"
                />
              </div>
              <button
                type="button"
                className="w-full rounded bg-black px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-black/80"
              >
                Submit Referral
              </button>
            </form>
          </div>
        </div>
      </section>
      <InterestedInInvesting />
    </PageLayout>
  );
}

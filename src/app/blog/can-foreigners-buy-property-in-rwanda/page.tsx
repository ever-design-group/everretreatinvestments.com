import { PageLayout } from "@/components/PageLayout";
import { InvestmentGuides } from "@/components/InvestmentGuides";
import Image from "next/image";

export const metadata = {
  title: "Can Foreigners Buy Property in Rwanda? | Ever Retreat",
  description:
    "Yes, through leasehold or company structures. Complete guide to legal ownership structures, costs, common mistakes, and step-by-step buying process.",
};

export default function CanForeignersBuyPage() {
  return (
    <PageLayout
      title="Can Foreigners Buy Property in Rwanda?"
      subtitle="Complete guide to legal ownership structures in Rwanda."
      bg="off-white"
    >
      <section className="px-6 py-12 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <Image
              src="/images/hero/aerial-rwanda.webp"
              alt="Rwanda property landscape"
              width={1200}
              height={600}
              className="w-full rounded-lg object-cover"
            />

            <h2>Yes, Foreigners Can Own Property in Rwanda</h2>
            <p>
              Under Rwanda law, foreigners cannot hold freehold freehold land
              title under personal name. However, there are two legal pathways
              for foreign ownership:
            </p>

            <h3>Leasehold (Most Common)</h3>
            <p>
              Foreigners can secure land through leasehold agreements issued by
              the Rwanda Land Management and Use Authority (RMLA). Standard
              lease terms are 99 years for residential/commercial use, with
              extension options. Leasehold is the standard route for villa
              investment and permits short-term rental operations.
            </p>
            <ul>
              <li>99-year initial lease term</li>
              <li>Renewable for additional terms</li>
              <li>Full transferability to other foreign buyers</li>
              <li>Permits short-term tourist accommodation</li>
            </ul>

            <h3>Company Structure</h3>
            <p>
              Foreigners can establish a Rwandan company (limited liability
              company registered with the Rwanda Development Board) that holds
              the property. This structure is useful for developments with
              multiple investors or commercial operations.
            </p>
            <ul>
              <li>Requires local director or nominee arrangement</li>
              <li>RDB registration and annual filings</li>
              <li>Allows freehold ownership through the company</li>
              <li>More complex but offers full control</li>
            </ul>

            <h2>Common Mistakes to Avoid</h2>
            <ol>
              <li>
                Buying without verifying zoning — Ensure the land is in a
                tourism-designated zone before purchase.
              </li>
              <li>
                Skipping title verification — Always engage our legal team
                to verify the title chain and encumbrances.
              </li>
              <li>
                Ignoring permit requirements — Tourism permits must be secured
                before operating short-term rentals.
              </li>
              <li>
                Not budgeting for transfer costs — Allow 10-15% of land value
                for stamp duty, transfer fees, and legal costs.
              </li>
            </ol>

            <h2>Step-by-Step Process</h2>
            <ol>
              <li>Due diligence on land (zoning, title, utilities)</li>
              <li>Reserve the land with signed PSR (Preliminary Sale Agreement)</li>
              <li>Company registration (if applicable)</li>
              <li>Finalize legal documentation and title transfer</li>
              <li>Pay transfer taxes and stamp duty</li>
              <li>Register lease/company with RMLA and RDB</li>
            </ol>

            <h2>Work With Us</h2>
            <p>
              Our in-house legal team handles the entire purchase process,
              from due diligence to title transfer. We work with the RMLA,
              RDB, and local authorities to ensure every step is fully
              compliant and your ownership structure is properly registered.
            </p>
          </div>
        </div>
      </section>

      <InvestmentGuides />
    </PageLayout>
  );
}

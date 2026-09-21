"use client";

import { useState } from "react";
import {
  ClipboardList,
  Search,
  MapPinned,
  ShieldCheck,
  FileSignature,
  PenTool,
  Ruler,
  Stamp,
  HardHat,
  Sofa,
  KeyRound,
  CalendarCheck,
  Check,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const stepIcons = [
  ClipboardList,
  Search,
  MapPinned,
  ShieldCheck,
  FileSignature,
  PenTool,
  Ruler,
  Stamp,
  HardHat,
  Sofa,
  KeyRound,
  CalendarCheck,
];

export function ProcessSteps() {
  const { t } = useLanguage();
  const p = t.processStepsSection;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const steps = [
    { step: 1, title: p.step1Title, description: p.step1Desc, bullets: p.step1Bullets },
    { step: 2, title: p.step2Title, description: p.step2Desc, bullets: p.step2Bullets },
    { step: 3, title: p.step3Title, description: p.step3Desc, bullets: p.step3Bullets },
    { step: 4, title: p.step4Title, description: p.step4Desc, bullets: p.step4Bullets },
    { step: 5, title: p.step5Title, description: p.step5Desc, bullets: p.step5Bullets },
    { step: 6, title: p.step6Title, description: p.step6Desc, bullets: p.step6Bullets },
    { step: 7, title: p.step7Title, description: p.step7Desc, bullets: p.step7Bullets },
    { step: 8, title: p.step8Title, description: p.step8Desc, bullets: p.step8Bullets },
    { step: 9, title: p.step9Title, description: p.step9Desc, bullets: p.step9Bullets },
    { step: 10, title: p.step10Title, description: p.step10Desc, bullets: p.step10Bullets },
    { step: 11, title: p.step11Title, description: p.step11Desc, bullets: p.step11Bullets },
    { step: 12, title: p.step12Title, description: p.step12Desc, bullets: p.step12Bullets },
  ];

  // Reuse existing, already-established FAQ content that's directly relevant
  // to the build process (build timeline, deposit/payment, post-handover
  // management) instead of inventing new questions.
  const processFaqs = t.faqSection.items.slice(3, 6);

  return (
    <section className="bg-brand-white py-16 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
            {p.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
            {p.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-gray-600">
            {p.subheading}
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {steps.map((step, index) => {
            const Icon = stepIcons[index];
            const reversed = index % 2 === 1;
            return (
              <div key={step.step}>
                <div
                  className={`flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-8 ${
                    reversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex shrink-0 items-center gap-4 rounded-sm bg-brand-teal p-5 lg:w-40 lg:flex-col lg:items-start lg:gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/50">Step</p>
                      <p className="text-3xl font-bold leading-none text-white">
                        {String(step.step).padStart(2, "0")}
                      </p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold uppercase tracking-wide text-black md:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-brand-gray-600">
                      {step.description}
                    </p>
                    {step.bullets && step.bullets.length > 0 && (
                      <div className="mt-6 space-y-2.5">
                        {step.bullets.map((bullet) => (
                          <div key={bullet} className="flex items-start gap-3">
                            <Check
                              className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-teal"
                              strokeWidth={2.5}
                            />
                            <p className="text-sm text-brand-gray-600">{bullet}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="mt-16 border-b border-brand-gray-100 md:mt-24" />
                )}
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-20 max-w-3xl">
          <div className="mb-8 text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
              {p.faqEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold text-black md:text-4xl">
              {p.faqHeading}
            </h2>
          </div>

          <div className="space-y-4">
            {processFaqs.map((item, index) => (
              <div key={item.question} className="overflow-hidden rounded-sm bg-brand-off-white">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <h3 className="text-base font-semibold text-black">{item.question}</h3>
                  <span className="ml-4 text-lg text-brand-gray-500">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="border-t border-brand-gray-100 p-5">
                    <p className="text-sm leading-relaxed text-brand-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

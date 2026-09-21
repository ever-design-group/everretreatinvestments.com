"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function BuildCalculator() {
  const { t } = useLanguage();
  const c = t.buildCalculatorSection;
  const [size, setSize] = useState(150);
  const [finishLevel, setFinishLevel] = useState("premium");
  const [bedrooms, setBedrooms] = useState("3");
  const [result, setResult] = useState<null | {
    baseCost: number;
    landCost: number;
    totalCost: number;
    annualYield: number;
    paybackYears: number;
  }>(null);

  const finishRates = {
    standard: 1000,
    premium: 1500,
    luxury: 2200,
  };

  const landRates = {
    standard: 200,
    premium: 300,
    luxury: 450,
  };

  const finishOptions = [
    { value: "standard", label: c.standardLabel, price: "$1,000/sqm" },
    { value: "premium", label: c.premiumLabel, price: "$1,500/sqm" },
    { value: "luxury", label: c.luxuryLabel, price: "$2,200/sqm" },
  ];

  const handleCalculate = () => {
    const rate = finishRates[finishLevel as keyof typeof finishRates];
    const landRate = landRates[finishLevel as keyof typeof landRates];

    const baseCost = size * rate;
    const landCost = size * landRate;
    const totalCost = baseCost + landCost + 15000;

    const yields = { standard: 0.08, premium: 0.15, luxury: 0.2 };
    const annualYield = totalCost * yields[finishLevel as keyof typeof yields];
    const paybackYears = totalCost / annualYield;

    setResult({
      baseCost,
      landCost,
      totalCost,
      annualYield,
      paybackYears,
    });
  };

  const formatCurrency = (n: number) => {
    if (n >= 1000000) return `$${(n / 1000000).toFixed(1)}M`;
    if (n >= 1000) return `$${(n / 1000).toFixed(0)}K`;
    return `$${n.toLocaleString()}`;
  };

  return (
    <section className="bg-brand-off-white py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500">
              {c.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
              {c.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-gray-600">
              {c.paragraph}
            </p>
          </div>

          <div className="grid gap-6 pb-8">
            <div>
              <label className="block text-sm font-medium text-black">
                {c.villaSizeLabel}
              </label>
              <input
                type="range"
                min="40"
                max="500"
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="mt-2 w-full"
              />
              <div className="mt-2 flex justify-between text-xs text-brand-gray-500">
                <span>40</span>
                <span>{size} {c.sqmSuffix}</span>
                <span>500</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-black">
                {c.finishLevelLabel}
              </label>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {finishOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setFinishLevel(opt.value)}
                    className={`rounded-sm border px-4 py-3 text-center text-sm font-semibold ${
                      finishLevel === opt.value
                        ? "border-brand-teal bg-brand-teal text-white"
                        : "border-brand-gray-100 text-brand-gray-600 hover:border-brand-teal"
                    }`}
                  >
                    <span className="block">{opt.label}</span>
                    <span className="text-xs">{opt.price}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-black">
                {c.bedroomsLabel}
              </label>
              <select
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="mt-2 w-full rounded-sm border border-brand-gray-100 bg-white px-4 py-3 text-base text-black focus:border-brand-teal focus:outline-none"
              >
                <option value="2">{c.bedroomOption2}</option>
                <option value="3">{c.bedroomOption3}</option>
                <option value="4">{c.bedroomOption4}</option>
                <option value="5">{c.bedroomOption5Plus}</option>
              </select>
            </div>

            <button
              type="button"
              onClick={handleCalculate}
              className="rounded-sm bg-brand-teal px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-teal/80"
            >
              {c.calculateButton}
            </button>
          </div>

          {result && (
            <div className="mt-12 rounded-sm border border-brand-gray-100 bg-brand-off-white p-8">
              <h3 className="text-center text-xl font-bold text-black">
                {c.resultsHeading}
              </h3>
              <div className="mt-6 space-y-3">
                <div className="flex justify-between border-b border-brand-gray-100 pb-2">
                  <span className="text-sm text-brand-gray-600">
                    {c.baseConstructionLabel} ({size} {c.sqmSuffix} x $
                    {finishRates[finishLevel as keyof typeof finishRates]})
                  </span>
                  <span className="font-semibold text-black">
                    {formatCurrency(result.baseCost)}
                  </span>
                </div>
                <div className="flex justify-between border-b border-brand-gray-100 pb-2">
                  <span className="text-sm text-brand-gray-600">
                    {c.landCostLabel} (~
                    {formatCurrency(
                      size * landRates[finishLevel as keyof typeof landRates],
                    )}
                    )
                  </span>
                  <span className="font-semibold text-black">
                    {formatCurrency(result.landCost)}
                  </span>
                </div>
                <div className="flex justify-between border-b border-brand-gray-100 pb-2">
                  <span className="text-sm text-brand-gray-600">
                    {c.permitsLabel}
                  </span>
                  <span className="font-semibold text-black">$15K</span>
                </div>
                <div className="flex justify-between pt-4">
                  <span className="font-bold text-black">
                    {c.totalLabel}
                  </span>
                  <span className="text-2xl font-bold text-brand-green">
                    {formatCurrency(result.totalCost)}
                  </span>
                </div>
              </div>

              <div className="mt-8 rounded-sm bg-brand-teal/5 p-6">
                <h4 className="text-center text-sm font-semibold text-black">
                  {c.rentalReturnsHeading} ({bedrooms}BR)
                </h4>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-gray-600">
                      {c.annualYieldLabel}
                    </span>
                    <span className="font-semibold text-black">
                      {formatCurrency(result.annualYield)}{c.perYearSuffix}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-gray-600">
                      {c.roiTimelineLabel}
                    </span>
                    <span className="font-semibold text-black">
                      {result.paybackYears.toFixed(1)} {c.yearsSuffix}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-gray-600">{c.dailyRateLabel}</span>
                    <span className="font-semibold text-black">
                      ${Math.round(result.annualYield / 250)}{c.perNightSuffix}
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-center text-xs text-brand-gray-500">
                  {c.disclaimerText}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

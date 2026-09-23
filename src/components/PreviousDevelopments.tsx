"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { TranslationShape } from "@/lib/i18n/translations";

// Only the 2 confirmed real, completed showcase villas — earlier drafts of
// this component listed "The Hut", "Kivu Portfolio", and even Virunga Villas
// (which is still "Coming Soon", never built) as if they were finished
// projects. Fixed to show only what's actually been completed.
function buildProjects(t: TranslationShape) {
  const items = t.developmentsSection.items;
  return [
    {
      name: "B&P Ever Retreat Villa",
      image: "/images/developments/villa-photos.jpeg",
      href: "/developments/nara-villas",
      description: items["nara-villas"].description,
    },
    {
      name: "Cottage",
      image: "/images/developments/villa-photos.jpeg",
      href: "/developments/solas-kivu",
      description: items["solas-kivu"].description,
    },
  ];
}

export function PreviousDevelopments() {
  const { t } = useLanguage();
  const projects = buildProjects(t);
  const p = t.previousDevelopments;

  return (
    <section className="py-16 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-gray-500">
            {p.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
            {p.heading}
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.name}
              href={project.href}
              className="group overflow-hidden rounded-sm bg-white"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black">{project.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray-600 line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-semibold text-black">
                  {p.viewProject}
                  <span className="ml-1 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-5xl border border-brand-gray-200 bg-brand-off-white p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-black">
            {p.calloutTitle}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-brand-gray-600">
            {p.footnote}
          </p>
        </div>
      </div>
    </section>
  );
}

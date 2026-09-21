"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { TranslationShape } from "@/lib/i18n/translations";

function buildTeamMembers(t: TranslationShape) {
  const roles = t.team.roles;
  return [
    {
      name: "Theophile",
      role: roles.ceo,
      image: "/images/team/theophier.jpeg",
      imageAlt: "Theophile - CEO at Ever Retreat",
    },
    {
      name: "Yvette",
      role: roles.architectureManager,
      image: "/images/team/yvetter.jpeg",
      imageAlt: "Yvette - Architecture Manager at Ever Retreat",
    },
    {
      name: "Doris",
      role: roles.hospitalityManager,
      image: "/images/team/doris.jpeg",
      imageAlt: "Doris - Hospitality Manager at Ever Retreat",
    },
    {
      name: "Sophie",
      role: roles.accountant,
      image: "/images/team/sophie.jpeg",
      imageAlt: "Sophie - Accountant at Ever Retreat",
    },
    {
      name: "Eric",
      role: roles.it,
      image: "/images/team/eric-passport.jpeg",
      imageAlt: "Eric - IT at Ever Retreat",
    },
    {
      name: "Rusagara",
      role: roles.procurementOfficer,
      image: "/images/team/rusagara.jpeg",
      imageAlt: "Rusagara - Procurement Officer at Ever Retreat",
    },
  ];
}

export function Team() {
  const { t } = useLanguage();
  const teamMembers = buildTeamMembers(t);

  return (
    <section className="bg-brand-white py-16 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] text-brand-gray-500 uppercase mb-4">
              {t.team.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-black uppercase tracking-wide leading-tight">
              <span className="font-light">{t.team.headingLight}</span>
              <br />
              <span className="font-bold">{t.team.headingBold}</span>
            </h2>
            <p className="mt-6 text-sm md:text-base text-brand-gray-700 leading-relaxed max-w-md">
              {t.team.paragraph}
            </p>
            <Link
              href="/about"
              className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black uppercase tracking-[0.12em] py-2"
            >
              <span>{t.team.meetTeam}</span>
              <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">→</span>
            </Link>
          </motion.div>

          {/* Photo grid — small, compact cards: photo + name + role only,
              each fading in with a staggered, video-like cascade on scroll. */}
          <div className="flex flex-wrap justify-center gap-y-5 -mx-1.5">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="w-1/3 px-1.5 text-center sm:w-1/4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.12 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="group relative aspect-[3/4] overflow-hidden bg-brand-gray-100 mb-2.5">
                  <Image
                    src={member.image}
                    alt={member.imageAlt}
                    fill
                    sizes="(max-width: 768px) 25vw, 12vw"
                    className="object-cover object-[center_25%] transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <p className="font-semibold text-sm text-black tracking-wide">{member.name}</p>
                <p className="text-[11px] text-brand-gray-500 mt-0.5 leading-tight">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

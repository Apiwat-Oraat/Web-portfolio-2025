"use client";

import React, { useState } from "react";
import { ExternalLink, MapPin, Briefcase, ChevronDown, Rocket, PenTool } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ExperienceItem {
  position: string;
  company: string;
  location: string;
  date: string;
  badge: string;
  description: string[];
  technologies: string[];
  link?: string;
  icon: React.ElementType;
  gradientClass: string;
}

const experiences: ExperienceItem[] = [
  {
    position: "Software Engineer Intern",
    company: "Multi Innovation Engineering",
    location: "Bangkok, Thailand",
    date: "April 2026 – May 2026",
    badge: "Internship",
    description: [
      "Participated in foundational full-stack development training by building frontend and backend workshop projects using Next.js and Golang.",
      "Applied basic software development workflows including task management, version control, GitLab branching, and collaborative project management.",
      "Conducted introductory AI research and experimentation for text classification using OpenWebUI and Cypress-based testing.",
      "Gained foundational experience in computer vision workflows, including dataset preparation with CVAT and Video Analytics using NVIDIA DeepStream SDK.",
      "Learned mobile application development fundamentals using Kotlin and Android Studio.",
    ],
    technologies: [
      "Next.js",
      "Golang",
      "GitLab",
      "OpenWebUI",
      "Cypress",
      "CVAT",
      "DeepStream",
      "Kotlin",
    ],
    icon: Briefcase,
    gradientClass: "bg-gradient-to-r from-[#FF7A59] via-[#D84C98] to-[#2E87EB]",
  },
  {
    position: "Production Intern",
    company: "Mitsubishi Electric",
    location: "Chonburi, Thailand",
    date: "Oct 2022 – Sep 2023",
    badge: "Internship",
    description: [
      "Gained hands-on experience in industrial manufacturing by assisting in the assembly of air conditioner components on the Line-V2 production line.",
    ],
    technologies: ["Manufacturing", "Production Line"],
    icon: Rocket,
    gradientClass: "bg-gradient-to-r from-emerald-400 to-cyan-500",
  },
  {
    position: "Graphic Design Intern",
    company: "Sirimongkol Printing",
    location: "Udon Thani, Thailand",
    date: "May 2021 – Sep 2021",
    badge: "Internship",
    description: [
      "Designed a wide range of print media, including wedding invitations, vinyl banners, business cards, and stickers.",
      "Executed print production tasks, including bookbinding and layout design.",
    ],
    technologies: ["Graphic Design", "Print Production", "Layout Design"],
    icon: PenTool,
    gradientClass: "bg-gradient-to-r from-amber-400 to-orange-500",
  },
];

export interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  dateRange: string;
  badgeText: string;
  align?: "left" | "right";
  icon: React.ElementType;
  gradientClass: string;
  details?: string[];
  technologies?: string[];
  link?: string;
}

export function ExperienceCard({
  title,
  company,
  location,
  dateRange,
  badgeText,
  align = "left",
  icon: Icon,
  gradientClass,
  details = [],
  technologies = [],
  link,
}: ExperienceCardProps) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);

  return (
    <div
      className={cn(
        "relative flex flex-col md:flex-row items-center justify-between group",
        align === "right" ? "md:flex-row-reverse" : ""
      )}
    >
      {/* Timeline Marker (Desktop only) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-[3px] border-[#120f18] shadow-sm z-20 hidden md:block bg-gradient-to-br from-[#A58CF4] to-[#433075]"></div>

      {/* Card Form */}
      <div className="w-full md:w-[46%]">
        <div className="overflow-hidden rounded-[24px] shadow-[0px_4px_20px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-transform duration-300 border border-white/10 bg-[#120f18]">
          {/* Header part with gradient */}
          <div className={cn("p-6 relative", gradientClass)}>
            {/* External Link */}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-5 right-5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white backdrop-blur-sm shadow-sm z-20"
              >
                <ExternalLink size={14} />
              </a>
            )}
            
            <div className="flex gap-4 items-start pr-8">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shrink-0">
                <Icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="text-[18px] font-bold text-white tracking-tight leading-tight mb-1">
                  {title}
                </h3>
                <p className="text-[14px] font-medium text-white/90">
                  {company}
                </p>
                <div className="flex items-center gap-1 text-[13px] text-white/80 mt-2 font-medium">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Body part details */}
          <div className="bg-[#120f18] p-6 pt-4 space-y-1">
            {/* Details Accordion */}
            <div className="border-t border-white/5 pt-3">
              <button
                onClick={() => setDetailsOpen(!detailsOpen)}
                className="flex justify-between items-center w-full group/btn py-1"
              >
                <span className="font-semibold text-[14px] text-zinc-300 group-hover/btn:text-white transition-colors">
                  Details
                </span>
                <motion.div
                  animate={{ rotate: detailsOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-zinc-500 group-hover/btn:text-white transition-colors" />
                </motion.div>
              </button>
              <AnimatePresence>
                {detailsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="text-[14px] text-zinc-400 mt-3 pb-2">
                      <ul className="list-disc pl-5 space-y-1.5 marker:text-zinc-600">
                        {details.length > 0 ? (
                          details.map((d, i) => <li key={i}>{d}</li>)
                        ) : (
                          <li>No details provided.</li>
                        )}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Technologies Accordion */}
            <div className="border-t border-white/5 pt-3">
              <button
                onClick={() => setTechOpen(!techOpen)}
                className="flex justify-between items-center w-full group/btn py-1"
              >
                <span className="font-semibold text-[14px] text-zinc-300 group-hover/btn:text-white transition-colors">
                  Technologies
                </span>
                <motion.div
                  animate={{ rotate: techOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-zinc-500 group-hover/btn:text-white transition-colors" />
                </motion.div>
              </button>
              <AnimatePresence>
                {techOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-wrap gap-2 mt-3 pb-2">
                      {technologies.length > 0 ? (
                        technologies.map((t, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white/5 text-zinc-300 border border-white/10 rounded-full text-[12px] font-medium tracking-wide"
                          >
                            {t}
                          </span>
                        ))
                      ) : (
                        <span className="text-sm text-zinc-500">
                          None specified.
                        </span>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Date Info */}
      <div
        className={cn(
          "w-full md:w-[45%] mt-6 md:mt-0",
          align === "right" ? "text-left md:text-right md:pr-14" : "md:pl-14"
        )}
      >
        <div
          className={cn(
            "flex flex-col gap-2",
            align === "right" ? "items-start md:items-end" : "items-start"
          )}
        >
          <span className="px-3.5 py-1 bg-[#433075]/40 border border-[#A58CF4]/20 rounded-full text-[12px] font-semibold text-[#A58CF4]">
            {badgeText}
          </span>
          <span className="text-[18px] font-semibold text-zinc-200 tracking-tight">
            {dateRange}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceTimeline() {
  return (
    <div className="relative flex flex-col items-center w-full max-w-4xl mx-auto py-8">
      {/* Continuous Center Line (Desktop) */}
      <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-[#BFC0C7]/35 to-transparent shadow-[0_0_14px_rgba(250,250,250,0.14)]" />

      {/* Continuous Left Line (Mobile) */}
      <div className="md:hidden absolute top-0 bottom-0 left-[22px] w-px bg-gradient-to-b from-transparent via-[#BFC0C7]/35 to-transparent" />

      <div className="flex flex-col gap-12 md:gap-16 w-full">
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="w-full relative pl-10 md:pl-0"
            >
              {/* Left Dot (Mobile) */}
              <div className="absolute md:hidden left-[22px] top-6 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10">
                  <span className="flex size-3 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#A58CF4] to-[#433075] border-[2px] border-[#120f18] shadow-[0_0_8px_rgba(165,140,244,0.4)]">
                  </span>
              </div>

              <ExperienceCard
                title={exp.position}
                company={exp.company}
                location={exp.location}
                dateRange={exp.date}
                badgeText={exp.badge}
                align={isLeft ? "left" : "right"}
                icon={exp.icon}
                gradientClass={exp.gradientClass}
                details={exp.description}
                technologies={exp.technologies}
                link={exp.link}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

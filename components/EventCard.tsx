"use client";

import React, { JSX } from "react";
import Image from "next/image";
import { ExternalLink, MapPin } from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";

interface Tag {
  icon: JSX.Element;
  label: string;
}

interface EventCardProps {
  logo: string;
  date: string;
  badge: string;
  title: string;
  location: string;
  description: string;
  tags: Tag[];
  link: string;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({
  logo,
  date,
  badge,
  title,
  location,
  description,
  tags,
  link,
  index,
}) => {
  return (
    <motion.div
      id={`education-${index + 1}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
      viewport={{ once: true, amount: 0.35 }}
      className="relative flex w-full items-stretch scroll-mt-18 justify-end gap-2"
    >
      <div className="sticky top-19 hidden w-32 flex-col items-end gap-1.5 self-start pb-3 md:flex">
        <Badge className="flex h-5 w-auto justify-end rounded-full border border-black/10 dark:border-white/10 bg-transparent px-2.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5 hover:text-zinc-900 dark:hover:text-white transition-colors">
          {badge}
        </Badge>
        <div className="text-right text-xs font-medium text-zinc-500 dark:text-zinc-400">
          {date}
        </div>
      </div>

      <div className="flex self-stretch flex-col items-center">
        <div className="sticky top-19 flex size-6 items-center justify-center max-sm:top-5">
          <span className="flex size-4.5 shrink-0 items-center justify-center rounded-full bg-black/5 dark:bg-white/10 shadow-[0_0_14px_rgba(0,0,0,0.1)] dark:shadow-[0_0_14px_rgba(250,250,250,0.18)]">
            <span className="size-3 rounded-full bg-gradient-to-b from-[#2D7FF9] via-[#60A5FA] to-[#93C5FD] dark:from-[#3B82F6] dark:via-[#D7D8DF] dark:to-[#9B9CA6] shadow-[0_0_8px_rgba(45,127,249,0.4)] dark:shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
          </span>
        </div>
        <span className="-mt-2.5 w-px flex-1 bg-black/10 dark:bg-[#BFC0C7]/35 shadow-[0_0_14px_rgba(0,0,0,0.05)] dark:shadow-[0_0_14px_rgba(250,250,250,0.14)]" />
      </div>

      <div className="flex flex-1 flex-col gap-3 pb-6 pl-3 md:pl-5 lg:pl-7">
        <div className="flex flex-col gap-2 md:hidden">
          <Badge className="flex w-fit rounded-full border border-black/10 dark:border-white/10 bg-transparent text-zinc-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5 hover:text-zinc-900 dark:hover:text-white transition-colors">
            {badge}
          </Badge>
          <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{date}</div>
        </div>

        <motion.article
          whileHover={{ y: -4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative min-h-[220px] overflow-hidden rounded-2xl rounded-br-[64px] border border-black/10 dark:border-white/20 bg-white/60 dark:bg-white/5 p-3 text-zinc-900 dark:text-[#FAFAFA] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-500 before:absolute before:inset-y-[-20%] before:left-[-70%] before:w-1/2 before:rotate-12 before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.8),transparent)] dark:before:bg-[linear-gradient(90deg,transparent,rgba(250,250,250,0.42),transparent)] before:opacity-0 before:blur-sm before:transition-all before:duration-700 hover:-translate-y-1 hover:bg-white/80 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/30 hover:before:left-[120%] hover:before:opacity-100 md:min-h-[214px] md:p-3.5"
        >
          {/* External Link */}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title} website`}
              className="absolute top-3 right-3 z-20 inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-zinc-500 dark:text-zinc-400 transition-all duration-300 hover:border-[#2D7FF9] hover:bg-[#2D7FF9]/10 hover:text-[#2D7FF9] md:top-4 md:right-4"
            >
              <ExternalLink size={14} />
            </a>
          )}

          <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-start pr-12 md:pr-14">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/10 p-2">
              <Image
                src={logo}
                alt={title}
                width={44}
                height={44}
                unoptimized
                className="h-11 w-11 rounded-lg object-contain"
              />
            </div>

            <div className="min-w-0 flex-1 space-y-3">
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-bold leading-snug text-zinc-900 dark:text-[#FAFAFA] md:text-lg">
                  {title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 md:text-sm">
                  <MapPin size={14} className="shrink-0 text-[#2D7FF9]" />
                  <span className="truncate">{location}</span>
                </div>
              </div>

              <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-sm">
                {description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {tags.map((tag) => (
                  <span
                    key={tag.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-black/10 dark:border-white/10 bg-transparent px-2.5 py-0.5 text-[11px] text-zinc-600 dark:text-zinc-400"
                  >
                    {tag.icon}
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </motion.div>
  );
};

export default EventCard;

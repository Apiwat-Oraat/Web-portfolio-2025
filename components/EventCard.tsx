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
      className="relative flex w-full scroll-mt-18 justify-end gap-2"
    >
      <div className="sticky top-19 hidden w-36 flex-col items-end gap-2 self-start pb-4 md:flex">
        <Badge className="flex h-6 w-auto justify-end rounded-full bg-zinc-800 px-3 text-sm font-medium text-zinc-300 hover:bg-zinc-800">
          {badge}
        </Badge>
        <div className="text-right text-sm font-medium text-zinc-400">
          {date}
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="sticky top-19 flex size-6 items-center justify-center max-sm:top-5">
          <span className="flex size-4.5 shrink-0 items-center justify-center rounded-full bg-white/10">
            <span className="size-3 rounded-full bg-zinc-300 shadow-[0_0_18px_rgba(255,255,255,0.35)]" />
          </span>
        </div>
        <span className="-mt-2.5 w-px flex-1 border border-white/15" />
      </div>

      <div className="flex flex-1 flex-col gap-4 pb-11 pl-3 md:pl-6 lg:pl-9">
        <div className="flex flex-col gap-2 md:hidden">
          <Badge className="flex w-fit rounded-full bg-zinc-800 text-zinc-300 hover:bg-zinc-800">
            {badge}
          </Badge>
          <div className="text-sm font-medium text-zinc-300">{date}</div>
        </div>

        <motion.article
          whileHover={{ y: -4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white shadow-[0_0_40px_rgba(255,255,255,0.05)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(255,255,255,0.1)] md:p-4"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-white/10 p-2">
              <Image
                src={logo}
                alt={title}
                width={48}
                height={48}
                unoptimized
                className="h-12 w-12 rounded-lg object-contain"
              />
            </div>

            <div className="min-w-0 flex-1 space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-400">
                    <span className="rounded-full bg-zinc-800 px-3 py-1">
                      Education
                    </span>
                    <span className="rounded-full bg-zinc-800 px-3 py-1">
                      {badge}
                    </span>
                    <span>{date}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold leading-snug text-zinc-100 md:text-xl">
                      {title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <MapPin
                        size={15}
                        className="shrink-0 text-zinc-300"
                      />
                      <span>{location}</span>
                    </div>
                  </div>
                </div>

                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${title} website`}
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-700 text-zinc-200 transition-all duration-300 hover:border-white hover:text-white"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              <p className="text-sm leading-relaxed text-zinc-400">
                {description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map((tag) => (
                  <span
                    key={tag.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
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

"use client";
import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Technology {
  label: string;
}

interface ExperienceCardProps {
  date: string;
  position: string;
  company: string;
  description: string;
  link: string;
  technologies: Technology[];
  image?: string | StaticImageData;
}

export default function ExperienceCard({
  date,
  position,
  company,
  description,
  link,
  technologies,
  image,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}             // เริ่มล่าง + จาง
      whileInView={{ opacity: 1, y: 0 }}          // ค่อยๆ เลื่อนขึ้นและแสดงเต็ม
      transition={{ duration: 0.6, ease: "easeOut" }} // เวลาและ curve
      viewport={{ once: true, amount: 0.2 }}      // เล่นครั้งเดียว, 30% เข้า viewport ถึงจะเล่น
      className="relative overflow-hidden max-w-4xl mx-auto backdrop-blur-xl bg-white/5 border border-white/20
           text-[#FAFAFA] rounded-2xl p-3 md:p-3.5 flex flex-col md:flex-row items-start
           md:items-center gap-5 md:gap-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.2)]
           transition-all duration-500 before:absolute before:inset-y-[-20%] before:left-[-70%] before:w-1/2 before:rotate-12 before:bg-[linear-gradient(90deg,transparent,rgba(250,250,250,0.42),transparent)] before:opacity-0 before:blur-sm before:transition-all before:duration-700 hover:bg-white/10 hover:border-white/30 hover:before:left-[120%] hover:before:opacity-100
           hover:-translate-y-1"
    >
      {/* Left Content */}
      <div className="relative z-10 flex-1 space-y-3">
        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs text-zinc-400">
          <span className="border border-white/10 bg-transparent px-2.5 py-0.5 rounded-full text-zinc-400">Projects</span>
          <span className="border border-white/10 bg-transparent px-2.5 py-0.5 rounded-full text-zinc-400">{company}</span>
          <span className="text-xs">{date}</span>
        </div>

        {/* Position */}
        <h2 className="text-lg md:text-xl font-semibold text-[#FAFAFA] leading-snug">
          {position}
        </h2>

        {/* Description */}
        <p className="text-zinc-400 leading-relaxed text-xs md:text-sm">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-[11px] bg-transparent text-zinc-400 border border-white/10 px-2.5 py-0.5 rounded-full"
            >
              {tech.label}
            </span>
          ))}
        </div>

      </div>

      {/* Right: Image (optional) */}
      {image && (
        <div
          className="relative z-10 flex flex-col items-center md:items-end md:w-64 mt-1
               w-full" // ✅ ให้เต็มความกว้างใน mobile
        >
          <Image
            src={image}
            alt={position}
            width={272}
            height={160}
            className="w-full max-w-[272px] h-36 object-cover rounded-xl border border-[#2D7FF9]/25
                 transition-transform duration-500 hover:scale-105
                 md:h-40 md:max-w-none self-start md:self-end" // ✅ mobile จำกัดขนาดสูงสุด / md ปล่อยเต็ม
          />

          {/* Button */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[#2D7FF9]/35 text-zinc-200
                 hover:text-[#2D7FF9] hover:border-[#2D7FF9] px-3.5 py-1.5 rounded-full
                 text-xs md:text-sm transition-all duration-300 w-fit mt-2
                 self-start md:self-end" // ✅ mobile ชิดซ้าย / md ชิดขวา
          >
            Read more <ArrowRight size={16} />
          </a>
        </div>
      )}

    </motion.div>
  );
}

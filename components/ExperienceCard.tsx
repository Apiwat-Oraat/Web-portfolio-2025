"use client";
import React from "react";
import Image from "next/image";
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
  image?: string;
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
      className="max-w-5xl mx-auto backdrop-blur-md bg-white/5 border border-white/10
           text-[#FAFAFA] rounded-2xl p-3 md:p-4 flex flex-col md:flex-row items-start
           md:items-center gap-6 md:gap-10 shadow-[0_0_40px_rgba(250,250,250,0.05)]
           transition-all duration-500 hover:border-[#A58CF4]/35 hover:shadow-[0_0_60px_rgba(250,250,250,0.1)]
           hover:-translate-y-1"
    >
      {/* Left Content */}
      <div className="flex-1 space-y-4">
        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-400">
          <span className="border border-[#A58CF4]/25 bg-[#433075]/30 px-3 py-1 rounded-full text-[#FAFAFA]">Projects</span>
          <span className="border border-[#A58CF4]/25 bg-[#433075]/30 px-3 py-1 rounded-full text-[#A58CF4]">{company}</span>
          <span>{date}</span>
        </div>

        {/* Position */}
        <h2 className="text-xl md:text-xl font-semibold text-[#FAFAFA] leading-snug">
          {position}
        </h2>

        {/* Description */}
        <p className="text-zinc-400 leading-relaxed text-sm">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-[#433075]/30 text-zinc-300 border border-[#A58CF4]/25 px-3 py-1 rounded-full"
            >
              {tech.label}
            </span>
          ))}
        </div>

      </div>

      {/* Right: Image (optional) */}
      {image && (
        <div
          className="flex flex-col items-center md:items-end md:w-72 mt-1.5 
               w-full" // ✅ ให้เต็มความกว้างใน mobile
        >
          <Image
            src={image}
            alt={position}
            width={300}
            height={176}
            className="w-full max-w-[300px] h-40 object-cover rounded-xl border border-[#A58CF4]/25
                 transition-transform duration-500 hover:scale-105
                 md:h-44 md:max-w-none self-start md:self-end" // ✅ mobile จำกัดขนาดสูงสุด / md ปล่อยเต็ม
          />

          {/* Button */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[#A58CF4]/35 text-zinc-200
                 hover:text-[#A58CF4] hover:border-[#A58CF4] px-4 py-2 rounded-full
                 text-sm transition-all duration-300 w-fit mt-2
                 self-start md:self-end" // ✅ mobile ชิดซ้าย / md ชิดขวา
          >
            Read more <ArrowRight size={16} />
          </a>
        </div>
      )}

    </motion.div>
  );
}

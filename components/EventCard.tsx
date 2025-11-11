"use client";
import React, { JSX } from "react";
import { motion } from "framer-motion";

interface Tag {
  icon: JSX.Element;
  label: string;
}

interface EventCardProps {
  logo: string;
  date: string;
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
  title,
  location,
  description,
  tags,
  link,
  index,
}) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative flex items-center justify-between w-full max-w-6xl mx-auto mb-16"
    >
      {/* เส้น Timeline กลาง */}
      <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-[3px] bg-white/10 backdrop-blur-[2px]" />

      {/* Card Content */}
      <div
        className={`w-full md:w-[calc(50%-3rem)] ${
          isLeft
            ? "md:ml-0 md:mr-auto md:pr-8"
            : "md:ml-auto md:mr-0 md:pl-8"
        }`}
      >
        <motion.div
          whileHover={{ scale: 1.03, y: -4 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 
                     border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] 
                     hover:bg-white/20 hover:border-white/40 transition-all duration-500 group overflow-hidden"
        >
          {/* Highlight gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />

          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-1 w-12 bg-white/40 rounded-full" />
              <p className="text-sm font-medium text-white/80 uppercase tracking-wider">
                {date}
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-2 text-white drop-shadow-sm group-hover:text-white transition-colors duration-300">
              {title}
            </h3>

            <div className="flex items-center gap-2 mt-2 text-white/70">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-sm">{location}</p>
            </div>

            <p className="text-base text-white/80 mt-4 leading-relaxed">
              {description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-5">
              {tags.map((tag, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-1.5 bg-white/10 text-white 
                             text-xs font-medium px-4 py-2 rounded-full border border-white/20
                             hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                >
                  {tag.icon}
                  {tag.label}
                </motion.span>
              ))}
            </div>

            {/* Link */}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold 
                         text-white/90 hover:text-white transition-all duration-300
                         group/link"
            >
              <span>Read more</span>
              <svg
                className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Logo Circle กลาง */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center z-20"
      >
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-white/30 blur-xl animate-pulse" />

          {/* Logo Container */}
          <div className="relative w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl 
                      border-4 border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.2)] 
                      flex items-center justify-center hover:border-white/50 transition-all duration-300 hover:scale-110">
            <img
              src={logo}
              alt={title}
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EventCard;

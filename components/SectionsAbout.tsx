import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import React from 'react'
import { CoolMode } from "./ui/cool-mode";
import { Pointer } from "./ui/pointer";
import { motion } from "framer-motion";
import { useSectionReplay } from "./useSectionReplay";
import type { SectionName } from "@/types/sections";

interface SectionProps {
  setActiveSection: (section: SectionName) => void
}

export default function SectionsAbout({ setActiveSection }: SectionProps) {
  const { replayKey, handleInViewChange } = useSectionReplay("About")
  const { ref, inView } = useInView({
    rootMargin: "-160px 0px 0px 0px",
    threshold: 0.25,
    onChange: handleInViewChange,
  })

  useEffect(() => {
    if (inView) {
      setActiveSection("About")
    }
  }, [inView, setActiveSection])

  return (
    <section
      ref={ref}
      id="About"
      className="max-w-3xl mx-auto mb-20 md:mb-56 scroll-mt-55 px-5 md:px-0 md:mt-15"
    >
      <motion.div
        key={replayKey}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <h1
          className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#FAFAFA] tracking-tight leading-tight mb-8"
        >
          Hi, I&apos;m Apiwat.
          A student developer <br className="hidden sm:block" />
          <CoolMode><a className="text-[#2D7FF9] cursor-pointer">building modern web experiences.</a></CoolMode>
        </h1>

        <p className="text-zinc-300 text-[15px] sm:text-base font-sans leading-relaxed">
          I&apos;m currently a student in the Bachelor of Industrial Technology Program in
          Information Technology at King Mongkut&apos;s University of Technology North
          Bangkok (KMUTNB).
        </p>

        <p className="text-zinc-300 text-[15px] sm:text-base font-sans leading-relaxed mt-5">
          My academic focus is on software development and database systems.
          I&apos;m always ready to learn and am currently diving deeper into web
          development, exploring how to build responsive interfaces that connect
          to robust, <span className="text-[#2D7FF9]">database-driven backends </span>. ✨

        </p>

        <p className="text-zinc-300 text-[15px] sm:text-base font-sans leading-relaxed mt-5">
          I am passionate about applying my skills to new projects and am always
          looking for opportunities to improve myself. I&apos;m excited to see how
          technology and design can shape better digital interactions.


        </p>
      </motion.div>
      <Pointer>
        <motion.div
          animate={{
            scale: [0.8, 1, 0.8],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#2D7FF9]"
          >
            <motion.path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="currentColor"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>
      </Pointer>
    </section>
  )
}

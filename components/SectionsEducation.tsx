import React, { useEffect } from 'react'
import TimelineSection from './TimelineSection'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { useSectionReplay } from './useSectionReplay'

type SectionName = "About" | "Education" | "Skills" | "Projects";

interface SectionProps {
  setActiveSection: (section: SectionName) => void;
}

export default function SectionsEducation({ setActiveSection }: SectionProps) {
  const { replayKey, handleInViewChange } = useSectionReplay("Education")
  const { ref, inView } = useInView({
    rootMargin: "-160px 0px 0px 0px",
    threshold: 0.25,
    onChange: handleInViewChange,
  })

  useEffect(() => {
    if (inView) {
      setActiveSection("Education")
    }
  }, [inView, setActiveSection])
  return (
    <section
      ref={ref}
      id="Education"
      className="mb-36 w-full max-w-4xl scroll-mt-32 scroll-smooth px-1"
    >
      <motion.div
        key={replayKey}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="mb-8 space-y-3 text-center md:text-left">
          <h2 className="text-2xl font-semibold tracking-tight text-[#FAFAFA] md:text-3xl">
            Education
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-6 text-zinc-300 md:mx-0">
            My academic background in information technology and digital business.
          </p>
        </div>
        <TimelineSection />
      </motion.div>
    </section>
  )
}

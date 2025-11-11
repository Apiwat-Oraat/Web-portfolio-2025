import React, { useEffect } from 'react'
import TimelineSection from './TimelineSection'
import { useInView } from 'react-intersection-observer'
import { Pointer } from './ui/pointer';

type SectionName = "About" | "Education" | "Skills" | "Projects";

interface SectionProps {
  setActiveSection: (section: SectionName) => void;
}

export default function SectionsEducation({setActiveSection}:SectionProps) {
  const {ref, inView} = useInView({
    rootMargin: "-160px 0px 0px 0px",
    threshold: 0.25,
  })

  useEffect(() => {
    if (inView) {
      setActiveSection("Education")
    }
  }, [inView])
  return (
    <section ref={ref} id="Education" className="mb-45 flex flex-col  scroll-mt-45 scroll-smooth">
      <TimelineSection />
      <Pointer className="fill-blue-500" />
    </section>
  )
}

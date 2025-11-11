import SkillContainer from './SkillContainer'
import { useInView } from 'react-intersection-observer'
import React, { useEffect } from 'react'
import { Pointer } from '@/components/ui/pointer';

type SectionName = "About" | "Education" | "Skills" | "Projects";

interface SectionProps {
  setActiveSection: (section: SectionName) => void;
}


export default function SectionsSkills({ setActiveSection }: SectionProps) {
  const { ref, inView } = useInView({
    rootMargin: "-160px 0px 0px 0px",
    threshold: 0.25,
  })

  useEffect(() => {
    if (inView) {
      setActiveSection("Skills")
    }
  },[inView])
  return (
    <section ref={ref} id="Skills" className="mb-45 scroll-mt-40">
      <SkillContainer />
      <Pointer>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" className="fill-purple-500" />
            <circle cx="12" cy="12" r="5" className="fill-white" />
          </svg>
        </Pointer>
    </section>
  )
}

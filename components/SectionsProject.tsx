import React, { useEffect } from 'react'
import ExperienceCard from './ExperienceCard'
import { useInView } from "react-intersection-observer";
import { Pointer } from '@/components/ui/pointer';
import image1 from '@/public/492041016-882057d8-4480-4f00-8c64-8d8277638e2b.png'
import image2 from '@/public/504663181-5253d82d-b0c9-48aa-a7ae-b054f3f1e811.jpg'
import { motion } from 'framer-motion';
import { useSectionReplay } from './useSectionReplay';

type SectionName = "About" | "Education" | "Skills" | "Projects";


interface SectionProps {
  setActiveSection: (section: SectionName) => void;
}

export default function SectionsProject({ setActiveSection }: SectionProps) {
  const { replayKey, handleInViewChange } = useSectionReplay("Projects")
  const { ref, inView } = useInView({
    rootMargin: "-160px 0px 0px 0px",
    threshold: 0.25,
    onChange: handleInViewChange,
  })

  useEffect(() => {
    if (inView) {
      setActiveSection("Projects")
    }
  }, [inView, setActiveSection])

  return (
    <section ref={ref} id="Projects" className=" flex flex-col gap-5 mb-45 scroll-mt-40">
      <motion.div
        key={replayKey}
        className="flex flex-col gap-5"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <ExperienceCard
          date="2024 — personal project"
          position="Java Project Management Application "
          company="Github"
          description="Built a full-stack desktop application using Java (OOP, Swing) for the frontend and MySQL for the backend database.
    Engineered key modules for: Project Management, Employee Management, Material Inventory, and Cost Calculation."
          link="https://github.com/Apiwat-Oraat/MiniProject-JavaOOP"
          technologies={[
            { label: "Java" },
            { label: "NetBeans IDE" },
            { label: "IntelliJ IDEA" },
            { label: "MySQL Workbench" },
          ]}
          image={image1.src} // optional
        />
        <ExperienceCard
          date="2024 — personal project"
          position="C++ Financial Calculator Suite"
          company="Github"
          description="Built a multi-functional console application in C++ featuring 9 distinct financial planning and analysis tools.
    Implemented calculators for: Retirement, Loan Amortization, DCA Investing, Goal-Based Savings, Debt Management, and Tax Estimation."
          link="https://github.com/Apiwat-Oraat/MiniProject_Cpp"
          technologies={[
            { label: "C++" },
            { label: "visual Studio Code" },
          ]}
          image={image2.src} // optional
        />
      </motion.div>

      <Pointer>
        <div className="text-2xl">👆</div>
      </Pointer>
    </section>
  )
}

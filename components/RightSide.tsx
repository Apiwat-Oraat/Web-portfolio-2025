
import { motion } from 'framer-motion'
import React from 'react'
import SectionsAbout from './SectionsAbout'
import SectionsEducation from './SectionsEducation'
import SectionsSkills from './SectionsSkills'
import SectionsProject from './SectionsProject'

type SectionName = "About" | "Education" | "Skills" | "Projects";
interface SectionProps {
  setActiveSection: (section: SectionName) => void;
}

export default function RightSide({setActiveSection}:SectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }} // เริ่มนอกจอด้านขวา
      animate={{ opacity: 5, x: 0 }}   // เคลื่อนเข้ามาที่ตำแหน่งปกติ
      transition={{ duration: 1, ease: "easeOut", delay: 4 }}
      className=" md:w-[60%] w-full min-h-screen flex flex-col items-center justify-center md:pl-5 pb-15 md:ml-[40%] mt-10 md:mt-20 scroll-smooth"
    >

      <SectionsAbout setActiveSection={setActiveSection} />
      <SectionsEducation setActiveSection={setActiveSection} />
      <SectionsSkills setActiveSection={setActiveSection} />
      <SectionsProject setActiveSection={setActiveSection} />

    </motion.div>
  )
}

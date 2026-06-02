

import { motion } from 'framer-motion';
import React from 'react'
import { HyperText } from './ui/hyper-text';
import NavMenu from './NavMenu';
import { SparklesText } from './ui/sparkles-text';
import type { SectionName } from '@/types/sections';

interface NavMenuProps {
  active: SectionName;
  onSelect: (section: SectionName) => void;
}
export default function LeftSide({ active, onSelect }: NavMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }} // เริ่มนอกจอด้านซ้าย
      animate={{ opacity: 5, x: 0 }} // เคลื่อนเข้ามา
      transition={{ duration: 1, ease: "easeOut", delay: 4 }}
      className="md:w-[40%] w-full flex flex-col gap-3 justify-center md:fixed md:top-0 md:h-screen md:pl-5 mb-10 md:mb-0"
    >
      <div className="flex flex-col gap-2 mt-20 md:mt-0">
        <div className="text-3xl md:text-[42px] font-bold font-sans tracking-tight text-center md:text-left leading-tight text-zinc-900 dark:text-white transition-colors duration-300">
          <SparklesText className="[&_strong]:bg-gradient-to-b [&_strong]:from-zinc-900 [&_strong]:via-zinc-700 [&_strong]:to-zinc-900 dark:[&_strong]:from-[#FFFFFF] dark:[&_strong]:via-[#D7D8DF] dark:[&_strong]:to-[#9B9CA6] [&_strong]:bg-clip-text [&_strong]:text-transparent dark:[&_strong]:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] dark:drop-shadow-[0_0_18px_rgba(250,250,250,0.18)]">
            Aphiwat On-at
          </SparklesText>
        </div>
        <div className="text-base md:text-lg font-mono tracking-tight text-zinc-600 dark:text-zinc-300 sm:text-xl text-center md:text-left transition-colors duration-300">
          <HyperText>{'<Software Developer /> · trainee'}</HyperText>
        </div>
      </div>
      <div>

      </div>
      {/* Navigation */}
      <NavMenu active={active} onSelect={onSelect} />

    </motion.div>
  )
}

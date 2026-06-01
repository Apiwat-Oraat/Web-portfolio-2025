import SkillContainer from "./SkillContainer";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { Pointer } from "@/components/ui/pointer";

type SectionName = "About" | "Education" | "Skills" | "Projects";

interface SectionProps {
  setActiveSection: (section: SectionName) => void;
}


export default function SectionsSkills({ setActiveSection }: SectionProps) {
  const { ref, inView } = useInView({
    rootMargin: "-160px 0px 0px 0px",
    threshold: 0.25,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection("Skills");
    }
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      id="Skills"
      className="mb-1 w-full max-w-3xl scroll-mt-25 px-1 md:mb-1"
    >
      <div className="mb-4 space-y-2 text-center md:text-left">
        <h2 className="text-3xl font-semibold tracking-tight text-[#FAFAFA] md:text-4xl">
          Skills
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-400 md:mx-0 md:text-base">
          Tools and technologies I use to build full-stack software.
        </p>
      </div>

      <SkillContainer />
      <Pointer>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" className="fill-[#433075]" />
          <circle cx="12" cy="12" r="5" className="fill-[#A58CF4]" />
        </svg>
      </Pointer>
    </section>
  );
}

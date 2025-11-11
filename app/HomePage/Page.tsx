"use client";
import React, { useRef, useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { SectionName } from "@/components/NavMenu";
import TypingIntro from "@/components/TypingIntro";
import RightSide from "@/components/RightSide";
import LeftSide from "@/components/LeftSide";

export default function Page() {
  const [slideOut, setSlideOut] = useState<boolean>(false);


  const [activeSection, setActiveSection] = useState<SectionName>("About");


  const sections: Record<SectionName, React.RefObject<HTMLDivElement | null>> = {
    About: useRef<HTMLDivElement | null>(null),
    Education: useRef<HTMLDivElement | null>(null),
    Skills: useRef<HTMLDivElement | null>(null),
    Projects: useRef<HTMLDivElement | null>(null),
  };


  const handleSelect = (section: SectionName) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleIntroComplete = (): void => {
    setSlideOut(true);
  };

  useEffect(() => {
    if (slideOut) {
      const timeout = setTimeout(() => {
        document.body.style.overflow = "auto";
      }, 2500); // ตรงกับ duration-1000

      return () => clearTimeout(timeout);
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [slideOut]);


  return (
    <div className="relative font-geist antialiased h-screen">
      <div
        className={`absolute inset-0 transition-transform duration-1000 ease-in-out z-50 ${slideOut ? '-translate-y-full' : 'translate-y-0'
          }`}
      >
        <TypingIntro onComplete={handleIntroComplete} />
      </div>


      {/* Background 3D - Fixed & No Interaction */}
      <div className="bg-black fixed inset-0 w-screen h-screen pointer-events-none z-0">
        <div className="absolute inset-0 w-full h-full [&>canvas]:absolute [&>canvas]:inset-0 [&>canvas]:w-full [&>canvas]:h-full [&>canvas]:object-cover">
          <Spline scene="https://prod.spline.design/C1kX9SM3iwdfommf/scene.splinecode" />
        </div>
      </div>



      {/* Gradient Overlay - Fixed */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/90 backdrop-blur-[3px] pointer-events-none z-10" />

      {/* Layout Container */}
      <div className="relative flex flex-col md:flex-row z-20 p-5 md:p-15 min-h-screen">
        {/* Left Side - Fixed (40%) */}
        <LeftSide active={activeSection} onSelect={handleSelect} />

        {/* Right Side - Scrollable (60%) */}
        <RightSide setActiveSection={setActiveSection} />

      </div>
    </div>

  );
}
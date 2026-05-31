"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { SectionName } from "@/components/NavMenu";
import TypingIntro from "@/components/TypingIntro";
import RightSide from "@/components/RightSide";
import LeftSide from "@/components/LeftSide";
// import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import Background3D from "@/components/Background3D";

export default function Page() {
  const [slideOut, setSlideOut] = useState<boolean>(false);
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const previousBodyOverflow = useRef<string | null>(null);


  const [activeSection, setActiveSection] = useState<SectionName>("About");

  const handleSelect = useCallback((section: SectionName) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  const handleIntroComplete = useCallback((): void => {
    setSlideOut(true);
  }, []);

  useEffect(() => {
    if (previousBodyOverflow.current === null) {
      previousBodyOverflow.current = document.body.style.overflow;
    }

    if (!slideOut) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousBodyOverflow.current ?? "";
      };
    }

    const timeout = setTimeout(() => {
      document.body.style.overflow = previousBodyOverflow.current ?? "";
      setShowIntro(false);
    }, 1100);

    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = previousBodyOverflow.current ?? "";
    };
  }, [slideOut]);


  return (
    <div className="relative font-geist antialiased h-screen">
      {showIntro && (
        <div
          className={`fixed inset-0 transition-transform duration-1000 ease-in-out z-50 ${slideOut ? '-translate-y-full' : 'translate-y-0'
            }`}
        >
          <TypingIntro onComplete={handleIntroComplete} />
        </div>
      )}

      {/* Background 3D - Fixed & No Interaction */}
      <Background3D />

      {/* Gradient Overlay - Fixed */}
      <div className="fixed inset-0 bg-[#0D0D0D]/55 pointer-events-none z-10" />

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

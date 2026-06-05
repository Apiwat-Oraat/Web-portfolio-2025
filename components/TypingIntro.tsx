"use client";

import React, { useEffect } from 'react'

interface TypingIntroProps {
  onComplete?: () => void;
  text?: string;
  typingSpeed?: number;
  pauseDuration?: number;
}

// Typing Intro Component
function TypingIntro({ 
  onComplete, 
  text = 'Building Something Amazing...',
  typingSpeed = 100,
  pauseDuration = 1000
}: TypingIntroProps) {
  
  const textLength = text.length;
  // CSS animation duration in seconds
  const typingDuration = (textLength * typingSpeed) / 1000;

  useEffect(() => {
    if (onComplete) {
      // Wait for typing animation to finish + pauseDuration
      const timer = setTimeout(() => {
        onComplete();
      }, (typingDuration * 1000) + pauseDuration);
      
      return () => clearTimeout(timer);
    }
  }, [onComplete, typingDuration, pauseDuration]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#f7f7fa] via-[#e2e8f0] to-[#f7f7fa] dark:from-[#000000] dark:via-[#000822] dark:to-[#000000] overflow-hidden transition-colors duration-500">
      <div className="flex items-center justify-center mb-5 drop-shadow-[0_0_8px_rgba(45,127,249,0.15)]">
        <div 
          className="text-[16px] md:text-[20px] font-mono font-medium tracking-widest text-zinc-600 dark:text-zinc-300 transition-colors duration-500 whitespace-nowrap"
          style={{
            clipPath: 'inset(0 100% 0 0)',
            animation: `typing-mask ${typingDuration}s steps(${textLength}, end) forwards`
          }}
        >
          {text}
        </div>
        <span className="text-[16px] md:text-[20px] font-mono animate-blink-cursor ml-0.5 text-[#2D7FF9] opacity-80">|</span>
      </div>

      <div className="w-[180px] md:w-[240px] h-[2px] bg-zinc-300/50 dark:bg-zinc-800/50 rounded-full relative overflow-hidden transition-colors duration-500">
        <div className="w-[30%] h-full bg-[#2D7FF9] shadow-[0_0_10px_#2D7FF9] animate-loading-bar rounded-full"></div>
      </div>
    </div>
  );
}

export default TypingIntro

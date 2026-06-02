"use client";

import React, { useState, useEffect } from 'react'

interface TypingIntroProps {
  onComplete?: () => void;
  text?: string;
  typingSpeed?: number;
  pauseDuration?: number;
}

// Typing Intro Component
function TypingIntro({ 
  onComplete, 
  text = 'Welcome to Our Website',
  typingSpeed = 100,
  pauseDuration = 1000
}: TypingIntroProps) {
  const [displayText, setDisplayText] = useState<string>('');
  const [isComplete, setIsComplete] = useState<boolean>(false);
  
  useEffect(() => {
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsComplete(true);
      }
    }, typingSpeed);
    
    return () => clearInterval(typingInterval);
  }, [text, typingSpeed]);
  
  useEffect(() => {
    if (isComplete && onComplete) {
      const timer = setTimeout(() => {
        onComplete();
      }, pauseDuration);
      
      return () => clearTimeout(timer);
    }
  }, [isComplete, onComplete, pauseDuration]);
  
  return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#f7f7fa] via-[#e2e8f0] to-[#f7f7fa] dark:from-[#000000] dark:via-[#000822] dark:to-[#000000] overflow-hidden transition-colors duration-500">
  <div className="text-center">
    <h1 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-zinc-900 dark:text-[#FAFAFA] mb-4 drop-shadow-[0_0_30px_rgba(45,127,249,0.3)] dark:drop-shadow-[0_0_30px_rgba(165,140,244,0.55)] transition-colors duration-500">
      {displayText}
      <span className="animate-pulse text-[#2D7FF9]">|</span>
    </h1>
  </div>
</div>

  );
}

export default TypingIntro

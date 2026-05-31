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
<div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0D0D0D] via-[#21183A] to-[#0D0D0D] overflow-hidden">
  <div className="text-center">
    <h1 className="text-2xl font-mono text-[#FAFAFA] mb-4 drop-shadow-[0_0_30px_rgba(165,140,244,0.55)]">
      {displayText}
      <span className="animate-pulse text-[#A58CF4]">|</span>
    </h1>
  </div>
</div>

  );
}

export default TypingIntro

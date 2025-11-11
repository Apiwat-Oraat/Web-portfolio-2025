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
<div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
  <div className="text-center">
    <h1 className="text-2xl font-mono text-yellow-400 mb-4 drop-shadow-[0_0_30px_rgba(250,204,21,0.5)]">
      {displayText}
      <span className="animate-pulse text-yellow-300">|</span>
    </h1>
  </div>
</div>

  );
}

export default TypingIntro
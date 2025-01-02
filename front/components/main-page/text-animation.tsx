"use client";
import React, { useState, useEffect } from 'react';

const AnimatedHeroText = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Space', 'Home', 'The Metaverse'];

  useEffect(() => {
    const currentWord = words[loopNum % words.length];
    
    const handleTyping = () => {
      setText(current => {
        if (isDeleting) {
          if (current.length === 0) {
            setIsDeleting(false);
            setLoopNum(l => l + 1);
            setTypingSpeed(150);
            return '';
          }
          setTypingSpeed(100);
          return current.slice(0, -1);
        }
        
        if (current === currentWord) {
          setTypingSpeed(2000);
          setIsDeleting(true);
          return current;
        }
        
        return currentWord.slice(0, current.length + 1);
      });
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="lg:w-1/2">
      <h1 className="text-6xl md:text-7xl font-bold">
        Welcome to{' '}
        <span className="text-blue-500">
          {text}
          <span className="animate-pulse">|</span>
        </span>
      </h1>
    </div>
  );
};

export default AnimatedHeroText;
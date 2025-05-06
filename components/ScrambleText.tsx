'use client';

import React, { useState, useRef } from 'react';

const characters = '!<>-_\\/[]{}—=+*^?#________';

interface ScrambleTextProps {
  text: string;
  duration?: number;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  duration = 500,
}) => {
  const [display, setDisplay] = useState<string>(text);
  const animationRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;

      let output = '';
      for (let i = 0; i < text.length; i++) {
        if (elapsed > (i * duration) / text.length) {
          output += text[i];
        } else {
          output += characters[Math.floor(Math.random() * characters.length)];
        }
      }

      setDisplay(output);

      if (elapsed < duration) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setDisplay(text);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  return (
    <span onMouseEnter={handleMouseEnter} className="inline-block">
      {display}
    </span>
  );
};

export default ScrambleText;

'use client';

import React, { useState, useEffect } from 'react';
import {
  Code,
  Zap,
  BrainCircuit,
  LayoutPanelLeft,
  ServerCog,
} from 'lucide-react';

const ROTATING_CONTENT = [
  {
    icon: <Code size={24} className="text-blue-500" />,
    text: 'Full-Stack Development',
  },
  {
    icon: <Zap size={24} className="text-blue-500" />,
    text: 'Workflow & API Automation',
  },
  {
    icon: <BrainCircuit size={24} className="text-blue-500" />,
    text: 'AI-Powered Integrations',
  },
  {
    icon: <LayoutPanelLeft size={24} className="text-blue-500" />,
    text: 'Responsive UI/UX Design',
  },
  {
    icon: <ServerCog size={24} className="text-blue-500" />,
    text: 'Backend Development',
  },
];

const RotatingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ROTATING_CONTENT.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex h-12 md:h-14 w-full max-w-md items-center justify-center overflow-hidden rounded-xl border border-blue-400/40 bg-blue-50 px-5 md:px-6 py-3 shadow-inner">
      {ROTATING_CONTENT.map((item, index) => (
        <div
          key={index}
          className={`absolute flex w-full items-center gap-3 md:gap-4 transition-all duration-700 ease-in-out ${
            index === currentIndex
              ? 'translate-y-0 opacity-100'
              : 'translate-y-full opacity-0'
          }`}
        >
          {/* Icon */}
          <div className="ml-4 flex-shrink-0 transition-transform duration-300 hover:scale-110">
            {item.icon}
          </div>

          {/* Gradient Text */}
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 bg-clip-text text-left text-sm md:text-base font-semibold text-transparent">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RotatingText;

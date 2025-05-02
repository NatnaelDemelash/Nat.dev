'use client';

import { motion } from 'framer-motion';
import { Minus } from 'lucide-react';
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiVuedotjs,
  SiVite,
  SiFirebase,
  SiAtlassian,
  SiWebflow,
} from 'react-icons/si';

const stacks = [
  { name: 'React', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TailwindCSS', icon: SiTailwindcss },
  { name: 'Redux', icon: SiRedux },
  { name: 'VueJS', icon: SiVuedotjs },
  { name: 'Vite', icon: SiVite },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'Jira', icon: SiAtlassian },
  { name: 'Webflow', icon: SiWebflow },
];

export default function TechStack() {
  return (
    <section className="h-screen bg-white flex flex-col">
      <div className="flex items-center gap-1">
        <h2 className="text-2xl pl-8 mb-4 text-blue-400 font-semibold">
          Tech Stack
        </h2>
        <Minus />
      </div>
      {/* Left: Tech Stack */}
      <div className="w-[45%] border-r border-gray-200 p-8 grid grid-cols-3 gap-x-4 gap-y-6 overflow-y-auto">
        {stacks.map((stack, idx) => {
          const Icon = stack.icon;
          return (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className=""
            >
              <div className="flex items-center gap-2 border p-1.5 rounded-xl border-slate-400">
                <div className="w-7 h-7 flex items-center justify-center">
                  <Icon className="text-black" size={24} />
                </div>
                <p className="text-black text-sm font-medium">{stack.name}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Right: (Empty for now, you will add Projects Section later) */}
      <div className="flex-1 overflow-y-auto p-8">
        {/* Your projects will go here */}
      </div>
    </section>
  );
}

'use client';
import { motion } from 'framer-motion';
import { Minus } from 'lucide-react';
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiVuedotjs,
  SiVite,
  SiFirebase,
  SiAtlassian,
  SiFigma,
} from 'react-icons/si';
import { RiSupabaseFill } from 'react-icons/ri';
import { FaGitAlt } from 'react-icons/fa';

const stacks = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#68A063' }, // <-- Updated name and color
  { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
  { name: 'Vite', icon: SiVite, color: '#646CFF' },
  { name: 'Supabase', icon: RiSupabaseFill, color: '#3ECF8E' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Jira', icon: SiAtlassian, color: '#0052CC' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
];

export default function TechStack() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center px-4 py-16"
      id="stacks"
    >
      {/* Title */}
      <div className="flex items-center justify-center gap-2 mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center">
          Tech Stack
        </h2>
        <Minus className="text-gray-400 dark:text-gray-500" />
      </div>

      {/* Grid of Tech Stacks */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8 justify-center">
        {stacks.map((stack, idx) => {
          const Icon = stack.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{
                scale: 1.1,
                boxShadow: `0 0 15px ${stack.color}40`,
                transition: { type: 'spring', stiffness: 300 },
              }}
              className="group flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 text-center"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                <Icon
                  className="text-gray-900 dark:text-white"
                  size={40}
                  style={{ color: stack.color }}
                />
              </div>
              <p className="font-semibold text-gray-800 dark:text-gray-100 mt-2">
                {stack.name}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

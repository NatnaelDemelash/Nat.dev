'use client';

import Image from 'next/image';
import { Minus } from 'lucide-react';
import { motion } from 'framer-motion';

const stacks = [
  {
    name: 'TypeScript',
    icon: '/stacks/ts.svg',
    description: 'Typed superset of JavaScript',
    bg: 'bg-blue-100 dark:bg-blue-900/40',
  },
  {
    name: 'React',
    icon: '/stacks/reactjs.svg',
    description: 'UI library for building interfaces',
    bg: 'bg-cyan-100 dark:bg-cyan-900/40',
  },
  {
    name: 'JavaScript',
    icon: '/stacks/javascript.svg',
    description: 'Programming language of the web',
    bg: 'bg-yellow-100 dark:bg-yellow-900/40',
  },
  {
    name: 'Next.js',
    icon: '/stacks/nextjs.svg',
    description: 'Full-stack React framework',
    bg: 'bg-gray-200 dark:bg-gray-700',
  },
  {
    name: 'Tailwind',
    icon: '/stacks/tailwind.svg',
    description: 'Utility-first CSS framework',
    bg: 'bg-sky-100 dark:bg-sky-900/40',
  },
  {
    name: 'Vue',
    icon: '/stacks/vuejs.svg',
    description: 'Progressive JavaScript framework',
    bg: 'bg-green-100 dark:bg-green-900/40',
  },
  {
    name: 'Git',
    icon: '/stacks/git.svg',
    description: 'Version control system',
    bg: 'bg-orange-100 dark:bg-orange-900/40',
  },
  {
    name: 'Supabase',
    icon: '/stacks/supabase.svg',
    description: 'Open-source Firebase alternative',
    bg: 'bg-green-100 dark:bg-green-900/40',
  },
  {
    name: 'n8n',
    icon: '/stacks/n8n.svg',
    description: 'Workflow automation tool',
    bg: 'bg-purple-100 dark:bg-purple-900/40',
  },
];

export default function TechStack() {
  return (
    <section className="px-6 py-12 md:p-12 lg:p-20" id="stacks">
      {/* Title */}
      <div className="flex items-center gap-2 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Tech Stack
        </h2>
        <Minus className="text-gray-400 dark:text-gray-500" />
      </div>

      {/* Grid of Tech Stacks */}
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {stacks.map((stack, idx) => (
            <motion.div
              key={stack.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true, amount: 0.4 }}
              className="group flex items-center rounded-lg border border-transparent bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-blue-400 hover:shadow-md dark:bg-neutral-900"
            >
              {/* Icon */}
              <div
                className={`flex aspect-square h-12 w-12 items-center justify-center rounded-lg ${stack.bg} transition-transform duration-300 group-hover:rotate-6`}
              >
                <Image
                  src={stack.icon}
                  alt={stack.name}
                  width={28}
                  height={28}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Text */}
              <div className="ml-3 flex flex-col">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                  {stack.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {stack.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

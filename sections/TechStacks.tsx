'use client';
import Image from 'next/image';
import profile from '@/public/profile.png';
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
} from 'react-icons/si';
import { cn } from '@/lib/utils';

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
];

export default function TechStack() {
  return (
    <section className="min-h-screen flex flex-col px-4 py-8 mb-5" id="stacks">
      {/* Title */}
      <div className="flex items-center gap-2 mb-8">
        <h2 className="text-2xl text-blue-400 ">Works With</h2>
        <Minus className="text-blue-400" />
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row">
        {/* Left: Tech Stack */}
        <div className="md:w-[45%] w-full border-b md:border-b-0 md:border-r border-gray-200 p-4 md:p-8 grid grid-cols-3 gap-x-4 gap-y-6">
          {stacks.map((stack, idx) => {
            const Icon = stack.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div
                  className={cn(
                    'flex flex-col items-center justify-center sm:justify-start gap-2 border p-2 rounded-xl border-slate-400'
                  )}
                >
                  {/* Icon */}
                  <div className="w-7 h-7 flex items-center justify-center">
                    <Icon
                      className="text-black"
                      size={24}
                      fill="currentColor"
                      stroke="currentColor"
                    />
                  </div>

                  {/* Stack Name */}
                  <p className="hidden sm:block text-gray-800 text-sm font-semibold">
                    {stack.name}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right: About Section */}
        <div className="md:w-[55%] w-full p-4 md:p-8 flex flex-col items-center md:items-end justify-center mt-8 md:mt-0">
          {/* Avatar */}
          <div className="w-20 h-20 mb-6 rounded-full bg-blue-100 border border-gray-300 flex items-center justify-center overflow-hidden hover:border-2 hover:border-blue-300">
            <Image
              alt="profile pic"
              src={profile}
              className="-scale-x-100 object-cover"
            />
          </div>

          {/* Description */}
          <p className="text-gray-700 text-lg leading-relaxed max-w-md text-center md:text-right">
            I'm a front-end developer who focuses on turning ideas into clear,
            functional user interfaces. I work with modern frameworks to build
            responsive and user-friendly websites. Open to collaboration on
            practical and well-designed projects.
          </p>
        </div>
      </div>

      <h2 className="text-xl ml-6 my-4 uppercase font-medium">
        Github Activity
      </h2>
      <img
        src="https://ghchart.rshah.org/NatnaelDemelash"
        alt="GitHub Activity Chart"
      />
    </section>
  );
}

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

      <div className="flex">
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

        <div className="w-[55%] p-8 flex flex-col items-end justify-center">
          {/* Description */}
          <p className="text-gray-700 text-lg leading-relaxed max-w-md">
            I'm a front-end developer who focuses on turning ideas into clear,
            functional user interfaces. I work with modern frameworks to build
            responsive and user-friendly websites. Open to collaboration on
            practical and well-designed projects.
          </p>
          {/* Avatar */}
          <div className="w-20 h-20 md:mr-10 rounded-full  bg-blue-100 border border-gray-300 flex items-center justify-center overflow-hidden hover:border-2 hover:border-blue-300">
            {/* <span className="text-2xl font-bold text-blue-500">N</span> */}
            <Image alt="profile pic" src={profile} className="-scale-x-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

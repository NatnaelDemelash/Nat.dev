'use client';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { Minus, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'Omni Food',
    description:
      'An AI-based tech company focused on consumer well-being through a healthy diet.',
    tech: ['React', 'TailwindCSS', 'Framer Motion'],
    image: '/project1.png',
    github: 'https://github.com/example/portfolio',
    live: 'https://omni-food-eta.vercel.app/',
  },
  {
    title: 'Pizzeria',
    description:
      'A responsive website for a local pizza shop, with a focus on user-friendly navigation and visual appeal.',
    tech: ['React', 'Firebase', 'Redux'],
    image: '/project2.png',
    github: 'https://github.com/example/portfolio',
    live: 'https://pizzeria-alpha.vercel.app/',
  },
  {
    title: 'Aurora_Aisel Shop',
    description:
      'A fully functional e-commerce website for a local clothing brand.',
    tech: ['React', 'Vite', 'Stripe'],
    image: '/project3.png',
    github: 'https://github.com/example/portfolio',
    live: 'https://aurora-aisel.vercel.app/',
  },
  {
    title: 'Puluk Travel',
    description:
      'A fully functional travel website for a local tourism company.',
    tech: ['React', 'TailwindCSS', 'TypeScript'],
    image: '/project4.png',
    github: 'https://github.com/example/portfolio',
    live: 'https://puluk-travel.vercel.app/',
  },
];

export default function Projects() {
  const containerRef = useRef(null);

  return (
    <section className="min-h-screen px-6 py-12 md:p-12 lg:p-20" id="projects">
      {/* Section Title */}
      <div className="flex items-center gap-2 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Projects
        </h2>
        <Minus className="text-gray-400 dark:text-gray-500" />
      </div>

      {/* Projects Stack */}
      <div className="flex flex-col items-center" ref={containerRef}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.9,
              rotate: index % 2 === 0 ? -3 : 3,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotate: index % 2 === 0 ? -1 : 1,
            }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            viewport={{ root: containerRef, once: true }}
            className={`group relative -mt-24 w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden cursor-pointer first:mt-0`}
          >
            {/* Image Container with Hover Effects */}
            <div className="relative w-full h-80 md:h-96">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-500 group-hover:from-black/90 group-hover:to-black/30" />
            </div>

            {/* Project Details */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <h3 className="text-3xl font-bold mb-2 transition-all duration-500 transform group-hover:-translate-y-2">
                {project.title}
              </h3>
              <p className="text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                {project.tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-white/20"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors"
                >
                  <FaGithub size={20} />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors"
                >
                  <ArrowUpRight size={20} />
                  <span className="text-sm font-medium">Live Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

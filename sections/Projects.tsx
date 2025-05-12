import { FaGithub } from 'react-icons/fa';
import React from 'react';
import { Minus } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Omni Food',
      description:
        'An AI based tech company which majorly focuses on consumer well-being through a healthy diet.',
      tech: ['React', 'TailwindCSS', 'Framer Motion'],
      image: '/project1.png',
      github: 'https://github.com/example/portfolio',
    },
    {
      title: 'Pizzeria',
      description:
        'Designed and developed a responsive website for a local pizza shop, with a focus on user-friendly navigation and visual appeal.',
      tech: ['React', 'Firebase', 'Redux'],
      image: '/project2.png',
      github: 'https://github.com/example/portfolio',
    },
    {
      title: 'Aurora_Aisel Shop',
      description:
        'Designed and developed a fully functional e-commerce website for a local clothing brand, with a focus on user-friendly navigation.',
      tech: ['React', 'Vite', 'Stripe'],
      image: '/project3.png',
      github: 'https://github.com/example/portfolio',
    },
    {
      title: 'Puluk Travel',
      description:
        'Developed a fully functional travel website for a local tourism company.',
      tech: ['React', 'TailwindCSS', 'TypeScript'],
      image: '/project4.png',
      github: 'https://github.com/example/portfolio',
    },
  ];

  return (
    <section className="min-h-screen p-6" id="projects">
      <div className="flex items-center gap-2 mb-8">
        <h2 className="text-2xl text-blue-400 uppercase">Projects</h2>
        <Minus className="text-blue-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col w-90 h-[470px]"
          >
            {/* Image */}
            <div className="h-60 bg-gray-200">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Content */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Title */}
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stacks */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-gray-100 text-black rounded-md"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              {/* GitHub Icon */}
              <div className="mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-gray-700 hover:text-black"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

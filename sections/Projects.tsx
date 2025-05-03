import { FaGithub } from 'react-icons/fa';
import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio to showcase my projects and skills.',
      tech: ['Next.js', 'TailwindCSS', 'Framer Motion'],
      image: 'https://via.placeholder.com/400x250',
      github: 'https://github.com/example/portfolio',
    },
    {
      title: 'Task Manager App',
      description:
        'Manage daily tasks with authentication and real-time updates.',
      tech: ['React', 'Firebase', 'Redux'],
      image: 'https://via.placeholder.com/400x250',
      github: 'https://github.com/example/task-manager',
    },
    {
      title: 'E-commerce Platform',
      description: 'A modern e-commerce platform with Stripe integration.',
      tech: ['Vue.js', 'Vite', 'Stripe'],
      image: 'https://via.placeholder.com/400x250',
      github: 'https://github.com/example/e-commerce',
    },
    {
      title: 'Blog CMS',
      description:
        'A full CMS where users can create, edit, and publish blogs.',
      tech: ['Next.js', 'GraphQL', 'TailwindCSS'],
      image: 'https://via.placeholder.com/400x250',
      github: 'https://github.com/example/blog-cms',
    },
  ];

  return (
    <section className="min-h-screen p-6">
      <h1 className="text-center text-3xl font-semibold mb-12">Recent Works</h1>

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
                    className="px-2 py-1 text-xs bg-gray-100 rounded-md"
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

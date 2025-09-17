'use client';
import React from 'react';
import { Minus } from 'lucide-react';
import { motion } from 'framer-motion';

// Data structure and constant as provided in the previous prompt.
interface ExperienceType {
  year: string;
  role: string;
  company: string;
  description: string[];
  technologies?: string[];
}

const EXPERIENCES: ExperienceType[] = [
  {
    year: 'JAN 2024 - Present',
    role: 'Software Engineer',
    company: 'GoodayOn',
    description: [
      'Designing and building internal tools that improve daily operations and team productivity.',
      'Creating smart AI-driven automations and workflows using n8n to reduce repetitive tasks.',
      'Developing custom Slack integrations for real-time collaboration and alerts.',
      'Engineering seamless integrations across different platforms to streamline business processes.',
      'Contributing to modern web applications with React, Vue, and Tailwind, ensuring responsive and maintainable code.',
    ],
    technologies: ['React', 'Vue', 'Tailwind', 'Firebase', 'n8n', 'Slack API'],
  },
  {
    year: 'FEB 2021 - DEC 2023',
    role: 'IT Support',
    company: 'GoodayOn',
    description: [
      'Led the operations team while driving process improvements across multiple projects.',
      'Implemented automations in Jira to optimize workflows and reduce manual effort.',
      'Utilized Trello and Jira to manage projects, track progress, and improve team efficiency.',
      'Collaborated with cross-functional teams to ensure smooth project execution and delivery.',
    ],
    technologies: ['Jira', 'Trello', 'Jira Automation'],
  },
  {
    role: 'Junior Web Developer',
    company: 'AAU(Internship)',
    year: 'MAY 2019 - JUL 2019',
    description: [
      'Cooperated with designers to create clean interfaces and simple, intuitive interactions and experiences.',
      'Developed project concepts and maintained optimal workflow.',
      'Worked with senior developers to manage large, complex design projects for corporate clients.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
];

const experiencesLeft = EXPERIENCES.filter((_, index) => index % 2 === 0);
const experiencesRight = EXPERIENCES.filter((_, index) => index % 2 !== 0);

export default function Experience() {
  return (
    <section className="px-6 py-12 md:p-12 lg:p-20" id="careers">
      {/* Section Title */}
      <div className="flex items-center gap-2 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Experience
        </h2>
        <Minus className="text-gray-400 dark:text-gray-500" />
      </div>

      {/* Experience Grid with Path */}
      <div className="relative flex flex-col md:flex-row md:justify-center md:gap-12">
        {/* Vertical Path Line (only on desktop) */}
        <div className="absolute top-0 bottom-0 left-1/2 -ml-px w-px bg-gray-200 dark:bg-gray-800 hidden md:block" />

        {/* Left Column */}
        <div className="flex flex-col w-full md:w-1/2">
          {experiencesLeft.map((exp, index) => {
            const originalIndex = EXPERIENCES.indexOf(exp);
            return (
              <motion.div
                key={originalIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: originalIndex * 0.15 }}
                viewport={{ once: true, amount: 0.4 }}
                className={`
                  group relative flex flex-col gap-4 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300
                  mb-8 md:mb-16
                `}
              >
                {/* Numbered Path Element (only on desktop) */}
                <div className="absolute top-1/2 left-full -translate-y-1/2  items-center justify-center w-10 h-10 -ml-5 md:block hidden">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white text-sm font-semibold z-10">
                    {EXPERIENCES.length - originalIndex}
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    {exp.role}
                  </span>
                  <span className="font-semibold text-blue-500 dark:text-blue-400">
                    @{exp.company}
                  </span>
                </div>

                <span className="text-xs uppercase text-gray-400 dark:text-gray-500 font-medium">
                  {exp.year}
                </span>

                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                {exp.technologies && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Right Column */}
        <div className="flex flex-col w-full md:w-1/2 md:mt-24">
          {experiencesRight.map((exp, index) => {
            const originalIndex = EXPERIENCES.indexOf(exp);
            return (
              <motion.div
                key={originalIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: originalIndex * 0.15 }}
                viewport={{ once: true, amount: 0.4 }}
                className={`
                  group relative flex flex-col gap-4 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300
                  mb-8 md:mb-16
                `}
              >
                {/* Numbered Path Element (only on desktop) */}
                <div className="absolute top-1/2 right-full -translate-y-1/2  items-center justify-center w-10 h-10 -mr-5 md:block hidden">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white text-sm font-semibold z-10">
                    {EXPERIENCES.length - originalIndex}
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    {exp.role}
                  </span>
                  <span className="font-semibold text-blue-500 dark:text-blue-400">
                    @{exp.company}
                  </span>
                </div>

                <span className="text-xs uppercase text-gray-400 dark:text-gray-500 font-medium">
                  {exp.year}
                </span>

                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                {exp.technologies && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

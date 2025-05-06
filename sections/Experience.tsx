import React from 'react';
import { ArrowUpRight, Minus } from 'lucide-react'; // optional icon library (or use your own)

export default function Experience() {
  const experiences = [
    {
      date: '2024 – Present',
      company: 'GoodayOn',
      companyLink: 'https://gooday.io',
      title: 'Software Engineer',
      description: [
        'Contributed to the development of web applications using JavaScript, Vue.js, and React.js.',
        'Worked closely with product managers to prioritize features and enhancements.',
      ],
      techStack: ['Vue', 'Tailwind', 'React', 'Firebase'],
    },
    {
      date: '2021 – 2023',
      company: 'GoodayOn',
      companyLink: 'https://gooday.io',
      title: 'Operation Team Lead',
      description: [
        'Successfully utilized CRM software tools, including Trello and Jira, to streamline and enhance project management processes.',
      ],
      techStack: ['Vue', 'Firebase'],
    },
  ];

  return (
    <section className="flex flex-col gap-10 mt-10 mb-12">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl text-blue-400 uppercase">Careers</h2>
        <Minus className="text-blue-400" />
      </div>
      <div className="relative ml-4">
        {/* Vertical timeline line */}
        <div className="absolute left-[5.5px] top-0 h-full w-px bg-gray-200" />

        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-6 mb-10 last:mb-0">
            {/* Timeline Dot */}
            <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-blue-500 z-10" />

            {/* Content */}
            <div className="flex flex-col gap-2">
              {/* Date */}
              <span className="text-xs uppercase text-gray-400">
                {exp.date}
              </span>

              {/* Company */}
              <div className="flex items-center gap-1">
                <a
                  href={exp.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-400 hover:underline"
                >
                  {exp.company}
                </a>
                <ArrowUpRight size={16} className="text-blue-500" />
              </div>

              {/* Title */}
              <span className="text-sm font-mono text-gray-400 tracking-wide uppercase">
                {exp.title}
              </span>

              {/* Description */}
              <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs bg-gray-200 text-gray-800 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

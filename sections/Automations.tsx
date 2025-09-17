'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Minus } from 'lucide-react';
import {
  SiNodedotjs,
  SiAtlassian,
  SiTrello,
  SiGoogle,
  SiSlack,
} from 'react-icons/si';
import { RiMailFill } from 'react-icons/ri';

// Data for the automations section (now with just 3 items)
interface Automation {
  name: string;
  description: string;
  techStack: string[];
}

const techIcons = {
  n8n: { icon: SiNodedotjs, color: '#68A063' },
  'Jira API': { icon: SiAtlassian, color: '#0052CC' },
  'Slack API': { icon: SiSlack, color: '#4A154B' },
  'Trello API': { icon: SiTrello, color: '#0079BF' },
  'Email Integration': { icon: RiMailFill, color: '#D44638' },
  'Google Drive API': { icon: SiGoogle, color: '#4285F4' },
};

const AUTOMATIONS: Automation[] = [
  {
    name: 'Automated Project Updates to Slack',
    description:
      'A workflow that listens for new project tickets in Jira and automatically posts a summary to a specific Slack channel, ensuring the team stays informed without manual updates.',
    techStack: ['Jira API', 'n8n', 'Slack API'],
  },
  {
    name: 'Customer Support Ticket Creation',
    description:
      'A system that processes incoming emails from customers and uses keyphrase detection to automatically create and assign support tickets in Trello, streamlining the support process.',
    techStack: ['Email Integration', 'n8n', 'Trello API'],
  },
  {
    name: 'Content Publishing Workflow',
    description:
      'An automation that monitors a shared Google Drive folder for new articles. Once a new file is detected, it triggers a chain of events to format the content, notify the social media manager, and add it to the publishing queue.',
    techStack: ['Google Drive API', 'n8n', 'Slack API'],
  },
];

export default function Automations() {
  return (
    <section className="px-6 py-12 md:p-12 lg:p-20" id="automations">
      <div className="flex items-center gap-2 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Automations
        </h2>
        <Minus className="text-gray-400 dark:text-gray-500" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AUTOMATIONS.map((automation, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col gap-4 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 backdrop-blur-sm bg-white/20 dark:bg-gray-800/20"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {automation.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {automation.description}
            </p>

            {/* The visual workflow flow */}
            <div className="flex items-center gap-2 mt-auto">
              {automation.techStack.map((tech, i) => {
                const techInfo = techIcons[tech as keyof typeof techIcons];
                if (!techInfo) return null;
                const Icon = techInfo.icon;
                return (
                  <React.Fragment key={i}>
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-center justify-center p-2 rounded-full"
                      style={{ backgroundColor: `${techInfo.color}15` }}
                    >
                      <Icon size={20} style={{ color: techInfo.color }} />
                    </motion.div>
                    {i < automation.techStack.length - 1 && (
                      <span className="text-gray-400 dark:text-gray-600">
                        →
                      </span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

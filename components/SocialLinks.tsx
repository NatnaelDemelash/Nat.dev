'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/NatnaelDemelash',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/natnaeldemelash/',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:natnael.dev101@gmail.com',
    icon: Mail,
  },
];

export const SocialLinks = () => {
  return (
    <div className="flex w-fit items-center gap-4 p-4 rounded-lg border border-[#4040407c] bg-white shadow-sm">
      {socialLinks.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="text-gray-600 hover:text-black transition-colors"
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

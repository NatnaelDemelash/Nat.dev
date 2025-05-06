import Link from 'next/link';
import React from 'react';

const footerLinks = [
  { name: 'GitHub', href: 'https://github.com/NatnaelDemelash' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/natnaeldemelash/' },
  { name: 'Gmail', href: 'mailto:natnael.dev101@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between mt-10 border-t border-slate-200 py-4 gap-y-2">
      <nav className="flex items-center gap-x-4">
        {footerLinks.map(({ name, href }) => (
          <Link
            href={href}
            key={name}
            className="text-gray-500 font-medium text-sm uppercase hover:text-blue-500  transition-all"
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {name}
          </Link>
        ))}
      </nav>
      <p className="text-gray-400 font-medium text-sm text-center md:text-right">
        &copy; 2025 Natnael Demelash. All rights reserved.
      </p>
    </footer>
  );
}

'use client';

import { useState } from 'react';
import {
  Equal,
  X,
  Code,
  TerminalSquare,
  Briefcase,
  GitPullRequest,
  Mail,
  Home,
} from 'lucide-react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const sections = [
    { text: 'Stacks', id: 'stacks', icon: Code },
    { text: 'Projects', id: 'projects', icon: TerminalSquare },
    { text: 'Experience', id: 'careers', icon: Briefcase },
    { text: 'Automations', id: 'automations', icon: GitPullRequest },
    { text: 'Contact', id: 'contact', icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 lg:px-12 py-4 backdrop-blur-md bg-white/80 dark:bg-gray-900/80">
      {/* Logo as Home Link */}
      <ScrollLink
        to="home"
        smooth={true}
        duration={800}
        className="flex items-center gap-2 group cursor-pointer"
        onClick={() => setIsOpen(false)}
      >
        <Home
          size={22}
          className="text-blue-600 group-hover:rotate-6 transition-transform"
        />
        <span className="flex flex-col leading-tight">
          <span className="font-bold text-gray-900 dark:text-white">
            Natnael
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Frontend Dev
          </span>
        </span>
      </ScrollLink>

      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="relative z-50 p-3 rounded-lg bg-white/70 dark:bg-gray-800/70 text-gray-800 dark:text-white backdrop-blur-sm shadow-sm transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Equal size={24} />}
      </button>

      {/* Desktop Menu */}
      <nav
        className={`absolute transition-all duration-300 ease-in-out z-40
          ${
            isOpen
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95 pointer-events-none'
          }
        `}
        style={{
          top: '100%',
          right: '1.5rem',
        }}
      >
        <div className="hidden md:flex flex-row items-center gap-6 bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-lg">
          {sections.map(({ text, id, icon: Icon }) => (
            <ScrollLink
              key={id}
              to={id}
              smooth={true}
              duration={800}
              spy={true}
              onClick={() => setIsOpen(false)}
              className="group flex flex-col items-center gap-1 cursor-pointer"
            >
              <Icon
                size={22}
                className="text-gray-800 dark:text-white group-hover:text-blue-500 transition-colors"
              />
              <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-500 transition-colors">
                {text}
              </span>
            </ScrollLink>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="flex flex-col md:hidden bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-lg mt-2">
          {sections.map(({ text, id, icon: Icon }) => (
            <ScrollLink
              key={id}
              to={id}
              smooth={true}
              duration={800}
              spy={true}
              onClick={() => setIsOpen(false)}
              className="font-medium text-gray-800 dark:text-white text-lg hover:text-blue-500 transition-colors cursor-pointer mb-2 last:mb-0 flex items-center gap-3"
            >
              <Icon size={20} />
              {text}
            </ScrollLink>
          ))}
        </div>
      </nav>

      {/* Backdrop overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-transparent md:hidden"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Navbar;

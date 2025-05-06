'use client';

import { useState } from 'react';
import { Equal, X, AudioWaveform } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="relative z-50 flex items-center justify-between p-4">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center p-2 transition-all duration-300 hover:rotate-180 hover:border-2 hover:border-[#333] hover:rounded-full"
      >
        <AudioWaveform size={24} className="" />
      </Link>

      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="p-3 rounded-lg bg-black text-white z-50 cursor-pointer"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Equal size={24} />}
      </button>

      {/* Slide-in Menu */}
      <nav
        className={`absolute top-full md:-mt-[70px] md:mr-14 border border-[#8282823c] transition-all duration-300 ease-in-out z-40
          ${
            isOpen
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95 pointer-events-none'
          }
          flex bg-white backdrop-blur-2xl rounded-lg  p-4
          flex-col items-start gap-4
          sm:flex-row sm:items-center sm:gap-10 md:gap-12
        `}
        style={{
          left: 'auto',
          right: 40, // aligns the menu left of the hamburger on desktop
        }}
      >
        {['Home', 'Stacks', 'Projects', 'Careers'].map((text) => (
          <Link
            key={text}
            href={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
            className="font-medium text-lg md:text-lg hover:scale-110 transition-all duration-200"
          >
            {text}
          </Link>
        ))}
      </nav>

      {/* Backdrop overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-opacity-30 lg:hidden"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Navbar;

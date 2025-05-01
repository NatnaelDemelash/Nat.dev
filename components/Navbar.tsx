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
      <Link href="/" className="flex items-center">
        <AudioWaveform
          size={40}
          className="hover:text-blue-500 transition-all duration-300 hover:rotate-180"
        />
      </Link>

      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="p-3 rounded-lg bg-black text-white z-50"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Equal size={24} />}
      </button>

      {/* Slide-in Menu */}
      <nav
        className={`absolute top-full md:-mt-[70px] md:mr-14 border-2 border-blue-100 transition-all duration-300 ease-in-out z-40
          ${
            isOpen
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95 pointer-events-none'
          }
          flex bg-white rounded-lg  p-4
          flex-col items-start gap-4
          sm:flex-row sm:items-center sm:gap-10 md:gap-14
        `}
        style={{
          left: 'auto',
          right: 40, // aligns the menu left of the hamburger on desktop
        }}
      >
        {['Home', 'Stacks', 'Works', 'Contact'].map((text) => (
          <Link
            key={text}
            href={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
            className="font-semibold text-lg md:text-xl hover:text-blue-400 hover:scale-110 transition duration-200"
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

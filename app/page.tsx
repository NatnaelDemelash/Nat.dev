import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Experience from '@/sections/Experience';
import Hero from '@/sections/Hero';
import Projects from '@/sections/Projects';
import TechStack from '@/sections/TechStacks';
import React from 'react';

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto py-6 px-4">
      <Navbar />
      <main className="px-6">
        <Hero />
        <TechStack />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Automations from '@/sections/Automations';
import Contact from '@/sections/Contact';
import Experience from '@/sections/Experience';
import Hero from '@/sections/Hero';
import Projects from '@/sections/Projects';
import TechStack from '@/sections/TechStacks';
import React from 'react';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto py-6 px-8">
      <Navbar />
      <main className="px-6">
        <Hero />
        <TechStack />
        <Projects />
        <Automations />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

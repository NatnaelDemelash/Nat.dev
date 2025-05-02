import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import TechStack from '@/sections/TechStacks';
import React from 'react';

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto py-6 px-4">
      <Navbar />
      <main className="px-6">
        <Hero />
        <TechStack />
      </main>
    </div>
  );
}

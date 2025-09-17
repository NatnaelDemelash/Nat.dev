'use client';

import { CheckCheck } from 'lucide-react';
import Image from 'next/image';
import profile from '@/public/profile.png';
import { SocialLinks } from '@/components/SocialLinks';
import RotatingText from '@/components/RotatingText';

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-12 py-4"
      id="hero"
    >
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-24">
        {/* Left Column */}
        <div className="flex-1 max-w-2xl text-center lg:text-left space-y-4">
          <h1 className="text-6xl font-bold leading-[1.1] md:leading-[1.15] lg:leading-[1.2]">
            <span className="text-blue-500">Coding visuals</span> until they
            tell a story
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
            A frontend developer dedicated to creating high-quality, responsive
            interfaces that are not only functional but also beautiful and
            intuitive.
          </p>

          {/* Rotating Features */}
          <div className="flex justify-center lg:justify-start mt-4">
            <div className="flex-1 min-w-[220px] max-w-sm">
              <RotatingText />
            </div>
          </div>
        </div>

        {/* Right Column: Avatar + Chat Bubbles */}
        <div className="flex-1 flex flex-col items-center lg:items-start gap-3 w-full max-w-md">
          {/* Avatar */}
          <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-blue-200">
            <Image
              alt="profile pic"
              src={profile}
              width={144}
              height={144}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Chat Bubbles */}
          <div className="flex flex-col space-y-3 w-full">
            <div className="self-start bg-[#FBFBFA] border border-[#4040407c] p-3 rounded-3xl rounded-bl-none shadow-sm">
              <p className="text-gray-700 text-sm md:text-base">
                Frontend developer with 2 years of experience building
                high-quality interfaces using React, Next.js, and TypeScript.
              </p>
            </div>

            <div className="self-start flex items-center gap-2 bg-[#e6ffed] border border-green-300 p-2 rounded-3xl rounded-bl-none shadow-sm text-green-600 text-sm font-medium">
              <CheckCheck className="w-4 h-4" />
              <span>Available for new projects</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-4 flex gap-4">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}

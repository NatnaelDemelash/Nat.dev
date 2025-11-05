"use client";

import { CheckCheck } from "lucide-react";
import Image from "next/image";
import profile from "@/public/profile.png";
import { SocialLinks } from "@/components/SocialLinks";
import RotatingText from "@/components/RotatingText";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-5rem)] flex items-center px-4 md:px-8 lg:px-16 mt-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center w-full max-w-7xl mx-auto">
        {/* Left Column: Headline & Rotating Text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          {/* Top Status */}
          <div className="flex items-center gap-2 bg-[#e6ffed] border border-green-300 px-3 py-1.5 rounded-full shadow-sm text-green-600 text-sm font-medium w-fit">
            <CheckCheck className="w-4 h-4" />
            <span>Available for new projects</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-extrabold leading-tight tracking-tight relative">
            <span className="text-blue-500">Coding visuals</span> until they
            tell a story
            {/* Accent line */}
            <span className="hidden md:block w-16 h-1 bg-blue-300 mt-2 rounded-full"></span>
          </h1>

          {/* Tagline */}
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl">
            Turning ideas into interactive, responsive experiences that delight
            users.
          </p>

          {/* Rotating Features */}
          <div className="w-full flex justify-center lg:justify-start">
            <div className="w-full max-w-sm">
              <RotatingText />
            </div>
          </div>
        </div>

        {/* Right Column: Avatar & Chat Bubbles */}
        <div className="flex flex-1 flex-col items-center lg:items-start space-y-4 w-full max-w-md mx-auto">
          {/* Avatar + Intro bubble */}
          <div className="flex items-end gap-3">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-200">
              <Image
                alt="profile pic"
                src={profile}
                width={110}
                height={110}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-blue-100 dark:bg-gray-900 dark:text-gray-200 px-4 py-2 rounded-3xl rounded-bl-none text-gray-800 text-base md:text-lg font-semibold shadow-sm">
              Hi,{" "}
              <span className="text-blue-600 dark:text-gray-200">Natnael</span>{" "}
              here.
            </div>
          </div>

          {/* Chat-style info bubble */}
          <div className="bg-[#FBFBFA] dark:bg-gray-900 border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-3xl rounded-bl-none shadow-sm max-w-2xl w-full">
            <p className="text-gray-700 dark:text-gray-200 text-base md:text-md leading-relaxed">
              Frontend developer with 2 years of experience building
              high-quality interfaces using React, Next.js, and TypeScript.
            </p>
          </div>

          {/* Social Links */}
          <div className="pt-2">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight, Check } from 'lucide-react';
import Image from 'next/image';

import profile from '@/public/profile.png';

export default function Hero() {
  return (
    <section className="h-screen mt-24 flex flex-col space-y-6">
      <div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold max-w-2xl">
          Coding visuals until they tell a story
        </h1>
      </div>

      {/* link */}
      <a
        href="mailto:natnael.dev101@gmail.com"
        className="w-[160px] flex items-center gap-x-1 border-2 border-blue-100 rounded-xl px-6 py-3 hover:bg-blue-50 transition-colors"
      >
        <ArrowUpRight size={20} />
        <span className="text-xl font-semibold">Email Me</span>
      </a>

      {/* Profile Card with Avatar */}
      <div className="max-w-4xl p-6 border-x border-slate-200 mt-8">
        <div className="flex flex-col sm:flex-row items-start gap-4">
          {/* Avatar Circle */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 rounded-full  bg-blue-100 border border-blue-100 flex items-center justify-center overflow-hidden">
              {/* <span className="text-2xl font-bold text-blue-500">N</span> */}
              <Image alt="profile pic" src={profile} />
            </div>
          </div>

          <div className="flex-1 space-y-2">
            <h1 className="text-2xl font-bold text-gray-800 border-2 bg-gray-50 border-blue-200 w-fit p-2 rounded-3xl rounded-bl-none">
              Hi, Natnael here.
            </h1>
            <p className="text-gray-600 text-xl bg-gray-50 border-2 border-blue-200 w-fit p-2 rounded-3xl rounded-bl-none">
              Frontend developer with 2 years of experience building responsive,
              high-quality interfaces using React, Next.js, and TypeScript.
            </p>

            {/* Timestamp with double checkmark */}
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-1">4m ago</span>
              <div className="flex items-center">
                <Check className="w-3 h-3 text-green-500" />
                <Check className="w-3 h-3 text-green-500 -ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

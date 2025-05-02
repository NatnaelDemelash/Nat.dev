import { ArrowUpRight, Check, CheckCheck } from 'lucide-react';
import Image from 'next/image';

import profile from '@/public/profile.png';

export default function Hero() {
  return (
    <section className="h-screen mt-20 flex flex-col space-y-6">
      <div className="relative">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold max-w-2xl relative z-10">
          Coding visuals until they tell a story
        </h1>
        <div className="hidden md:block absolute -left-4 top-2 w-[44%] h-[50%]  border-2 border-blue-500 rounded-full opacity-70 transform  z-0" />
      </div>
      {/* link */}
      <a
        href="mailto:natnael.dev101@gmail.com"
        className="w-[160px] flex items-center gap-x-1 border border-[#4040407c]  rounded-xl px-6 py-3 hover:bg-blue-50 transition-colors"
      >
        <ArrowUpRight size={20} />
        <span className="text-xl font-semibold cursor-pointer">Email Me</span>
      </a>

      {/* Profile Card with Avatar */}
      <div className="max-w-4xl p-6 border-x border-slate-200 mt-8">
        <div className="flex flex-col sm:flex-row items-start gap-4">
          {/* Avatar Circle */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 md:mr-10 rounded-full  bg-blue-100 border border-gray-300 flex items-center justify-center overflow-hidden hover:border-2 hover:border-blue-300">
              {/* <span className="text-2xl font-bold text-blue-500">N</span> */}
              <Image alt="profile pic" src={profile} />
            </div>
          </div>

          <div className="flex-1 space-y-2">
            <h1 className="text-2xl font-bold text-gray-800  bg-[#FBFBFA] border border-[#4040407c] w-fit p-2 rounded-3xl rounded-bl-none">
              Hi, <span className="text-blue-400">Natnael</span> here.
            </h1>
            <p className="text-gray-600 text-xl bg-[#FBFBFA] border border-[#4040407c] w-fit p-3 rounded-3xl rounded-bl-none">
              Frontend developer with 2 years of experience building responsive,
              high-quality interfaces using React, Next.js, and TypeScript.
            </p>

            {/* Timestamp with double checkmark */}
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-1">4m ago</span>
              <div className="flex items-center">
                <CheckCheck className="w-4 h-4 text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

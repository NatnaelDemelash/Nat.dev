import { ArrowUpRight } from 'lucide-react';

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

      {/* Profile Card */}
      <div className="max-w-xl p-6 bg-white rounded-lg shadow-md mt-8">
        <div className="flex items-start space-x-4">
          <div className="flex-1 ">
            <h1 className="text-2xl font-bold text-gray-800 border-2 border-blue-200 w-fit p-2 rounded-3xl rounded-bl-none">
              Hi, Natnael here.
            </h1>
            <p className="mt-2 text-gray-600 text-xl">
              Frontend developer with 2 years of experience building responsive,
              high-quality interfaces using React, Next.js, and TypeScript.
            </p>
          </div>
          <div className="text-sm text-gray-500 flex items-center">
            <span>4m ago</span>
            <svg
              className="w-4 h-4 ml-1 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

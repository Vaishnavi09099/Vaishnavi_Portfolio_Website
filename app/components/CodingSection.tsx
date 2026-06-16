// src/components/CodingSection.tsx
"use client";

import { codingProfiles } from "../data/portfolio";

export default function CodingSection() {
  return (
    <section id="coding" className="relative py-24 px-4 bg-[#080c10]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-cyan-400 text-sm font-mono tracking-widest mb-2">
          // CODING
        </p>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-2">
         Sharpening the blade.
        </h2>
        <p className="text-gray-400 text-lg mb-16 mt-5">
         Sharpening problem-solving skills through Data Structures, Algorithms, and coding challenges.
        </p>

        {/* 4 Platform Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {codingProfiles.map((profile, i) => (
            <a
              key={i}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-[#0d1117] border border-white/10 hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Hover glow bg */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Top row — icon + arrow */}
              <div className="relative flex items-start justify-between mb-12">
                {/* Icon */}
                <div className="w-11 h-11 rounded-full bg-cyan-900/40 border border-cyan-400/20 flex items-center justify-center text-cyan-400 font-mono text-sm flex-shrink-0">
                  &gt;_
                </div>

                {/* Arrow */}
                <span className="text-gray-500 group-hover:text-cyan-400 transition-colors text-lg">
                  ↗
                </span>
              </div>

              {/* Bottom — platform + handle */}
              <div className="relative">
                <h3 className="text-white font-bold text-lg mb-1">
                  {profile.platform}
                </h3>
                <p className="text-cyan-400 font-mono text-sm">
                  {profile.handle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
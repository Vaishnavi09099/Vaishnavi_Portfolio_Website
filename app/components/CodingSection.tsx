// src/components/CodingSection.tsx
"use client";

import { codingStats, codingProfiles } from "../data/portfolio";

export default function CodingSection() {
  return (
    <section id="coding" className="relative py-24 px-4 bg-[#080c10]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-cyan-400 text-sm font-mono tracking-widest mb-2">
          // DSA & COMPETITIVE
        </p>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-2">
          Sharpening the blade.
        </h2>
        <p className="text-gray-400 text-lg mb-16">
          Daily reps on data structures, algorithms, and competitive problem
          solving.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {codingStats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[#0d1117] border border-white/10 p-6 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-gray-500 font-mono text-sm mb-3">&gt;_</p>
              <p className="text-4xl font-extrabold text-cyan-400 mb-2">
                {stat.value}
              </p>
              <p className="text-white font-semibold text-sm mb-1">
                {stat.label}
              </p>
              <p className="text-gray-500 text-xs">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Profile Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {codingProfiles.map((profile, i) => (
            <a
              key={i}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between px-6 py-5 rounded-2xl bg-[#0d1117] border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Left */}
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/20 flex items-center justify-center text-cyan-400 font-bold text-sm flex-shrink-0">
                  {"</>"}
                </div>

                {/* Text */}
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-white font-bold">{profile.platform}</h3>
                    <span className="text-gray-500 text-sm">
                      {profile.handle}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{profile.stats}</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:border-cyan-400/30 group-hover:text-cyan-400 transition-colors flex-shrink-0">
                ↗
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
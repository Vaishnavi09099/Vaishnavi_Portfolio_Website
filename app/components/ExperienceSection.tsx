// src/components/ExperienceSection.tsx
"use client";

import { experiences } from "../data/portfolio";

const icons: Record<string, string> = {
  rocket: "🚀",
  lightning: "⚡",
  briefcase: "💼",
  star: "⭐",
  code: "</>",
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 px-4 bg-[#080c10]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-cyan-400 text-sm font-mono tracking-widest mb-2">
          // EXPERIENCE
        </p>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-2">
          Where I&apos;ve built.
        </h2>
        <p className="text-gray-400 text-lg mb-16">
          A snapshot of the teams I&apos;ve helped scale.
        </p>

        {/* Experience List */}
        <div className="flex flex-col gap-4">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="group flex items-center justify-between px-6 py-5 rounded-2xl bg-[#0d1117] border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Left */}
              <div className="flex items-center gap-4">
                {/* Icon Circle */}
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/20 flex items-center justify-center text-lg flex-shrink-0">
                  {icons[exp.icon] ?? "💼"}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">
                    {exp.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{exp.company}</p>
                </div>
              </div>

              {/* Right — Duration */}
              <p className="text-gray-500 text-sm font-mono flex-shrink-0">
                {exp.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
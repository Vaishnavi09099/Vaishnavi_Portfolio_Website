// src/components/SkillsSection.tsx
"use client";

import { skillCategories } from "../data/portfolio";

const icons: Record<string, string> = {
  code: "</>",
  database: "🗄",
  cloud: "☁",
  cpu: "⚙",
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 px-4 bg-[#080c10]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-cyan-400 text-sm font-mono tracking-widest mb-2">
          // SKILLS
        </p>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-2">
          A versatile toolkit.
        </h2>
        <p className="text-gray-400 text-lg mb-16">
          I work across the full stack — from pixels to packets.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className="group rounded-2xl bg-[#0d1117] border border-white/10 p-6 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-br ${cat.color} flex items-center justify-center text-white font-bold text-lg mb-5`}
              >
                {icons[cat.icon]}
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-xl mb-4">{cat.title}</h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
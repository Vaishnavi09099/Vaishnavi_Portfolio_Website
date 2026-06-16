// src/components/AchievementsSection.tsx
"use client";

import { achievements } from "../data/portfolio";

const icons: Record<string, string> = {
  trophy: "🏆",
  star: "⭐",
  medal: "🎖",
  graduation: "🎓",
};

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-24 px-4 bg-[#080c10]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-cyan-400 text-sm font-mono tracking-widest mb-2">
          // ACHIEVEMENTS
        </p>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-16">
          Recognitions & Achievements.
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[#0d1117] border border-white/10 p-6 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="text-cyan-400 text-2xl mb-4">
                {icons[item.icon] ?? "✦"}
              </div>

              {/* Value */}
              <p className="text-4xl font-extrabold text-cyan-400 mb-1">
                {item.value}
              </p>

              {/* Label */}
              <p className="text-white font-semibold mb-1">{item.label}</p>

              {/* Sub */}
              <p className="text-gray-400 text-sm">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
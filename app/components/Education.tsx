// src/components/EducationSection.tsx
"use client";

import { education } from "../data/portfolio";

const icons: Record<string, string> = {
  book: "📖",
  school: "🏫",
};

export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 px-4 bg-[#080c10]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-cyan-400 text-sm font-mono tracking-widest mb-2">
          // EDUCATION
        </p>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-2">
          Academic journey.
        </h2>
        <p className="text-gray-400 text-lg mb-16">
          Where I&apos;ve studied and what I&apos;ve earned along the way.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className={`relative rounded-2xl bg-gradient-to-br ${edu.gradient} border border-white/10 p-6 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Top Row */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-10 h-10 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-lg">
                  {icons[edu.icon] ?? "🎓"}
                </div>
                <span className="text-gray-500 text-sm font-mono">
                  {edu.duration}
                </span>
              </div>

              {/* Degree */}
              <p className="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
                {edu.degree}
              </p>

              {/* Institution */}
              <h3 className="text-white font-bold text-xl mb-1">
                {edu.institution}
              </h3>

              {/* Stream */}
              <p className="text-gray-400 text-sm mb-6">{edu.stream}</p>

              {/* Score Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20">
                <span className="text-cyan-400 text-xs">🏅</span>
                <span className="text-cyan-400 text-xs font-semibold">
                  {edu.score}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
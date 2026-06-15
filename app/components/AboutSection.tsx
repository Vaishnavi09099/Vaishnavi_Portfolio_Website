// src/components/AboutSection.tsx
"use client";

import Image from "next/image";
import { personalInfo, stats, timeline } from "../data/portfolio";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-4 bg-[#080c10]">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto">
        <p className="text-cyan-400 text-sm font-mono tracking-widest mb-2">
          // ABOUT
        </p>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-2">
          A short story.
        </h2>
        <p className="text-gray-400 text-lg mb-16">
          Engineer, builder, and tinkerer. Here&apos;s how I got here.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left — Photo Card */}
          <div className="relative rounded-2xl overflow-hidden bg-[#0d1117] border border-white/10 min-h-[380px]">
            <Image
              src={personalInfo.photo}
              alt={personalInfo.name}
              fill
              className="object-cover object-top opacity-90"
            />
            {/* Online badge */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur text-xs text-white border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Online
            </div>
            {/* Bottom info */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-cyan-400 font-mono text-xs">$</span>
                <span className="text-cyan-400 font-mono text-xs">
                  ready_to_build
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-bold">{personalInfo.name}</p>
                  <p className="text-gray-400 text-xs uppercase tracking-widest">
                    {personalInfo.location}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white text-sm">
                  ✦
                </div>
              </div>
            </div>
          </div>

          {/* Middle — Stats */}
          <div className="flex flex-col gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex-1 rounded-2xl bg-[#0d1117] border border-white/10 p-6 flex flex-col justify-center hover:border-cyan-400/30 transition-colors"
              >
                <p className="text-4xl font-extrabold text-cyan-400 mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Right — Timeline */}
          <div className="relative pl-4">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/50 via-purple-400/30 to-transparent" />
            <div className="flex flex-col gap-10">
              {timeline.map((item, i) => (
                <div key={i} className="relative pl-6">
                  {/* Dot */}
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  <p className="text-cyan-400 text-sm font-mono mb-1">
                    {item.year}
                  </p>
                  <h3 className="text-white font-bold text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
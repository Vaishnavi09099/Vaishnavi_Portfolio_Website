// src/components/ExperienceSection.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "../data/portfolio";
import { Rocket, Zap, Briefcase, Star, Code2 } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  rocket:    <Rocket size={18} />,
  lightning: <Zap size={18} />,
  briefcase: <Briefcase size={18} />,
  star:      <Star size={18} />,
  code:      <Code2 size={18} />,
};

export default function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="relative py-24 px-4 bg-[#080c10]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-cyan-400 text-sm font-mono tracking-widest mb-2">
          // EXPERIENCE
        </p>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-2">
          Positions of Responsibility
        </h2>
        <p className="text-gray-400 text-lg mb-16 mt-5">
          Leadership roles and contributions during my academic journey.
        </p>

        {/* Experience List */}
        <div className="flex flex-col gap-4">
          {experiences.map((exp, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                layout
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className={`group cursor-pointer rounded-2xl bg-[#0d1117] border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-cyan-400/40"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                {/* Top Row — always visible */}
                <div className="flex items-center justify-between px-6 py-5">
                  {/* Left */}
                  <div className="flex items-center gap-4">
                    {/* Icon Circle */}
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-cyan-400/20 border border-cyan-400/40 text-cyan-400"
                          : "bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/20 text-cyan-400"
                      }`}
                    >
                      {iconMap[exp.icon] ?? <Briefcase size={18} />}
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

                {/* Expanded — bullets */}
                <AnimatePresence initial={false}>
                  {isOpen && exp.bullets && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="border-t border-white/10 px-6 py-4 flex flex-col gap-2">
                        {exp.bullets.map((b: string, j: number) => (
                          <div key={j} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                            <p className="text-gray-400 text-sm">{b}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
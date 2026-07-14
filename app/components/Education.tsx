// src/components/EducationSection.tsx
"use client";

import { motion } from "framer-motion";
import { education } from "../data/portfolio";
import { BookOpen, School, Medal } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 px-4 bg-[#080c10]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-cyan-400 text-sm font-mono tracking-widest mb-2"
        >
          // EDUCATION
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-6xl font-bold text-white mb-2"
        >
          Academic journey.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg mb-16 mt-5"
        >
          Where I&apos;ve studied and what I&apos;ve earned along the way.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ perspective: 1200 }}>
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotateX: -60, y: 40 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.18,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              style={{ transformStyle: "preserve-3d", transformOrigin: "top" }}
              className={`relative rounded-2xl bg-gradient-to-br ${edu.gradient} border border-white/10 p-6 hover:border-cyan-400/30 transition-colors duration-300`}
            >
              {/* Top Row */}
              <div className="flex items-start justify-between mb-6">
                <motion.div
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.18 + 0.25,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="w-10 h-10 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400"
                >
                  {edu.type === "college" ? <BookOpen size={18} /> : <School size={18} />}
                </motion.div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.18 + 0.3 }}
                  className="text-gray-500 text-sm font-mono"
                >
                  {edu.duration}
                </motion.span>
              </div>

              {/* Degree */}
              <motion.p
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.18 + 0.35 }}
                className="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2"
              >
                {edu.degree}
              </motion.p>

              {/* Institution */}
              <motion.h3
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.18 + 0.4 }}
                className="text-white font-bold text-xl mb-1"
              >
                {edu.institution}
              </motion.h3>

              {/* Stream */}
              <motion.p
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.18 + 0.45 }}
                className="text-gray-400 text-sm mb-6"
              >
                {edu.stream}
              </motion.p>

              {/* Score Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.18 + 0.55,
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
                whileHover={{ scale: 1.08 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20"
              >
                <span className="text-cyan-400 text-xs"><Medal size={14} /></span>
                <span className="text-cyan-400 text-xs font-semibold">
                  {edu.score}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
// src/components/AchievementsSection.tsx
"use client";

import { motion } from "framer-motion";
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
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-cyan-400 text-sm font-mono tracking-widest mb-2"
        >
          // ACHIEVEMENTS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-6xl font-bold text-white mb-16"
        >
          Recognitions & Achievements.
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -4 : 4, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="rounded-2xl bg-[#0d1117] border border-white/10 p-6 hover:border-cyan-400/30 transition-colors duration-300"
            >
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -30 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.12 + 0.2,
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
                whileHover={{
                  rotate: [0, -15, 15, -10, 10, 0],
                  scale: 1.2,
                  transition: { duration: 0.6 },
                }}
                className="text-cyan-400 text-2xl mb-4 inline-block"
              >
                {icons[item.icon] ?? "✦"}
              </motion.div>

              {/* Value */}
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.12 + 0.35,
                  type: "spring",
                  stiffness: 200,
                  damping: 14,
                }}
                className="text-4xl font-extrabold text-cyan-400 mb-1"
              >
                {item.value}
              </motion.p>

              {/* Label */}
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: i * 0.12 + 0.5 }}
                className="text-white font-semibold mb-1"
              >
                {item.label}
              </motion.p>

              {/* Sub */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: i * 0.12 + 0.6 }}
                className="text-gray-400 text-sm"
              >
                {item.sub}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
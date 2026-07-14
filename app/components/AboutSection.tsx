// src/components/AboutSection.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo, stats, timeline } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-4 bg-[#080c10] overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-cyan-400 text-sm font-mono tracking-widest mb-2"
        >
          // ABOUT
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl font-bold mt-5 text-white mb-2"
        >
          A little about me.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg mb-16 mt-5"
        >
          Passionate full-stack developer, problem solver, and tech enthusiast building impactful web applications with modern technologies.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left — Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02 }}
            className="relative rounded-2xl overflow-hidden bg-[#0d1117] border border-white/10 h-[200px]"
          >
            {/* Subtle colored blobs behind the image (small) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute -top-8 -left-8 w-36 h-36 bg-teal-500/20 rounded-full blur-3xl pointer-events-none"
            />
            <div className="absolute bottom-6 -left-6 w-28 h-28 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 right-4 w-32 h-32 bg-purple-600/12 rounded-full blur-3xl pointer-events-none" />

            <Image
              src={personalInfo.photo}
              alt={personalInfo.name}
              fill
              className="object-cover object-top opacity-90 relative z-10"
            />
            {/* Online badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur text-xs text-white border border-white/10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Online
            </motion.div>
            {/* Bottom info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent"
            >
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
                <motion.div
                  whileHover={{ rotate: 180, scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white text-sm"
                >
                  ✦
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Timeline */}
          <div className="relative pl-4">
            {/* Line draws itself top to bottom on scroll */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ originY: 0 }}
              className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/50 via-purple-400/30 to-transparent"
            />
            <div className="flex flex-col gap-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative pl-6"
                >
                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.15 + 0.2, type: "spring", stiffness: 300 }}
                    className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-cyan-400"
                  />
                  <p className="text-cyan-400 text-sm font-mono mb-1">
                    {item.year}
                  </p>
                  <h3 className="text-white font-bold text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

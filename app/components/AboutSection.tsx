// src/components/AboutSection.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo, timeline } from "../data/portfolio";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-4 bg-[#080c10] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header — single animated wrapper instead of 3 separate motion elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-cyan-400 text-sm font-mono tracking-widest mb-2">
            // ABOUT
          </p>
          <h2 className="text-5xl font-bold mt-5 text-white mb-2">
            A little about me.
          </h2>
          <p className="text-gray-400 text-lg mb-16 mt-5">
            Passionate full-stack developer, problem solver, and tech enthusiast building impactful web applications with modern technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left — Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden bg-[#0d1117] border border-white/10 h-[400px]"
          >
            {/* Static blobs — no animation, cheap one-time paint */}
            <div className="absolute -top-8 -left-8 w-36 h-36 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-6 -left-6 w-28 h-28 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 right-4 w-32 h-32 bg-purple-600/12 rounded-full blur-3xl pointer-events-none" />

            <Image
              src={personalInfo.photo}
              alt={personalInfo.name}
              fill
              className="object-cover object-top opacity-90 relative z-10"
            />

            

            {/* Bottom info — static, no entrance animation needed since parent already animates */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/80 to-transparent z-20">
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
              
              </div>
            </div>
          </motion.div>

          {/* Right — Timeline */}
          <div className="relative pl-4">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ originY: 0 }}
              className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/50 via-purple-400/30 to-transparent"
            />
            <div className="flex flex-col gap-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative pl-6"
                >
                  {/* Dot — plain CSS, no separate spring animation */}
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
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

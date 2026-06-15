// src/components/HeroSection.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../data/portfolio";
import { ArrowUpRight } from "lucide-react";

const words = ["Building the web", "Solving problems", "Shipping products", "Writing clean code"];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useState(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  });

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[#080c10]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal-900/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-900/20 rounded-full blur-3xl" />
      </div>

      {/* Square grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff10 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff10 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Available for new opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-8xl font-extrabold text-white mb-4 tracking-tight"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Animated words */}
        <div className="flex items-center gap-3 font-mono text-2xl md:text-4xl font-bold mb-8">
          <span className="text-cyan-400">&gt;</span>
          <div className="relative overflow-hidden h-10 md:h-14 flex items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-cyan-400 whitespace-nowrap"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </div>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            className="inline-block w-[10px] h-[28px] md:h-[36px] bg-cyan-400"
          />
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-xl text-gray-400 text-lg mb-12 leading-relaxed"
        >
          {personalInfo.subtitle}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => handleScroll("#work")}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-all hover:scale-105"
          >
            View My Work
            <ArrowUpRight size={16} strokeWidth={3} />
          </button>

          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/10 text-white font-semibold hover:bg-white/15 transition-all hover:scale-105">
            <span>↓</span>
            Download Resume
          </button>

          <button
            onClick={() => handleScroll("#contact")}
            className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all hover:scale-105"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
          <span className="text-lg animate-bounce">↓</span>
        </motion.div>

      </div>
    </section>
  );
}
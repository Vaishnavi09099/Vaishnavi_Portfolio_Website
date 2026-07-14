// src/components/HeroSection.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { personalInfo } from "../data/portfolio";
import { ArrowUpRight, ChevronDown, Download } from "lucide-react";

const words = [
  "Building web apps",
  "Solving problems",
  "Learning new tech",
  "Writing clean code",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Scroll-linked fade only (removed scale/bg-scale/grid-drift transforms — cheaper)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, -60]);

  return (
    <section
      ref={sectionRef}
      className="relative sticky top-0 z-0 flex flex-col items-center justify-center overflow-hidden min-h-screen"
    >
      {/* Background — static blobs, no infinite pulse */}
      <div className="absolute inset-0 bg-[#080c10]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-teal-900/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-900/15 rounded-full blur-3xl" />
      </div>

      {/* Static grid overlay — no scroll-linked transform */}
      <div
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff10 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff10 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        className="absolute inset-0 opacity-20"
      />

      {/* Content — only opacity/y fade tied to scroll, no scale (cheaper) */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        {/* Available badge — no shimmer sweep */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 mt-20 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Available for new opportunities</span>
        </motion.div>

        {/* Name — single fade-in, no letter-by-letter split */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-8xl font-bold text-white mb-4 tracking-tight"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          {personalInfo.tagline}
        </motion.h1>

        {/* Animated words — kept, this is cheap (1 element swaps at a time) */}
        <div className="flex items-center gap-3 font-mono text-xl mb-8">
          <span className="text-cyan-400">&gt;</span>
          <div className="relative overflow-hidden h-5 md:h-14 flex items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="whitespace-nowrap bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </div>
          {/* Blinking cursor — CSS animation instead of Framer infinite loop */}
          <span className="inline-block w-[10px] h-[28px] md:h-[36px] bg-cyan-400 animate-blink" />
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-xl text-gray-400 text-lg mb-12 leading-relaxed"
        >
          {personalInfo.subtitle}
        </motion.p>

        {/* Buttons — plain, no magnetic mousemove-spring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects">
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 hover:scale-105 active:scale-95 transition-all">
              View My Work
              <ArrowUpRight size={16} strokeWidth={3} />
            </button>
          </a>
<a
          
            href="/resume.pdf"
            download="Vaishnavi_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/10 text-white font-semibold hover:bg-white/15 hover:scale-105 active:scale-95 transition-all"
          >
            <Download size={16} />
            Download Resume
          </a>

          <a href="#contact">
            <button className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 hover:scale-105 active:scale-95 transition-all">
              Get In Touch
            </button>
          </a>
        </motion.div>

        {/* Scroll indicator — CSS animation instead of Framer infinite */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-5 flex flex-col items-center"
        >
          <div className="flex flex-col items-center gap-3 text-gray-500 animate-bounce-slow">
            <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
            <ChevronDown size={22} />
          </div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 0.8s step-end infinite;
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(10px); opacity: 1; }
        }
        .animate-bounce-slow {
          animation: bounceSlow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
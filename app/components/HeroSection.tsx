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

function MagneticButton({ children, className }: { children: React.ReactNode; className: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setPos({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Scroll-linked parallax fade/scale-out (hero is sticky, so this plays as next section covers it)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, -80]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const nameChars = personalInfo.name.split("");

  return (
    <>
       <section
      ref={sectionRef}
      className="relative sticky top-0 z-0 flex flex-col items-center justify-center overflow-hidden min-h-screen"
    >
      {/* Background */}
      <motion.div style={{ scale: bgScale }} className="absolute inset-0 bg-[#080c10]">
        <motion.div
          animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-teal-900/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0 }}
          className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-900/20 rounded-full blur-3xl"
        />
      </motion.div>

      {/* Square grid overlay — drifts on scroll for depth */}
     {/* Square grid overlay — drifts on scroll for depth */}
<motion.div
  style={{
    y: gridY,
    backgroundImage: `
      linear-gradient(to right, #ffffff10 1px, transparent 1px),
      linear-gradient(to bottom, #ffffff10 1px, transparent 1px)
    `,
    backgroundSize: "60px 60px",
  }}
  className="absolute inset-0 opacity-20"
/>

      {/* Content — fades/scales/lifts away as you scroll past */}
      <motion.div
        style={{ opacity: contentOpacity, scale: contentScale, y: contentY }}
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 mt-20 mb-10 overflow-hidden"
        >
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
          />
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Available for new opportunities</span>
        </motion.div>

        {/* Name — letter by letter reveal */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.04, delayChildren: 0.15 } },
          }}
          className="text-3xl md:text-8xl font-bold text-white mb-4 tracking-tight flex flex-wrap justify-center"
        >
          {nameChars.map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40, rotateX: -90 },
                show: { opacity: 1, y: 0, rotateX: 0 },
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-5xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto]"
          style={{
            animation: "shimmer 4s ease-in-out infinite",
          }}
        >
          {personalInfo.tagline}
        </motion.h1>

        {/* Animated words */}
        <div className="flex items-center gap-3 font-mono text-xl mb-8">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-cyan-400"
          >
            &gt;
          </motion.span>
          <div className="relative overflow-hidden h-5 md:h-14 flex items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="whitespace-nowrap bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
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
          transition={{ duration: 0.6, delay: 1 }}
          className="max-w-xl text-gray-400 text-lg mb-12 leading-relaxed"
        >
          {personalInfo.subtitle}
        </motion.p>

        {/* Buttons — magnetic hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton className="cursor-pointer">
            <a href="#projects">
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-colors">
                View My Work
                <ArrowUpRight size={16} strokeWidth={3} />
              </button>
            </a>
          </MagneticButton>

          <MagneticButton className="cursor-pointer">
            <a
              href="/resume.pdf"
              download="Vaishnavi_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/10 text-white font-semibold hover:bg-white/15 transition-colors"
            >
              <Download size={16} />
              Download Resume
            </a>
          </MagneticButton>

          <MagneticButton className="cursor-pointer">
            <a href="#contact">
              <button className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">
                Get In Touch
              </button>
            </a>
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-5 flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3 text-gray-500"
          >
            <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
            <ChevronDown size={22} />
          </motion.div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
    </>
 
  );
}
// src/components/StackSection.tsx
"use client";

import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

type Tech = { name: string; slug: string; color: string; cat: string };

const techs: Tech[] = [
  // Languages
  { name: "C++",         slug: "cplusplus",        color: "00599C", cat: "Languages" },
  { name: "HTML5",       slug: "html5",             color: "E34F26", cat: "Languages" },
  { name: "CSS3",        slug: "css3",              color: "1572B6", cat: "Languages" },
  { name: "JavaScript",  slug: "javascript",        color: "F7DF1E", cat: "Languages" },
  { name: "TypeScript",  slug: "typescript",        color: "3178C6", cat: "Languages" },

  // Frontend
  { name: "React",       slug: "react",             color: "61DAFB", cat: "Frontend" },
  { name: "Next.js",     slug: "nextdotjs",         color: "FFFFFF", cat: "Frontend" },
  { name: "Tailwind",    slug: "tailwindcss",       color: "06B6D4", cat: "Frontend" },
  { name: "Redux",       slug: "redux",             color: "764ABC", cat: "Frontend" },

  // Backend
  { name: "Node.js",     slug: "nodedotjs",         color: "5FA04E", cat: "Backend" },
  { name: "Express",     slug: "express",           color: "FFFFFF", cat: "Backend" },

  // Database
  { name: "MongoDB",     slug: "mongodb",           color: "47A248", cat: "Database" },

  // Tools
  { name: "Git",         slug: "git",               color: "F05032", cat: "Tools" },
  { name: "GitHub",      slug: "github",            color: "FFFFFF", cat: "Tools" },
  { name: "VS Code",     slug: "visualstudiocode",  color: "007ACC", cat: "Tools" },
  { name: "Postman",     slug: "postman",           color: "FF6C37", cat: "Tools" },
  { name: "Vercel",      slug: "vercel",            color: "FFFFFF", cat: "Tools" },
  { name: "npm",         slug: "npm",               color: "CB3837", cat: "Tools" },
];

const techCategories = ["All", "Frontend", "Backend", "Data", "Infra", "Tools"] as const;

function TechCard({ tech, index, inView }: { tech: Tech; index: number; inView: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -py * 14, y: px * 14 });
  };

  const rotateDir = index % 2 === 0 ? -10 : 10;

  return (
    <motion.div
      id="stack"
      layout
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      initial={{ opacity: 0, y: 24, scale: 0.9, rotate: rotateDir }}
      animate={inView ? { opacity: 1, y: 0, scale: 1, rotate: 0 } : {}}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.04, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 800, minWidth: 0 }}
      className="group relative w-full"
    >
      <motion.div
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative aspect-square w-full overflow-hidden rounded-2xl p-4 bg-[#0d1117] border border-white/10"
      >
        {/* Default subtle glow — chota, always visible */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 50%, #${tech.color}25, transparent 50%)`,
          }}
        />

        {/* Hover glow — bada aur bright */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at 50% 50%, #${tech.color}60, transparent 65%)`,
          }}
        />

        {/* Conic border on hover */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `conic-gradient(from 0deg, transparent, #${tech.color}40, transparent 30%)`,
            WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: 1,
          }}
        />

        {/* Dot grid bg */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "12px 12px",
          }}
        />

        {/* Icon + Name */}
        <div className="relative flex h-full flex-col items-center justify-center gap-2.5">
          <motion.div
            whileHover={{ scale: 1.15, rotate: [0, -6, 6, 0] }}
            transition={{ duration: 0.6 }}
            style={{ transform: "translateZ(30px)" }}
            className="relative flex h-12 w-12 items-center justify-center"
          >
            <div
              className="absolute inset-0 rounded-xl opacity-20 blur-md transition-opacity group-hover:opacity-60"
              style={{ background: `#${tech.color}` }}
            />
            {tech.slug === "css3" ? (
              <img
                src="https://skillicons.dev/icons?i=css"
                alt={tech.name}
                loading="lazy"
                className="relative h-9 w-9 transition-transform duration-500 group-hover:scale-110"
                draggable={false}
              />
            ) : tech.slug === "visualstudiocode" ? (
              <img
                src="https://skillicons.dev/icons?i=vscode"
                alt={tech.name}
                loading="lazy"
                className="relative h-9 w-9 transition-transform duration-500 group-hover:scale-110"
                draggable={false}
              />
            ) : (
              <img
                src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                alt={tech.name}
                loading="lazy"
                className="relative h-9 w-9 transition-transform duration-500 group-hover:scale-110"
                draggable={false}
              />
            )}
          </motion.div>

          <div
            style={{ transform: "translateZ(20px)" }}
            className="text-center font-mono text-[11px] font-medium tracking-wide text-gray-400 transition-colors group-hover:text-white"
          >
            {tech.name}
          </div>
        </div>

        {/* Corner dot */}
        <div
          className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full opacity-40 transition-opacity group-hover:opacity-100"
          style={{ background: `#${tech.color}`, boxShadow: `0 0 8px #${tech.color}` }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function StackSection() {
  const [filter, setFilter] = useState<(typeof techCategories)[number]>("All");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const filtered = filter === "All" ? techs : techs.filter((t) => t.cat === filter);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const orb1X = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const orb2X = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} id="stack" className="relative px-6 py-32 bg-[#080c10] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-cyan-400 text-sm font-mono tracking-widest mb-2"
          >
            // STACK
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl font-bold text-white mb-2"
          >
            My Tech Stack.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-lg text-gray-400"
          >
            A collection of tools I use to build modern web applications.
          </motion.p>
        </div>

        {/* Ambient orbs — drift with scroll */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            style={{ x: orb1X, y: orb1Y }}
            className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]"
          />
          <motion.div
            style={{ x: orb2X, y: orb2Y }}
            className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]"
          />
        </div>

        {/* Cards Grid */}
        <div
          ref={ref}
          className="gap-3 md:gap-4"
          style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 1fr))" }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((t, i) => (
              <TechCard key={t.name} tech={t} index={i} inView={inView} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
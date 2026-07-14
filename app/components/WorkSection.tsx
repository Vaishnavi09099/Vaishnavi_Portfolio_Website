// src/components/WorkSection.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { projects } from "../data/portfolio";
import { FaGithub } from "react-icons/fa";

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative z-20 py-24 px-4 bg-[#080c10]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-cyan-400 text-sm font-mono tracking-widest mb-2"
        >
          // PROJECTS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-bold text-white mb-2"
        >
          Things I’ve built.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg mb-10 mt-5"
        >
          From idea to deployment — projects I’ve built end-to-end.
        </motion.p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                layout
                key={project.title}
                initial={{
                  opacity: 0,
                  x: i % 2 === 0 ? -60 : 60,
                  scale: 0.92,
                }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.7,
                  delay: (i % 2) * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl bg-[#0d1117] border border-white/10 overflow-hidden hover:border-white/20 transition-colors duration-300"
              >
                {/* Gradient Banner */}
                <div
                  className={`relative h-52 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                >
                  {project.img && (
                    <motion.div
                      className="absolute inset-0"
                      initial={{ scale: 1.15, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 0.8 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 1, delay: (i % 2) * 0.1 + 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </motion.div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: (i % 2) * 0.1 + 0.25 }}
                    className="text-white font-bold text-2xl mb-2"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: (i % 2) * 0.1 + 0.3 }}
                    className="text-gray-400 text-sm mb-4"
                  >
                    {project.desc}
                  </motion.p>

                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={{
                      hidden: {},
                      show: {
                        transition: { staggerChildren: 0.05, delayChildren: (i % 2) * 0.1 + 0.35 },
                      },
                    }}
                    className="flex flex-wrap gap-2 mb-4"
                  >
                    {project.tags.map((tag, j) => (
                      <motion.span
                        key={j}
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          show: { opacity: 1, scale: 1 },
                        }}
                        transition={{ duration: 0.3 }}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: (i % 2) * 0.1 + 0.45 }}
                    className="flex flex-wrap gap-3"
                  >
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white text-sm hover:bg-white/10 transition-colors"
                      >
                        <FaGithub size={16} />
                        GitHub
                      </motion.a>
                    )}
                    {project.link && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-cyan-400 text-black text-sm font-semibold hover:bg-cyan-300 transition-colors"
                      >
                        <ArrowUpRight size={16} />
                        Live Site
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-gray-500"
          >
            No projects in this category yet.
          </motion.div>
        )}
      </div>
    </section>
  );
}
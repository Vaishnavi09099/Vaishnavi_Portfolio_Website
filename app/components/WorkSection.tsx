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
        {/* Header — single wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-cyan-400 text-sm font-mono tracking-widest mb-2">
            // PROJECTS
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">
            Things I’ve built.
          </h2>
          <p className="text-gray-400 text-lg mb-10 mt-5">
            From idea to deployment — projects I’ve built end-to-end.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                className="group rounded-2xl bg-[#0d1117] border border-white/10 overflow-hidden hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Gradient Banner */}
                <div
                  className={`relative h-52 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                >
                  {project.img && (
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                {/* Card Body — no per-line motion, all static */}
                <div className="p-6">
                  <h3 className="text-white font-bold text-2xl mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white text-sm hover:bg-white/10 hover:scale-105 active:scale-95 transition-all"
                      >
                        <FaGithub size={16} />
                        GitHub
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-cyan-400 text-black text-sm font-semibold hover:bg-cyan-300 hover:scale-105 active:scale-95 transition-all"
                      >
                        <ArrowUpRight size={16} />
                        Live Site
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No projects in this category yet.
          </div>
        )}
      </div>
    </section>
  );
}
// src/components/WorkSection.tsx
"use client";

import { useState } from "react";
import { projects, projectFilters } from "../data/portfolio";

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="relative py-24 px-4 bg-[#080c10]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-cyan-400 text-sm font-mono tracking-widest mb-2">
          // PROJECTS
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">
          Things I’ve built.
        </h2>
        <p className="text-gray-400 text-lg mb-10 mt-5">
          From idea to deployment — projects I’ve built end-to-end.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-10">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-cyan-400/10 border-cyan-400 text-cyan-400"
                  : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white bg-transparent"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <div
              key={i}
              className="group rounded-2xl bg-[#0d1117] border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gradient Banner */}
              <div
                className={`relative h-52 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <div className="w-16 h-16 rounded-2xl bg-black/30 backdrop-blur flex items-center justify-center text-2xl">
                  ✦
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors opacity-0 group-hover:opacity-100"
                >
                  ↗
                </a>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <p
                    className={`text-xs font-mono tracking-widest uppercase ${project.categoryColor}`}
                  >
                    {project.category}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors text-sm"
                  >
                    ↗
                  </a>
                </div>

                <h3 className="text-white font-bold text-2xl mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
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
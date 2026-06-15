// src/components/StackSection.tsx
"use client";

import { stackRow1, stackRow2 } from "../data/portfolio";

function ScrollingRow({
  items,
  direction = "left",
}: {
  items: string[];
  direction?: "left" | "right";
}) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-3 w-max ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        }`}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="px-5 py-2 rounded-full bg-[#0d1117] border border-white/10 text-gray-300 text-sm font-medium whitespace-nowrap hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function StackSection() {
  return (
    <section id="stack" className="relative py-24 bg-[#080c10] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <p className="text-cyan-400 text-sm font-mono tracking-widest mb-2">
          // STACK
        </p>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-2">
          Tools of the trade.
        </h2>
        <p className="text-gray-400 text-lg">
          A curated set of technologies I reach for daily.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <ScrollingRow items={stackRow1} direction="left" />
        <ScrollingRow items={stackRow2} direction="right" />
      </div>
    </section>
  );
}
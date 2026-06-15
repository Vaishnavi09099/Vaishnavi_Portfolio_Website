// src/components/CertsSection.tsx
"use client";

import Image from "next/image";
import { certifications } from "../data/portfolio";

export default function CertsSection() {
  return (
    <section id="certs" className="relative py-24 px-4 bg-[#080c10]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-cyan-400 text-sm font-mono tracking-widest mb-2">
          // CERTIFICATIONS
        </p>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-2">
          Verified credentials.
        </h2>
        <p className="text-gray-400 text-lg mb-16">
          Courses and certifications I&apos;ve completed along the way.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl bg-gradient-to-br ${cert.gradient} border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Year Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur text-gray-300 text-xs font-mono">
                {cert.year}
              </div>

              {/* Image Area */}
              <div className="relative h-64 flex items-center justify-center">
                {cert.image ? (
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover opacity-80"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-cyan-400/40">
                    <div className="w-16 h-16 rounded-xl border border-cyan-400/20 flex items-center justify-center text-3xl">
                      📄
                    </div>
                    <p className="text-xs font-mono tracking-widest uppercase">
                      Drop image at {cert.image || "/certificates/cert.jpg"}
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom */}
              <div className="p-6 flex items-end justify-between">
                <div>
                  <p className="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
                    {cert.issuer}
                  </p>
                  <h3 className="text-white font-bold text-xl">{cert.title}</h3>
                </div>
                
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors flex-shrink-0"
                >
                  ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
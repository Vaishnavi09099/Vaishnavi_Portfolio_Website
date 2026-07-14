// src/components/CertsSection.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { certifications } from "../data/portfolio";

export default function CertsSection() {
  return (
    <section id="certs" className="relative py-24 px-4 bg-[#080c10]">
      <div className="max-w-7xl mx-auto">
        {/* Header — single wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-cyan-400 text-sm font-mono tracking-widest mb-2">
            // CERTIFICATIONS
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-2">
            Verified credentials.
          </h2>
          <p className="text-gray-400 text-lg mb-16 mt-5 tracking-wide">
            Courses and certifications I&apos;ve completed along the way.
          </p>
        </motion.div>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className={`group relative rounded-2xl bg-gradient-to-br ${cert.gradient} border border-white/10 overflow-hidden hover:border-white/20 hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Year Badge — static, no spring */}
              <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-black/40 backdrop-blur text-gray-300 text-xs font-mono">
                {cert.year}
              </div>

              {/* Image Area — plain fade, no clip-path curtain wipe */}
              <div className="relative flex justify-center p-2 overflow-hidden">
                {cert.image ? (
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={300}
                    height={100}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-cyan-400/40">
                    <div className="w-16 h-16 rounded-xl border border-cyan-400/20 flex items-center justify-center text-3xl">
                      📄
                    </div>
                    <p className="text-xs font-mono tracking-widest uppercase">
                      Drop image at {cert.image || "/certificates/cert.jpg"}
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom — static, parent card animation already covers entrance */}
              <div className="p-6 flex items-end justify-between">
                <div>
                  <p className="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
                    {cert.issuer}
                  </p>
                  <h3 className="text-white font-bold text-xl">{cert.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
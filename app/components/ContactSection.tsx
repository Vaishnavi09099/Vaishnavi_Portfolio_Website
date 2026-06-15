// src/components/ContactSection.tsx
"use client";

import { useState } from "react";
import { personalInfo, socialLinks } from "../data/portfolio";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);

    // EmailJS ya koi bhi service baad mein connect kar lena
    // Abhi sirf simulate kar rahe hain
    await new Promise((r) => setTimeout(r, 1200));

    setSent(true);
    setLoading(false);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 px-4 bg-[#080c10]">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-[#0d1117] via-[#0d1a1a] to-[#0d1117] border border-white/10 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left */}
            <div className="flex flex-col justify-center">
              <p className="text-cyan-400 text-sm font-mono tracking-widest mb-4">
                // CONTACT
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                Let&apos;s build{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  something great.
                </span>
              </h2>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                I&apos;m currently open to internships and full-time roles. Drop
                a line — I usually reply within 24 hours.
              </p>

              {/* Email */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-cyan-400">✉</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {personalInfo.email}
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-cyan-400">📍</span>
                <span className="text-gray-300 text-sm">
                  {personalInfo.location}
                </span>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
                >
                  GH
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
                >
                  LI
                </a>
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
                >
                  TW
                </a>
              </div>
            </div>

            {/* Right — Form */}
            <div className="flex flex-col gap-4">
              <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus-within:border-cyan-400/50 transition-colors">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="NAME"
                  className="w-full bg-transparent text-white text-sm placeholder:text-gray-600 outline-none font-mono tracking-widest"
                />
              </div>

              <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus-within:border-cyan-400/50 transition-colors">
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="EMAIL"
                  className="w-full bg-transparent text-white text-sm placeholder:text-gray-600 outline-none font-mono tracking-widest"
                />
              </div>

              <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus-within:border-cyan-400/50 transition-colors">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="MESSAGE"
                  rows={5}
                  className="w-full bg-transparent text-white text-sm placeholder:text-gray-600 outline-none font-mono tracking-widest resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading || sent}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold text-sm tracking-wide hover:opacity-90 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {sent ? (
                  "Message Sent ✓"
                ) : loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send message <span>↗</span>
                  </>
                )}
              </button>

              {sent && (
                <p className="text-center text-cyan-400 text-sm">
                  Thanks! I&apos;ll get back to you soon 🙌
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-600 text-sm mt-8">
          Built with Next.js + Tailwind + ❤️ by {personalInfo.name}
        </p>
      </div>
    </section>
  );
}
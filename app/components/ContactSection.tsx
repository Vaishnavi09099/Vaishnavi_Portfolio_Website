// src/components/ContactSection.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo, socialLinks } from "../data/portfolio";
import { Mail, MapPin, Send } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError(true);
      return;
    }

    setLoading(true);
    setError(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 bg-[#080c10]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-gradient-to-br from-[#0d1117] via-[#0d1a1a] to-[#0d1117] border border-white/10 p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left — no per-item motion, just one fade-in wrapper */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <p className="text-cyan-400 text-sm font-mono tracking-widest mb-4">
                // CONTACT
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Seeking Opportunities to{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Learn, Build & Grow.
                </span>
              </h2>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Have a project in mind or an exciting opportunity? Feel free to reach out — I'm always open to discussing new ideas and collaborations.
              </p>

              {/* Email */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-cyan-400"><Mail size={20} /></span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-300 font-semibold hover:text-white transition-colors text-sm"
                >
                  {personalInfo.email}
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-cyan-400"><MapPin size={20} /></span>
                <span className="text-gray-300 text-sm font-semibold">
                  {personalInfo.location}
                </span>
              </div>

              {/* Social Icons — CSS transition instead of motion */}
              <div className="flex items-center gap-3">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:-translate-y-0.5 hover:scale-110 transition-all duration-200"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:-translate-y-0.5 hover:scale-110 transition-all duration-200"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:-translate-y-0.5 hover:scale-110 transition-all duration-200"
                >
                  <FaInstagram size={18} />
                </a>
              </div>
            </motion.div>

            {/* Right — Form, single fade-in, no per-field stagger */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-4 p-6 border border-white/10 justify-center rounded-3xl bg-[#0D1217]"
            >
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
                  type="email"
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

              {/* Button — glow removed, hover via CSS */}
              <button
                type="submit"
                disabled={loading || sent}
                className="relative w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold text-sm tracking-wide hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-60 flex items-center justify-center gap-1"
              >
                {sent ? (
                  <span>Message Sent ✓</span>
                ) : loading ? (
                  <span>Sending...</span>
                ) : (
                  <span className="flex items-center gap-1">
                    Send message <Send size={15} className="mt-1" />
                  </span>
                )}
              </button>

              <AnimatePresence>
                {sent && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-center text-cyan-400 text-sm"
                  >
                    Thanks! I&apos;ll get back to you soon 🙌
                  </motion.p>
                )}

                {error && !sent && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-center text-red-400 text-sm"
                  >
                    Something went wrong. Please fill all fields or try again.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
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

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

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
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-gradient-to-br from-[#0d1117] via-[#0d1a1a] to-[#0d1117] border border-white/10 p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
              }}
              className="flex flex-col justify-center"
            >
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-cyan-400 text-sm font-mono tracking-widest mb-4"
              >
                // CONTACT
              </motion.p>
              <motion.h2
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
              >
                Seeking Opportunities to{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Learn, Build & Grow.
                </span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-gray-400 text-sm mb-8 leading-relaxed"
              >
                Have a project in mind or an exciting opportunity? Feel free to reach out — I'm always open to discussing new ideas and collaborations.
              </motion.p>

              {/* Email */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-3"
              >
                <span className="text-cyan-400"><Mail size={20} /></span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-300 font-semibold hover:text-white transition-colors text-sm"
                >
                  {personalInfo.email}
                </a>
              </motion.div>

              {/* Location */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="text-cyan-400"><MapPin size={20} /></span>
                <span className="text-gray-300 text-sm font-semibold">
                  {personalInfo.location}
                </span>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <motion.a
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
                >
                  <FaGithub size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
                >
                  <FaLinkedin size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
                >
                  <FaInstagram size={18} />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right — Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
              }}
              className="flex flex-col gap-4 p-6 border border-white/10 justify-center rounded-3xl bg-[#0D1217]"
            >
              <motion.div
                variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0 } }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileFocus={{ scale: 1.01 }}
                className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus-within:border-cyan-400/50 transition-colors"
              >
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="NAME"
                  className="w-full bg-transparent text-white text-sm placeholder:text-gray-600 outline-none font-mono tracking-widest"
                />
              </motion.div>

              <motion.div
                variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0 } }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus-within:border-cyan-400/50 transition-colors"
              >
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="EMAIL"
                  className="w-full bg-transparent text-white text-sm placeholder:text-gray-600 outline-none font-mono tracking-widest"
                />
              </motion.div>

              <motion.div
                variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0 } }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus-within:border-cyan-400/50 transition-colors"
              >
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="MESSAGE"
                  rows={5}
                  className="w-full bg-transparent text-white text-sm placeholder:text-gray-600 outline-none font-mono tracking-widest resize-none"
                />
              </motion.div>

              {/* Button with glow */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <motion.div
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-cyan-400/30 blur-xl rounded-full"
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading || sent}
                  className="relative w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold text-sm tracking-wide hover:opacity-90 transition-all disabled:opacity-60 flex items-center justify-center gap-1"
                >
                  <AnimatePresence mode="wait">
                    {sent ? (
                      <motion.span
                        key="sent"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Message Sent ✓
                      </motion.span>
                    ) : loading ? (
                      <motion.span
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Sending...
                      </motion.span>
                    ) : (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-1"
                      >
                        Send message <Send size={15} className="mt-1" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>

              <AnimatePresence>
                {sent && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-center text-cyan-400 text-sm"
                  >
                    Thanks! I&apos;ll get back to you soon 🙌
                  </motion.p>
                )}

                {error && !sent && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
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
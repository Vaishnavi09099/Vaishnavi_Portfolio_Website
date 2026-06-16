// src/components/ContactSection.tsx
"use client";

import { useState } from "react";
import { personalInfo, socialLinks } from "../data/portfolio";
import { Mail,MapPin, Send } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";



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
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-[#0d1117] via-[#0d1a1a] to-[#0d1117] border border-white/10 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left */}
            <div className="flex flex-col justify-center">
              <p className="text-cyan-400 text-sm font-mono tracking-widest mb-4">
                // CONTACT
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Seeking Opportunities to {" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Learn, Build & Grow.
                </span>
              </h2>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Have a project in mind or an exciting opportunity? Feel free to reach out — I'm always open to discussing new ideas and collaborations. 
              </p>

              {/* Email */}
              <div className="flex items-center gap-3 mb-3">
                  <span className="text-cyan-400"><Mail size={20}/></span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-300 font-semibold hover:text-white transition-colors text-sm"
                >
                  {personalInfo.email}
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-cyan-400"><MapPin size={20}/></span>
                <span className="text-gray-300 text-sm font-semibold">
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
                  <FaGithub size={18} />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
                >
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>

           {/* Right — Form */}
<div className="flex flex-col gap-4 p-6 border border-white/10 flex flex-col justify-center rounded-3xl bg-[#0D1217]">
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

  {/* Button with glow */}
  <div className="relative">
    {/* Glow effect */}
    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-cyan-400/30 blur-xl rounded-full" />
    
    <button
      onClick={handleSubmit}
      disabled={loading || sent}
      className="relative w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold text-sm tracking-wide hover:opacity-90 transition-all disabled:opacity-60 flex items-center justify-center gap-1"
    >
      {sent ? (
        "Message Sent ✓"
      ) : loading ? (
        "Sending..."
      ) : (
        <>
          Send message <Send size={15} className="mt-1" />
        </>
      )}
    </button>
  </div>

  {sent && (
    <p className="text-center text-cyan-400 text-sm">
      Thanks! I&apos;ll get back to you soon 🙌
    </p>
  )}
</div>
          </div>
        </div>

        
      </div>
    </section>
  );
}
// src/components/Navbar.tsx
"use client";


import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { personalInfo } from "../data/portfolio";
import { ArrowUpRight } from "lucide-react";


const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Coding", href: "#coding" },
  { label: "Certs", href: "#certs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      animate={{ top: scrolled ? "8px" : "20px" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed left-1/2 -translate-x-1/2 z-50"
    >
      <motion.div
        animate={{
          backgroundColor: scrolled
            ? "rgba(13, 17, 23, 0.9)"
            : "rgba(13, 17, 23, 0)",
          borderColor: scrolled
            ? "rgba(255, 255, 255, 0.1)"
            : "rgba(255, 255, 255, 0)",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ borderWidth: "1px", borderStyle: "solid" }}
        className="flex items-center gap-6 px-4 py-2 rounded-full"
      >
        {/* Logo */}
        <div className="flex items-center gap-2 pr-2 border-r border-white/10">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-xs font-bold text-black">
            {personalInfo.initials}
          </div>
          <span className="text-white font-semibold text-sm leading-tight">
            {personalInfo.name.split(" ")[0]} <br />
            {personalInfo.name.split(" ")[1]}
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="px-3 py-1.5 text-sm text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Contact Button */}
        <button
  onClick={() => handleNavClick("#contact")}
  className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-cyan-400 text-black text-sm font-semibold hover:bg-cyan-300 transition-colors"
>
  Contact
  <ArrowUpRight size={16} strokeWidth={3} />
</button>
      </motion.div>
    </motion.nav>
  );
}
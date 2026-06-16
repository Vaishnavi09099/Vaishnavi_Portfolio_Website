// src/components/Footer.tsx
"use client";

import { Mail } from "lucide-react";


export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080c10] px-6 py-6">
      <div className="max-w-6xl mx-auto flex font-semibold flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
        
        {/* Left - Copyright */}
        <p>© 2026 Vaishnavi Rajawat. Designed & developed with ❤️</p>

        {/* Right - Email */}
        <div className="flex justify-center items-center ">
            <a
  href="mailto:your@email.com"
  className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors"
>
  <Mail size={14} className="relative shrink-0" />
  <span className="leading-none">Vaishnavi09.099@gmail.com</span>
</a>

        </div>
         

      </div>
    </footer>
  );
}
"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "py-4 bg-[#e5e5e5]/80 backdrop-blur-md shadow-sm" : "py-8 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-black tracking-tighter text-black">DAPHNE.</a>
        <div className="hidden md:flex gap-4 text-sm font-bold text-gray-600 bg-white/70 backdrop-blur-md px-6 py-2 rounded-full border border-gray-300 shadow-sm">
          <a href="#about" className="hover:text-[#FF3366] transition-colors px-2">About</a>
          <a href="#journey" className="hover:text-[#FF3366] transition-colors px-2">Journey</a>
          <a href="#work" className="hover:text-[#FF3366] transition-colors px-2">Work</a>
          <a href="#contact" className="hover:text-[#FF3366] transition-colors px-2">Contact</a>
        </div>
        <a href="#contact" className="px-6 py-2.5 bg-black text-white text-sm font-bold rounded-full hover:scale-105 transition-transform shadow-lg">
          Let's Talk ↗
        </a>
      </div>
    </nav>
  );
}
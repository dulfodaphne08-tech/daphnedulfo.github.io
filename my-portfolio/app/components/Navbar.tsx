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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-4 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-(--border-color)" : "py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-black tracking-tighter text-white" style={{ fontFamily: 'var(--font-giant)' }}>DAPHNE.</a>
        <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wide text-(--text-muted)">
          <a href="#about" className="hover:text-(--accent-pink) transition-colors">ABOUT</a>
          <a href="#journey" className="hover:text-(--accent-pink) transition-colors">JOURNEY</a>
          <a href="#skills" className="hover:text-(--accent-pink) transition-colors">SKILLS</a>
          <a href="#contact" className="hover:text-(--accent-pink) transition-colors">CONTACT</a>
        </div>
        <button className="md:hidden text-2xl text-white">☰</button>
      </div>
    </nav>
  );
}
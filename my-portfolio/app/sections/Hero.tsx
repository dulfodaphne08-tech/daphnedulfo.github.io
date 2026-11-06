"use client";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { useState, useEffect, useRef, MouseEvent } from "react";

export default function Hero() {
  const [loading, setLoading] = useState(true);
  
  // Refs and motion values for the spotlight effect
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Create a dynamic mask based on mouse position
  const maskImage = useMotionTemplate`radial-gradient(circle 150px at ${mouseX}px ${mouseY}px, black 100%, transparent 100%)`;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-(--background) z-100 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-black tracking-widest mb-2 text-black" style={{ fontFamily: 'var(--font-giant)' }}>DAPHNE DULFO</h1>
        <p className="text-(--muted) tracking-[0.3em] text-sm mb-8 font-semibold">BSIT STUDENT</p>
        <div className="w-64 h-0.5 bg-(--border) relative overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }} animate={{ x: "0%" }} transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-(--accent)"
          />
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen relative pt-32 pb-12 px-6 flex flex-col items-center justify-center overflow-hidden bg-(--background)">
      
      {/* Top Navbar Items */}
      <div className="w-full max-w-7xl flex justify-between items-center absolute top-8 left-1/2 -translate-x-1/2 px-6 z-30">
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-(--border) shadow-sm">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs font-bold uppercase tracking-wider text-black">Available for OJT / Part-Time</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-bold text-(--muted)">
          <a href="#journey" className="hover:text-black transition-colors">Work <sup>[3]</sup></a>
          <a href="#skills" className="hover:text-black transition-colors">Skills</a>
          <a href="#contact" className="px-6 py-2.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors shadow-lg">Let's Talk ↗</a>
        </div>
      </div>

      {/* Giant Background Text */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        className="absolute top-[16%] left-1/2 -translate-x-1/2 text-[13vw] leading-none font-black text-outline pointer-events-none z-0 whitespace-nowrap tracking-tighter"
        style={{ fontFamily: 'var(--font-giant)' }}
      >
        DAPHNE DULFO
      </motion.h1>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10 items-end mt-20">
        
        {/* Left Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-4 flex flex-col justify-end pb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-3 text-black leading-tight">3rd Year <br/> BSIT Student</h2>
          <h3 className="text-xl font-semibold text-(--muted) mb-6">Aspiring IT Professional</h3>
          <p className="text-(--muted) text-base mb-8 leading-relaxed max-w-sm">
            I build and explore web-based systems while continuously developing my skills in programming, databases, and modern development tools.
          </p>
          <a href="#journey" className="w-fit px-8 py-4 bg-(--accent) text-white text-sm font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-xl shadow-accent/30">
            View My Work →
          </a>
        </motion.div>

        {/* Center Image - Spotlight Hover Effect */}
        <div className="md:col-span-5 flex justify-center relative z-10">
          <motion.div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}
            className="w-full max-w-100 h-125 md:h-150 relative overflow-hidden cursor-none"
            // We remove the rounded borders and box shadow to make it seamless
          >
            {/* Base Grayscale Image */}
            <img 
              src="/picture.png" 
              alt="Daphne Dulfo Grayscale" 
              className="absolute inset-0 w-full h-full object-cover grayscale"
            />
            
            {/* Colored Image Revealed by Mouse Mask */}
            <motion.div 
              className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none"
              style={{
                backgroundImage: "url('/picture.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                maskImage: maskImage,
                WebkitMaskImage: maskImage,
              }}
            />
          </motion.div>
        </div>

        {/* Right Links */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
          className="md:col-span-3 flex flex-col items-end pb-12"
        >
          <div className="bg-white p-6 rounded-3xl border border-(--border) shadow-lg w-full max-w-65">
            <p className="text-xs font-bold uppercase tracking-widest text-(--accent) mb-4">Connect with me</p>
            <div className="flex flex-col gap-3">
              <a href="mailto:dulfodaphne08@gmail.com" className="flex items-center gap-3 text-sm font-semibold hover:text-(--accent) transition-colors text-black">
                <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">📧</span> Email
              </a>
              <a href="https://github.com/dulfodaphne08-tech" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-semibold hover:text-[var(--accent)] transition-colors text-black">
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">💻</span> GitHub
              </a>
              <a href="https://www.facebook.com/share/19c8UTaNGX/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-semibold hover:text-(--accent) transition-colors text-black">
                <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">📘</span> Facebook
              </a>
              <a href="https://www.instagram.com/dulfodaphnee" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-semibold hover:text-(--accent) transition-colors text-black">
                <span className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-pink-500">📸</span> Instagram
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [loading, setLoading] = useState(true);

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
    <section className="min-h-screen relative pt-24 pb-12 px-6 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Top Navbar */}
      <div className="w-full max-w-7xl flex justify-between items-center mb-16 relative z-20">
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
        className="absolute top-[12%] left-1/2 -translate-x-1/2 text-[15vw] leading-none font-black text-outline pointer-events-none z-0 whitespace-nowrap tracking-tighter"
        style={{ fontFamily: 'var(--font-giant)' }}
      >
        DAPHNE DULFO
      </motion.h1>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10 items-center mt-12">
        
        {/* Left Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-4 flex flex-col justify-center order-2 md:order-1"
        >
          <h2 className="text-4xl font-black mb-3 text-black leading-tight">3rd Year <br/> BSIT Student</h2>
          <h3 className="text-xl font-semibold text-(--muted) mb-4">Aspiring IT Professional</h3>
          <p className="text-(--muted) text-base mb-8 leading-relaxed max-w-sm">
            I build and explore web-based systems while continuously developing my skills in programming, databases, and modern development tools.
          </p>
          <a href="#journey" className="w-fit px-8 py-4 bg-(--accent) text-white text-sm font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-xl shadow-accent/30">
            View My Work →
          </a>
        </motion.div>

        {/* Center Image - Hover for Color */}
        <div className="md:col-span-4 flex justify-center order-1 md:order-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4 }}
            className="w-75 h-95 md:w-95 md:h-120 rounded-4xl overflow-hidden cursor-pointer group shadow-2xl relative"
          >
            <img 
              src="picture.png" 
              alt="Daphne Dulfo" 
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>
        </div>

        {/* Right Links */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
          className="md:col-span-4 flex flex-col items-end gap-4 order-3"
        >
          <div className="bg-white p-6 rounded-3xl border border-(--border) shadow-lg w-full max-w-62.5">
            <p className="text-xs font-bold uppercase tracking-widest text-(--accent) mb-4">Connect with me</p>
            <div className="flex flex-col gap-3">
              <a href="mailto:dulfodaphne08@gmail.com" className="flex items-center gap-3 text-sm font-semibold hover:text-(--accent) transition-colors">
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">📧</span> Email
              </a>
              <a href="https://github.com/dulfodaphne08-tech" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-semibold hover:text-(--accent) transition-colors">
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">💻</span> GitHub
              </a>
              <a href="https://www.facebook.com/share/19c8UTaNGX/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-semibold hover:text-(--accent) transition-colors">
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">📘</span> Facebook
              </a>
               <a href="https://www.instagram.com/dulfodaphnee?xtok=MWo1Mm5mNnJwbjM3bA==" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-semibold hover:text-(--accent) transition-colors">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">📘</span> Instagram
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
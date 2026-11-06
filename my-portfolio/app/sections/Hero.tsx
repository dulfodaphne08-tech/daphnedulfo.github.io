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
        <h1 className="text-4xl font-black tracking-widest mb-2 text-white" style={{ fontFamily: 'var(--font-giant)' }}>DAPHNE DULFO</h1>
        <p className="text-(--muted) tracking-[0.3em] text-sm mb-8">BSIT STUDENT</p>
        <div className="w-48 h-0.5 bg-(--border) relative overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }} animate={{ x: "0%" }} transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-(--accent)"
          />
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen flex items-center relative pt-32 pb-20 px-6">
      <div className="glow top-0 left-0"></div>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side - Typography */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-(--accent) font-semibold tracking-widest text-sm mb-4 uppercase">Hello, World</p>
          <h1 className="text-6xl md:text-8xl font-black leading-[1.1] mb-6 tracking-tighter text-white">
            Hi, I'm <br/> <span className="text-transparent bg-clip-text bg-linear-to-r from-(--accent) to-purple-500">Daphne.</span>
          </h1>
          <h2 className="text-2xl font-bold mb-2 text-white">3rd Year BSIT Student</h2>
          <p className="text-(--muted) text-lg mb-6">Aspiring IT Professional</p>
          <p className="text-(--muted) max-w-md mb-8 leading-relaxed">
            I build and explore web-based systems while continuously developing my skills in programming, databases, and modern development tools.
          </p>
          
          <div className="flex gap-4 mb-8">
            <a href="#journey" className="px-6 py-3 bg-(--accent) text-white font-bold rounded-full hover:bg-opacity-80 transition-all flex items-center gap-2">
              View My Work →
            </a>
            <a href="#about" className="px-6 py-3 border border-(--border) text-white font-bold rounded-full hover:border-(--accent) transition-all">
              More About Me
            </a>
          </div>
          <p className="text-sm text-(--muted)">Currently studying at Eastern Samar State University</p>
        </motion.div>

        {/* Right Side - Image & Floating Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-4/5 rounded-3xl overflow-hidden border border-(--border)">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
              alt="Daphne" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          <motion.div 
            animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-(--card) border border-(--border) p-6 rounded-2xl shadow-2xl backdrop-blur-xl"
          >
            <p className="text-sm font-bold text-(--accent) mb-1">Currently Learning</p>
            <p className="text-sm font-medium text-(--muted)">JavaScript • Supabase • GitHub</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
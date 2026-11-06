"use client";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { useState, useEffect, useRef, MouseEvent } from "react";

export default function Hero() {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

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
      <div className="fixed inset-0 bg-[#f4f4f5] z-100 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-black tracking-widest mb-2 text-black" style={{ fontFamily: 'Anton, sans-serif' }}>DAPHNE DULFO</h1>
        <p className="text-gray-500 tracking-[0.3em] text-sm mb-8 font-semibold">BSIT STUDENT</p>
        <div className="w-64 h-0.5 bg-gray-200 relative overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }} animate={{ x: "0%" }} transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-[#FF3366]"
          />
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen relative pt-32 pb-12 px-6 flex flex-col items-center justify-center overflow-hidden bg-[#f4f4f5]">
      
      {/* Navbar - Pushed down and separated */}
      <div className="w-full max-w-7xl flex justify-between items-center absolute top-8 left-1/2 -translate-x-1/2 px-6 z-30">
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs font-bold uppercase tracking-wider text-black">Available for OJT / Part-Time</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-bold text-gray-500 items-center">
          <a href="#journey" className="hover:text-black transition-colors">Work <sup>[3]</sup></a>
          <a href="#skills" className="hover:text-black transition-colors">Skills</a>
          <a href="#contact" className="px-6 py-2.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors shadow-lg">Let's Talk ↗</a>
        </div>
      </div>

      {/* Giant Background Text - Properly positioned */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        className="absolute top-[22%] left-1/2 -translate-x-1/2 text-[14vw] leading-none font-black text-outline pointer-events-none whitespace-nowrap tracking-tighter"
        style={{ fontFamily: 'Anton, sans-serif' }}
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
          <h3 className="text-xl font-semibold text-gray-500 mb-6">Aspiring IT Professional</h3>
          <p className="text-gray-500 text-base mb-8 leading-relaxed max-w-sm">
            I build and explore web-based systems while continuously developing my skills in programming, databases, and modern development tools.
          </p>
          <div className="flex gap-4">
            <a href="#journey" className="w-fit px-8 py-4 bg-[#FF3366] text-white text-sm font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-xl shadow-pink-500/30">
              View My Work →
            </a>
            <a href="#about" className="w-fit px-8 py-4 bg-white border border-gray-200 text-black text-sm font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-lg">
              About Me
            </a>
          </div>
        </motion.div>

        {/* Center Image - Made larger, no box, spotlight effect */}
        <div className="md:col-span-5 flex justify-center relative z-10">
          <motion.div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}
            className="w-full max-w-125 h-150 md:h-175 relative overflow-hidden cursor-none bg-transparent"
          >
            <img 
              src="/picture.png" 
              alt="Daphne Dulfo" 
              className="absolute inset-0 w-full h-full object-cover object-top grayscale"
            />
            <motion.div 
              className="absolute inset-0 w-full h-full object-cover object-top z-10 pointer-events-none"
              style={{
                backgroundImage: "url('/picture.png')",
                backgroundSize: "cover",
                backgroundPosition: "top center",
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
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-lg w-full max-w-65">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FF3366] mb-4">Connect with me</p>
            <div className="flex flex-col gap-3">
              <a href="mailto:dulfodaphne08@gmail.com" className="flex items-center gap-3 text-sm font-semibold hover:text-[#FF3366] transition-colors text-black">
                <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">📧</span> Email
              </a>
              <a href="https://github.com/dulfodaphne08-tech" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-semibold hover:text-[#FF3366] transition-colors text-black">
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">💻</span> GitHub
              </a>
              <a href="https://www.facebook.com/share/19c8UTaNGX/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-semibold hover:text-[#FF3366] transition-colors text-black">
                <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">📘</span> Facebook
              </a>
              <a href="https://www.instagram.com/dulfodaphnee" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-semibold hover:text-[#FF3366] transition-colors text-black">
                <span className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-pink-500">📸</span> Instagram
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
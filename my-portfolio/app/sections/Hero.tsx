"use client";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { useState, useEffect, useRef, MouseEvent } from "react";

export default function Hero() {
  const [loading, setLoading] = useState(true);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Creates the spotlight mask for the color hover effect
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
      <div className="fixed inset-0 bg-[#e5e5e5] z-[100] flex flex-col items-center justify-center">
        <h1 className="text-5xl font-black tracking-widest mb-2 text-black" style={{ fontFamily: 'Anton, sans-serif' }}>DAPHNE DULFO</h1>
        <p className="text-gray-500 tracking-[0.3em] text-sm mb-8 font-semibold">BSIT STUDENT</p>
        <div className="w-64 h-[2px] bg-gray-300 relative overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }} animate={{ x: "0%" }} transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-[#FF3366]"
          />
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen relative pt-32 pb-0 px-6 flex flex-col justify-end overflow-hidden bg-[#e5e5e5]">
      
      {/* 1. SINGLE CLEAN NAVBAR */}
      <div className="w-full max-w-7xl flex justify-between items-center absolute top-8 left-1/2 -translate-x-1/2 px-6 z-50">
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-300 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs font-bold uppercase tracking-wider text-black">Available for OJT / Part-Time</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-bold text-gray-600 bg-white px-8 py-3 rounded-full border border-gray-300 shadow-sm">
          <a href="#journey" className="hover:text-black transition-colors">Work <sup>[3]</sup></a>
          <a href="#skills" className="hover:text-black transition-colors">Skills</a>
          <a href="#contact" className="hover:text-black transition-colors">Contact</a>
        </div>
      </div>

      {/* 2. GIANT MOVING BACKGROUND TEXT */}
      <motion.h1 
        animate={{ x: ["-2%", "2%", "-2%"] }} 
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        className="absolute top-[28%] left-0 right-0 text-[17vw] leading-none font-black text-black pointer-events-none whitespace-nowrap tracking-tighter z-0 text-center"
        style={{ fontFamily: 'Anton, sans-serif' }}
      >
        DAPHNE DULFO
      </motion.h1>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10 items-end">
        
        {/* 3. LEFT INFO */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-4 flex flex-col justify-end pb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-3 text-black leading-tight">3rd Year <br/> BSIT Student</h2>
          <h3 className="text-xl font-semibold text-gray-600 mb-6">Aspiring IT Professional</h3>
          <p className="text-gray-700 text-base mb-8 leading-relaxed max-w-sm">
            I build and explore web-based systems while continuously developing my skills in programming, databases, and modern development tools.
          </p>
          <div className="flex gap-4">
            <a href="#journey" className="w-fit px-8 py-4 bg-[#FF3366] text-white text-sm font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-xl shadow-pink-500/30">
              View My Work →
            </a>
            <a href="#about" className="w-fit px-8 py-4 bg-white border border-gray-300 text-black text-sm font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-sm">
              About Me
            </a>
          </div>
        </motion.div>

        {/* 4. CENTER IMAGE (Massive & Seamless) */}
        <div className="md:col-span-5 flex justify-center relative z-10 h-full">
          <motion.div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}
            className="w-full max-w-[650px] h-[500px] md:h-[80vh] relative cursor-none bg-transparent flex items-end justify-center"
          >
            {/* IMPORTANT: For the best look, your picture.png MUST have a transparent background */}
            <img 
              src="/picture.png" 
              alt="Daphne Dulfo" 
              className="w-full h-full object-contain object-bottom grayscale drop-shadow-2xl"
            />
            <motion.div 
              className="absolute inset-0 w-full h-full z-10 pointer-events-none"
              style={{
                backgroundImage: "url('/picture.png')",
                backgroundSize: "contain",
                backgroundPosition: "bottom center",
                backgroundRepeat: "no-repeat",
                maskImage: maskImage,
                WebkitMaskImage: maskImage,
              }}
            />
          </motion.div>
        </div>

        {/* 5. RIGHT LINKS */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
          className="md:col-span-3 flex flex-col items-end pb-20"
        >
          <div className="bg-white p-6 rounded-3xl border border-gray-300 shadow-lg w-full max-w-[260px]">
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

      {/* 6. SCROLL DOWN INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-12 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-sm font-bold uppercase tracking-widest text-black">Scroll down</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-black">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
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
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#e5e5e5] z-[100] flex flex-col items-center justify-center">
        <h1 className="text-5xl font-black mb-2 text-black" style={{ fontFamily: 'Anton, sans-serif' }}>DAPHNE DULFO</h1>
        <div className="w-64 h-[2px] bg-gray-300 relative overflow-hidden mt-4">
          <motion.div initial={{ x: "-100%" }} animate={{ x: "0%" }} transition={{ duration: 1.2 }} className="absolute inset-0 bg-[#FF3366]" />
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen relative pt-32 flex flex-col justify-end overflow-hidden bg-[#e5e5e5]">
      
      {/* 1. INFINITE MOVING BACKGROUND TEXT */}
      {/* Using a flex container with two identical texts to create a seamless infinite loop */}
      <div className="absolute top-[20%] left-0 w-full overflow-hidden pointer-events-none z-0 flex opacity-100">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="whitespace-nowrap flex"
        >
          <h1 className="text-[22vw] leading-none font-black text-black tracking-tighter" style={{ fontFamily: 'Anton, sans-serif' }}>
            DAPHNE DULFO &nbsp;&nbsp;&nbsp; DAPHNE DULFO &nbsp;&nbsp;&nbsp;
          </h1>
          <h1 className="text-[22vw] leading-none font-black text-black tracking-tighter" style={{ fontFamily: 'Anton, sans-serif' }}>
            DAPHNE DULFO &nbsp;&nbsp;&nbsp; DAPHNE DULFO &nbsp;&nbsp;&nbsp;
          </h1>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-4 relative z-10 items-end px-6">
        
        {/* Left Text (Made smaller so it doesn't overlap) */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="md:col-span-4 pb-24 z-20">
          <h2 className="text-3xl md:text-4xl font-black mb-2 text-black leading-tight">3rd Year <br/> BSIT Student</h2>
          <p className="text-gray-700 font-bold mb-8 text-lg tracking-wide">Aspiring IT Professional</p>
          <div className="flex gap-4">
            <a href="#work" className="px-8 py-4 bg-[#FF3366] text-white text-sm font-bold rounded-full shadow-xl shadow-pink-500/30 hover:scale-105 transition-transform">View My Work →</a>
            <a href="#contact" className="px-8 py-4 bg-white text-black text-sm font-bold rounded-full shadow-lg hover:scale-105 transition-transform">Contact Me</a>
          </div>
        </motion.div>

        {/* Center Image (MASSIVE + Load Animation) */}
        <div className="md:col-span-5 flex justify-center h-full z-10 relative">
          <motion.div 
            ref={containerRef} 
            onMouseMove={handleMouseMove} 
            /* Animates from small (0.8) to massive (1) when page loads */
            initial={{ opacity: 0, scale: 0.8, y: 50 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }} 
            className="w-full max-w-[700px] h-[500px] md:h-[85vh] relative cursor-none flex items-end justify-center"
          >
            {/* Added drop-shadow and made the max-width larger (700px) */}
            <img src="/picture.png" alt="Daphne" className="w-full h-full object-contain object-bottom grayscale drop-shadow-2xl" />
            <motion.div className="absolute inset-0 w-full h-full z-10 pointer-events-none" style={{ backgroundImage: "url('/picture.png')", backgroundSize: "contain", backgroundPosition: "bottom center", backgroundRepeat: "no-repeat", maskImage, WebkitMaskImage: maskImage }} />
          </motion.div>
        </div>

        {/* Right Info */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="md:col-span-3 pb-24 flex justify-end z-20">
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-gray-300 shadow-2xl w-full max-w-[240px]">
            <p className="text-xs font-bold text-[#FF3366] mb-3 uppercase tracking-widest">Connect</p>
            <div className="flex flex-col gap-3">
              <a href="mailto:dulfodaphne08@gmail.com" className="text-sm font-bold hover:text-[#FF3366] transition-colors flex items-center gap-2">📧 Email</a>
              <a href="https://github.com/dulfodaphne08-tech" className="text-sm font-bold hover:text-[#FF3366] transition-colors flex items-center gap-2">💻 GitHub</a>
              <a href="https://www.facebook.com/share/19c8UTaNGX/" className="text-sm font-bold hover:text-[#FF3366] transition-colors flex items-center gap-2">📘 Facebook</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { useState, useEffect, useRef, MouseEvent } from "react";

export default function Hero() {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(circle 250px at ${mouseX}px ${mouseY}px, black 100%, transparent 100%)`;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#e5e5e5] z-[100] flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-black mb-2 text-black tracking-tighter" style={{ fontFamily: 'Anton, sans-serif' }}>DAPHNE DULFO</h1>
        <div className="w-64 h-[2px] bg-gray-300 relative overflow-hidden mt-6">
          <motion.div initial={{ x: "-100%" }} animate={{ x: "0%" }} transition={{ duration: 1.2, ease: "easeInOut" }} className="absolute inset-0 bg-[#FF3366]" />
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen relative pt-32 flex flex-col justify-end overflow-hidden bg-[#e5e5e5]">
      
      {/* INFINITE SCROLLING BACKGROUND TEXT */}
      <div className="absolute top-[25%] left-0 w-full overflow-hidden pointer-events-none z-0 flex">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="whitespace-nowrap flex"
        >
          <h1 className="text-[22vw] leading-none font-black text-black tracking-tighter" style={{ fontFamily: 'Anton, sans-serif' }}>
            DAPHNE DULFO &nbsp;&nbsp;&nbsp; DAPHNE DULFO &nbsp;&nbsp;&nbsp; DAPHNE DULFO &nbsp;&nbsp;&nbsp;
          </h1>
          <h1 className="text-[22vw] leading-none font-black text-black tracking-tighter" style={{ fontFamily: 'Anton, sans-serif' }}>
            DAPHNE DULFO &nbsp;&nbsp;&nbsp; DAPHNE DULFO &nbsp;&nbsp;&nbsp; DAPHNE DULFO &nbsp;&nbsp;&nbsp;
          </h1>
        </motion.div>
      </div>

      <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-4 relative z-10 items-end px-6">
        
        {/* LEFT TEXT (Made MUCH smaller) */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="md:col-span-3 pb-24 z-20">
          <h2 className="text-lg md:text-xl font-bold mb-1 text-black leading-tight tracking-tight">
            3rd Year BSIT Student
          </h2>
          <p className="text-gray-600 font-medium mb-6 text-xs md:text-sm tracking-wide">
            Aspiring IT Professional
          </p>
          <div className="flex flex-col gap-2 w-fit">
            <a href="#work" className="px-5 py-2.5 bg-[#FF3366] text-white text-xs font-bold rounded-full shadow-lg shadow-pink-500/30 hover:scale-105 transition-transform text-center">
              View My Work →
            </a>
            <a href="#contact" className="px-5 py-2.5 bg-black text-white text-xs font-bold rounded-full shadow-lg hover:scale-105 transition-transform text-center">
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* MASSIVE CENTER IMAGE */}
        <div className="md:col-span-6 flex justify-center h-full z-10 relative">
          <motion.div 
            ref={containerRef} 
            onMouseMove={handleMouseMove} 
            initial={{ opacity: 0, scale: 0.9, y: 100 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }} 
            className="w-full max-w-[1200px] h-[600px] md:h-[100vh] relative cursor-none flex items-end justify-center"
          >
            <img 
              src="/picture.png" 
              alt="Daphne" 
              className="w-full h-full object-contain object-bottom grayscale drop-shadow-2xl scale-110 md:scale-125 origin-bottom" 
            />
            <motion.div 
              className="absolute inset-0 w-full h-full z-10 pointer-events-none scale-110 md:scale-125 origin-bottom" 
              style={{ 
                backgroundImage: "url('/picture.png')", 
                backgroundSize: "contain", 
                backgroundPosition: "bottom center", 
                backgroundRepeat: "no-repeat", 
                maskImage, 
                WebkitMaskImage: maskImage 
              }} 
            />
          </motion.div>
        </div>

        {/* RIGHT INFO */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="md:col-span-3 pb-24 flex justify-end z-20">
          <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-gray-300 shadow-2xl w-full max-w-[200px]">
            <p className="text-[10px] font-bold text-[#FF3366] mb-3 uppercase tracking-widest">Connect with me</p>
            <div className="flex flex-col gap-2">
              <a href="mailto:dulfodaphne08@gmail.com" className="text-[11px] font-bold hover:text-[#FF3366] transition-colors flex items-center gap-2">📧 Email</a>
              <a href="https://github.com/dulfodaphne08-tech" target="_blank" rel="noreferrer" className="text-[11px] font-bold hover:text-[#FF3366] transition-colors flex items-center gap-2">💻 GitHub</a>
              <a href="https://www.facebook.com/share/19c8UTaNGX/" target="_blank" rel="noreferrer" className="text-[11px] font-bold hover:text-[#FF3366] transition-colors flex items-center gap-2">📘 Facebook</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
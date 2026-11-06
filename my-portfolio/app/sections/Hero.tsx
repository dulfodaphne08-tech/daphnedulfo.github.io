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
      <div className="fixed inset-0 bg-[#e5e5e5] z-100 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-black mb-2 text-black" style={{ fontFamily: 'Anton, sans-serif' }}>DAPHNE DULFO</h1>
        <div className="w-64 h-0.5 bg-gray-300 relative overflow-hidden mt-4">
          <motion.div initial={{ x: "-100%" }} animate={{ x: "0%" }} transition={{ duration: 1.2 }} className="absolute inset-0 bg-[#FF3366]" />
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen relative pt-32 flex flex-col justify-end overflow-hidden bg-[#e5e5e5]">
      {/* Giant Moving Text */}
      <motion.h1 
        animate={{ x: ["-2%", "2%", "-2%"] }} 
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        className="absolute top-[25%] left-0 right-0 text-[18vw] leading-none font-black text-black pointer-events-none whitespace-nowrap tracking-tighter z-0 text-center"
        style={{ fontFamily: 'Anton, sans-serif' }}
      >
        DAPHNE DULFO
      </motion.h1>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10 items-end px-6">
        {/* Left Text */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="md:col-span-4 pb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-2 text-black">3rd Year <br/> BSIT Student</h2>
          <p className="text-gray-600 font-medium mb-6">Aspiring IT Professional</p>
          <div className="flex gap-4">
            <a href="#journey" className="px-6 py-3 bg-[#FF3366] text-white text-sm font-bold rounded-full shadow-lg shadow-pink-500/30 hover:scale-105 transition-transform">View Work →</a>
            <a href="#contact" className="px-6 py-3 bg-white text-black text-sm font-bold rounded-full shadow-lg hover:scale-105 transition-transform">Contact Me</a>
          </div>
        </motion.div>

        {/* Center Image */}
        <div className="md:col-span-5 flex justify-center h-full">
          <motion.div ref={containerRef} onMouseMove={handleMouseMove} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="w-full max-w-125 h-125 md:h-175 relative cursor-none flex items-end justify-center">
            <img src="/picture.png" alt="Daphne" className="w-full h-full object-contain object-bottom grayscale drop-shadow-2xl" />
            <motion.div className="absolute inset-0 w-full h-full z-10 pointer-events-none" style={{ backgroundImage: "url('/picture.png')", backgroundSize: "contain", backgroundPosition: "bottom center", backgroundRepeat: "no-repeat", maskImage, WebkitMaskImage: maskImage }} />
          </motion.div>
        </div>

        {/* Right Info */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="md:col-span-3 pb-20 flex justify-end">
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-gray-300 shadow-xl w-full max-w-60">
            <p className="text-xs font-bold text-[#FF3366] mb-3 uppercase">Connect</p>
            <a href="mailto:dulfodaphne08@gmail.com" className="block text-sm font-semibold hover:text-[#FF3366] mb-2">📧 Email</a>
            <a href="#" className="block text-sm font-semibold hover:text-[#FF3366] mb-2">💻 GitHub</a>
            <a href="#" className="block text-sm font-semibold hover:text-[#FF3366]">📘 Facebook</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
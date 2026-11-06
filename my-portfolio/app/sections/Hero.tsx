"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { useState, useEffect, useRef, type MouseEvent } from "react";

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
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#e5e5e5] z-[100] flex flex-col items-center justify-center px-6">
        <h1
          className="text-4xl md:text-5xl font-black mb-2 text-black text-center"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          DAPHNE DULFO
        </h1>
        <div className="w-64 h-[2px] bg-gray-300 relative overflow-hidden mt-4">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-[#FF3366]"
          />
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen relative pt-32 flex flex-col justify-end overflow-hidden bg-[#e5e5e5]">
      {/* CONTINUOUS MOVING BACKGROUND NAME */}
      <div className="absolute top-[18%] left-0 w-full overflow-hidden pointer-events-none z-0">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        >
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0">
              {[0, 1, 2, 3].map((item) => (
                <h1
                  key={item}
                  className="text-[22vw] leading-none font-black text-black tracking-tighter whitespace-nowrap"
                  style={{ fontFamily: "Anton, sans-serif" }}
                  aria-hidden="true"
                >
                  DAPHNE DULFO&nbsp;&nbsp;&nbsp;
                </h1>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-4 relative z-10 items-end px-6">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-3 pb-24 z-20"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-2 text-black leading-tight">
            3rd Year <br /> BSIT Student
          </h2>
          <p className="text-gray-700 font-bold mb-8 text-lg tracking-wide">
            Aspiring IT Professional
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="px-7 py-4 bg-[#FF3366] text-white text-sm font-bold rounded-full shadow-xl shadow-pink-500/30 hover:scale-105 transition-transform"
            >
              View My Work →
            </a>
            <a
              href="#contact"
              className="px-7 py-4 bg-white text-black text-sm font-bold rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* BIG CENTER IMAGE */}
        <div className="md:col-span-6 flex justify-center h-full z-10 relative">
          <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, scale: 0.75, y: 80 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="w-full max-w-[900px] h-[55vh] md:h-[90vh] relative cursor-none flex items-end justify-center"
          >
            <img
              src="/picture.png"
              alt="Daphne Dulfo"
              className="w-full h-full object-contain object-bottom grayscale drop-shadow-2xl select-none"
            />

            <motion.div
              className="absolute inset-0 w-full h-full z-10 pointer-events-none"
              style={{
                backgroundImage: "url('/picture.png')",
                backgroundSize: "contain",
                backgroundPosition: "bottom center",
                backgroundRepeat: "no-repeat",
                maskImage,
                WebkitMaskImage: maskImage,
              }}
            />
          </motion.div>
        </div>

        {/* RIGHT CONTACT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="md:col-span-3 pb-24 flex justify-end z-20"
        >
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-gray-300 shadow-2xl w-full max-w-[240px]">
            <p className="text-xs font-bold text-[#FF3366] mb-3 uppercase tracking-widest">
              Connect
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:dulfodaphne08@gmail.com"
                className="text-sm font-bold hover:text-[#FF3366] transition-colors flex items-center gap-2"
              >
                📧 Email
              </a>
              <a
                href="https://github.com/dulfodaphne08-tech"
                className="text-sm font-bold hover:text-[#FF3366] transition-colors flex items-center gap-2"
              >
                💻 GitHub
              </a>
              <a
                href="https://www.facebook.com/share/19c8UTaNGX/"
                className="text-sm font-bold hover:text-[#FF3366] transition-colors flex items-center gap-2"
              >
                📘 Facebook
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
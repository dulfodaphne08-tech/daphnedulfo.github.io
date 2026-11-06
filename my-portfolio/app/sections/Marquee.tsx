"use client";
import { motion } from "framer-motion";

export default function Marquee() {
  return (
    <div className="bg-[#111] text-white py-6 overflow-hidden border-y border-gray-800 flex">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }} 
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="whitespace-nowrap flex font-black text-2xl tracking-widest uppercase"
      >
        <span className="mx-4">DAPHNE DULFO • 3RD YEAR BSIT • WEB DEVELOPMENT • DATABASES • CONTINUOUS LEARNING •</span>
        <span className="mx-4">DAPHNE DULFO • 3RD YEAR BSIT • WEB DEVELOPMENT • DATABASES • CONTINUOUS LEARNING •</span>
      </motion.div>
    </div>
  );
}
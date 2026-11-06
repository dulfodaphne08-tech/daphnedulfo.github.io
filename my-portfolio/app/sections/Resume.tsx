"use client";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="py-32 px-6 bg-[#f4f4f5] text-center">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-black">Want to Know More?</h2>
          <p className="text-gray-600 text-lg mb-10">For a more detailed overview of my education, skills, achievements, and project experience, you can view my resume.</p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg">
              View Resume →
            </button>
            <button className="px-8 py-4 bg-white text-black border border-gray-300 font-bold rounded-full hover:scale-105 transition-transform shadow-sm">
              Download Resume ↓
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
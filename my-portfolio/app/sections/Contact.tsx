"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="glow bottom-0 right-0"></div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-white">Let's Build Something Together.</h2>
        <p className="text-xl text-(--muted) mb-12 max-w-2xl mx-auto">
          I'm currently looking for opportunities where I can gain practical experience, contribute to a team, and continue growing in the field of Information Technology.
        </p>

        <div className="flex flex-col items-center gap-4 mb-12">
          <h3 className="text-2xl font-bold text-white">Daphne Dulfo</h3>
          <p className="text-(--muted)">3rd Year BSIT Student</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a href="mailto:dulfodaphne08@gmail.com" className="px-8 py-4 bg-(--card) border border-(--border) rounded-full font-bold hover:border-(--accent) transition-colors flex items-center gap-2 text-white">
            📧 Email Me
          </a>
          <a href="https://github.com/dulfodaphne08-tech" target="_blank" rel="noreferrer" className="px-8 py-4 bg-(--card) border border-(--border) rounded-full font-bold hover:border-(--accent) transition-colors flex items-center gap-2 text-white">
            💻 GitHub
          </a>
          <a href="https://www.facebook.com/share/19c8UTaNGX/" target="_blank" rel="noreferrer" className="px-8 py-4 bg-(--card) border border-(--border) rounded-full font-bold hover:border-(--accent) transition-colors flex items-center gap-2 text-white">
            📘 Facebook
          </a>
        </div>

        <a href="mailto:dulfodaphne08@gmail.com" className="inline-block px-10 py-5 bg-(--accent) text-white text-lg font-bold rounded-full hover:scale-105 transition-transform">
          Get In Touch →
        </a>
      </motion.div>
    </section>
  );
}
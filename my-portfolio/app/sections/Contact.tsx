"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-[#111111] text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white">Let's Connect.</h2>
          <p className="text-gray-400 font-medium text-lg">I'm currently looking for OJT and part-time opportunities where I can gain practical experience.</p>
        </motion.div>

        <motion.form initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-[#1a1a1a] p-8 md:p-12 rounded-[2rem] border border-gray-800 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold text-gray-400 mb-2">Your Name</label>
              <input type="text" className="w-full bg-[#222] border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#FF3366] transition-colors font-medium" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-400 mb-2">Your Email</label>
              <input type="email" className="w-full bg-[#222] border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#FF3366] transition-colors font-medium" placeholder="john@example.com" />
            </div>
          </div>
          <div className="mb-8">
            <label className="block text-sm font-bold text-gray-400 mb-2">Message</label>
            <textarea rows={5} className="w-full bg-[#222] border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#FF3366] transition-colors font-medium" placeholder="What would you like to say?"></textarea>
          </div>
          <button type="button" className="w-full py-5 bg-[#FF3366] text-white font-black text-lg rounded-xl hover:bg-white hover:text-[#111] transition-all shadow-xl shadow-pink-500/20">
            Send Message →
          </button>
        </motion.form>
      </div>
    </section>
  );
}
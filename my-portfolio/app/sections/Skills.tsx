"use client";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-[#f4f4f5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center text-black">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-6 rounded-2xl border border-gray-200">
            <h3 className="font-bold text-[#FF3366] mb-4">Web Development</h3>
            <ul className="space-y-2 text-black font-medium">
              <li>HTML</li><li>CSS</li><li>JavaScript</li><li>Tailwind CSS</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white p-6 rounded-2xl border border-gray-200">
            <h3 className="font-bold text-[#FF3366] mb-4">Database & Data</h3>
            <ul className="space-y-2 text-black font-medium">
              <li>MySQL</li><li>Supabase</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white p-6 rounded-2xl border border-gray-200">
            <h3 className="font-bold text-[#FF3366] mb-4">Development Tools</h3>
            <ul className="space-y-2 text-black font-medium">
              <li>VS Code</li><li>GitHub</li><li>AI-Assisted Dev</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white p-6 rounded-2xl border border-gray-200">
            <h3 className="font-bold text-[#FF3366] mb-4">AI Tools</h3>
            <ul className="space-y-2 text-black font-medium">
              <li>Gemini</li><li>DeepSeek</li><li>OpenCode</li>
            </ul>
          </motion.div>

        </div>
        <p className="text-center text-sm text-gray-500 max-w-2xl mx-auto bg-white p-4 rounded-xl border border-gray-200">
          I use AI-assisted tools as learning and development aids for research, debugging, understanding concepts, and exploring possible solutions.
        </p>
      </div>
    </section>
  );
}
"use client";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <>
      <section id="skills" className="py-32 px-6 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-16 text-center text-black tracking-tight">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#f4f4f5] p-8 rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-xl transition-shadow">
              <h3 className="font-black text-[#FF3366] mb-6 uppercase tracking-widest text-sm">Web Dev</h3>
              <ul className="space-y-3 text-black font-bold text-lg">
                <li className="flex items-center gap-2">🟧 HTML</li>
                <li className="flex items-center gap-2">🟦 CSS</li>
                <li className="flex items-center gap-2">🟨 JavaScript</li>
                <li className="flex items-center gap-2">🌊 Tailwind CSS</li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#f4f4f5] p-8 rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-xl transition-shadow">
              <h3 className="font-black text-[#FF3366] mb-6 uppercase tracking-widest text-sm">Database</h3>
              <ul className="space-y-3 text-black font-bold text-lg">
                <li className="flex items-center gap-2">🐬 MySQL</li>
                <li className="flex items-center gap-2">⚡ Supabase</li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-[#f4f4f5] p-8 rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-xl transition-shadow">
              <h3 className="font-black text-[#FF3366] mb-6 uppercase tracking-widest text-sm">Tools</h3>
              <ul className="space-y-3 text-black font-bold text-lg">
                <li className="flex items-center gap-2">💻 VS Code</li>
                <li className="flex items-center gap-2">🐙 GitHub</li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-[#f4f4f5] p-8 rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-xl transition-shadow">
              <h3 className="font-black text-[#FF3366] mb-6 uppercase tracking-widest text-sm">AI Tools</h3>
              <ul className="space-y-3 text-black font-bold text-lg">
                <li className="flex items-center gap-2">✨ Gemini</li>
                <li className="flex items-center gap-2">🐋 DeepSeek</li>
              </ul>
            </motion.div>
          </div>
          <p className="text-center text-sm font-medium text-gray-500 max-w-2xl mx-auto bg-[#f4f4f5] p-5 rounded-2xl border border-gray-200 shadow-sm">
            I use AI-assisted tools as learning and development aids for research, debugging, understanding concepts, and exploring possible solutions.
          </p>
        </div>
      </section>

      {/* CURRENTLY LEARNING SECTION */}
      <section className="py-32 px-6 bg-[#111] text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-16 text-center tracking-tighter">Currently Learning</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              { title: "JavaScript", desc: "Improving programming logic and interactive web functionality." },
              { title: "Backend Development", desc: "Learning more about how systems process and manage data." },
              { title: "Database Management", desc: "Strengthening my understanding of MySQL and Supabase." },
              { title: "Responsive Web Design", desc: "Improving layouts and experiences across different devices." },
              { title: "Git & GitHub", desc: "Improving version control and project workflow." },
            ].map((item, i) => (
              <motion.div 
                key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-[#1a1a1a] p-8 rounded-3xl border border-gray-800"
              >
                <h3 className="text-xl font-bold text-[#FF3366] mb-2">{item.title}</h3>
                <p className="text-gray-400 font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="text-center text-2xl md:text-4xl font-black leading-tight text-white max-w-3xl mx-auto"
          >
            "I'm not finished learning—<br/>and that's exactly what <span className="text-[#FF3366]">motivates me.</span>"
          </motion.p>
        </div>
      </section>
    </>
  );
}
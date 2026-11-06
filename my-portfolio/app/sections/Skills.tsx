"use client";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-[#050505] border-y border-(--border)">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Tech Skills */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-black mb-10 tracking-tight text-white">Technical Skills</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-bold text-(--accent) uppercase tracking-widest mb-4">Frontend</h3>
              <div className="flex gap-3 flex-wrap">
                {["HTML", "CSS", "JavaScript", "Tailwind CSS"].map(s => <span key={s} className="px-5 py-2 bg-(--card) border border-(--border) rounded-full font-medium text-white">{s}</span>)}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-(--accent) uppercase tracking-widest mb-4">Database</h3>
              <div className="flex gap-3 flex-wrap">
                {["MySQL", "Supabase"].map(s => <span key={s} className="px-5 py-2 bg-(--card) border border-(--border) rounded-full font-medium text-white">{s}</span>)}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-(--accent) uppercase tracking-widest mb-4">Development</h3>
              <div className="flex gap-3 flex-wrap">
                {["GitHub", "VS Code", "AI-Assisted Dev"].map(s => <span key={s} className="px-5 py-2 bg-(--card) border border-(--border) rounded-full font-medium text-white">{s}</span>)}
              </div>
            </div>
          </div>
          <p className="mt-8 text-sm text-(--muted) border-l-2 border-(--accent) pl-4">Note: I use AI-assisted tools (Gemini, DeepSeek) as learning and development aids for research, debugging, and exploring solutions.</p>
        </motion.div>

        {/* Soft Skills */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-12">
          <div>
            <h2 className="text-3xl font-black mb-6 text-white">How I Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { t: "Problem Solving", d: "Understanding the issue and testing solutions." },
                { t: "Teamwork", d: "Contributing to shared project goals." },
                { t: "Adaptability", d: "Learning new tools as requirements change." },
                { t: "Communication", d: "Clear discussion of ideas and tasks." },
              ].map((s, i) => (
                <div key={i} className="p-4 bg-(--card) rounded-xl border border-(--border)">
                  <h4 className="font-bold mb-1 text-white">{s.t}</h4>
                  <p className="text-sm text-(--muted)">{s.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black mb-4 text-white">Currently Learning</h2>
            <p className="text-(--muted) mb-6">I'm continuously expanding my technical knowledge through hands-on practice.</p>
            <div className="flex gap-2 flex-wrap">
              {["JavaScript", "Backend Dev", "Database Mgmt", "Supabase", "Tailwind", "Git & GitHub"].map(s => (
                <span key={s} className="px-4 py-2 bg-[#1a1a1a] text-sm rounded-md border border-[#333] text-white">{s}</span>
              ))}
            </div>
            <p className="mt-6 text-(--accent) font-semibold">I'm not finished learning—and that's exactly what motivates me.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
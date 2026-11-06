"use client";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-white border-y border-(--border)">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Tech Skills */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tight text-black">Technical Skills</h2>
          <div className="space-y-10">
            <div>
              <h3 className="text-sm font-bold text-(--accent) uppercase tracking-widest mb-4">Frontend</h3>
              <div className="flex gap-3 flex-wrap">
                {["HTML", "CSS", "JavaScript", "Tailwind CSS"].map(s => <span key={s} className="px-6 py-3 bg-(--background) border border-(--border) rounded-full font-bold text-black hover:border-(--accent) transition-colors">{s}</span>)}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-(--accent) uppercase tracking-widest mb-4">Database</h3>
              <div className="flex gap-3 flex-wrap">
                {["MySQL", "Supabase"].map(s => <span key={s} className="px-6 py-3 bg-(--background) border border-(--border) rounded-full font-bold text-black hover:border-(--accent) transition-colors">{s}</span>)}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-(--accent) uppercase tracking-widest mb-4">Development Tools</h3>
              <div className="flex gap-3 flex-wrap">
                {["GitHub", "VS Code", "AI-Assisted Dev"].map(s => <span key={s} className="px-6 py-3 bg-(--background) border border-(--border) rounded-full font-bold text-black hover:border-(--accent) transition-colors">{s}</span>)}
              </div>
            </div>
          </div>
          <p className="mt-10 text-sm text-(--muted) bg-(--background) p-4 rounded-xl border-l-4 border-(--accent)">Note: I use AI-assisted tools (Gemini, DeepSeek) as learning and development aids for research, debugging, and exploring solutions.</p>
        </motion.div>

        {/* Soft Skills & Learning */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-16">
          <div>
            <h2 className="text-3xl font-black mb-8 text-black">How I Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { t: "Problem Solving", d: "Understanding the issue and testing solutions." },
                { t: "Teamwork", d: "Contributing to shared project goals." },
                { t: "Adaptability", d: "Learning new tools as requirements change." },
                { t: "Communication", d: "Clear discussion of ideas and tasks." },
              ].map((s, i) => (
                <div key={i} className="p-5 bg-(--background) rounded-2xl border border-(--border)">
                  <h4 className="font-bold mb-2 text-black">{s.t}</h4>
                  <p className="text-sm text-(--muted) leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black mb-4 text-black">Currently Learning</h2>
            <p className="text-(--muted) mb-6 leading-relaxed">I'm continuously expanding my technical knowledge and improving through hands-on practice.</p>
            <div className="flex gap-2 flex-wrap">
              {["JavaScript", "Backend Dev", "Database Mgmt", "Supabase", "Tailwind", "Git & GitHub"].map(s => (
                <span key={s} className="px-4 py-2 bg-gray-100 text-sm font-bold rounded-md text-black">{s}</span>
              ))}
            </div>
            <p className="mt-6 text-(--accent) font-black text-lg">I'm not finished learning—and that's exactly what motivates me.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
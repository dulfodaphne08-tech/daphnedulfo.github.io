"use client";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="py-32 px-6 bg-[#f4f4f5]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black mb-16 text-center text-black tracking-tighter">My Background</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education Column */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-black mb-8 text-black border-b border-gray-300 pb-4">Education</h3>
            <div className="space-y-8">
              {[
                { year: "2024 — Present", title: "Eastern Samar State University", desc: "Bachelor of Science in Information Technology (3rd Year)" },
                { year: "Senior High School", title: "HUMSS", desc: "Grade 12 (High Honors) | Grade 11 (Honors)" },
                { year: "Junior High School", title: "Grades 7–10", desc: "With Honors" },
                { year: "Elementary", title: "Graduated With Honors", desc: "" },
              ].map((edu, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-[#FF3366]">
                  <span className="text-sm font-bold text-[#FF3366] uppercase tracking-wider block mb-1">{edu.year}</span>
                  <h4 className="text-xl font-bold text-black">{edu.title}</h4>
                  <p className="text-gray-500 font-medium">{edu.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Column */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-black mb-8 text-black border-b border-gray-300 pb-4">Achievements</h3>
            <div className="space-y-4">
              {[
                { icon: "🏆", title: "Academic Excellence", sub: "With Honors (Elementary)" },
                { icon: "🏆", title: "Consistent Honors", sub: "With Honors (Grades 7–10)" },
                { icon: "🎓", title: "Senior High Achievement", sub: "With Honors (Grade 11)" },
                { icon: "🎓", title: "Senior High Achievement", sub: "With High Honors (Grade 12)" },
                { icon: "🏅", title: "Athlete of the Year", sub: "Grade 11 & Grade 12" },
              ].map((a, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:border-[#FF3366] transition-colors">
                  <div className="text-3xl">{a.icon}</div>
                  <div>
                    <h4 className="font-bold text-black">{a.title}</h4>
                    <p className="text-sm text-gray-500 font-medium">{a.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
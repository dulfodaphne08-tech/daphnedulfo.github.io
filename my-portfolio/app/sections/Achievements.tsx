"use client";
import { motion } from "framer-motion";

const achievements = [
  { icon: "🏆", title: "Academic Excellence", sub: "With Honors (Elementary)" },
  { icon: "🏆", title: "Consistent Honors", sub: "With Honors (Grades 7–10)" },
  { icon: "🎓", title: "Senior High Achievement", sub: "With Honors (Grade 11)" },
  { icon: "🎓", title: "Senior High Achievement", sub: "With High Honors (Grade 12)" },
  { icon: "🏅", title: "Athlete of the Year", sub: "Grade 11" },
  { icon: "🏅", title: "Athlete of the Year", sub: "Grade 12" },
];

export default function Achievements() {
  return (
    <section className="py-32 px-6 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black mb-16 text-center tracking-tight text-black">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <motion.div 
              key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }}
              className="p-6 bg-[#f4f4f5] border border-gray-200 rounded-2xl flex items-center gap-5 hover:border-[#FF3366] transition-colors group"
            >
              <div className="text-4xl group-hover:scale-125 transition-transform">{a.icon}</div>
              <div>
                <h3 className="font-black text-black text-lg">{a.title}</h3>
                <p className="text-sm text-gray-500 font-bold">{a.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
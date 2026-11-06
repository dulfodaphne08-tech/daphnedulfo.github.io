"use client";
import { motion } from "framer-motion";

const education = [
  { year: "2024 — Present", title: "Eastern Samar State University", desc: "Bachelor of Science in Information Technology (3rd Year)" },
  { year: "Senior High School", title: "HUMSS", desc: "Grade 12 - With High Honors, Athlete of the Year | Grade 11 - With Honors, Athlete of the Year" },
  { year: "Junior High School", title: "Grades 7–10", desc: "With Honors" },
  { year: "Elementary", title: "Graduated With Honors", desc: "" },
];

export default function Education() {
  return (
    <section className="py-32 px-6 bg-white border-y border-gray-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black mb-16 text-center text-black tracking-tighter">My Education</h2>
        
        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row gap-6 md:gap-12 p-8 bg-[#f4f4f5] rounded-3xl border border-gray-200 hover:border-[#FF3366] transition-colors group"
            >
              <div className="md:w-1/3">
                <span className="text-sm font-bold text-[#FF3366] uppercase tracking-wider block">{edu.year}</span>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-black text-black mb-2">{edu.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed">{edu.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
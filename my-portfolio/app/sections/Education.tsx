"use client";
import { motion } from "framer-motion";

const education = [
  { year: "2026 — Present", title: "Eastern Samar State University", desc: "Bachelor of Science in Information Technology (3rd Year)" },
  { year: "Senior High School", title: "HUMSS", desc: "Grade 12 - With High Honors, Athlete of the Year | Grade 11 - With Honors, Athlete of the Year" },
  { year: "Junior High School", title: "Grades 7–10", desc: "With Honors" },
  { year: "Elementary", title: "Graduated With Honors", desc: "" },
];

export default function Education() {
  return (
    <section className="py-32 px-6 relative bg-(--background)">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-20 text-center tracking-tight text-black">My Education</h2>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-(--border) transform md:-translate-x-1/2"></div>
          
          {education.map((edu, i) => (
            <motion.div 
              key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
              className={`relative flex items-center justify-between md:justify-normal w-full mb-16 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="hidden md:block w-5/12"></div>
              
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-5 h-5 bg-(--accent) rounded-full transform -translate-x-2.25 md:-translate-x-1/2 z-10 border-4 border-(--background) shadow-[0_0_15px_var(--accent)]"></div>
              
              <div className="w-full pl-12 md:pl-0 md:w-5/12">
                <div className={`p-8 bg-white border border-(--border) rounded-3xl shadow-lg hover:shadow-xl transition-shadow ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <span className="text-(--accent) text-sm font-bold tracking-wider uppercase block mb-2">{edu.year}</span>
                  <h3 className="text-2xl font-bold text-black mb-2">{edu.title}</h3>
                  <p className="text-(--muted) text-sm leading-relaxed">{edu.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
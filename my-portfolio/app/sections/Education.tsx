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
    <section className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-black mb-16 text-center tracking-tight text-white">My Education</h2>
        <div className="relative">
          <div className="timeline-line"></div>
          {education.map((edu, i) => (
            <motion.div 
              key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
              className={`relative flex items-center justify-between md:justify-normal w-full mb-16 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="hidden md:block w-5/12"></div>
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-(--accent) rounded-full transform -translate-x-1/2 z-10 shadow-[0_0_15px_var(--accent)]"></div>
              <div className="w-full pl-12 md:pl-0 md:w-5/12">
                <div className={`p-6 bg-(--card) border border-(--border) rounded-2xl ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <span className="text-(--accent) text-sm font-bold">{edu.year}</span>
                  <h3 className="text-xl font-bold mt-1 text-white">{edu.title}</h3>
                  <p className="text-(--muted) text-sm mt-2">{edu.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
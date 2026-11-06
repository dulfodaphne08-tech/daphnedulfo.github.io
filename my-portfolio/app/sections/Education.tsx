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
    <section className="py-32 px-6 bg-[#f4f4f5] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-black tracking-tight">My Education</h2>
          <p className="text-gray-500 text-lg">The academic journey that shaped my technical foundation.</p>
        </motion.div>
        
        <div className="relative">
          {/* The vertical center line (hidden on mobile) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-300 -translate-x-1/2"></div>
          
          {/* The vertical line for mobile */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-[2px] bg-gray-300"></div>

          {education.map((edu, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className={`relative flex items-center justify-between w-full mb-16 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Empty space for desktop layout */}
              <div className="hidden md:block w-[45%]"></div>
              
              {/* The dot on the timeline */}
              <div className="absolute left-4 md:left-1/2 w-5 h-5 bg-[#FF3366] rounded-full border-4 border-[#f4f4f5] transform -translate-x-1/2 z-10 shadow-md"></div>
              
              {/* The card */}
              <div className="w-full pl-12 md:pl-0 md:w-[45%]">
                <div className={`bg-white p-8 rounded-3xl border border-gray-200 shadow-lg hover:shadow-xl hover:border-[#FF3366] transition-all ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <span className="text-sm font-bold text-[#FF3366] uppercase tracking-widest block mb-3">{edu.year}</span>
                  <h3 className="text-2xl font-extrabold text-black mb-2">{edu.title}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed">{edu.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
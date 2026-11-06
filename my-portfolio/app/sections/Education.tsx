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
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black mb-20 text-center text-black tracking-tighter">My Education</h2>
        
        <div className="relative border-l-2 border-gray-300 ml-4 md:ml-0 md:left-1/2">
          {education.map((edu, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`mb-12 relative pl-10 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right md:-ml-[50%]" : "md:pl-16 md:ml-[50%]"}`}
            >
              {/* The Dot */}
              <div className={`absolute w-6 h-6 bg-[#FF3366] rounded-full border-4 border-white shadow-md top-2 ${i % 2 === 0 ? "left-[-13px] md:left-auto md:right-[-13px]" : "left-[-13px] md:left-[-13px]"}`}></div>
              
              <div className="bg-[#f4f4f5] p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#FF3366] transition-all">
                <span className="text-sm font-black text-[#FF3366] uppercase tracking-widest block mb-3">{edu.year}</span>
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
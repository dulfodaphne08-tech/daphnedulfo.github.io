"use client";

import { motion } from "framer-motion";

const education = [
  {
    year: "2024 — Present",
    title: "Eastern Samar State University",
    desc: "Bachelor of Science in Information Technology (3rd Year)",
  },
  {
    year: "Senior High School",
    title: "HUMSS",
    desc: "Grade 12 - With High Honors, Athlete of the Year | Grade 11 - With Honors, Athlete of the Year",
  },
  {
    year: "Junior High School",
    title: "Grades 7–10",
    desc: "With Honors",
  },
  {
    year: "Elementary",
    title: "Graduated With Honors",
    desc: "Academic achievement award",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-32 px-6 bg-[#f4f4f5]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black mb-16 text-center text-black tracking-tighter">
          My Education
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 -translate-x-1/2" />

          {education.map((edu, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1 }}
                className="relative mb-10 pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12"
              >
                <div
                  className={
                    isLeft
                      ? "md:col-start-1 md:text-right"
                      : "md:col-start-2"
                  }
                >
                  <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-shadow">
                    <span className="text-sm font-black text-[#FF3366] uppercase tracking-widest block mb-2">
                      {edu.year}
                    </span>
                    <h3 className="text-2xl font-black text-black mb-2">
                      {edu.title}
                    </h3>
                    <p className="text-gray-600 font-medium leading-relaxed">
                      {edu.desc}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <span className="absolute left-4 md:left-1/2 top-8 h-5 w-5 -translate-x-1/2 rounded-full bg-[#FF3366] ring-4 ring-[#f4f4f5]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
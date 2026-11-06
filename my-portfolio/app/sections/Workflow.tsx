"use client";
import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Understand", desc: "Understand the requirements and identify the problem." },
  { num: "02", title: "Plan", desc: "Think about the pages, features, data, and overall structure." },
  { num: "03", title: "Build", desc: "Develop the interface and system functionality." },
  { num: "04", title: "Test", desc: "Check features, identify errors, and fix problems." },
  { num: "05", title: "Improve", desc: "Refine the design, functionality, and user experience." },
  { num: "06", title: "Learn", desc: "Document what worked, what didn't, and what I can improve next time." },
];

export default function Workflow() {
  return (
    <section className="py-32 px-6 bg-[#f4f4f5]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center text-black">How I Approach a Project</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div 
              key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm relative"
            >
              <span className="text-4xl font-black text-[#FF3366]/20 absolute top-6 right-6">{step.num}</span>
              <h3 className="text-xl font-bold mb-2 text-black mt-4">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
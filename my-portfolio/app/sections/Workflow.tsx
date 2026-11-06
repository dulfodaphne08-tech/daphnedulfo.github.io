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
    <section className="py-32 px-6 bg-white border-y border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter">How I Approach a Project</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-[#f4f4f5] p-8 rounded-3xl border border-gray-200 relative overflow-hidden group hover:bg-white hover:shadow-xl transition-all"
            >
              <span className="text-6xl font-black text-black/5 absolute top-4 right-4 group-hover:text-[#FF3366]/10 transition-colors">{step.num}</span>
              <h3 className="text-2xl font-black mb-3 text-black relative z-10">{step.title}</h3>
              <p className="text-gray-600 font-medium leading-relaxed relative z-10">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
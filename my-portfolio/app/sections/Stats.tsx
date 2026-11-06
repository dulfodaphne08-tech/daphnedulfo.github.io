"use client";
import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: "3rd Year", label: "BSIT Student" },
    { value: "3+", label: "Academic Projects" },
    { value: "2024–Present", label: "College Journey" },
    { value: "Continuous", label: "Learning" },
  ];

  return (
    <section className="border-y border-(--border) bg-white relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-(--border)">
        {stats.map((stat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="p-10 text-center hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-3xl font-black mb-2 text-black">{stat.value}</h3>
            <p className="text-sm font-semibold tracking-wide text-(--muted) uppercase">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
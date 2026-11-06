"use client";
import { motion } from "framer-motion";

const services = [
  { icon: "🌐", title: "Web Development", desc: "Building responsive web interfaces using HTML, CSS, JavaScript, and Tailwind CSS." },
  { icon: "🗄️", title: "Database & Data", desc: "Working with databases and data management using MySQL and Supabase." },
  { icon: "🧩", title: "System Development", desc: "Developing academic systems that address specific user and organizational requirements." },
  { icon: "🤝", title: "Collaborative Dev", desc: "Working with teammates to plan, develop, test, and improve projects." },
];

export default function Services() {
  return (
    <section className="py-32 px-6 bg-[#050505] border-y border-(--border)">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black mb-16 text-center tracking-tight text-white">What I Work With</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className="p-8 bg-(--card) border border-(--border) rounded-2xl hover:border-(--accent) transition-colors group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">{s.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{s.title}</h3>
              <p className="text-(--muted) text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
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
    <section className="py-32 px-6 bg-white border-y border-(--border)">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-black">What I Work With</h2>
          <p className="text-(--muted) max-w-xl mx-auto">The tools and technologies I use to bring ideas to life and solve problems.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className="p-8 bg-(--background) border border-(--border) rounded-2xl hover:border-(--accent) hover:shadow-xl transition-all group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform origin-left">{s.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-black">{s.title}</h3>
              <p className="text-(--muted) text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
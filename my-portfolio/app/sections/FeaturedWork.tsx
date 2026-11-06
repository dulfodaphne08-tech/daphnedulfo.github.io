"use client";
import { motion } from "framer-motion";

export default function FeaturedWork() {
  const otherProjects = [
    { title: "Event Planner System", year: "First Year", role: "Web Developer", desc: "My first academic web project, learning the fundamentals of web development, interface design, and collaborative development.", skills: ["HTML", "CSS", "JavaScript"] },
    { title: "Crochet Creation System", year: "Second Year", role: "System Developer", desc: "A web-based system that helped me develop my understanding of system design, databases, user interfaces, and teamwork.", skills: ["Web Dev", "Database", "System Design"] }
  ];

  return (
    <section id="work" className="py-32 px-6 bg-[#f4f4f5]">
      <div className="max-w-6xl mx-auto">
        
        {/* 1. THE FEATURED PROJECT */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-24">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1.5 bg-[#FF3366] text-white text-xs font-bold rounded-full tracking-widest uppercase">Featured Project</span>
            <span className="text-gray-400 text-sm font-bold tracking-widest uppercase">Third Year</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-8 text-black leading-tight tracking-tighter">
            QR-Based Transport Ticketing & Fee Collection System
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Role</h4>
              <p className="font-bold text-black text-lg">Backend Developer</p>
              <p className="font-bold text-black text-lg">Database Admin</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm md:col-span-2">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "Tailwind CSS", "Supabase", "MySQL", "GitHub"].map(t => (
                  <span key={t} className="px-4 py-2 bg-[#f4f4f5] border border-gray-200 rounded-lg text-sm font-bold text-black">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-black mb-4 text-black">About the Project</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                A web-based academic project developed for transport terminal operations in Borongan City. The system focuses on managing driver information, QR-based identification, prepaid balances, transport transactions, payment records, vehicle information, and administrative monitoring.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-black mb-4 text-black">My Contribution</h3>
              <ul className="text-gray-600 leading-relaxed space-y-2 font-medium">
                <li className="flex gap-2"><span className="text-[#FF3366]">✓</span> Backend-related functionality</li>
                <li className="flex gap-2"><span className="text-[#FF3366]">✓</span> Database management & storage</li>
                <li className="flex gap-2"><span className="text-[#FF3366]">✓</span> Driver/vehicle records management</li>
                <li className="flex gap-2"><span className="text-[#FF3366]">✓</span> Data validation & testing</li>
              </ul>
            </div>
          </div>

          <div className="mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {/* Replace with actual screenshots */}
               <motion.div whileHover={{ scale: 1.02 }} className="aspect-video bg-gray-300 rounded-2xl flex items-center justify-center text-gray-500 font-bold">Login Screen</motion.div>
               <motion.div whileHover={{ scale: 1.02 }} className="aspect-video bg-gray-300 rounded-2xl flex items-center justify-center text-gray-500 font-bold">Driver Dashboard</motion.div>
            </div>
          </div>

          <a href="#contact" className="inline-block px-10 py-5 bg-black text-white font-black text-lg rounded-full hover:scale-105 transition-transform shadow-2xl">
            View Project Details →
          </a>
        </motion.div>

        {/* 2. OTHER PROJECTS */}
        <div className="border-t border-gray-300 pt-20">
          <h2 className="text-3xl md:text-5xl font-black mb-12 text-black tracking-tighter">Other Academic Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((p, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-[#FF3366] uppercase tracking-widest">{p.year}</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{p.role}</span>
                  </div>
                  <h3 className="text-2xl font-black text-black mb-3">{p.title}</h3>
                  <p className="text-gray-600 font-medium mb-6 leading-relaxed">{p.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.skills.map(s => (
                      <span key={s} className="px-3 py-1 bg-[#f4f4f5] text-xs font-bold rounded-md text-black">{s}</span>
                    ))}
                  </div>
                </div>

                <button className="w-full py-4 bg-[#f4f4f5] text-black font-bold rounded-xl group-hover:bg-black group-hover:text-white transition-colors">
                  View Project →
                </button>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
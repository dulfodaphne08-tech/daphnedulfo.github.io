"use client";
import { motion } from "framer-motion";

export default function FeaturedWork() {
  return (
    <section id="work" className="py-32 px-6 bg-white border-y border-gray-200">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1.5 bg-[#FF3366] text-white text-xs font-bold rounded-full tracking-widest uppercase">Featured Project</span>
            <span className="text-gray-400 text-sm font-bold tracking-widest uppercase">Third Year</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-12 text-black leading-tight tracking-tighter">
            QR-Based Transport Ticketing & Fee Collection System
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-[#f4f4f5] p-8 rounded-3xl border border-gray-200">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Role</h4>
              <p className="font-bold text-black text-xl">Backend Developer</p>
              <p className="font-bold text-black text-xl">Database Admin</p>
            </div>
            <div className="bg-[#f4f4f5] p-8 rounded-3xl border border-gray-200 md:col-span-2">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "Tailwind CSS", "Supabase", "MySQL", "GitHub"].map(t => (
                  <span key={t} className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-bold text-black shadow-sm">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-black mb-4 text-black">About the Project</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                A web-based academic project developed for transport terminal operations in Borongan City. The system focuses on managing driver information, QR-based identification, prepaid balances, transport transactions, payment/reference records, vehicle information, and administrative monitoring.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-black mb-4 text-black">My Contribution</h3>
              <ul className="text-gray-600 leading-relaxed space-y-3 text-lg">
                <li className="flex gap-2"><span className="text-[#FF3366]">✓</span> Backend-related functionality</li>
                <li className="flex gap-2"><span className="text-[#FF3366]">✓</span> Database management & data storage/retrieval</li>
                <li className="flex gap-2"><span className="text-[#FF3366]">✓</span> Driver and vehicle records management</li>
                <li className="flex gap-2"><span className="text-[#FF3366]">✓</span> Transaction-related data & prepaid balances</li>
                <li className="flex gap-2"><span className="text-[#FF3366]">✓</span> Data updating, validation, testing, and debugging</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-black mb-6 text-black">Project Screenshots</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {/* Replace these divs with actual <img> tags of your screenshots */}
               <motion.div whileHover={{ scale: 1.02 }} className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 font-bold border border-gray-300">Login Screen</motion.div>
               <motion.div whileHover={{ scale: 1.02 }} className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 font-bold border border-gray-300">Driver Dashboard</motion.div>
               <motion.div whileHover={{ scale: 1.02 }} className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 font-bold border border-gray-300">QR Section</motion.div>
               <motion.div whileHover={{ scale: 1.02 }} className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 font-bold border border-gray-300">Admin Dashboard</motion.div>
            </div>
          </div>

          <button className="px-10 py-5 bg-black text-white font-black text-lg rounded-full hover:scale-105 transition-transform shadow-2xl flex items-center gap-3">
            View Project Details 
            <span className="text-[#FF3366]">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
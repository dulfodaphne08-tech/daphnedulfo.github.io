"use client";
import { motion } from "framer-motion";

export default function FeaturedWork() {
  return (
    <section id="work" className="py-32 px-6 bg-white border-y border-gray-200">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-[#FF3366] font-bold tracking-widest text-sm uppercase mb-2 block">Featured Project</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-black">QR-Based Transport Ticketing & Fee Collection System</h2>
          <p className="text-gray-500 font-semibold mb-8">Third Year · Academic Project</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-[#f4f4f5] p-6 rounded-2xl">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Role</h4>
              <p className="font-bold text-black text-lg">Backend Developer</p>
              <p className="font-bold text-black text-lg">Database Administrator</p>
            </div>
            <div className="bg-[#f4f4f5] p-6 rounded-2xl md:col-span-2">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "Tailwind CSS", "Supabase", "MySQL", "GitHub"].map(t => (
                  <span key={t} className="px-3 py-1 bg-white border border-gray-200 rounded-md text-sm font-semibold">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-black">About the Project</h3>
              <p className="text-gray-500 leading-relaxed">
                A web-based academic project developed for transport terminal operations in Borongan City. The system focuses on managing driver information, QR-based identification, prepaid balances, transport transactions, payment/reference records, vehicle information, and administrative monitoring.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-black">My Contribution</h3>
              <ul className="text-gray-500 leading-relaxed space-y-2 list-disc pl-5">
                <li>Backend-related functionality</li>
                <li>Database management & data storage/retrieval</li>
                <li>Driver and vehicle records</li>
                <li>Transaction-related data & prepaid balances</li>
                <li>Data updating, validation, testing, and debugging</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-black">Project Screenshots</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {/* REPLACE THESE WITH YOUR ACTUAL SCREENSHOTS */}
               <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 font-bold">Login Screen</div>
               <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 font-bold">Driver Dashboard</div>
               <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 font-bold">QR Section</div>
               <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 font-bold">Admin Dashboard</div>
            </div>
          </div>

          <button className="px-8 py-4 bg-[#FF3366] text-white font-bold rounded-full hover:scale-105 transition-transform shadow-xl shadow-pink-500/30">
            View Project Details →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
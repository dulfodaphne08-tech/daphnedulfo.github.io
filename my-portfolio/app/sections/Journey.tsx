"use client";
import { motion } from "framer-motion";

export default function Journey() {
  return (
    <section id="journey" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tight text-white">My Journey in IT</h2>
        
        <div className="space-y-24">
          {/* First Year */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative pl-8 md:pl-0">
            <h3 className="text-(--accent) text-6xl font-black absolute -top-8 -left-4 opacity-20 pointer-events-none">01</h3>
            <div className="md:grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-2xl font-bold mb-2 text-white">Starting From the Basics</h4>
                <h5 className="text-xl mb-4 text-(--muted)">Event Planner System</h5>
                <p className="text-(--muted) mb-6">My first-year project introduced me to web development and system creation. It helped me understand how interfaces are structured and how to work with a team to complete a system.</p>
                <div className="flex gap-2 flex-wrap">
                  {["HTML", "CSS", "JavaScript", "Teamwork"].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-(--card) border border-(--border) rounded-full text-xs font-bold text-white">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="mt-8 md:mt-0 h-64 bg-(--card) rounded-2xl border border-(--border) flex items-center justify-center text-(--muted)">Project Screenshot Here</div>
            </div>
          </motion.div>

          {/* Third Year - Featured */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative pl-8 md:pl-0 bg-(--card) p-8 md:p-12 rounded-3xl border border-(--border) mt-12">
            <h3 className="text-(--accent) text-6xl font-black absolute -top-8 -left-4 opacity-20 pointer-events-none">03</h3>
            <span className="text-(--accent) font-bold tracking-widest text-sm uppercase">Featured Project</span>
            <h4 className="text-3xl font-bold mt-2 mb-4 text-white">QR-Based Transport Ticketing & Fee Collection System</h4>
            <p className="text-(--muted) mb-6 text-lg">Designed for the Borongan City Transportation Terminal. The system focuses on QR-based driver identification, prepaid balance management, transport transactions, payment records, and terminal management.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-[#0a0a0a] p-6 rounded-xl border border-(--border)">
                <h5 className="font-bold text-(--accent) mb-2">My Role</h5>
                <p className="text-sm text-(--muted)">Backend Developer & Database Administrator. Responsible for backend functionality, database management, and data handling.</p>
              </div>
              <div className="bg-[#0a0a0a] p-6 rounded-xl border border-(--border)">
                 <h5 className="font-bold text-(--accent) mb-2">Technologies Used</h5>
                 <div className="flex gap-2 flex-wrap">
                  {["HTML", "CSS", "JavaScript", "Tailwind", "Supabase", "MySQL", "GitHub"].map(tag => (
                    <span key={tag} className="px-2 py-1 bg-(--card) border border-(--border) rounded-md text-xs text-white">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="h-64 md:h-96 bg-[#0a0a0a] rounded-2xl border border-(--border) flex items-center justify-center text-(--muted)">Multiple Project Screenshots Here</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
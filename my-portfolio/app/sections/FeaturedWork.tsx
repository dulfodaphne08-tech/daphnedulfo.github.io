"use client";
import { motion } from "framer-motion";

export default function FeaturedWork() {
  const allProjects = [
    { 
      title: "QR Transport Ticketing", 
      year: "Third Year", 
      role: "Backend & Database Admin", 
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      title: "Crochet Creation System", 
      year: "Second Year", 
      role: "System Developer", 
      img: "https://images.unsplash.com/photo-1615715917286-3fb6bb3eb372?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      title: "Event Planner System", 
      year: "First Year", 
      role: "Web Developer", 
      img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop" 
    }
  ];

  return (
    <section id="work" className="py-32 bg-[#f4f4f5] border-y border-gray-200 overflow-hidden">
      
      {/* =========================================
          1. THE FEATURED PROJECT (Case Study)
          ========================================= */}
      <div className="max-w-6xl mx-auto px-6 mb-32">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1.5 bg-[#FF3366] text-white text-xs font-bold rounded-full tracking-widest uppercase shadow-md shadow-pink-500/30">Featured Project</span>
            <span className="text-gray-500 text-sm font-bold tracking-widest uppercase">Third Year</span>
          </div>

          <h2 className="text-4xl md:text-7xl font-extrabold mb-10 text-black leading-[1.1] tracking-tight">
            QR-Based Transport Ticketing & Fee Collection System
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Role</h4>
              <p className="font-extrabold text-black text-xl mb-1">Backend Developer</p>
              <p className="font-extrabold text-black text-xl">Database Administrator</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm md:col-span-2">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "Tailwind CSS", "Supabase", "MySQL", "GitHub"].map(t => (
                  <span key={t} className="px-4 py-2 bg-[#f4f4f5] border border-gray-200 rounded-lg text-sm font-bold text-black">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-extrabold mb-4 text-black">About the Project</h3>
              <p className="text-gray-600 leading-relaxed font-medium text-lg">
                A web-based academic project developed for transport terminal operations in Borongan City. The system focuses on managing driver information, QR-based identification, prepaid balances, transport transactions, payment records, vehicle information, and administrative monitoring.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-extrabold mb-4 text-black">My Contribution</h3>
              <ul className="text-gray-600 leading-relaxed space-y-3 font-medium text-lg">
                <li className="flex gap-3"><span className="text-[#FF3366] font-black">✓</span> Backend-related functionality</li>
                <li className="flex gap-3"><span className="text-[#FF3366] font-black">✓</span> Database management & storage</li>
                <li className="flex gap-3"><span className="text-[#FF3366] font-black">✓</span> Driver/vehicle records management</li>
                <li className="flex gap-3"><span className="text-[#FF3366] font-black">✓</span> Data validation & testing</li>
                <li className="flex gap-3"><span className="text-[#FF3366] font-black">✓</span> Debugging and system integration</li>
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-extrabold mb-6 text-black">Project Screenshots</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <motion.div whileHover={{ scale: 1.02 }} className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 font-bold border border-gray-300">Login Screen</motion.div>
               <motion.div whileHover={{ scale: 1.02 }} className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 font-bold border border-gray-300">Driver Dashboard</motion.div>
               <motion.div whileHover={{ scale: 1.02 }} className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 font-bold border border-gray-300">QR Section</motion.div>
               <motion.div whileHover={{ scale: 1.02 }} className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 font-bold border border-gray-300">Admin Dashboard</motion.div>
            </div>
          </div>

          <a href="#contact" className="inline-block px-10 py-5 bg-black text-white font-extrabold text-lg rounded-full hover:scale-105 transition-transform shadow-2xl">
            View Project Details →
          </a>
        </motion.div>
      </div>

      {/* =========================================
          2. THE VERTICAL 3D CAROUSEL (Up and Down)
          ========================================= */}
      <div className="max-w-6xl mx-auto px-6 border-t border-gray-300 pt-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-6xl font-extrabold text-black mb-4 tracking-tight">Explore All My Projects</h3>
          <p className="text-gray-500 font-medium text-lg">Hover over the wheel to pause the animation.</p>
        </div>

        <div className="carousel-container">
          <div className="carousel-wheel">
            {allProjects.map((project, index) => (
              <div key={index} className="carousel-item group flex flex-col bg-white">
                
                {/* Image Half */}
                <div className="relative h-[60%] overflow-hidden bg-gray-100">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="px-6 py-3 bg-white text-black font-extrabold rounded-full hover:scale-105 transition-transform shadow-lg">
                      View Project →
                    </button>
                  </div>
                </div>

                {/* Text Half */}
                <div className="p-6 h-[40%] flex flex-col justify-center">
                  <span className="text-xs font-bold text-[#FF3366] uppercase tracking-wider mb-2 block">{project.year}</span>
                  <h3 className="text-xl font-extrabold mb-1 leading-tight text-black">{project.title}</h3>
                  <p className="text-sm font-semibold text-gray-500">{project.role}</p>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}
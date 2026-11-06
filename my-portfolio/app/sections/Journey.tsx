"use client";
import { motion } from "framer-motion";

export default function Journey() {
  const projects = [
    {
      title: "Event Planner System",
      year: "First Year",
      role: "Web Developer",
      desc: "My first academic web project, learning the fundamentals of web development, interface design, and collaborative development.",
      img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Crochet Creation System",
      year: "Second Year",
      role: "System Developer",
      desc: "A web-based system that helped me develop my understanding of system design, databases, user interfaces, and teamwork.",
      img: "https://images.unsplash.com/photo-1615715917286-3fb6bb3eb372?q=80&w=600&auto=format&fit=crop",
      skills: ["Web Dev", "Database", "System Design"]
    },
    {
      title: "QR Transport Ticketing",
      year: "Third Year (Featured)",
      role: "Backend & Database Admin",
      desc: "A web-based project designed for transport terminal operations in Borongan City. Includes QR identification, prepaid balances, and transaction records.",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
      skills: ["Tailwind", "Supabase", "MySQL", "GitHub"]
    }
  ];

  return (
    <section id="journey" className="py-32 px-6 relative overflow-hidden bg-[#f4f4f5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-black">My Journey in IT</h2>
          <p className="text-gray-500">Hover over the wheel to pause and view the projects.</p>
        </div>

        {/* Ferris Wheel Carousel */}
        <div className="carousel-container">
          <div className="carousel-wheel">
            {projects.map((project, index) => (
              <div key={index} className="carousel-item group">
                <div className="relative h-1/2 overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="px-6 py-2 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                      View Project →
                    </button>
                  </div>
                </div>
                <div className="p-6 h-1/2 flex flex-col justify-center bg-white">
                  <span className="text-xs font-bold text-[#FF3366] uppercase tracking-wider mb-1 block">{project.year}</span>
                  <h3 className="text-lg font-black mb-1 leading-tight text-black">{project.title}</h3>
                  <p className="text-xs font-semibold text-gray-500 mb-2">{project.role}</p>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-3">{project.desc}</p>
                  <div className="flex gap-1 flex-wrap">
                    {project.skills.slice(0,3).map(skill => (
                      <span key={skill} className="text-[10px] px-2 py-1 bg-gray-100 rounded-md font-bold text-gray-600">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
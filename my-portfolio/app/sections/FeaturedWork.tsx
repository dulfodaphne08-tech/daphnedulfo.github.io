"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Project = {
  title: string;
  year: string;
  role: string;
  desc: string;
  skills: string[];
  details: string[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "QR-Based Transport Ticketing & Fee Collection System",
    year: "Third Year",
    role: "Backend Developer / Database Admin",
    desc: "A web-based academic project developed for transport terminal operations in Borongan City. The system focuses on managing driver information, QR-based identification, prepaid balances, transport transactions, payment records, vehicle information, and administrative monitoring.",
    skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Supabase", "MySQL", "GitHub"],
    details: [
      "Backend-related functionality",
      "Database management and storage",
      "Driver and vehicle records management",
      "Data validation and testing",
      "QR-based identification and transaction records",
    ],
    featured: true,
  },
  {
    title: "Event Planner System",
    year: "First Year",
    role: "Web Developer",
    desc: "My first academic web project, learning the fundamentals of web development, interface design, and collaborative development.",
    skills: ["HTML", "CSS", "JavaScript"],
    details: [
      "Built basic page layouts and interface components",
      "Practiced responsive design fundamentals",
      "Learned how to structure a simple web project",
      "Collaborated with classmates during development",
    ],
  },
  {
    title: "Crochet Creation System",
    year: "Second Year",
    role: "System Developer",
    desc: "A web-based system that helped me develop my understanding of system design, databases, user interfaces, and teamwork.",
    skills: ["Web Dev", "Database", "System Design"],
    details: [
      "Designed system pages and user interface layouts",
      "Worked with database-related features",
      "Organized product and user information",
      "Tested features and improved system flow",
    ],
  },
];

export default function FeaturedWork() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-32 px-6 bg-[#f4f4f5] border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-[#FF3366] text-white text-xs font-black rounded-full tracking-widest uppercase mb-6 shadow-md shadow-pink-500/30"
          >
            My Work ✨
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 text-black tracking-tighter"
          >
            Projects I’ve Built
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-gray-500 font-medium max-w-2xl mx-auto text-lg"
          >
            All of my academic projects are shown below. Click any project to view the full case study and my contributions.
          </motion.p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col group ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              {/* Tags */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {project.featured && (
                  <span className="px-3 py-1.5 bg-[#111] text-white text-xs font-bold rounded-full tracking-widest uppercase">
                    Featured 🌟
                  </span>
                )}
                <span className="text-xs font-bold text-[#FF3366] uppercase tracking-widest">
                  {project.year}
                </span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  {project.role}
                </span>
              </div>

              {/* Title */}
              <h3 className={`font-black text-black mb-4 leading-tight tracking-tight ${project.featured ? "text-3xl md:text-5xl" : "text-2xl"}`}>
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 font-medium leading-relaxed mb-8">
                {project.desc}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-[#f4f4f5] border border-gray-200 rounded-lg text-xs font-bold text-black group-hover:border-[#FF3366] transition-colors">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Placeholder Screenshots for Featured */}
              {project.featured && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="aspect-video bg-gray-100 border border-gray-200 rounded-2xl flex items-center justify-center text-gray-400 font-bold shadow-inner">🖥️ Dashboard Preview</div>
                  <div className="aspect-video bg-gray-100 border border-gray-200 rounded-2xl flex items-center justify-center text-gray-400 font-bold shadow-inner">📱 Mobile View</div>
                </div>
              )}

              {/* Action Button */}
              <button
                type="button"
                onClick={() => setActiveProject(project)}
                className="mt-auto w-full py-4 bg-[#f4f4f5] text-black font-extrabold rounded-xl group-hover:bg-[#FF3366] group-hover:text-white transition-all shadow-sm flex items-center justify-center gap-2"
              >
                View Project Details <span className="text-xl">→</span>
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      {/* PROJECT DETAILS MODAL (Pop-up) */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-md p-4 flex items-center justify-center overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[2rem] max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12 relative shadow-2xl"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 h-12 w-12 rounded-full bg-gray-100 hover:bg-[#FF3366] hover:text-white transition-colors font-bold text-xl flex items-center justify-center"
              >
                ✕
              </button>

              <span className="text-sm font-black text-[#FF3366] uppercase tracking-widest block mb-2">
                {activeProject.year} • {activeProject.role}
              </span>
              <h3 className="text-3xl md:text-5xl font-black text-black mt-2 mb-6 tracking-tight leading-tight">
                {activeProject.title}
              </h3>

              <p className="text-gray-600 font-medium leading-relaxed mb-10 text-lg">
                {activeProject.desc}
              </p>

              <div className="bg-[#f4f4f5] p-8 rounded-2xl mb-10 border border-gray-200">
                <h4 className="text-xl font-black text-black mb-6 flex items-center gap-2">
                  <span className="text-[#FF3366]">🛠️</span> My Contributions
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeProject.details.map((detail) => (
                    <li key={detail} className="flex gap-3 text-gray-700 font-semibold bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <span className="text-[#FF3366] font-black">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h4 className="text-lg font-black text-black mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-2 mb-10">
                {activeProject.skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-[#111] text-white rounded-lg text-sm font-bold shadow-md">
                    {skill}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="w-full py-5 bg-[#FF3366] text-white font-black text-lg rounded-2xl hover:bg-black transition-colors shadow-xl shadow-pink-500/30"
              >
                Close Project Details
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
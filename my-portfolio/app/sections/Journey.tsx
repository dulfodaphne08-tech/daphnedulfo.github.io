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
    <section id="work" className="py-32 px-6 bg-[#f4f4f5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#FF3366] text-white text-xs font-bold rounded-full tracking-widest uppercase mb-4">
            My Work
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-black tracking-tighter">
            Projects I’ve Built
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            All of my academic projects are shown below. Click any project to view more details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
              className={`bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all flex flex-col ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {project.featured && (
                  <span className="px-3 py-1 bg-[#FF3366] text-white text-xs font-bold rounded-full tracking-widest uppercase">
                    Featured
                  </span>
                )}
                <span className="text-xs font-bold text-[#FF3366] uppercase tracking-widest">
                  {project.year}
                </span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  {project.role}
                </span>
              </div>

              <h3 className={`font-black text-black mb-4 leading-tight ${project.featured ? "text-3xl md:text-5xl tracking-tighter" : "text-2xl"}`}>
                {project.title}
              </h3>

              <p className="text-gray-600 font-medium leading-relaxed mb-6">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-[#f4f4f5] border border-gray-200 rounded-lg text-xs font-bold text-black">
                    {skill}
                  </span>
                ))}
              </div>

              {project.featured && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 font-bold">Project Screenshot</div>
                  <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 font-bold">System Preview</div>
                </div>
              )}

              <button
                type="button"
                onClick={() => setActiveProject(project)}
                className="mt-auto w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-[#FF3366] transition-colors"
              >
                View Project Details →
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      {/* PROJECT DETAILS MODAL */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm p-4 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 md:p-10 relative"
            >
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute top-5 right-5 h-10 w-10 rounded-full bg-[#f4f4f5] hover:bg-[#FF3366] hover:text-white transition-colors font-bold"
              >
                ✕
              </button>

              <span className="text-xs font-bold text-[#FF3366] uppercase tracking-widest">
                {activeProject.year}
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-black mt-2 mb-2 tracking-tight">
                {activeProject.title}
              </h3>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">
                {activeProject.role}
              </p>

              <p className="text-gray-600 font-medium leading-relaxed mb-8">
                {activeProject.desc}
              </p>

              <h4 className="text-xl font-black text-black mb-4">Key Contributions</h4>
              <ul className="space-y-3 mb-8">
                {activeProject.details.map((detail) => (
                  <li key={detail} className="flex gap-3 text-gray-600 font-medium">
                    <span className="text-[#FF3366] font-black">✓</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-xl font-black text-black mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {activeProject.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-[#f4f4f5] border border-gray-200 rounded-lg text-xs font-bold text-black">
                    {skill}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-[#FF3366] transition-colors"
              >
                Close Details
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
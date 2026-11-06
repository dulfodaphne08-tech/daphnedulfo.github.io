"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative bg-[#f4f4f5]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight text-black">A little about me</h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-6">
            I'm Daphne Dulfo, a third-year Bachelor of Science in Information Technology student at Eastern Samar State University.
          </p>
          <p className="text-lg text-gray-500 leading-relaxed mb-6">
            My interest in technology has grown through hands-on academic projects, where I have learned how to design websites, develop systems, work with databases, and collaborate with a team.
          </p>
          <p className="text-lg text-gray-500 leading-relaxed">
            I am currently building my knowledge in web development and database technologies while exploring different development tools and approaches to problem-solving. I may still be growing as a developer, but I enjoy learning through real projects, challenges, and experimentation.
          </p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white p-10 rounded-3xl border border-gray-200 shadow-xl">
          <h3 className="text-sm font-bold tracking-widest text-[#FF3366] uppercase mb-6">What I Can Bring</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-black text-lg">Willingness to Learn</h4>
              <p className="text-gray-500 text-sm mt-1">I am open to learning new technologies, tools, and development practices.</p>
            </div>
            <div>
              <h4 className="font-bold text-black text-lg">Hands-On Experience</h4>
              <p className="text-gray-500 text-sm mt-1">I have gained practical experience through academic projects involving web development, databases, and system development.</p>
            </div>
            <div>
              <h4 className="font-bold text-black text-lg">Team Collaboration</h4>
              <p className="text-gray-500 text-sm mt-1">I have experience working with teammates to plan, develop, test, and improve projects.</p>
            </div>
            <div>
              <h4 className="font-bold text-black text-lg">Problem Solving</h4>
              <p className="text-gray-500 text-sm mt-1">I enjoy understanding problems, exploring possible solutions, and learning from mistakes.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
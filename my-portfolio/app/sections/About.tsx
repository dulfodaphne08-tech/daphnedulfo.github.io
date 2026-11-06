"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white">A little about me</h2>
          <p className="text-(--muted) leading-relaxed mb-6">
            I'm Daphne Dulfo, a third-year Bachelor of Science in Information Technology student at Eastern Samar State University.
          </p>
          <p className="text-(--muted) leading-relaxed mb-6">
            My interest in technology has grown through hands-on academic projects, where I have learned how to design websites, develop systems, work with databases, and collaborate with a team.
          </p>
          <p className="text-(--muted) leading-relaxed">
            I am currently building my knowledge in web development and database technologies while exploring different development tools and approaches to problem-solving.
          </p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-(--card) p-10 rounded-3xl border border-(--border)">
          <h3 className="text-sm font-bold tracking-widest text-(--accent) uppercase mb-4">My Goal</h3>
          <p className="text-xl leading-relaxed font-light text-white">
            "To gain practical experience, continue developing my technical skills, and contribute meaningfully to a team while learning from real-world IT environments."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
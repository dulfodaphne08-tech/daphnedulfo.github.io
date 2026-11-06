"use client";
import { motion, type Variants } from "framer-motion";

export default function About() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-32 px-6 relative bg-[#f4f4f5]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-black">A little<br/>about me.</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6 font-medium">
            I am Daphne Dulfo, a third-year Bachelor of Science in Information Technology student at Eastern Samar State University.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            My interest in technology has grown through hands-on academic projects, where I have learned how to design websites, develop systems, work with databases, and collaborate with a team.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            I am currently building my knowledge in web development and database technologies while exploring different development tools and approaches to problem-solving. I may still be growing as a developer, but I enjoy learning through real projects, challenges, and experimentation.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="bg-white p-10 rounded-4xl border border-gray-200 shadow-2xl"
        >
          <h3 className="text-sm font-bold tracking-widest text-[#FF3366] uppercase mb-8">What I Can Bring</h3>
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h4 className="font-bold text-black text-xl mb-2">Willingness to Learn</h4>
              <p className="text-gray-500">I am open to learning new technologies, tools, and development practices.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h4 className="font-bold text-black text-xl mb-2">Hands-On Experience</h4>
              <p className="text-gray-500">I have gained practical experience through academic projects involving web development, databases, and system development.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <h4 className="font-bold text-black text-xl mb-2">Team Collaboration</h4>
              <p className="text-gray-500">I have experience working with teammates to plan, develop, test, and improve projects.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <h4 className="font-bold text-black text-xl mb-2">Problem Solving</h4>
              <p className="text-gray-500">I enjoy understanding problems, exploring possible solutions, and learning from mistakes.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
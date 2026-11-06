"use client";
import { motion } from "framer-motion";

export default function Journey() {
  const projects = [
    { title: "Event Planner", year: "First Year", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop" },
    { title: "Crochet System", year: "Second Year", img: "https://images.unsplash.com/photo-1615715917286-3fb6bb3eb372?q=80&w=600&auto=format&fit=crop" },
    { title: "QR Ticketing", year: "Third Year", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop" }
  ];

  return (
    <section id="journey" className="py-32 bg-white overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black mb-4">My Journey in IT</h2>
        <p className="text-gray-500">Hover to pause the carousel.</p>
      </div>
      <div className="carousel-container">
        <div className="carousel-wheel">
          {projects.map((p, i) => (
            <div key={i} className="carousel-item group">
              <img src={p.img} alt={p.title} className="w-full h-1/2 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              <div className="p-6 h-1/2 bg-white flex flex-col justify-center">
                <span className="text-xs font-bold text-[#FF3366] mb-1">{p.year}</span>
                <h3 className="text-xl font-black">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
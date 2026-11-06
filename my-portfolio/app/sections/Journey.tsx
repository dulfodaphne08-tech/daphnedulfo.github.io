"use client";

export default function Journey() {
  const projects = [
    {
      title: "Event Planner System",
      year: "First Year",
      role: "Web Developer",
      desc: "A web-based academic project developed during my first year of college. The system was designed to help organize and manage event-related information through a simple and user-friendly interface. This project introduced me to the fundamentals of web development, interface design, and collaborative system development.",
      img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop" 
    },
    {
      title: "Crochet Creation System",
      year: "Second Year",
      role: "System Developer",
      desc: "A web-based academic system developed during my second year of college. The project focused on organizing and managing information related to crochet creations through a structured digital system. Working on this project helped me strengthen my understanding of system development, database concepts, user interface design, and teamwork.",
      img: "https://images.unsplash.com/photo-1615715917286-3fb6bb3eb372?q=80&w=600&auto=format&fit=crop" 
    },
    {
      title: "QR Transport Ticketing System",
      year: "Third Year (Featured)",
      role: "Backend & Database Admin",
      desc: "A web-based academic and capstone project developed for transport terminal operations in Borongan City. The system focuses on QR-based driver identification, prepaid balance management, transport transactions, payment and reference records, driver and vehicle information, and administrative monitoring.",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop" 
    }
  ];

  return (
    <section id="journey" className="py-32 px-6 relative overflow-hidden bg-(--background)">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-black">My Journey in IT</h2>
          <p className="text-(--muted)">Hover over the wheel to pause and view the projects.</p>
        </div>

         <div className="carousel-container">
          <div className="carousel-wheel">
            {projects.map((project, index) => (
              <div key={index} className="carousel-item group">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-1/2 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
                <div className="p-6 h-1/2 flex flex-col justify-center bg-white">
                  <span className="text-xs font-bold text-(--accent) uppercase tracking-wider mb-2 block">{project.year}</span>
                  <h3 className="text-xl font-black mb-1 leading-tight text-black">{project.title}</h3>
                  <p className="text-sm font-semibold text-(--muted) mb-3">{project.role}</p>
                  <p className="text-xs text-(--muted) line-clamp-3 leading-relaxed">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
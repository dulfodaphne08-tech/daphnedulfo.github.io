export default function Footer() {
  return (
    <footer className="border-t border-(--border-color) bg-[#050505] py-12 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-3xl font-black mb-2 text-white" style={{ fontFamily: 'var(--font-giant)' }}>DAPHNE.</h2>
          <p className="text-(--text-muted) text-sm">3rd Year BSIT Student</p>
          <p className="text-(--text-muted) text-sm">Aspiring IT Professional</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-(--text-muted)">
          <a href="#about" className="hover:text-(--accent-pink)">About</a>
          <a href="#journey" className="hover:text-(--accent-pink)">Journey</a>
          <a href="#skills" className="hover:text-(--accent-pink)">Skills</a>
        </div>
        <div className="flex flex-col md:items-end justify-between text-sm text-(--text-muted)">
          <p>© 2026 Daphne Dulfo</p>
          <p className="mt-4 md:mt-0">Built with Next.js & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
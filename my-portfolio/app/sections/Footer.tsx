export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-4xl font-black mb-2 text-black" style={{ fontFamily: 'Anton, sans-serif' }}>DAPHNE.</h2>
          <p className="text-gray-500 font-medium">3rd Year BSIT Student</p>
          <p className="text-gray-500 font-medium mb-6">Aspiring IT Professional</p>
          <p className="text-sm text-gray-400 max-w-sm">
            Building my professional space on the web. Open for OJT, part-time opportunities, and future collaborations.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-black mb-2 uppercase tracking-wider text-sm">Quick Links</h4>
          <a href="#about" className="text-gray-500 hover:text-[#FF3366] text-sm font-medium transition-colors">About</a>
          <a href="#journey" className="text-gray-500 hover:text-[#FF3366] text-sm font-medium transition-colors">Journey</a>
          <a href="#skills" className="text-gray-500 hover:text-[#FF3366] text-sm font-medium transition-colors">Skills</a>
          <a href="#contact" className="text-gray-500 hover:text-[#FF3366] text-sm font-medium transition-colors">Contact</a>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-black mb-2 uppercase tracking-wider text-sm">Socials</h4>
          <a href="https://github.com/dulfodaphne08-tech" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#FF3366] text-sm font-medium transition-colors">GitHub</a>
          <a href="https://www.facebook.com/share/19c8UTaNGX/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#FF3366] text-sm font-medium transition-colors">Facebook</a>
          <a href="https://www.instagram.com/dulfodaphnee" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#FF3366] text-sm font-medium transition-colors">Instagram</a>
          <a href="mailto:dulfodaphne08@gmail.com" className="text-gray-500 hover:text-[#FF3366] text-sm font-medium transition-colors">Email</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400">© 2026 Daphne Dulfo. All rights reserved.</p>
        <p className="text-sm text-gray-400">Built with Next.js & Framer Motion</p>
      </div>
    </footer>
  );
}
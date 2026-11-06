export default function Resume() {
  return (
    <section className="py-24 px-6 bg-white border-y border-gray-200 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-black mb-4 text-black">Want to Know More?</h2>
        <p className="text-gray-500 mb-8">For a more detailed overview of my education, skills, achievements, and project experience, you can view my resume.</p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-4 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform">
            View Resume →
          </button>
          <button className="px-8 py-4 bg-gray-100 text-black font-bold rounded-full hover:scale-105 transition-transform border border-gray-200">
            Download Resume ↓
          </button>
        </div>
      </div>
    </section>
  );
}
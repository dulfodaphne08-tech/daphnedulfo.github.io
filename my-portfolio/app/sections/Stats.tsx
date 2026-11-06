export default function Stats() {
  const stats = [
    { value: "3rd Year", label: "BSIT Student" },
    { value: "3+", label: "Academic Projects" },
    { value: "2024–Present", label: "College Journey" },
    { value: "Continuous", label: "Learning" },
  ];

  return (
    <section className="border-y border-(--border) bg-[#050505] relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-(--border)">
        {stats.map((stat, i) => (
          <div key={i} className="p-8 text-center hover:bg-(--card) transition-colors">
            <h3 className="text-2xl md:text-3xl font-black mb-1 text-white">{stat.value}</h3>
            <p className="text-sm text-(--muted) font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
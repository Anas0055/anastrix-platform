export default function Stats() {
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "20+", label: "AI Solutions" },
    { number: "15+", label: "Happy Clients" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.label}
              className="text-center rounded-2xl border border-slate-800 p-8 hover:border-cyan-400 transition"
            >
              <h2 className="text-5xl font-black text-cyan-400">
                {item.number}
              </h2>

              <p className="mt-3 text-slate-400">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
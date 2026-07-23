export default function Services() {
  const services = [
    {
      title: "AI Agents",
      description: "Custom AI agents for business automation.",
    },
    {
      title: "Automation",
      description: "Automate repetitive workflows and save time.",
    },
    {
      title: "Web Development",
      description: "Modern websites and web applications with Next.js.",
    },
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          Our <span className="text-cyan-400">Services</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-700 bg-slate-800 p-8 hover:border-cyan-400 transition"
            >
              <h3 className="text-2xl font-semibold text-cyan-400">
                {service.title}
              </h3>

              <p className="mt-4 text-slate-300">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
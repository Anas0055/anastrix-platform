export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-slate-950 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">

        <p className="text-cyan-400 uppercase tracking-[6px] font-semibold">
          AI • AGENTIC AI • AUTOMATION
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight text-white">
          Building the Future
          <br />
          with <span className="text-cyan-400">Anastrix</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-gray-300 leading-8">
          We build Enterprise AI Platforms, AI Agents,
          Intelligent Automation and Modern Software
          Solutions for Businesses Worldwide.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <button className="bg-cyan-500 hover:bg-cyan-400 text-white px-7 py-3 rounded-xl font-semibold transition-all duration-300">
            Start Project
          </button>

          <button className="border border-cyan-500 hover:bg-cyan-500 hover:text-black px-7 py-3 rounded-xl font-semibold transition-all duration-300">
            View Services
          </button>

        </div>

      </div>

    </section>
  );
}
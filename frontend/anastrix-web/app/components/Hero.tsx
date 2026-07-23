export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-slate-950 to-black" />

      <div className="relative max-w-7xl mx-auto px-6 py-32">

        <span className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm">
          AI • Agentic AI • Automation
        </span>

        <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
          Building the Future
          <br />
          with <span className="text-cyan-400">Anastrix</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-slate-300 leading-8">
          We build enterprise AI platforms, AI agents, intelligent
          automation systems, and modern software that helps businesses
          scale faster.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <button className="rounded-xl bg-cyan-500 px-7 py-3 font-semibold hover:bg-cyan-400 transition">
            Start Project
          </button>

          <button className="rounded-xl border border-cyan-500 px-7 py-3 hover:bg-cyan-500 hover:text-black transition">
            View Services
          </button>
        </div>

      </div>
    </section>
  );
}
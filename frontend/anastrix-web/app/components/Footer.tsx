export default function Footer() {
  return (
    <footer className="bg-black border-t border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-cyan-400">
          ANASTRIX
        </h2>

        <p className="mt-4 text-gray-400">
          Building the Future with AI, Automation & Innovation.
        </p>

        <div className="mt-8 flex justify-center gap-8 text-gray-300">
          <a href="#" className="hover:text-cyan-400">Home</a>
          <a href="#" className="hover:text-cyan-400">About</a>
          <a href="#" className="hover:text-cyan-400">Services</a>
          <a href="#" className="hover:text-cyan-400">Contact</a>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          © 2026 Anastrix. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}
export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <h1 className="text-3xl font-black tracking-widest text-cyan-400">
          ANASTRIX
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
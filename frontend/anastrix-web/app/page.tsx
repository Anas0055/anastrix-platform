import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/services";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Stats />
    </main>
  );
}
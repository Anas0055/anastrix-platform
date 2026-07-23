import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/services";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
    </main>
  );
}
import Image from "next/image";
import Navbar from "./components/layout/navbar";
import About from "./page/about";
import Projects from "./page/projects";
import Home from "./page/home";
import Achievements from "./page/achievements";
import Contact from "./page/contact";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-foreground">

      {/* BACKGROUND GRADIENT */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#3b1b6d,transparent_40%)]" /> */}
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Achievements />
      <Contact />
    </main>
  );
}

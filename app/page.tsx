import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Automations from "@/sections/Automations";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Services from "@/sections/Services";
import Skills from "@/sections/Skills";
import TechMarquee from "@/sections/TechMarquee";

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <Services />
        <Projects />
        <Automations />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

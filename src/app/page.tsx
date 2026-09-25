import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Work from "@/components/sections/Work";
import Experience from "@/components/sections/Experience";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Skills />
      <Work />
      <Experience />
      <Services />
      <Contact />
    </main>
  );
}

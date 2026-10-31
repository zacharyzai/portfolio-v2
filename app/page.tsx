import { MotionConfig } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
    <main className="relative bg-paper">
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Work />
      <Projects />
      <Contact />
    </main>
    </MotionConfig>
  );
}

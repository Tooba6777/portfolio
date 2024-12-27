import Image from "next/image";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Content from "./components/Content";
import About from "./components/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Content />
      <About />
    </main>
  )
}
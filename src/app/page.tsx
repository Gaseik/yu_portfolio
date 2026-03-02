import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Experience from "@/components/Experience";
import BigMarquee from "@/components/BigMarquee";
import Projects from "@/components/Projects";
import Callout from "@/components/Callout";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Ticker />
      <Experience />
      <BigMarquee />
      <Projects />
      <Callout />
      <Skills />
      <Contact />
      <Footer />
      <ScrollReveal />
    </>
  );
}

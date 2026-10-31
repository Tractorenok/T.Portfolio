import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StackScroll from "@/components/StackScroll";
import Sheet from "@/components/Sheet";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <StackScroll>
          <Sheet hero tone="a">
            <Hero />
          </Sheet>
          <Sheet tone="b">
            <About />
          </Sheet>
          <Sheet tone="a">
            <Skills />
          </Sheet>
          <Sheet tone="b">
            <Projects />
          </Sheet>
          <Sheet tone="a">
            <Services />
          </Sheet>
          <Sheet tone="b">
            <Contact />
          </Sheet>
        </StackScroll>
      </main>
      <Footer />
    </>
  );
}

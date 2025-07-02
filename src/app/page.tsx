// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import Testimonial from "./testimonial";
import ContactForm from "./contact-form";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <Resume />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Testimonial />
      <section id="contact">
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}

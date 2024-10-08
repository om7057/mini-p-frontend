import Hero from "./components/Hero";
import About from "./components/About";
import Contactus from "./components/Contactus";
import Faqs from "./components/Faqs";
import Testimonials from "./components/Testimonials";
import reviews from "../../data";
import './globals.css'

export default function Home() {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="testimonials">
        <Testimonials reviews={reviews} />
      </section>

      <section id="faqs">
        <Faqs />
      </section>

      <section id="resources">
        <Contactus />
      </section>
    </div>
  );
}

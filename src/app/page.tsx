import About from "./components/about/page";
import ContactSection from "./components/contact/page";
import Hero from "./components/home/hero";
import Navbar from "./components/home/navbar";
import Portfolio from "./components/projects/page";
import Services from "./components/services/page";
import Testimonials from "./components/testimonial/page";

export default function Home() {
  return (
  <div>
    <Navbar/>
   <Hero/>
   <About/>
    <Portfolio/>
    <Services/>
    <Testimonials/>
   <ContactSection/>
  </div> 
  );
}

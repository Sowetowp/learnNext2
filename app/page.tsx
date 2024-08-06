import Image from "next/image";
import Carousel from "./components/Carousel";
import Expert from "./components/Expert";
import Founded from "./components/Founded";
import Award from "./components/Award";
import Services from "./components/Services";
import Consultants from "./components/Consultants";
import Happy from "./components/Happy";
import CaseStudies from "./components/CaseStudies";
import Testimony from "./components/Testimony";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="scroll-smooth">
        <Carousel />
        <Expert />
        <Founded />
        <Award />
        <Services />
        <Consultants />
        <Happy />
        <CaseStudies />
        <Testimony />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

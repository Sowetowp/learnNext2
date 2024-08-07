"use client";
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
import { useEffect, useState } from "react";

export default function Home() {
  const [view, setView] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const offsetTop = (section as HTMLElement).offsetTop ;
        if (scrollTop >= offsetTop && scrollTop < offsetTop + (section as HTMLElement).offsetHeight) {
          setView(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <Carousel view={view} />
      <Expert />
      <Founded />
      <Award />
      <Services />
      <Consultants />
      <Happy view={view} />
      <CaseStudies />
      <Testimony />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

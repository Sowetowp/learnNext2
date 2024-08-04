import Image from "next/image";
import Carousel from "./components/Carousel";
import Expert from "./components/Expert";
import Founded from "./components/Founded";
import Award from "./components/Award";
import Services from "./components/Services";
import Consultants from "./components/Consultants";
import Happy from "./components/Happy";

export default function Home() {
  return (
    <>
      <Carousel />
      <Expert />
      <Founded />
      <Award />
      <Services />
      <Consultants />
      <Happy/>
    </>
  );
}

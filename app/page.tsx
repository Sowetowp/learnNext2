import Image from "next/image";
import Carousel from "./components/Carousel";
import Expert from "./components/Expert";

export default function Home() {
  return (
    <>
      <Carousel />
      <Expert/>
    </>
  );
}

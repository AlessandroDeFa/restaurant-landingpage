import React, { useEffect, useRef } from "react";
import background from "./components/assets/bg2.jpg";
import gsap, { Power4 } from "gsap";
// Sections
import { Header, Hero, Main, Dish, Reservation, Footer } from "./index";

const Home = () => {
  let img = useRef(null);

  useEffect(() => {
    gsap.from(img, {
      duration: 2,
      scale: 1.2,
      opacity: 0,
      ease: Power4.easeOut,
    });
  }, []);

  return (
    <>
      <div
        ref={(el) => (img = el)}
        className="flex flex-col h-screen bg-cover bg-no-repeat bg-left sm:bg-[15%] relative"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Header */}
        <Header />
        {/* Hero Section */}
        <Hero />
      </div>
      {/* Main */}
      <Main />
      {/* dish Section */}
      <Dish />
      {/* Reservation Section + contact */}
      <Reservation />
      {/* footer [#131313] */}
      <Footer />
    </>
  );
};

export default Home;

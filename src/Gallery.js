import React, { useRef, useEffect } from "react";
import gsap, { Power4 } from "gsap";
import { Header, Footer } from "./index";
import img from "./components/assets/fish.jpg";
import pizza from "./components/assets/pizza.jpg";
import bruschetta from "./components/assets/bruschetta.jpg";
import pork from "./components/assets/pork.jpg";
import paella from "./components/assets/paella.jpg";
import margarita from "./components/assets/margarita.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Gallery = () => {
  gsap.registerPlugin(ScrollTrigger);

  let galleryTitle = useRef(null);
  let gallery = useRef(null);

  useEffect(() => {
    gsap.from(galleryTitle, { opacity: 0, duration: 1.5 });
    gsap.from(gallery, { opacity: 0, duration: 1, y: 20 }, "-=1.2");
  });

  return (
    <div className="bg-[#140e11] flex flex-col min-h-screen">
      <div>
        <Header />
      </div>
      <div className="bg-[hsl(350,15%,10%)]">
        <div className="max-w-[95%] my-0 mx-auto w-screen flex flex-col items-center py-8">
          <div
            ref={(el) => (galleryTitle = el)}
            className="mb-16 mt-8 before:w-[75%] relative before:bg-[#f8b984] before:absolute before:h-[2px] before:left-[50%] before:bottom-[-0.5rem] before:translate-x-[-50%]"
          >
            <h1 className="text-[#f8b984] text-5xl">GALLERY</h1>
          </div>
          <div
            ref={(el) => (gallery = el)}
            className="grid grid-cols-3 [&>*]:max-w-md [&>*]:min-w-[170px] gap-4 md:grid-cols-2 md:text-sm"
          >
            <div>
              <img src={pizza} alt="" />
              <div className="text-[#f8b984] py-4">Napolitan Pizza</div>
            </div>
            <div>
              <img src={bruschetta} alt="" />
              <div className="text-[#f8b984] py-4">Bruschetta</div>
            </div>
            <div>
              <img src={img} alt="" />
              <div className="text-[#f8b984] py-4">Salmon</div>
            </div>
            <div>
              <img src={pork} alt="" />
              <div className="text-[#f8b984] py-4">Pork Chop</div>
            </div>
            <div>
              <img src={paella} alt="" />
              <div className="text-[#f8b984] py-4">Paella</div>
            </div>
            <div>
              <img src={margarita} alt="" />
              <div className="text-[#f8b984] py-4">Margarita</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;

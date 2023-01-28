import React, { useEffect, useRef } from "react";
import arrow from "./assets/arrow.svg";
import { Link } from "react-router-dom";
import gsap, { Power4 } from "gsap";

const Hero = (props) => {
  let heroText = useRef(null);

  useEffect(() => {
    gsap.from(
      heroText,
      {
        duration: 2,
        y: 100,
        opacity: 0,
        ease: Power4.easeOut,
      },
      "-=1"
    );
  }, []);

  return (
    <div className="flex-auto flex items-center">
      <div
        ref={(el) => (heroText = el)}
        className="max-w-[95%] my-0 mx-auto text-white w-screen flex flex-col gap-12"
      >
        <h6>
          <span>⬧</span> SINGAPORE
        </h6>
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl md:text-3xl font-semibold">
            Years Of Delicious: <br /> A Culinary Experience to Remember
          </h1>
          <p className="max-w-lg md:max-w-md sm:pr-8 sm:text-white sm:text-sm text-[#d1d0d1]">
            Our restaurant offers a culinary journey like no other. Our menu
            features a diverse selection of dishes, expertly crafted by our
            world-renowned chef using only the freshest, locally-sourced
            ingredients.
          </p>
        </div>
        <button className="hover:bg-[#e4ccc0] transition duration-400  w-60 h-12 bg-[#f8b984]  text-sm text-black font-semibold uppercase">
          <Link to="/reservation">reserve a table</Link>
        </button>
      </div>
      <div className="absolute bottom-0 left-1/2 translate-x-[-50%]">
        <a href="#About">
          <img className="w-16 animate-bounce" src={arrow} />
        </a>
      </div>
    </div>
  );
};

export default Hero;

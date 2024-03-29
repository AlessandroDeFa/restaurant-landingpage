import React from "react";
import brekfastimg from "./assets/breakfast.jpg";
import fishimg from "./assets/fish.jpg";
import meatimg from "./assets/meat.jpg";
import soupimg from "./assets/soup.jpg";
import { Link } from "react-router-dom";

const Dish = () => {
  return (
    <div className="h-screen bg-[#140e11] flex flex-col justify-evenly overflow-x-hidden">
      <div className="text-[#d1d0d1] text-xl max-w-[95%] pt-4 border-t-[1px] border-[#f8b984]  mx-auto w-screen uppercase">
        Some of our Delicoius dishes
      </div>
      <div className="h-4/5 bg-[#131313]">
        <div className="w-full h-full flex md:flex-col">
          <div
            id="dish-container"
            className="group relative flex-1 hover:flex-[2] hover:transition-all hover:duration-500 duration-500 py-[0.1rem] pr-[0.1rem] bg-[#f8b984]"
          >
            <div className="absolute top-[50%] left-[50%] z-10 translate-y-[-50%] translate-x-[-50%]">
              <div className="text-white text-center pb-4 text-2xl">
                Breakfast
              </div>
              <Link
                to="/menu"
                id="btn"
                className="group-hover:opacity-[1] group-hover:transition-opacity group-hover:duration-700 opacity-0 delay-200 hover:bg-[#e4ccc0] transition duration-400 w-52 h-12 bg-[#f8b984] text-sm text-black font-semibold uppercase bg-[#f8b984] text-center w-60 h-12 flex justify-center items-center"
              >
                {" "}
                See Menu{" "}
              </Link>
            </div>
            <div
              className="grid place-content-center h-full bg-no-repeat brightness-75  bg-cover"
              style={{ backgroundImage: `url(${brekfastimg})` }}
            ></div>
          </div>
          <div
            id="dish-container"
            className="group relative flex-1 hover:flex-[2] hover:transition-all hover:duration-500 duration-500 py-[0.1rem] pr-[0.1rem] bg-[#f8b984]"
          >
            <div className="absolute top-[50%] left-[50%] z-10 translate-y-[-50%] translate-x-[-50%]">
              <div className="text-white text-center pb-4 text-2xl">Fish</div>
              <Link
                to="/menu"
                id="btn"
                className="group-hover:opacity-[1] group-hover:transition-opacity group-hover:duration-700 opacity-0 delay-200 hover:bg-[#e4ccc0] transition duration-400 w-52 h-12 bg-[#f8b984] text-sm text-black font-semibold uppercase bg-[#f8b984] text-center w-60 h-12 flex justify-center items-center"
              >
                {" "}
                See Menu{" "}
              </Link>
            </div>
            <div
              className="grid place-content-center h-full bg-no-repeat bg-center brightness-75  bg-cover"
              style={{ backgroundImage: `url(${fishimg})` }}
            ></div>
          </div>
          <div
            id="dish-container"
            className="group relative flex-1 hover:flex-[2] hover:transition-all hover:duration-500 duration-500 py-[0.1rem] pr-[0.1rem] bg-[#f8b984]"
          >
            <div className="absolute top-[50%] left-[50%] z-10 translate-y-[-50%] translate-x-[-50%]">
              <div className="text-white text-center pb-4 text-2xl">Meat</div>
              <Link
                to="/menu"
                id="btn"
                className="group-hover:opacity-[1] group-hover:transition-opacity group-hover:duration-700 opacity-0 delay-200 hover:bg-[#e4ccc0] transition duration-400 w-52 h-12 bg-[#f8b984] text-sm text-black font-semibold uppercase bg-[#f8b984] text-center w-60 h-12 flex justify-center items-center"
              >
                {" "}
                See Menu{" "}
              </Link>
            </div>
            <div
              className="grid place-content-center h-full bg-no-repeat bg-center brightness-75  bg-cover"
              style={{ backgroundImage: `url(${meatimg})` }}
            ></div>
          </div>
          <div
            id="dish-container"
            className="group relative flex-1 hover:flex-[2] hover:transition-all hover:duration-500 duration-500 py-[0.1rem] pr-[0.1rem] bg-[#f8b984]"
          >
            <div className="absolute top-[50%] left-[50%] z-10 translate-y-[-50%] translate-x-[-50%]">
              <div className="text-white text-center pb-4 text-2xl">Soup</div>
              <Link
                to="/menu"
                id="btn"
                className="group-hover:opacity-[1] group-hover:transition-opacity group-hover:duration-700 opacity-0 delay-200 hover:bg-[#e4ccc0] transition duration-400 w-52 h-12 bg-[#f8b984] text-sm text-black font-semibold uppercase bg-[#f8b984] text-center w-60 h-12 flex justify-center items-center"
              >
                {" "}
                See Menu{" "}
              </Link>
            </div>
            <div
              className="grid place-content-center h-full bg-no-repeat bg-center brightness-75  bg-cover"
              style={{ backgroundImage: `url(${soupimg})` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dish;

import React from "react";
import arrow from "./assets/arrow.svg";
const Hero = ()=> {
  return(
    <div className="flex-auto flex items-center">
      <div className="max-w-[90%] my-0 mx-auto text-white w-screen flex flex-col gap-12">
        <h6><span>⬧</span> Testo Prova</h6>
        <div className="flex flex-col gap-6">
          <h6 className="text-[#d1d0d1] uppercase">testo bla</h6>
          <h1 className="text-5xl font-semibold">Lorem ipsum dolor sit <br/> amet consectetur</h1>
          <p className="max-w-lg text-[#d1d0d1]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, magnam ducimus, maxime atque, officia eligendi soluta ipsam aspernatur quae eius itaque aut ipsum alias quos quisquam! Fugiat vitae deserunt in?</p>
        </div>
        <button className="hover:bg-[#e4ccc0] transition duration-400  w-60 h-12 bg-[#f8b984]  text-sm text-black font-semibold uppercase"><a href="">reserve a table</a></button>
      </div>
      <div className="absolute bottom-0 left-1/2 translate-x-[-50%]"><a href="#About"><img className="w-16 animate-bounce" src={arrow}/></a></div>
    </div>
  )
}

export default Hero;
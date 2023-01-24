import React from "react";
import {Header, Footer } from "./index";
import img from "./components/assets/fish.jpg";

const Gallery = ()=> {
  return (
    <div className="bg-[#140e11] flex flex-col min-h-screen">
      <div>
      <Header/>
      </div>
      <div className="bg-[hsl(350,15%,10%)]">
      <div className="max-w-[95%] my-0 mx-auto w-screen flex flex-col items-center py-8">
        <div className="mb-16 mt-8 before:w-[75%] relative before:bg-[#f8b984] before:absolute before:h-[2px] before:left-[50%] before:bottom-[-0.5rem] before:translate-x-[-50%]">
          <h1 className="text-[#f8b984] text-5xl">GALLERY</h1>
        </div>
        <div className="grid grid-cols-3 [&>*]:max-w-md [&>*]:min-w-[170px] gap-4 md:grid-cols-2 md:text-sm">
          <div><img src={img} alt="" /><div className="text-[#f8b984] py-4">cibo prova</div>
          </div>
          <div><img src={img} alt="" /><div className="text-[#f8b984] py-4">cibo prova</div>
          </div>
          <div><img src={img} alt="" /><div className="text-[#f8b984] py-4">cibo prova</div>
          </div>
          <div><img src={img} alt="" /><div className="text-[#f8b984] py-4">cibo prova</div>
          </div>
          <div><img src={img} alt="" /><div className="text-[#f8b984] py-4">cibo prova</div>
          </div>
          <div><img src={img} alt="" /><div className="text-[#f8b984] py-4">cibo prova</div>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Gallery;
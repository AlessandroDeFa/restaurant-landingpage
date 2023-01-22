import React from "react";
import location from './assets/location.jpg';
import {Link} from 'react-router-dom';

const Main = ()=> {
  return (
    <div id="About" className="min-h-screen bg-[#140e11] justify-evenly flex flex-col">
      <div className="text-[#d1d0d1] text-xl max-w-[95%] pt-4 border-t-[1px] border-[#f8b984]  mx-auto w-screen ">INTRODUCTION</div>
      <div className="max-w-[90%] my-0 mx-auto w-screen h-[100%] flex">
        <div className="flex w-full ">
        <div className="w-1/2 relative h-full before:pointer-events-none before:w-full before:h-full before:absolute before:top-[-2rem] before:left-[-2rem] before:z-[-1] before:border-2 before:border-[#f8b984] z-10"><img className="h-full w-full object-cover" src={location} alt="" /></div>
        <div className="w-1/2 h-full">
          <div className="pl-16 flex flex-col gap-12 h-full justify-evenly">
            <h2 className="text-[#f8b984] text-5xl font-medium">Years of Delicoius</h2>
            <p className="text-white max-w-[650px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus voluptatibus, impedit doloremque, id numquam delectus corrupti optio iusto laboriosam, quae odit repellendus dolor nostrum distinctio aperiam fugit deserunt possimus minus. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <div className="flex justify-start items-center"><Link to="/gallery" className="hover:bg-[#e4ccc0] transition duration-400 w-60 h-12 bg-[#f8b984] text-sm text-black font-semibold uppercase bg-[#f8b984] text-center w-60 h-12 flex justify-center items-center"> View Gallery</Link></div>
          </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Main;
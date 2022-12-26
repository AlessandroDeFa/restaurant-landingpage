import React from "react";
import logo from "./assets/logo.png";

const Header = ()=> {
  return(
    <header className="p-4">
      <div className="grid grid-cols-3 max-w-[90%] my-0 mx-auto">
        <img className="w-28" src={logo} alt="" />
        <div className="grid place-content-center">
          <ul className="text-white flex gap-6 uppercase">
            <li><a href="#" className="before:transition-transform before:duration-300 hover:before:scale-100 relative before:absolute before:origin-left before:origin-left before:w-full before:scale-0 before:bg-white before:h-[1px] before:bottom-[-0.2rem] before:left-0 ">Menu</a></li>
            <li><a href="#" className="before:transition-transform before:duration-300 hover:before:scale-100 relative before:absolute before:origin-left before:w-full before:scale-0 before:bg-white before:h-[1px] before:bottom-[-0.2rem] before:left-0 ">Reservation</a></li>
            <li><a href="#" className="before:transition-transform before:duration-300 hover:before:scale-100 relative before:absolute before:origin-left before:w-full before:scale-0 before:bg-white before:h-[1px] before:bottom-[-0.2rem] before:left-0 ">Gallery</a></li>
            <li><a href="#" className="before:transition-transform before:duration-300 hover:before:scale-100 relative before:absolute before:origin-left before:w-full before:scale-0 before:bg-white before:h-[1px] before:bottom-[-0.2rem] before:left-0 ">Contact</a></li>
          </ul>
        </div>
        <div className="flex justify-end items-center hidden">
          <div className="flex flex-col items-end justify-center w-10 h-10">
          <span className="block w-4 h-0.5 bg-white mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
          <span className="block w-4 h-0.5 bg-white"></span>
        </div>
        </div>
        <div></div>
      </div>
    </header>
  )
}

export default Header;
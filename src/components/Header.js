import React from "react";
import logo from "./assets/logo.png";
import {Link} from 'react-router-dom';

const Header = ()=> {
  return(
    <header className="p-4">
      <div className="grid grid-cols-3 max-w-[95%] my-0 mx-auto">
        <a href="/"><img className="w-28" src={logo} alt="" /></a>
        <div className="grid place-content-center">
          <ul className="text-white flex gap-6 uppercase">
            <li><Link to="/menu" className="before:transition-transform before:duration-300 hover:before:scale-100 relative before:absolute before:origin-left before:origin-left before:w-full before:scale-0 before:bg-white before:h-[1px] before:bottom-[-0.2rem] before:left-0 hover:text-[#d1d0d1] hover-transition-colors hover:duration-300">Menu</Link></li>
            <li><Link to="/reservation" className="before:transition-transform before:duration-300 hover:before:scale-100 relative before:absolute before:origin-left before:w-full before:scale-0 before:bg-white before:h-[1px] before:bottom-[-0.2rem] before:left-0 hover:text-[#d1d0d1] hover-transition-colors hover:duration-300">Reservation</Link></li>
            <li><Link to="/gallery" className="before:transition-transform before:duration-300 hover:before:scale-100 relative before:absolute before:origin-left before:w-full before:scale-0 before:bg-white before:h-[1px] before:bottom-[-0.2rem] before:left-0 hover:text-[#d1d0d1] hover-transition-colors hover:duration-300">Gallery</Link></li>
            <li><Link to="/contact" className="before:transition-transform before:duration-300 hover:before:scale-100 relative before:absolute before:origin-left before:w-full before:scale-0 before:bg-white before:h-[1px] before:bottom-[-0.2rem] before:left-0 hover:text-[#d1d0d1] hover-transition-colors hover:duration-300">Contact</Link></li>
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
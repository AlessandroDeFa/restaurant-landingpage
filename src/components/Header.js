import React, {useRef, useEffect} from "react";
import logo from "./assets/logo.png";
import {Link} from 'react-router-dom';

const Header = ()=> {
  const navbar = useRef(null);
  const toggle  = useRef(null);
  const handleClick = ()=> {
  navbar.current.classList.toggle('md:scale-y-100');
}
  
  
  return(
    <header className="p-4">
      <div className="grid grid-cols-3 max-w-[95%] my-0 mx-auto lg:flex lg:justify-between">
        <a className="w-fit" href="/"><img className="w-28" src={logo} alt="" /></a>
        <div ref={navbar} className="grid place-content-center md:absolute md:w-full md:left-0 md:top-[87px] md:block md:scale-y-0 origin-top md:transition-transform md:duration-300 md:z-10">
          <ul className="text-white flex lg:gap-4 gap-6 uppercase md:flex-col md:bg-[#140e11]  md:pt-4 md:[&>*]:border-[#4f4f4f] md:[&>*]:border-b-[1px] md:[&>*]:pb-[0.5rem] md:[&>*]:text-sm md:border-t-[1px] md:border-[#4f4f4f]">
            <li><Link to="/" className="before:transition-transform before:duration-300 hover:before:scale-100 relative before:absolute before:origin-left before:origin-left before:w-full before:scale-0 before:bg-white before:h-[1px] before:bottom-[-0.2rem] before:left-0 hover:text-[#d1d0d1] hover-transition-colors hover:duration-300 md:pl-4 md:before:hidden">Home</Link></li>
            <li><Link to="/menu" className="before:transition-transform before:duration-300 hover:before:scale-100 relative before:absolute before:origin-left before:origin-left before:w-full before:scale-0 before:bg-white before:h-[1px] before:bottom-[-0.2rem] before:left-0 hover:text-[#d1d0d1] hover-transition-colors hover:duration-300 md:pl-4 md:before:hidden">Menu</Link></li>
            <li><Link to="/reservation" className="before:transition-transform before:duration-300 hover:before:scale-100 relative before:absolute before:origin-left before:w-full before:scale-0 before:bg-white before:h-[1px] before:bottom-[-0.2rem] before:left-0 hover:text-[#d1d0d1] hover-transition-colors hover:duration-300 md:pl-4 md:before:hidden">Reservation</Link></li>
            <li><Link to="/gallery" className="before:transition-transform before:duration-300 hover:before:scale-100 relative before:absolute before:origin-left before:w-full before:scale-0 before:bg-white before:h-[1px] before:bottom-[-0.2rem] before:left-0 hover:text-[#d1d0d1] hover-transition-colors hover:duration-300 md:pl-4 md:before:hidden">Gallery</Link></li>
            <li><Link to="/contact" className="before:transition-transform before:duration-300 hover:before:scale-100 relative before:absolute before:origin-left before:w-full before:scale-0 before:bg-white before:h-[1px] before:bottom-[-0.2rem] before:left-0 hover:text-[#d1d0d1] hover-transition-colors hover:duration-300 md:pl-4 md:before:hidden">Contact</Link></li>
          </ul>
        </div>
        <div  className="flex justify-end items-center hidden md:flex">
          <div ref={toggle} onClick={handleClick} className="cursor-pointer flex flex-col items-end justify-center w-10 h-10">
          <span className="block w-4 h-0.5 bg-white mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
          <span className="block w-4 h-0.5 bg-white"></span>
        </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
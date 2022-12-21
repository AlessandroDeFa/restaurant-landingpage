import React from "react";
import logo from "./assets/logo.png";

const Header = ()=> {
  return(
    <header className="p-4">
      <div className="grid grid-cols-3 max-w-screen-2xl my-0 mx-auto">
        <img className="w-28" src={logo} alt="" />
        <div className="grid place-content-center">
          <ul className="text-white flex gap-6">
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservation</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div></div>
      </div>
    </header>
  )
}

export default Header;
import React from "react";
import logo from "./assets/logo.png";
import { RxInstagramLogo } from "react-icons/rx";
import { FaTripadvisor } from "react-icons/fa";
import { AiFillFacebook, AiOutlineSend } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  window.onload = function () {
    const copyright = document.querySelector(".copyright p");
    let year = new Date().getFullYear();
    copyright.innerText = `©${year} Designed by Alessandro De Faveri`;
  };

  return (
    <footer className=" pt-12 bg-[#140e11] text-white">
      <div className="grid grid-cols-3 max-w-[95%] my-0 mx-auto mb-8 md:grid-cols-2">
        <div>
          <a href="#">
            <img className="mb-8 w-32" src={logo} alt="" />
          </a>
          <div className="flex items-center gap-4 mb-4 max-w-xs">
            <input
              className="bg-transparent border-b-[1px] border-[#f8b984] placeholder:text-[#f8b984] placeholder:text-[0.9rem] p-[0.5rem] w-full"
              placeholder="Your Email"
              type="email"
            />
            <button>
              <AiOutlineSend className="w-[1.5rem] h-[1.5rem] hover:text-[#d1d0d1] hover-transition-colors hover:duration-300" />
            </button>
          </div>
          <div className="text-[#f8b984]">
            <p className="max-w-[350px] md:text-sm">
              Subscribe to our newsletter to stay in the loop with our latest
              news, promotions, and events.
            </p>
          </div>
        </div>
        <div className="grid place-items-center">
          <ul className="text-white flex gap-[0.5rem] uppercase flex-col">
            <li>
              <Link
                to="/"
                className="hover:text-[#d1d0d1] hover-transition-colors hover:duration-300"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="hover:text-[#d1d0d1] hover-transition-colors hover:duration-300"
              >
                MENU
              </Link>
            </li>
            <li>
              <Link
                to="/reservation"
                className="hover:text-[#d1d0d1] hover-transition-colors hover:duration-300"
              >
                RESERVATION
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="hover:text-[#d1d0d1] hover-transition-colors hover:duration-300"
              >
                GALLERY
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[#d1d0d1] hover-transition-colors hover:duration-300"
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 lg:text-sm md:col-span-2 md:pt-8 ">
          <div className="">+39 1234567891</div>
          <div className="">youremail@gmail.com</div>
          <div className="">32 Geylang Road, Singapore 049400</div>
          <div className="flex justify-center gap-4">
            <span>
              <RxInstagramLogo className="w-[1.5rem] h-[1.5rem] hover:text-[#f8b984] hover-transition-colors hover:duration-300 cursor-pointer" />
            </span>
            <span>
              <FaTripadvisor className="w-[1.5rem] h-[1.5rem] hover:text-[#f8b984] hover-transition-colors hover:duration-300 cursor-pointer" />
            </span>
            <span>
              <AiFillFacebook className="w-[1.5rem] h-[1.5rem] hover:text-[#f8b984] hover-transition-colors hover:duration-300 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
      <div className="copyright text-center pb-[0.5rem] text-[#f8b984]">
        <p></p>
      </div>
    </footer>
  );
};

export default Footer;

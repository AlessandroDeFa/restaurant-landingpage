import React from "react";
import Reservationbg from "./assets/bgReservation.jpg";
import {Link} from 'react-router-dom';


const Reservation = ()=> {
  return(
    <div style={{backgroundImage: `url(${Reservationbg})`}} className="bg-cover bg-center bg-no-repeat">
      <div className="py-32">
      <div className="w-full h-full flex flex-col justify-center items-center gap-12">
        <div className="text-[#f8b984] font-semibold text-4xl">Leat's Eat.</div>
        <p className="text-white max-w-[500px] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, repudiandae. Itaque fugiat totam nam laborum.</p>
        <div className="flex gap-8">
        <Link to="/reservation" className="hover:bg-[#e4ccc0] transition duration-400 w-52 h-12 bg-[#f8b984] text-sm text-black font-semibold uppercase bg-[#f8b984] text-center w-60 h-12 flex justify-center items-center"> reserve now <img src="" alt="" /></Link>
        <Link to="/contact" className="hover:bg-[#e4ccc0] transition duration-400 w-52 h-12 bg-[#f8b984] text-sm text-black font-semibold uppercase bg-[#f8b984] text-center w-60 h-12 flex justify-center items-center"> contact us <img src="" alt="" /></Link>
        </div>
      </div>
      </div>
      

    </div>
  )
}

export default Reservation;
import React, { useRef, useEffect } from "react";
import { Header, Footer } from "./index";
import gsap, { Power4 } from "gsap";

const ReservationPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    return false;
  };

  let resTitle = useRef(null);
  let resForm = useRef(null);

  useEffect(() => {
    gsap.from(resTitle, { opacity: 0, duration: 1.5 });
    gsap.from(resForm, { opacity: 0, duration: 1 }, "-=1.2");
  });

  return (
    <>
      <div className="bg-[#140e11]">
        <Header />
      </div>
      <div className="min-h-screen bg-[hsl(350,15%,10%)] flex flex-col">
        <div
          ref={(el) => (resTitle = el)}
          className="max-w-[95%] my-0 mx-auto pt-[15vh] w-full"
        >
          <div className="text-[#f8b984] text-5xl before:w-[75%] relative before:bg-[#f8b984] before:absolute before:h-[2px] before:left-[50%] before:bottom-[-0.5rem] before:translate-x-[-50%] w-fit">
            <h1>RESERVATION</h1>
          </div>
          <div className="pt-12 text-lg text-white">
            <p>
              After sending your booking request, please wait, we will take care
              to confirm as soon as possible. If the email confirmation does not
              arrive, it means that we are unable to guarantee the table. You
              can call us for more info.
            </p>
            <p className="pt-4">
              If you need to cancel your reservation, graciously give us 48
              hours notice. Any changes in bookings must be made in writing
              reservations@yearsofdelicious.com or with a call on +39
              1234567891.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-auto">
          <form
            ref={(el) => (resForm = el)}
            action=""
            onSubmit={onSubmit}
            className="max-w-5xl w-full mx-4 my-16"
          >
            <div className="flex justify-between">
              <input
                type="date"
                name="date"
                value="2022-01-01"
                min="2022-01-01"
                max="2025-12-31"
                className="bg-[#f8b984] w-1/2 p-[.5rem] border-b-[1px] outline-none mr-4 bg-transparent"
              />
              <input
                type="time"
                id=""
                name="time"
                min="09:00"
                max="18:00"
                required
                className="bg-[#f8b984] w-1/2 p-[.5rem] border-b-[1px] outline-none bg-transparent"
              />
            </div>
            <div className="flex justify-between mt-8">
              <input
                type="text"
                name="NameLastName"
                id=""
                placeholder="Name and Last Name *"
                className="text-white w-1/2 p-[.5rem] border-b-[1px] outline-none bg-transparent mr-4"
              />
              <input
                type="number"
                name="phone"
                id=""
                placeholder="Phone Number *"
                className="text-white w-1/2 p-[.5rem] border-b-[1px] outline-none bg-transparent"
              />
            </div>
            <div className="flex justify-between mt-8">
              <input
                type="number"
                name="phone"
                id=""
                placeholder="Number Of People*"
                className="text-white w-1/2 p-[.5rem] border-b-[1px] outline-none mr-4 bg-transparent"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                className="text-white w-1/2 p-[.5rem] border-b-[1px] outline-none bg-transparent"
              />
            </div>
            <div className="mt-8 grid grid-cols-2 sm:flex sm:flex-col">
              <div className="text-white flex flex-row-reverse items-center sm:justify-center">
                <label htmlFor="checkbox" className="pl-4">
                  <p>I agree to the Cookie Policies and Privacy Policy</p>
                </label>
                <input type="checkbox" name="checkbox" id="checkbox" />
              </div>
              <div className="grid place-items-end">
                <button
                  type="submit"
                  className="hover:bg-[#e4ccc0] transition duration-400  w-60 h-12 bg-[#f8b984]  text-sm text-black font-semibold uppercase md:w-52 sm:w-full sm:mt-8"
                >
                  SEND RESERVATION
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReservationPage;

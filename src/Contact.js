import React, { useRef, useEffect } from "react";
import { Header, Footer } from "./index";
import gsap, { Power4 } from "gsap";

const Contact = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    return false;
  };

  let contactTitle = useRef(null);
  let contactForm = useRef(null);

  useEffect(() => {
    gsap.from(contactTitle, { opacity: 0, duration: 1.5 });
    gsap.from(contactForm, { opacity: 0, duration: 1 }, "-=1.2");
  });

  return (
    <>
      <div className="bg-[#140e11]">
        <Header />
      </div>
      <div className="min-h-screen bg-[hsl(350,15%,10%)] flex flex-col">
        <div
          ref={(el) => (contactTitle = el)}
          className="max-w-[95%] my-0 mx-auto pt-[15vh] w-full"
        >
          <div className="text-[#f8b984] text-5xl before:w-[75%] relative before:bg-[#f8b984] before:absolute before:h-[2px] before:left-[50%] before:bottom-[-0.5rem] before:translate-x-[-50%] w-fit">
            <h1>CONTACT US</h1>
          </div>
          <div className="flex gap-16 pt-12 text-2xl text-white md:text-xl sm:flex-col sm:gap-8">
            <div className="flex flex-col gap-4">
              <p>+39 1234567891</p>
              <p>youremail@gmail.com</p>
            </div>
            <div className="flex flex-col gap-4">
              <p>32 Geylang Road,</p>
              <p>Singapore 049400</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-auto">
          <form
            ref={(el) => (contactForm = el)}
            action=""
            onSubmit={onSubmit}
            className="max-w-5xl w-full mx-4 my-16"
          >
            <div className="flex justify-between">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                className=" text-white w-1/2 p-[.5rem] border-b-[1px] outline-none mr-4 bg-transparent"
              />
              <input
                type="text"
                name="lastname"
                id=""
                placeholder="Last Name *"
                className="text-white w-1/2 p-[.5rem] border-b-[1px] outline-none bg-transparent"
              />
            </div>
            <div className="flex justify-between mt-8">
              <input
                type="number"
                name="phone"
                id=""
                placeholder="Phone Number *"
                className="text-white w-1/2 p-[.5rem] border-b-[1px] outline-none mr-4 bg-transparent"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                className="text-white w-1/2 p-[.5rem] border-b-[1px] outline-none bg-transparent"
              />
            </div>
            <div className="mt-8">
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Your Message *"
                className="text-white w-full p-[.5rem] border-b-[1px] outline-none bg-transparent"
              ></textarea>
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
                  SEND
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

export default Contact;

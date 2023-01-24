import React from "react";
import background from './components/assets/bg2.jpg';
// Sections
import {Header, Hero, Main, Dish, Reservation, Footer} from './index';

const Home = ()=> {
  return (
    <>
      <div className="flex flex-col h-screen bg-cover bg-no-repeat bg-left sm:bg-[15%] relative" style={{backgroundImage: `url(${background})`}}>
        {/* Header */}
        <Header/>
        {/* Hero Section */}
        <Hero/>
      </div>
      {/* Main */}
      <Main/>
      {/* dish Section */}
      <Dish/>
      {/* Reservation Section + contact */}
      <Reservation/>
      {/* footer [#131313] */}
      <Footer/>
    </>
  )
}

export default Home;
import React from 'react';
import background from './components/assets/bg2.jpg';
import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/main';
import Dish from './components/Dish';
import Reservation from './components/Reservation';

function App() {
  return (
    <div className="App">
      <div className="flex flex-col h-screen bg-cover bg-no-repeat bg-left" style={{backgroundImage: `url(${background})`}}>
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
    </div>
  );
}

export default App;

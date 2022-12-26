import React from 'react';
import background from './components/assets/bg2.jpg';
import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/main';

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
      {/* Reservation Section + contact */}
      {/* footer */}
    </div>
  );
}

export default App;

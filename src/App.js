import React from 'react';
import background from './components/assets/bg1.jpg';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <div className="flex flex-col h-screen bg-cover bg-no-repeat bg-left-top" style={{backgroundImage: `url(${background})`}}>
        {/* Header */}
        <Header/>
        {/* Hero Section */}
        <Hero/>
      </div>
      {/* Main */}
    </div>
  );
}

export default App;

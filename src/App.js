import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './Home';

// Pages
import {Menu, ReservationPage, Gallery, Contact} from './index';

function App() {
  return (
    <>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/menu' element={<Menu />} />
        <Route  path='/reservation' element={<ReservationPage />} />
        <Route  path='/gallery' element={<Gallery />} />
        <Route  path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

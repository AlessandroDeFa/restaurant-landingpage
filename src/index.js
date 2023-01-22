import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  { BrowserRouter } from 'react-router-dom';
//Sections
export {default as Header} from './components/Header';
export {default as Hero} from './components/Hero';
export {default as Main} from './components/main';
export {default as Dish} from './components/Dish';
export {default as Reservation} from './components/Reservation';
export {default as Footer} from './components/Footer';
//Pages
export {default as Menu} from './Menu';
export {default as ReservationPage} from './ReservationPage';
export {default as Gallery} from './Gallery';
export {default as Contact} from './Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar/NavBar';
import App from './App';
import TopHeader from './components/TopHeader/TopHeader';
import InnerHeader from './components/InnerHeader/InnerHeader';
import Meeting from './components/Meeting/Meeting';
import Review from './components/Review/Review';
import OrderSide from './components/OrderSide/OrderSide';
import ChatBox from './components/ChatBox/ChatBox';
import Footer from './components/Footer/Footer';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
   <NavBar/>
   < TopHeader/>
   < InnerHeader/>
   < Meeting/>
   < ChatBox/>
   < OrderSide/>
   < Review/>
   < Footer/>
   

   </React.StrictMode>
);

reportWebVitals();

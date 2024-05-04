import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage';
import App from './App';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
   <App/>
   

   </React.StrictMode>
);

reportWebVitals();

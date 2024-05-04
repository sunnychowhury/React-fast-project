// App.js
import React from 'react';
import './asset/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import NavBar from './components/NavBar/NavBar';
import PortfolioPage from './pages/PortfolioPage';
import AllCoursesPage from './pages/AllCoursesPage';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Course" element={<AllCoursesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import { Navbar, Nav,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../asset/images/logo.png';
import '../../asset/css/style.css';

const NavBar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 440);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <Navbar fixed="top" collapseOnSelect expand="lg" className={`${sticky ? 'nav-color' : ''}`}>
      <Navbar.Brand className='logo ms-auto' as={NavLink} to="/" >
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto Navbar-ul">
         
          <NavLink className='Navbar-li text-red' to="/home" > <a href="#home"  >Home </a> </NavLink>
          <NavLink className='Navbar-li text-red' to="/services" > <a href="#Service">Service</a> </NavLink>
          <NavLink className='Navbar-li text-red' to="/portfolio" > <a href="#Portfolio">Portfolio</a> </NavLink>
          <NavLink className='Navbar-li text-red' to="/course" > <a href="#Course">Course</a> </NavLink>
          <NavLink className='Navbar-li text-red' to="/contact" > <a href="#Contact">Contact</a> </NavLink>
          <NavLink className='Navbar-li text-red' to="/about" > <a href="#About">About</a> </NavLink>
          <Button as={NavLink} to="/"  className='Button1' variant="success">Login</Button>
          
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default NavBar;

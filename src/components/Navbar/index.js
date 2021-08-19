import React from "react"; 
import  { Nav,NavBars, NavIcon, NavLink } from "./navbarElements";
import { BrowserRouter as Router } from 'react-router-dom';


function Navbar() {
  return (
    <>
      <Nav>
        <Router>
        <NavLink to='/'>Pizza</NavLink></Router>
        <NavIcon >
          <p>Menu</p>
          <NavBars />
        </NavIcon>
        
      </Nav>
    </>

  )
}

export default Navbar;

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../Scss/_Header.css'
import Logo from './MSB.png';

export default class Header extends React.Component{
  render() {

    const logoImageClick = () => {
      window.location.href="/homePage";
    }

    return (
    <div className="Header-Bar">
    <img src={Logo} alt="Website-Logo" className="Website-Logo" onClick={() => logoImageClick()} />
    <Link to="/orderPage" className="Order-Button">Order</Link>
    <Link to="/boxesPage" className="Boxes-Button">Our Boxes</Link>
    <Link to="/aboutPage" className="About-Button">About</Link>
    <Link to="/contactPage" className="Contact-Button">Contact</Link>
    <Link to="/signup" className="Sign-up">Sign Up</Link>
  </div>
    )
  }
}
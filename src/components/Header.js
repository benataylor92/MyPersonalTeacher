import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../Scss/_Header.css'
import Logo from './MSB.png';
import '@progress/kendo-theme-default/dist/all.css';

export default class Header extends React.Component{
  render() {

    const logoImageClick = () => {
      window.location.href="/homePage";
    }

    return (
    <div className="Header-Bar">
    <img src={Logo} alt="Website-Logo" className="Website-Logo" onClick={() => logoImageClick()} />
    <div className="Header-links">
      <Link to="/KS1" className="KS1-Button">Key Stage 1</Link>
      <span class="k-icon my-custom-icon-class"></span>
      <Link to="/KS2" className="KS2-Button">Key Stage 2</Link>
      <Link to="/KS3" className="KS3-Button">Key Stage 3</Link>
      <Link to="/KS4" className="KS4-Button">Key Stage 4</Link>
      <Link to="/KS5" className="KS5-Button">Key Stage 5</Link>
      <Link to="/loginPage" className="Login-Button">Login</Link> 
      <Link to="/signup" className="Sign-up">Sign Up</Link>
      </div>
  </div>
    )
  }
}
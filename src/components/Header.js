import React from 'react'
import { Link } from 'react-router-dom';
import '../Scss/_Header.css'
import Logo from './MSB.png';
import SearchBar from './SearchBar';
import HeaderBanner from './HeaderBanner';


export default class Header extends React.Component{
  render() {

    const logoImageClick = () => {
      window.location.href="/homePage";
    }

    return (
    <div className="Header-Bar">
    <img src={Logo} alt="Website-Logo" className="Website-Logo" onClick={() => logoImageClick()} />
    <SearchBar />
    <HeaderBanner />
  </div>
    )
  }
}
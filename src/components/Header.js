import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../Scss/_Header.css'

export default class Header extends React.Component{
  render() {
    return (
    <div className="Header-Bar">
    <Link to="/" className="home-logo">Vintage 4 You</Link>
    <Link to="/menPage" className="Men-Button">Men</Link>
    <Link to="/womenPage" className="Women-Button">Women</Link>
  </div>
    )
  }
}
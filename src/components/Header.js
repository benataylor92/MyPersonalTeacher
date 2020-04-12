import React, { Component } from 'react'
import '../Scss/_Header.css'

export default class Header extends React.Component{
  render() {
    return (
    <div className="Header-Bar">
    <button className="home-logo">Vintage 4 You</button>
    <button className="Men-Button">Men</button>
    <button className="Women-Button">Women</button>
  </div>
    )
  }
}
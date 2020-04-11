import React from 'react'
import '../Scss/_Header.css'

function Header() {
  return (
    <div className="Header-Bar">
      <button className="home-logo">Vintage 4 You</button>
      <button className="Men-Button" type="button">Men</button>
      <button className="Women-Button">Women</button>
    </div>
  )
}

export default Header
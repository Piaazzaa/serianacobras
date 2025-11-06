import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "/Users/enrico/Desktop/Seriana Cobras/src/Graphics/Utilità/LogoCobras.JPG"
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="navbar-container">
      <nav className="navbar">
        <div className="navbar-left">
          <NavLink to="/" className="logo-link">
            <img src={logo} alt="Logo Seriana Cobras" className="team-logo" />
            <span className="brand">D.O.C. Seriana Cobras</span>
          </NavLink>
        </div>

        <ul className="navbar-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/campionato" end>Campionato</NavLink></li>
          <li><NavLink to="/roster">Squadra</NavLink></li>
          <li><NavLink to="/store">Store</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/sponsor">Sponsor</NavLink></li>
          <li><NavLink to="/contacts">Contatti</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
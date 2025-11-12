import React , { useState, useEffect }  from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../Graphics/Utilità/LogoCobras.JPG"
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <div className="navbar-left">
          <NavLink to="/" className="logo-link">
            <img src={logo} alt="Logo Seriana Cobras" className="team-logo" />
            <span className="brand">D.O.C. Seriana Cobras</span>
          </NavLink>
        </div>
        
        { isMobile && ( 
          <button
            className="navbar-toggle"
           onClick={toggleMenu}
            aria-label="Apri menu"
          >
            ☰
          </button>
        )}

        { !isMobile && ( 
          <ul className="navbar-links">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/campionato" end>Campionato</NavLink></li>
            <li><NavLink to="/roster">Squadra</NavLink></li>
            <li><NavLink to="/store">Store</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/sponsor">Sponsor</NavLink></li>
            <li><NavLink to="/contacts">Contatti</NavLink></li>
          </ul>
        )}

        {isMobile && menuOpen && (
          <div className="mobile-grid">
            <div className="grid-item"><a href="/">Home</a></div>
            <div className="grid-item"><a href="/campionato">Campionato</a></div>
            <div className="grid-item"><a href="/roster">Squadra</a></div>
            <div className="grid-item"><a href="/store">Store</a></div>
            <div className="grid-item"><a href="/about">About</a></div>
            <div className="grid-item"><a href="/sponsor">Sponsor</a></div>
            <div className="grid-item"><a href="/contacts">Contatti</a></div>
          </div>
        )}

      </nav>
    </header>
  )
}

export default Navbar


import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import './navbar.css'

function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-content--up">
          <h2 className="logo"><a href="#">OGX</a></h2>
          <CartWidget />
        </div>

        <div className="separador"></div>

        <div className="navbar-content--down">
          <ul className="menu">
            <li className="menu-item"><a href="#">Home</a></li>
            <li className="menu-item"><a href="#">Cuadros</a></li>
            <li className="menu-item"><a href="#">Poleras</a></li>
            <li className="menu-item"><a href="#">Relojes Modificados</a></li>
          </ul>
        </div>
      </nav>     
    </header>
  )
}

export default NavBar;
import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';

function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-content--up">
          <Logo />
          <CartWidget />
        </div>

        <div className="separador"></div>

        <div className="navbar-content--down">
          <ul className="menu">
            <li className="menu-item"><a href="/">Home</a></li>
            <li className="menu-item"><a href="/">Cuadros</a></li>
            <li className="menu-item"><a href="/">Poleras</a></li>
            <li className="menu-item"><a href="/">Relojes Modificados</a></li>
          </ul>
        </div>
      </nav>     
    </header>
  )
}

export default NavBar;
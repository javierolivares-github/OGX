import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import './navbar.css'

function NavBar() {
  return (
    <header>
      <nav class="navbar">
        <div class="navbar-content--up">
          <h2 class="logo"><a href="#">OGX</a></h2>
          <CartWidget />
        </div>

        <div class="separador"></div>

        <div class="navbar-content--down">
          <ul class="menu">
            <li class="menu-item"><a href="#">Home</a></li>
            <li class="menu-item"><a href="#">Cuadros</a></li>
            <li class="menu-item"><a href="#">Poleras</a></li>
            <li class="menu-item"><a href="#">Relojes Modificados</a></li>
          </ul>
        </div>
      </nav>     
    </header>
  )
}

export default NavBar;
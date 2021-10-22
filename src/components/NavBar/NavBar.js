import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-content--up">
          <Link to={`/`}><Logo /></Link>
          <CartWidget />
        </div>

        <div className="separador"></div>

        <div className="navbar-content--down">
          <ul className="menu">
            <li className="menu-item">
              <Link to={`/`}>Home</Link>
            </li>
            <li className="menu-item">
              <Link to={`/category/tees`}>Tees</Link>
            </li>
            <li className="menu-item">
              <Link to={`/category/watches`}>Modified Watches</Link>
            </li>
            <li className="menu-item">
              <Link to={`/contact`}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>     
    </header>
  )
}

export default NavBar;
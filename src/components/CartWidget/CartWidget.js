import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext'


function CartWidget() {
  const { cantidad } = useContext(CartContext);

  const class1 = 'svg-inline--fa fa-shopping-bag fa-w-14 shop-icon';
  const class2 = 'svg-inline--fa fa-shopping-bag fa-w-14 shop-icon shake';

  return (
    <Link to={'/cart'}>
      <div className="shop">
        <span className="shop-number" style={{
          visibility: cantidad === 0 ? "hidden" : "visible"
        }}>{cantidad}</span>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-bag" className={ cantidad === 0 ? class1 : class2 } role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"></path>
        </svg>
        <span className="shop-title">Go to cart</span>
      </div>    
    </Link>
  )
}

export default CartWidget;
import React, { useContext,useEffect } from 'react'
import { CartContext } from '../CartContext'
import { Link } from 'react-router-dom';

function Cart() {
  const {carrito, eliminarProducto, vaciarCarrito, obtenerTotal, total, verificar, pxq, cantidad} = useContext(CartContext);

  useEffect(() => {
    obtenerTotal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="wrapper">
      <h2 className="headline-1">Cart</h2>
      <p className="body">These are the products you have selected:</p>

      { 
        carrito.length === 0 
        ? 
          <div className="cart-row">
            <h2>No products added</h2>
            <Link to={'/'}>Go to home &larr;</Link>
          </div> 
        : <>
          {carrito.map(function (item, index) {
            return (
              <div className="cart-row" key={index}>
                <div className="cart-content">
                  <img className="cart-img" src={item.image} alt="item image" />
                  <h3 className="cart-title">{item.title}</h3>
                  <p className="cart-amount">{item.amount} x</p>
                  <p className="cart-price">${pxq(item.price, item.amount)}</p>
                  <button className="btn-close" onClick={() => {eliminarProducto(index)}}>X</button>
                </div>
              </div>
            )
          })}
      
          <div className="cart-row">
            <div className="cartTotal-content">
              <div className="d-flex">
                <h3 className="cartTotal--title">Amount of items</h3>
                <p className="cartTotal--price">{cantidad}</p>
              </div>
              <br />
              <div className="d-flex">
                <h3 className="cartTotal--title">Sub-Total</h3>
                <p className="cartTotal--price">${total}</p>
              </div>
              <br />
              <div className="d-flex">
                <button className="btn-primary bg-2" onClick={vaciarCarrito}>Clean cart</button>
                <Link to={`/cart/payments`}>
                  <button className="btn-primary" onClick={verificar}>Checkout</button>
                </Link>
              </div>
            </div>
          </div>
        </>
      }

      <br />
      <br />
      <br />

    </div>
  )
}

export default Cart

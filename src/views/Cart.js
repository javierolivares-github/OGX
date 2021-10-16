import React, { useContext,useEffect } from 'react'
import { CartContext } from '../CartContext'

function Cart() {
  const {carrito, eliminarProducto, vaciarCarrito, obtenerTotal, total, verificar} = useContext(CartContext);
  
  useEffect(() => {
    obtenerTotal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="wrapper">
      <h2 className="headline-1">Cart</h2>
      <p className="body">These are the products you have selected:</p>

      {carrito.map(function (item, index) {
        return (
          <div className="cart-row" key={index}>
            <div className="cart-content">
              <img className="cart-img" src={item.image} alt="item image" />
              <h3 className="cart-title">{item.title}</h3>
              <p className="cart-amount">{item.amount} x</p>
              <p className="cart-price">${item.price * item.amount}</p>
              <button className="btn-close" onClick={() => {eliminarProducto(index)}}>X</button>
            </div>
          </div>
        )
      })}
  
      <div className="cart-row">
        <div className="cartTotal-content">
          <div className="d-flex">
            <h3 className="cartTotal--title">Sub-Total</h3>
            <p className="cartTotal--price">${total}</p>
          </div>
          <br />
          <div className="d-flex">
            <button className="btn-primary bg-2" onClick={vaciarCarrito}>Clean cart</button>
            <button className="btn-primary" onClick={verificar}>Checkout</button>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

    </div>
  )
}

export default Cart

import React, { useContext,useEffect } from 'react'
import { CartContext } from '../CartContext'
import { Link } from 'react-router-dom';
import Form from '../components/Form/Form';

function Cart() {
  const {
    carrito, 
    eliminarProducto, 
    vaciarCarrito, 
    obtenerTotal, 
    total, 
    addUserInfo,
    saveOrder, 
    pxq, 
    cantidad} = useContext(CartContext);


    // const sendOrder = () => {
    //   addUserInfo(uName, email, phone);
    //   saveOrder()
    // }


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
        : 
        <>
          {carrito.map(function (item, index) {
            return (
              <div className="cart-row" key={index}>
                <div className="cartListItem">
                  <img className="cartListItem-img" src={item.image} alt="item image" />
                  <h3 className="cartListItem-title">{item.title}</h3>
                  <p className="cartListItem-amount">{item.amount} x</p>
                  <p className="cartListItem-price">${pxq(item.price, item.amount)}</p>
                  <button className="cartListItem-btnClose" onClick={() => {eliminarProducto(index)}}>X</button>
                </div>
              </div>
            )
          })}

          <br /> <br /> <br />

          <div className="cartListSummary">
            <h3 className="body fw-700 mb-1">Summary:</h3>
            <div className="grid-2">
              <div>
                <div className="d-flex">
                  <h3 className="caption">Amount of items:</h3>
                  <p className="caption fw-700">{cantidad}</p>
                </div>
                <br />
                <div className="d-flex">
                  <h3 className="caption">Sub-Total:</h3>
                  <p className="caption fw-700">${total}</p>
                </div>
              </div>

              <div className="self-end">
                <button className="btn-secondary" onClick={vaciarCarrito}>Clean cart</button>
              </div>
            </div>
            
          </div>
      
          <div className="cart-row">
            <div className="cartTotal-content">
              <Form />
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

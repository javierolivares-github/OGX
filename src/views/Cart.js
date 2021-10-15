import React, { useContext,useEffect, useState } from 'react'
import { CartContext } from '../CartContext'

function Cart() {
  const [carrito, setCarrito] = useContext(CartContext)

  const [total, setTotal] = useState(0);

  function getTotal () {
    let tot = 0;
    carrito.forEach((item) => {
      tot = tot + item.price
    });
    setTotal(tot);
  }

  function borrar (index) {
    const temp = carrito;
    temp.splice(index, 1);
    setCarrito(temp);
    console.log(carrito);
    
  }

  useEffect(() => {
    getTotal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="wrapper">
      <h2 className="headline-1">Cart</h2>
      <p className="body">These are the products you have selected:</p>
      <div className="separador"></div>
      <br />

      <ul>
        {carrito.map((item, index) => {
          return (
            <li key={index}>
              <h3>{item.title}</h3>
              <h3>{item.price}</h3>
              <button onClick={() => {borrar(index)}}>Borrar</button>
            </li>
          )
        })}
      </ul>
      
      <h3>Total: {total}</h3>

    </div>
  )
}

export default Cart

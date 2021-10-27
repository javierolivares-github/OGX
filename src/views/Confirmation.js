import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

function Confirmation() {
  const {vaciarCarrito} = useContext(CartContext);

  return (
    <div className="wrapper">
      <h2 className="headline-1 mb-2 greenland-color">Success</h2>
      <p className="body mb-1 greenland-color">Your order has been sent successfully!!</p>
      <Link to={'/'} className="caption" onClick={vaciarCarrito} >Go back to home &larr;</Link>
    </div>
  )
}

export default Confirmation

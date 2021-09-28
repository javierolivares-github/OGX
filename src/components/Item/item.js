import React from 'react'


function Item({ productos }) {
  return (
    <>
      {productos.map(producto => (
        <div className="card">
          <div className="card__img">
            <img src={producto.pictureUrl} alt="pattern" />
          </div>
          <div className="card__content">
            <h3>{producto.title}</h3>
            <p>{producto.description}</p>
            <p>$ {producto.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default Item;

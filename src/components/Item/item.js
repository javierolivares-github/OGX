import React from 'react'
import products from "../../products";

function Item() {
  return (
    <>
      {products.map(product => (
        <div className="card">
          <div className="card__img">
            <img src={product.pictureUrl} alt="pattern" />
          </div>
          <div className="card__content">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default Item;

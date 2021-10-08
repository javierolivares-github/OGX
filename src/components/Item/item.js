import React from 'react'
import { Link } from 'react-router-dom';


function Item({ id, image, price, title }) {
  return (
    <>
      <div className="card">
        <div className="card__img">
          <Link to={'/product/'+id}>
            <img src={image} alt={title} />
          </Link>
        </div>
        <div className="card__content">
          <h3>{title}</h3>
          <p>$ {price.toFixed(2)}</p>
        </div>
      </div>
    </>
  )
}

export default Item;

import React from "react";
import Item from '../Item/item'

function ItemList({ products }) {
  return (
    <div className="itemList-content">
      <div className="item__container">
        {products.length>0 && products.map(product => (
          <Item key={product.id} id={product.id} image={product.image} price={product.price} title={product.title} />
        ))}

      </div>
    </div>
  )
}

export default ItemList;
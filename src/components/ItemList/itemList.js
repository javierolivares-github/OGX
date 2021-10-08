import React from "react";
import Item from "../Item/Item";

function ItemList({ products }) {
  return (
    <div className="itemList-content">
      <div className="item__container">
        {products.length>0 && products.map(product => (
          <Item key={product.id} id={product.id} image={product.pictureUrl} price={product.price} title={product.title} />
        ))}

      </div>
    </div>
  )
}

export default ItemList;
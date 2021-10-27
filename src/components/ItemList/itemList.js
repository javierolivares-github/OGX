import React from "react";
import Item from '../Item/item'
import Message from "../Message/Message";

function ItemList({ products, message }) {

  return (
    <div className="itemList-content">
      <div className="item__container">
        {products.length>0 && products.map((product, index) => (
          <Item key={index} productId={product.id} image={product.imageId} price={product.price} title={product.title} />
        ))}

        <Message message={message} />
      </div>
    </div>
  )
}

export default ItemList;
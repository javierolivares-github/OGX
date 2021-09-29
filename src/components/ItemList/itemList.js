import React from "react";
import Item from "../Item/Item";

function ItemList({ item_title, productos }) {
  return (
    <div className="itemList-content">
      <h2 className="itemList__title">{item_title}</h2>
      <div className="item__container">
        {productos.map(producto => (
          <Item key={producto.id} producto={producto}/>
        ))}

      </div>
    </div>
  )
}

export default ItemList;
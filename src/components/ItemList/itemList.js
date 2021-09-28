import React from "react";
import Item from "../Item/Item";

function ItemList({ item_title, productos }) {
  return (
    <div className="itemList-content">
      <h2 className="itemList__title">{item_title}</h2>
      <div className="item__container">
        <Item productos={productos}/>
      </div>
    </div>
  )
}

export default ItemList;
import React from "react";
import Item from "../Item/item";

function ItemList() {
  return (
    <div className="itemList-content">
      <h2 className="features__title">Poleras</h2>
      <div className="card__container">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  )
}

export default ItemList;
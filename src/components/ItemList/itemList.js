import React from "react";
import Item from "../Item/Item";

function ItemList() {
  return (
    <div className="itemList-content">
      <h2 className="features__title">Poleras</h2>
      <div className="card__container">
        <Item />
      </div>
    </div>
  )
}

export default ItemList;
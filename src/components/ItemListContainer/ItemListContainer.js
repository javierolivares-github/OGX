import React from "react"
import ItemList from "../ItemList/ItemList";


function ItemListContainer() {
  
  return (
    <div className="itemList">
      <div className="wrapper">
        <div className="itemList-container">
          <ItemList />
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer;





import React from "react"
import ItemList from "../ItemList/itemList";
import './itemlistcontainer.css'

function ItemListContainer() {
  
  fetch('./bdpoleras.json')
    .then(res => res.json())
    .then(data => console.log(data))



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





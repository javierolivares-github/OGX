import React from "react"
import './itemlistcontainer.css'

function ItemListContainer() {
  let items = "elementos de la lista";

  return (
    <div className="itemList">
      <div className="wrapper">
        <div className="itemList-container">
          <div className="itemList-content">
             <p>Acá van los {items}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer;



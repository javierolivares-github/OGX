import React from "react"
import './itemlistcontainer.css'

function ItemListContainer() {
  let gretting = "Hola";

  return (
    <div className="itemList">
      <div className="wrapper">
        <div className="itemList-container">
          <div className="itemList-content">
             <p>{gretting}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer;



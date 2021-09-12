import React from "react"
import './itemlistcontainer.css'

function ItemListContainer() {
  let gretting = "Hola acá van los elementos de la lista";

  return (
    <div className="itemList">
      <div className="wrapper">
        <div className="itemList-container">
          <div className="itemList-content">
             <p>Acá van los {gretting}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer;



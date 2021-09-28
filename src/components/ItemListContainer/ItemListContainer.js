import React from "react"
import ItemList from "../ItemList/ItemList";
import poleras from "../../poleras";
import relojes from "../../relojes";


function ItemListContainer() {
  
  return (
    <div className="itemList">
      <div className="wrapper">
        <div className="itemList-container">
          <ItemList item_title="Poleras" productos={poleras}/>
          <ItemList item_title="Relojes Modificados" productos={relojes}/>
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer;





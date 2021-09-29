import React, { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList";
import polerasDB from "../../poleras";
import relojesDB from "../../relojes";


function ItemListContainer() {
  const [poleras, setPoleras] = useState([]);
  const [relojes, setRelojes] = useState([]);
  
  useEffect(() => {
    setTimeout(() => {setPoleras(polerasDB);}, 2000);
  }, [poleras]);
  
  useEffect(() => {
    setTimeout(() => {setRelojes(relojesDB);}, 2000);
  }, [relojes]);

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





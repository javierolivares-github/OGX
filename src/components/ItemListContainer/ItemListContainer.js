import React, { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList";
import darPoleras from "../../poleras";
import darRelojes from "../../relojes";


function ItemListContainer() {
  const [poleras, setPoleras] = useState([]);
  const [relojes, setRelojes] = useState([]);
  
  useEffect(() => {
    darPoleras()
    .then((res) => {
      setPoleras(res);
    })
  }, []);
  
  useEffect(() => {
    darRelojes()
    .then((res) => {
      setRelojes(res);
    })
  }, []);

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





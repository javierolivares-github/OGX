import React, { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList";
import getProducts from "../../products";


function ItemListContainer() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getProducts()
    .then((res) => {
      setProducts(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("Promesa terminada")
    })
  }, []);
  
  
  return (
    <div className="itemList">
      <div className="wrapper">
        <div className="itemList-container">
          <h2 className="itemList__title">Productos</h2>
          <ItemList products={products}/>
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer;





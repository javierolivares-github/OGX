import React, { useState, useEffect } from "react";
import ItemList from '../ItemList/itemList';



function ItemListContainer() {
  const [products, setProducts] = useState([]);
  
  const getItems = () => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setProducts(data)
    })
  }

  useEffect(() => {
    getItems();    
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





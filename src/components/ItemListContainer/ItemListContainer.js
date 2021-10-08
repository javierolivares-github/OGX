import React, { useState, useEffect } from "react";
import ItemList from '../ItemList/itemList';
import axios from 'axios'


function ItemListContainer() {
  const [products, setProducts] = useState([]);
  
  const getItems = () => {
    axios.get('/products.json')
    .then(res => {
      setProducts(res.data)
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





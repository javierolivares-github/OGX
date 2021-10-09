import React, { useState, useEffect } from "react";
import ItemList from '../ItemList/itemList';
import { useParams } from "react-router";


function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const {categoryId} = useParams()
  
  const getAllItems = () => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      setProducts(data);
      console.table(data);
    } )
    .catch(err => console.log(err))
  }

  const getCategory = () => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      const category = data.filter(item => item.category === categoryId)
      setProducts(category);
      console.table(category);
    } )
    .catch(err => console.log(err))
  }

  useEffect(() => {
    if(categoryId) {
      setTimeout(()=> {getCategory();}, 2000)
    } else {
      setTimeout(()=> {getAllItems();}, 2000)
    }
  }, [categoryId]);
  
  
  return (
      <>
        <ItemList products={products}/>
      </>
  )
}

export default ItemListContainer;





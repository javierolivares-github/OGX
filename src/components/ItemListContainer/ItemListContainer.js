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
    } )
    .catch(err => console.log(err))
  }

  const getCategory = () => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      const category = data.filter(item => item.category === categoryId)
      setProducts(category);
    } )
    .catch(err => console.log(err))
  }

  useEffect(() => {
    if(categoryId) {
      getCategory();
    } else {
      getAllItems();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);
  
  
  return (
      <>
        <ItemList products={products}/>
      </>
  )
}

export default ItemListContainer;





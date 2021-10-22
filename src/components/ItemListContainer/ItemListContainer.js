import React, { useState, useEffect } from "react";
import ItemList from '../ItemList/itemList';
import { firestore } from '../../firebase';
import { useParams } from "react-router";


function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const {categoryId} = useParams()

  const getCollectionFromFirebase = () => {
    const db = firestore;
    const products = db.collection('products');
    const query = products.get()

    query
      .then((resultado)=> {
        const docs = resultado.docs;
        const array_final_de_productos = [];
        docs.forEach(product => {
          const id = product.id;
          const el_resto = product.data();
          const producto_final = {id,...el_resto};
          array_final_de_productos.push(producto_final);
        })
        console.table(array_final_de_productos);
        setProducts(array_final_de_productos);
        
      })
      .catch((error)=> {
        console.log(error)
      })
  }

  const getCategoryFromFirebase = () => {
    const db = firestore;
    const products =db.collection("products");
    const query = products.where("categoryId", "==", categoryId).get();

    query
      .then((resultado)=> {
        const docs = resultado.docs;
        const array_final_de_productos = [];
        docs.forEach(product => {
          const id = product.id;
          const el_resto = product.data();
          const producto_final = {id,...el_resto};
          array_final_de_productos.push(producto_final);
        })
        console.table(array_final_de_productos);
        setProducts(array_final_de_productos);
        
      })
      .catch((error)=> {
        console.log(error)
      })
  }

  useEffect(() => {
    if(categoryId) {
      getCategoryFromFirebase();
    } else {
      getCollectionFromFirebase();
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





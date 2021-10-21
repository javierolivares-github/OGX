import React, { useState, useEffect } from "react";
import ItemList from '../ItemList/itemList';
import { firestore } from '../../firebase';
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

  const getCollectionFromFirebase = () => {
    // necesito la referencia de la db
    const db = firestore;
    // necesito la referencia de la colección
    const collection = db.collection('products');
    // hago la consulta (get-where-doc-add)
    const query = collection.get()

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
        
      })
      .catch((error)=> {
        console.log(error)
      })
  }

  useEffect(() => {
    if(categoryId) {
      getCategory();
    } else {
      getCollectionFromFirebase();
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





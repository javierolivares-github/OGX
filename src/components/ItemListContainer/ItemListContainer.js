import React, { useState, useEffect } from "react";
import ItemList from '../ItemList/itemList';
import { firestore } from '../../firebase';
import { useParams } from "react-router";
import Loader from '../Loader/Loader';


function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const {categoryId} = useParams()

  const getCollectionFromFirebase = () => {
    const db = firestore;
    const collection = db.collection('products');
    const query = collection.get();

    query
      .then((resultado)=> {
        if(resultado.size === 0) {
          setMessage('No products in the store!');
        } else {
          const docs = resultado.docs;
          const array_final_de_productos = [];
          docs.forEach(product => {
            const id = product.id;
            const el_resto = product.data();
            const producto_final = {id,...el_resto};
            array_final_de_productos.push(producto_final);
          });
          setProducts(array_final_de_productos);
        }
      })
      .catch((error)=> {
        setMessage(`Error searching items ${error}`);
      })
      .finally(() => {
        setLoading(false);
      })
  }

  const getCategoryFromFirebase = () => {
    const db = firestore;
    const products =db.collection("products");
    const query = products.where("categoryId", "==", categoryId).get();

    query
      .then((resultado)=> {
        if(resultado.size === 0) {
          setMessage('No products in the store!');
        } else {
          const docs = resultado.docs;
          const array_final_de_productos = [];
          docs.forEach(product => {
            const id = product.id;
            const el_resto = product.data();
            const producto_final = {id,...el_resto};
            array_final_de_productos.push(producto_final);
          });
          setProducts(array_final_de_productos);
        }
      })
      .catch((error)=> {
        setMessage(`Error searching items ${error}`);
      })
      .finally(() => {
        setLoading(false);
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
        { loading ? <Loader/> : <ItemList products={products} message={message}/>}
      </>
  )
}

export default ItemListContainer;





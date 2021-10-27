import React, { createContext, useState} from "react";
import firebase from "firebase";
import { firestore } from "./firebase";

export const CartContext = createContext();

export const CartProvider = (props) => {

  const [carrito, setCarrito] = useState([]);
  const [cantidad, setCantidad] = useState(0);
  const [total, setTotal] = useState(0);
  const [confirmMes, setConfirmMes] = useState('');

  const agregarProducto = (data, cantidad) => {
    const item = {
      id: data.id,
      title: data.title,
      image: data.imageId,
      price: data.price,
      amount: cantidad,
      stock: data.stock
    }
  
    const temp = carrito;
    temp.push(item);
    setCarrito(temp);
  }

  const eliminarProducto = (index) => {
    const temp = carrito;
    temp.splice(index, 1);
    setCarrito(temp);
    obtenerTotal()
  }

  const calcularCantidad = () => {
    const cantidadItems = carrito.reduce( (acc, prod) => acc + prod.amount, 0);
    setCantidad(cantidadItems);
  }

  const isInCart = (itemId) => {
    return carrito.some((prod) => prod.id === itemId);
    
  }

  const vaciarCarrito = () => {
    setCarrito([]);
    setTotal(0);
    setCantidad(0);
  }

  const obtenerTotal = () => {
    let tot = 0;
    carrito.forEach((item) => {
      tot = tot + (item.price * item.amount)
    });
    let totFixed =tot.toFixed(2)
    setTotal(totFixed);
  }

  const pxq = (price, quantity) => {
    const calculate = price * quantity;
    calculate.toFixed(2);
    return calculate;
  }

  

  const saveOrder = (buyer) => {
    
    const order = {
      buyer: buyer,
      items: carrito,
      date: firebase.firestore.Timestamp.now(),
      total: total
    }

    const db = firestore;
    const collection = db.collection('orders');
    const query = collection.add(order);
    
    query
      .then((result) => {
        setConfirmMes(`Your order has been processed successfully! The id of your purchase is the ${result.id}`);
        // vaciarCarrito();
      })
      .catch((err) => {
        setConfirmMes(`An error has occurred in the order process. Error: ${err}`);
      })
  }

  const valor_del_contexto = {
    carrito,
    confirmMes,
    agregarProducto,
    eliminarProducto,
    vaciarCarrito,
    obtenerTotal,
    total,
    saveOrder,
    pxq,
    isInCart,
    calcularCantidad,
    cantidad
  }


  return (
    <CartContext.Provider value={valor_del_contexto}>
      {props.children}
    </CartContext.Provider>
  )
}


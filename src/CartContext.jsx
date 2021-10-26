import React, { createContext, useState} from "react";
import firebase from "firebase";
import { firestore } from "./firebase";

export const CartContext = createContext();

export const CartProvider = (props) => {

  const [carrito, setCarrito] = useState([]);
  const [cantidad, setCantidad] = useState(0);
  const [total, setTotal] = useState(0);
  const [userInfo, setUserInfo] = useState({});

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

  const addUserInfo = (name, email, phone) => {
    const buyer = {
      name: name,
      email: email,
      phone: phone
    }

    setUserInfo(buyer);
  }

  const saveOrder = () => {
    const orderToSave = {
      buyer: userInfo,
      items: carrito,
      date: firebase.firestore.Timestamp.now(),
      total: total
    }

    const db = firestore;
    const collection = db.collection('orders');
    const query = collection.add(orderToSave);
    
    query
      .then((docRef) => {
        console.log(docRef);
      })
  }

  const valor_del_contexto = {
    carrito,
    agregarProducto,
    eliminarProducto,
    vaciarCarrito,
    obtenerTotal,
    total,
    addUserInfo,
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


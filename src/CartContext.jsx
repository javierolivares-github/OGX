import React, { createContext, useState} from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {

  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  const agregarProducto = (data, cantidad) => {
    console.log("Agregar un producto al carrito")

    const item = {
      title: data.title,
      image: data.imageId,
      price: data.price,
      amount: cantidad,
      stock: data.stock
    }
  
    const temp = carrito;
    temp.push(item);
    setCarrito(temp);

    console.log(item);
  }

  const eliminarProducto = (index) => {
    console.log("Borrar un producto del carrito")

    const temp = carrito;
    temp.splice(index, 1);
    setCarrito(temp);
    obtenerTotal()
    console.log(temp)
  }

  const vaciarCarrito = () => {
    console.log("Vaciar el carrito")
    setCarrito([]);
    setTotal(0)
  }

  const obtenerTotal = () => {
    let tot = 0;
    carrito.forEach((item) => {
      tot = tot + (item.price * item.amount)
    });
    let totFixed =tot.toFixed(2)
    setTotal(totFixed);
  }

  const verificar = () => {
    console.log("Ir a pantalla de pagos")
  }

  const valor_del_contexto = {
    carrito,
    agregarProducto,
    eliminarProducto,
    vaciarCarrito,
    obtenerTotal,
    total,
    verificar
  }


  return (
    <CartContext.Provider value={valor_del_contexto}>
      {props.children}
    </CartContext.Provider>
  )
}


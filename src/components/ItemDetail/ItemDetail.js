import React, {useContext } from 'react'
import { CartContext } from '../../CartContext'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({data}) {
  const {agregarProducto} = useContext(CartContext);
  
  const onAdd = (cantidad) => {
    agregarProducto(data,cantidad);
  }

  return (
    <>
      <div className="detail__img">
        <img src={data.imageId} alt="ramdom" />
      </div>
      <div className="detail__content">
        <h2 className="detail__title">{data.title}</h2>
        <p className="detail__price">${data.price}</p>
        <p className="detail__stock">Stock: only {data.stock} left!</p>
        <br />
        <ItemCount onAdd={onAdd} stock={data.stock} productId={data.id}/>
        <div className="separador"></div>
        <br />
        <h3 className="headline-3">Description:</h3>
        <p className="body">{data.description}</p>
      </div>
    </>
  )
}

export default ItemDetail;

import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer({identifier}) {
  const [data, setData] = useState({});

  const getData = () => {
    fetch('https://fakestoreapi.com/products/'+identifier)
    .then(res => res.json())
    .then(data => {
      setData(data)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getData();  
  }, []);


  return (
    <div className="wrapper">
      <div className="detail__container">
        <ItemDetail image={data.image} title={data.title} price={data.price} description={data.description} />
      </div>
    </div>
  )
}

export default ItemDetailContainer

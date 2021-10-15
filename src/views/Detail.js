import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ItemDetail from '../components/ItemDetail/ItemDetail'

function Detail() {
  const {id} = useParams();
  
  const [data, setData] = useState({});

  const getData = () => {
    fetch('https://fakestoreapi.com/products/'+ id)
    .then(res => res.json())
    .then(data => {
      setData(data);
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps  
  }, []);


  return (
    <div className="wrapper">
      <div className="detail__container">
        <ItemDetail image={data.image} title={data.title} price={data.price} description={data.description} id={data.id}/>
      </div>
    </div>
  )
}

export default Detail

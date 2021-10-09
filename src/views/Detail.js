import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Detail(props) {
  const [identifier] = props.match.params.id;

  const [data, setData] = useState({});

  const getData = () => {
    axios.get('/products.json', {
      params: {
        id: 1
      }
    })
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getData();    
  }, []);



  return (
    <div className="wrapper">
      <div className="detail__container">
        <div className="detail__img">
          <img src="../images/tee01.png" alt="ramdom" />
        </div>
        <div className="detail__content">
          <h2 className="detail__title">Manifesting Reality Tee</h2>
          <p className="detail__price">$14.00</p>
          <button className="buy-btn">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-bag" className="svg-inline--fa fa-shopping-bag fa-w-14 shop-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"></path></svg>
            <span>Add to cart</span>
            </button>
          <br />
          <div className="separador"></div>
          <br />
          <h3 className="headline-3">Description:</h3>
          <p className="body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat aspernatur, sit dolor aliquid, eveniet vel assumenda totam fugit officia minus a amet! Labore reiciendis animi, non quos repellat in amet!</p>
        </div>
      </div>
    </div>
  )
}

export default Detail

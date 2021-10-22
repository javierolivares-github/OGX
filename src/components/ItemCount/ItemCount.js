import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function ItemCount({ onAdd, stock }) {
  const [contador, setContador] = useState(1);
  
  const incrementar = () => {
    setContador(contador < stock ? contador + 1 : stock);
  }

  const disminuir = () => {
    setContador(contador > 1 ? () => {setContador(contador - 1)} : 1);
  }

  const confirmar = () => {
    onAdd(contador)
  }

  return (
    <>
      <div className="amount">
        <button className="plus-btn" onClick={incrementar}>
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="8.25" x2="17" y2="8.25" stroke="#2E2B26" strokeWidth="1.5"/>
            <line x1="8.25" y1="17" x2="8.25" stroke="#2E2B26" strokeWidth="1.5"/>
          </svg>
        </button>

        <input type="text" name="count" id="count" value={contador} className="count" readOnly/>

        <button className="minus-btn" onClick={disminuir}>
          <svg width="17" height="2" viewBox="0 0 17 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1.25" x2="17" y2="1.25" stroke="black" strokeWidth="1.5"/>
          </svg>
        </button>
      </div>
    
      <br />
        <Link to={'/cart'}>
          <button className="addToCart-btn" onClick={confirmar} >
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-bag" className="svg-inline--fa fa-shopping-bag fa-w-14 shop-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"></path></svg>
            <span>Add to cart</span>
          </button>
        </Link>
      <br />
    </>
  )
}

export default ItemCount;

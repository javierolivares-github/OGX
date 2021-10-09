import React from "react";
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';


function Home() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <h2 className="headline-1">All Products</h2>
          <p className="caption">This is a sample of the products we have in stock:</p>
          <div className="separador"></div>
          <br />
          <ItemListContainer />
        </div>
      </div>
    </>
  )
}

export default Home;
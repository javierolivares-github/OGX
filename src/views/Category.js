import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useParams } from 'react-router'


function Category() {
  const {categoryId} = useParams()

  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  const categoryUpper = capitalize(categoryId);


  return (
    <div className="wrapper">
      <h2 className="headline-1">{categoryUpper}</h2>
      <div className="separador"></div>
      <br />
      <ItemListContainer />
    </div>
  )
}

export default Category

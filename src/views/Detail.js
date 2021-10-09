import React from 'react'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'

function Detail(props) {
  const [identifier] = props.match.params.id;


  return (
    <ItemDetailContainer identifier={identifier} />
  )
}

export default Detail

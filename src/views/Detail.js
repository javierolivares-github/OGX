import React from 'react'
import { useParams } from 'react-router'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'

function Detail(props) {
  const [identifier] = props.match.params.id;
  const {idItem} = useParams()
  
  console.log(idItem)
  console.log(identifier)

  return (
    <ItemDetailContainer identifier={identifier} />
  )
}

export default Detail

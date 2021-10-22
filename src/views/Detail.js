import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../components/ItemDetail/ItemDetail';
import { firestore } from '../firebase';

function Detail() {
  const {id} = useParams();
  const [data, setData] = useState({});

  const getDocumentFromFirebase = () => {
    const db = firestore;
    const productRef = db.collection('products').doc(id);
    const query = productRef.get();
    
    query
      .then((resultado)=> {
        if(resultado.exists) {
          const product = resultado.data()
          console.table(product);
          setData(product);
        }      
      })
      .catch((error)=> {
        console.log(error)
      })
  }

  useEffect(() => {
    getDocumentFromFirebase();
    // eslint-disable-next-line react-hooks/exhaustive-deps  
  }, []);


  return (
    <div className="wrapper">
      <div className="detail__container">
        <ItemDetail data={data}/>
      </div>
    </div>
  )
}

export default Detail

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../components/ItemDetail/ItemDetail';
import { firestore } from '../firebase';
import Loader from '../components/Loader/Loader';

function Detail() {
  const {id} = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  const getDocumentFromFirebase = () => {
    const db = firestore;
    const productRef = db.collection('products').doc(id);
    const query = productRef.get();
    
    query
      .then((doc)=> {
        if (doc.exists) {
          setProduct({id: doc.id, ...doc.data()});
        } else {
          setMessage('Your product does not exist!');
        }  
      })
      .catch((error)=> {
        setMessage(`Error searching items ${error}`);
      })
      .finally(() => {
        setLoading(false);
      })
  }

  useEffect(() => {
    getDocumentFromFirebase();
    // eslint-disable-next-line react-hooks/exhaustive-deps  
  }, []);


  return (
    <div className="wrapper">
      <div className="detail__container">
        { loading ? <Loader/> : <ItemDetail data={product}/>}
      </div>
    </div>
  )
}

export default Detail

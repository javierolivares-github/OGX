import React, { useState, useContext } from 'react';
import Message from '../Message/Message';
import {Link} from 'react-router-dom';
import { CartContext } from '../../CartContext';

function OrderForm({saveOrder}) {
  const {confirmMes, cleanConfirmMes} = useContext(CartContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [nameMes, setNameMes] = useState('');
  const [emailMes, setEmailMes] = useState('');
  const [phoneMes, setPhoneMes] = useState('');

  const [validated, setValidated] = useState(false);
 
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  const validateAndSaveOrder = () => {
    if (name === '') {
      setNameMes('Name is required.');
    } else {
      setNameMes('');
    }

    if (!validateEmail(email)) {
      setEmailMes('Valid email is required.');
    } else {
      setEmailMes('');
    }

    if (phone === '') {
      setPhoneMes('Phone is required.');
    } else {
      setPhone('');
    }

    if (name !== '' && validateEmail(email) && phone !== '') {
      saveOrder({name, email, phone});
    } 
  }

  


  return (
      <div className="form">
        
        <h3 className="body fw-700 mb-1">Contact information:</h3>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" onChange={ e => setName(e.target.value)} required maxLength="50"/>
          <Message message={nameMes} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" onChange={ e => setEmail(e.target.value)} required maxLength="50"/>
          <Message message={emailMes} />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Contact number:</label>
          <input type="text" name="phone" id="phone" onChange={ e => setPhone(e.target.value)}  required maxLength="11"/>
          <Message message={phoneMes} />
        </div>
        
        

        { confirmMes === '' 
          ? 
          <button className="btn-primary" onClick={validateAndSaveOrder} >Send order</button>
          :
          <Link to={"/cart/confirmation"} >
            <button className="buy-btn" onClick={cleanConfirmMes}>Order Ready!</button>
          </Link>
      }
 
      </div>
  )
}

export default OrderForm


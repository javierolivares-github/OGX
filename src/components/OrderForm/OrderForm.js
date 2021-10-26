import React, { useState } from 'react';


function OrderForm({saveOrder}) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
 
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  const validateAndSaveOrder = () => {
    if (name === '') {
      console.log('Name is required.')
    } 

    if (!validateEmail(email)) {
      console.log('Valid email is required.')
    }

    if (phone === '') {
      console.log('Phone is required.')
    }

    if (name !== '' && validateEmail(email) && phone !== '') {
      saveOrder({name, email, phone})
    } 
  }


  return (
      <div className="form">
        
        <h3 className="body fw-700 mb-1">Contact information:</h3>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" onChange={ e => setName(e.target.value)} required maxLength="50"/>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" onChange={ e => setEmail(e.target.value)} required maxLength="50"/>
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Contact number:</label>
          <input type="text" name="phone" id="phone" onChange={ e => setPhone(e.target.value)}  required maxLength="12"/>
        </div>
        
        <button className="btn-primary" onClick={validateAndSaveOrder} >Send order</button>
        
      </div>
  )
}

export default OrderForm


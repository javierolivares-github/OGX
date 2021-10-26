import React from 'react';
import { Link } from 'react-router-dom';


function Form() {

  return (
      <div className="form">
        <h3 className="body fw-700 mb-1">Contact information:</h3>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name"  required maxLength="50"/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" required maxLength="50"/>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Contact number:</label>
          <input type="text" name="phone" id="phone"  required maxLength="12"/>
        </div>
        <Link to={'/cart/confirmation'}>
          <button className="btn-primary" >Send order</button>
        </Link>
      </div>
  )
}

export default Form


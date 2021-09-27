import React from 'react'

function Item() {
  return (
    <div className="card">
      <div className="card__img">
        <img src="https://source.unsplash.com/user/erondu" alt="pattern" />
      </div>
      <div className="card__content">
        <h3>First Feature</h3>
        <p>Short text describing a feature of your product/service.</p>
      </div>
    </div>
  )
}

export default Item;

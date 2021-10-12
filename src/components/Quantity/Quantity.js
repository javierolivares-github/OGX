import React, { useState } from 'react'

function Quantity() {
  const [count, setCount] = useState(0);
  console.log(count);

  return (
    <div className="amount">
      <button className="plus-btn" onClick={()=> {setCount(count + 1)}}>
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="8.25" x2="17" y2="8.25" stroke="#2E2B26" strokeWidth="1.5"/>
          <line x1="8.25" y1="17" x2="8.25" stroke="#2E2B26" strokeWidth="1.5"/>
        </svg>
      </button>

      <input type="text" name="count" id="count" value={count} className="count" readOnly/>

      <button className="minus-btn" onClick={count>0 ? ()=> {setCount(count - 1)} : null}>
        <svg width="17" height="2" viewBox="0 0 17 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="1.25" x2="17" y2="1.25" stroke="black" strokeWidth="1.5"/>
        </svg>
      </button>
    </div>
  )
}

export default Quantity

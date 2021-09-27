import React, { useState, useEffect } from "react";

function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Haz clickeado ${count} veces`
  }, [count]);

  return (
    <div>
      <p>Tu haz clickeado {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Clickeame!
      </button>
    </div>
  )
}

export default Count;
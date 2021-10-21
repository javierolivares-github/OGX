import React, { useState, useEffect } from 'react'

function Loader({props}) {
  const [loading, setLoading ] = useState(props);

  useEffect(() => {
    setTimeout(()=> {
      setLoading(false);
    }, 5000);
  }, [])


  return (
    <>
      { loading ? <h2>Loading...</h2> : null}
    </>
  )
}

export default Loader;

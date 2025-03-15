import React, { useState, useEffect } from 'react'

function LoggerComponent() {
    const[count, setCount]=useState(0);

    useEffect(() => {
      alert("Component rendered or count changed!", count)
    });
    
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default LoggerComponent

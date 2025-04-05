import { useState } from 'react'
import './App.css'

function App() {
   
  function handleIncrement(){

  }
  function handleDecrementClick(){
    
  }
  return (
    <div className='container'>
     <button onClick={handleIncrementClick}>+</button>
     <p>Count</p>
     <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default App

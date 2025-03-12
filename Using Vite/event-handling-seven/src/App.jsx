import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleCLick() {
    alert("I am clciked!");
  }

  function handleMouseOver()
  {
    alert("Para ke upar mouse lekar aaye ho!")
  }

  function handleInputChange()
  {
    alert("Input me  value change hui he!")
  }
  return (
    <div>
      <form>
        <input type="text" onChange={handleInputChange} />
      </form>
      <p onMouseOver={handleMouseOver} style={{border:"2px solid black", background:"red"}}>
        I am a paragraph!
      </p>

      <button onClick={handleCLick}>Click me </button>
    </div>
  )
}

export default App

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

  function handleInputChange(e)
  {
    console.log("Input me  value change hui he!", e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    alert("Form submit kardu kya?")
  }
  return (
    <div>

      <button onClick={()=>alert("Button click hua he")}>Click me</button>
      <br/>
      <br/>
      <br/>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button type='submit'>Submit</button>
      </form>
      <p onMouseOver={handleMouseOver} style={{border:"2px solid black", background:"red"}}>
        I am a paragraph!
      </p>

      <button onClick={handleCLick}>Click me </button>
    </div>
  )
}

export default App

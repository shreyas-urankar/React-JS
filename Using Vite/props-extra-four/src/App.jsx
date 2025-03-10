import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function App() {
  const[count, setCount]=useState(0);
  function handleClick()
  {
    setCount(count+1)
  }
  return (
    <div>
      <Button handleClick={handleClick} text="Click me">
        <h1>{count}</h1>
        </Button>
      <Card name="Shreyas Urankar">
      <h1>Best WEB DEV courses</h1>
      <p>Trying to be consistent in this.</p>
      <p>Will complete the course soon. </p>
      </Card>
      <card>
        Hello Jee, kaise ho saare
      </card>
    </div>
  )
}

export default App

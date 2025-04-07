import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  
  return (
    <>
      <div>
        Count: {count}
      </div>
      <br />
      <br />
      <div>
        <button onClick={handleClick}>
          Increment
        </button>
      </div>
      <br />
      <br />
      <div>
        <ChildComponent buttonName="Click me" />
      </div>
    </>
  )
}

export default App

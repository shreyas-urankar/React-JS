import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  let val = useRef(0);
  let btnRef = useRef()
  function handleIncrement() {
    val.current = val.current + 1;
    setCount(count + 1);
  }

  function changeColor(){
    btnRef.current.style.backgroundColor="red";
  }
  useEffect(() => {
    console.log("Main firse render ho gaya hu!")
  })

  return (
    <div>
      <button 
      ref={btnRef}
      onClick={handleIncrement}>Increment</button>
      <br />
      <br/>
      <button onClick={changeColor}>Change color of 1st button</button>
      <br/>
      <div>
        Count: {count}
      </div>
    </div>
  );
}

export default App;

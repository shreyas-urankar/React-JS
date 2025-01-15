import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {
  let [status, setStatus] = useState(false);

  return (
    <div className="App">
      <button onClick={()=>setStatus(!status)}>
        {(status)? 'Hide' : 'Show'} </button>
      {
        ( status) 
        ?
        <p className='para'>Welcome to Shreyas's React JS</p>
        :
        ''
      }
    </div>
  );
}

export default App;

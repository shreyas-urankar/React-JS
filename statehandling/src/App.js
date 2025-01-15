import logo from './logo.svg';
import './App.css';
import btnModule from "./Button.module.css";
import React, { useState } from 'react';
function App() {
  let [status, setStatus] = useState(false);

  return (
    <div className="App">
      <button className={btnModule.error}>Error</button>
      <button className={btnModule.warning}>Warning</button>
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

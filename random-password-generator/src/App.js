import { useState } from "react";
import "./App.css";
import { UC, LC, NC, SC } from "./PassChar";

function App() {
  let [uppercase, setUpperCase] = useState(false);
  let [lowercase, setLowerCase] = useState(false);
  let [number, setNumber] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [passwordlen, setPasswordLen]=useState(10)
  let [fPass, setPass]=useState('')
  let createPassword = () => {
    let charSet = "";
    let finalPass="";
    if (uppercase || lowercase || number || symbols) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (number) charSet += NC;
      if (symbols) charSet += SC;

      for(let i=0; i<passwordlen; i++){
        finalPass+=charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      setPass(finalPass)
    } else {
      alert("Please select one CheckBox.....!");
    }
  }

  let copyPass=()=>{ 
    navigator.clipboard.writeText(fPass)
  }
    return (
      <div className="passwordBox">
        <h2 className="text-center">Password Generator</h2>

        <div className="passwordBoxIn">
          <input type="text" readOnly placeholder="Generated Password" value={fPass}/>
          <button onClick={copyPass}>Copy</button>
        </div>

        <div className="passlength">
          <label>Password Length</label>
          <input type="number" max={20} min={10} value={passwordlen} onChange={(event)=>setPasswordLen(event.target.value)} />
        </div>

        <div className="passlength">
          <label>Include Uppercase Letters</label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUpperCase(!uppercase)}
          />
        </div>

        <div className="passlength">
          <label>Include Lowercase Letters</label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowerCase(!lowercase)}
          />
        </div>

        <div className="passlength">
          <label>Include Numbers</label>
          <input
            type="checkbox"
            checked={number}
            onChange={() => setNumber(!number)}
          />
        </div>

        <div className="passlength">
          <label>Include Symbols</label>
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
        </div>

        <button className="btn" onClick={createPassword}>
          Generate Password
        </button>
      </div>
    );
  };


export default App;

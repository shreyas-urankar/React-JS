import logo from "./logo.svg";
import "./App.css";
import btnModule from "./Button.module.css";
import React, { useState } from "react";
function App() {
  let [status, setStatus] = useState(false);
  let [pstatus, setPstatus] = useState(false);
  let [menuStatus, setMenuStatus] = useState(false);
  let [modalStatus, setModalStatus]=useState(false);

  return (
    <div className="App">

    <button className="en" onClick={()=>setModalStatus(true)}>Enquire Now</button>
      <div onClick={()=>setModalStatus(false)} className={`modalOverLay ${modalStatus ? 'modalShow' : ''}` }></div>
      <div className={`modalDiv ${modalStatus ? 'showModalDiv' : ''}` }><h3>Enquire Now <span onClick={()=>setModalStatus(false)} >&times;</span></h3></div>
      <button className="menuIcon" onClick={() => setMenuStatus(!menuStatus)}>
        {
          menuStatus ? 
          <span>&times;</span>
          :
          <span>&#9776;</span>
        }
      </button>
      <div className={`menu ${menuStatus ? "activeMenu" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Contact</li>
        </ul>
      </div>
      <input type={pstatus ? "text" : "password"} />
      <button onClick={() => setPstatus(!pstatus)}>
        {pstatus ? "Hide" : "Show"}
      </button>
      <br />
      <button className={btnModule.error}>Error</button>
      <button className={btnModule.warning}>Warning</button>
      <button onClick={() => setStatus(!status)}>
        {status ? "Hide" : "Show"}{" "}
      </button>
      {status ? <p className="para">Welcome to Shreyas's React JS</p> : ""}
    </div>
  );
}

export default App;

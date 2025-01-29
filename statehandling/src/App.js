import "./App.css";
import btnModule from "./Button.module.css";
import React, { useState } from "react";
import { questions } from "./Data/faqQuestions";
// import Faqs from "./Faqs";

function App() {
  let [status, setStatus] = useState(false);
  let [pstatus, setPstatus] = useState(false);
  let [menuStatus, setMenuStatus] = useState(false);
  let [modalStatus, setModalStatus] = useState(false);
  let [showAns, setShowAns]=useState(questions[0].id);

  let n=["ram","ravi","manas","kush"]
  return (
    <div className="App">
      <button>Save</button>
      {/* <Faqs/> */}
      <div>
        <ul>
          {n.map((items,i)=>{
            return(
              <li key={i}>{items}</li>
            )
          })}
        </ul>
      </div>
      <h1>Frequently Asked Questions (FAQs)</h1>
      <div className="faqouter" >
        {questions.map((faqItems, i) => {
          return (
            <div className="faqItems" key={faqItems.id}>
              <h2 onClick={()=>setShowAns(faqItems.id)}>{faqItems.question}</h2>
              <p className={showAns===faqItems.id ? 'activeAns' : '' }>{faqItems.answer}</p>
            </div>
          );
        })}
      </div>

      <button className="en" onClick={() => setModalStatus(true)}>
        Enquire Now
      </button>
      <div
        onClick={() => setModalStatus(false)}
        className={`modalOverLay ${modalStatus ? "modalShow" : ""}`}
      ></div>
      <div className={`modalDiv ${modalStatus ? "showModalDiv" : ""}`}>
        <h3>
          Enquire Now <span onClick={() => setModalStatus(false)}>&times;</span>
        </h3>
      </div>
      <button className="menuIcon" onClick={() => setMenuStatus(!menuStatus)}>
        {menuStatus ? <span>&times;</span> : <span>&#9776;</span>}
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
        {status ? "Hide" : "Show"}
      </button>
      {status && <p className="para">Welcome to Shreyas's React JS</p>}
    </div>
  );
}

export default App;

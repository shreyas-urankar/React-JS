import "./App.css";
import Header from "./Header";
import doglogo from "./images/dog.jpeg";
import catlogo from "./images/cat.jpeg";
import Button from "./Button";
import { useState } from "react";
function App() {

  let template = "";
  let [count, setCount] = useState(1);
  let [pshow, setPshow] = useState(false);
  if (pshow) {
    template=<>
    <button className="pshow.hide" onClick={()=>setPshow(!pshow)}>Hide</button>
    <p>Welcome to Shreyas's ReactJS</p>
    </>
  } 
  else {
    template = <button className="pshow" onClick={()=>setPshow(!pshow)}>Show pshow</button>;
  }


  let displayData = () => {
    // alert("We lcome to Shreyas's React Project")
    setCount(count + 1);
  };

  let addData = (a, b) => {
    alert(a + b);
  };


  return (
    <div className="App">
      {template}
      <div>{count}</div>

      <button className="save-button" onClick={displayData}>
        Save
      </button>
      <button className="add-data" onClick={() => addData(20, 25)}>
        Add Data
      </button>
      <img />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <img
          width={200}
          src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?cs=srgb&dl=pexels-charlesdeluvio-1851164.jpg&fm=jpg"
          alt="A beautiful landscape"
        />
        <img src={doglogo} width={200} alt="Another dog image" />
        <img src={catlogo} width={250} alt="Cat image" />
      </div>
      <Header />
      <h1 style={{ fontSize: "40px", color: "#b91c1c", fontWeight: "bold" }}>
        Welcome
      </h1>
    </div>
  );
}

export default App;

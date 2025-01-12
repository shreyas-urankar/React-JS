import './App.css';
import Header from './Header';
import doglogo from "./images/dog.jpeg";
import catlogo from "./images/cat.jpeg";

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
        <img 
          width={200}
          src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?cs=srgb&dl=pexels-charlesdeluvio-1851164.jpg&fm=jpg"
          alt="A beautiful landscape"
        />
        <img 
          src={doglogo}
          width={200}
          alt="Another dog image"
        />
        <img src={catlogo}
        width={250}
        alt='Cat image'/>
      </div>
      <Header />
      <h1 style={{ fontSize: '40px', color: '#b91c1c', fontWeight: 'bold' }}>Welcome</h1>
    </div>
  );
}

export default App;

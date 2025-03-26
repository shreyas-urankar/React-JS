import { createContext, useState } from 'react';
import './App.css';
import ChildA from './components/ChildA';

// Step 1: Create Context
const UserContext = createContext();

// Step 2: Wrap all the child components inside a provider
// Step 3: Pass value
// Step 4: Consume the value inside the consumer

const ThemeContext = createContext();

function App() {
  const [user, setUser] = useState({ name: "Shreyas" });
  const [theme, setTheme] = useState("light");

  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div id='container' style={{ backgroundColor: theme === 'light' ? 'beige' : 'black' }}>
          <ChildA />
        </div>
      </ThemeContext.Provider>
    </UserContext.Provider>


    // <div>
    //   <UserContext.Provider value={user}>
    //     <ChildA />
    //   </UserContext.Provider>
    // </div>
  );
}

export default App;
export { UserContext }
export { ThemeContext };

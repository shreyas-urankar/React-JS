import LogoutBtn from './components/LogoutBtn'
import LoginBtn from './components/LoginBtn'
import './App.css'
import { useState } from 'react';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true)

return(
  <div>
    <h1>Welcome to shreyas's home</h1>
    <div>
      {isLoggedIn && <LogoutBtn/>}
    </div>
  </div>
)




  // return (
  //   <div>
  //     {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
  //   </div>
  // )



  // if(isLoggedIn){
  //   reurn (
  //     <LogoutBtn/>
  //   )
  // }
  // else{
  //   return <LoginBtn/>
  // }
}

export default App

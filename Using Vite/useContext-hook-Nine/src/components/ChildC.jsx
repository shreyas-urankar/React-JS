import React, { useContext }  from 'react'
import { ThemeContext, UserContext} from "../App"
const ChildC = () => {
    const user=useContext(UserContext);
    const {theme, setTheme} = useContext(ThemeContext);

      function handleClick() {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
      }
      
    
  return (
    <div>
     <button onClick={handleClick}>Change Theme</button>
     data: {user.name}
    </div>
  )
}

export default ChildC

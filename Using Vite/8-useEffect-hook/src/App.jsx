import './App.css'
import { useEffect, useState } from 'react'
import LoggerComponent from './LoggerComponent'
import TimmerComponent from './TimmerComponent'
function App() {
// const [count, setCount] = useState(0);
// const [total, setTotal] = useState(1);
// Variation 1:
  // useEffect(() => {
  //   alert("I wil run on each render")
  // }) 

  //Variation 2:
  // useEffect(() => {
  //  alert("I will run on only 1st render!")
  // }, [])
  
  // Variation 3:
  // useEffect(() => {
  //   alert("I will run every time when count is updated! ")
  // }, [count])
  

  // Variation 4:
  //multiple dependencies
  // useEffect(() => {
  //   alert("I will run every time when count/total is updated!")
  // }, [count, total])
  

  // Variation 5:
  //  iss bar lets add a clean up function:
  // useEffect(() => {
  //   alert("Count is updated!")
  //   return ()=>{
  //     alert("count is unmounted from UI");
  //   }
  // }, [count])
  

  // function handleClick(){
  //   setCount(count+1);
  // }

  // function handleClickTotal()
  // {
  //   setTotal(total+1);
  // }


  return (
   <div>
    {/* <LoggerComponent/> */}

    <TimmerComponent/>
    {/* <button onClick={handleClick}>Update count</button>
    <br/>
    Count is: {count }
    <br/>
    <button onClick={handleClickTotal}>Update total</button>
    <br/>
    Total is: {total} */}
   </div>
  )
}

export default App

import React, { useEffect, useState } from 'react'

function TimmerComponent() {
    const [seconds, setSeconds]=useState(0);
    useEffect(() => {
        const intervalId=setInterval(()=>{
            console.log("setInterval executed");
            setSeconds(prevSeconds=>prevSeconds+1);
        },1000)
    
      return () => {
        clearInterval(intervalId);
      };
    }, []);
    console.log("Time to stop!")
  return (
    <div>
      <h1>Seconds: {seconds}</h1>
    </div>
  )
}

export default TimmerComponent

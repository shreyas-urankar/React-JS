import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
    const[title, setTitle] = useState("");
  return (
    <div>
      <input 
      className='p-2 rounded-2xl mt-2'
      type='text'
      placeholder='enter title here'
      value={title}
      onChange={(e)=>setTitle(e.target.value)}/>
    </div>
  )
}

export default Home

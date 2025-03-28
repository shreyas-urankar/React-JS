import React from 'react'
import {useParams} from 'react-router-dom'
const Paracomp = () => {
    const {id}=useParams();
  return (
    <div>
      Para:{id}
    </div>
  )
}

export default Paracomp

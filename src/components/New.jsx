import React, { useContext } from 'react'
import { ApiContext } from './ApiData';

const New = () => {
    let {data} = useContext(ApiContext)
  return (
    <div>
      {data.map((item)=>(
        <h2>{item.title}</h2>
      ))}
    </div>
  )
}

export default New

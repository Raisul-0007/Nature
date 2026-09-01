import React, { useContext } from 'react'
import { ApiContext } from './ApiData';
import Container from './Container'
const New = () => {
    let {data} = useContext(ApiContext)
  return (
    <div>
      <Container clasName="">
        <div className="text-5xl font-semibold py-10">
          <h2>New Collection</h2>
        </div>
        <div className="flex flex-wrap gap-5">
      {data.map((item)=>(
        <div className="w-1/4">
          <div className="bg-[rgba(0,253,0,0.11)] py-8 rounded-t-4xl">
            <img src={item.thumbnail} alt="" />
          </div>
          <div className="flex justify-between items-end  bg-[#33FF33] px-5 py-4 rounded-b-4xl">
            <h2 className='text-3xl capitalize'>{item.title.slice(0,13)}</h2>
            <p className='text-xl'>{item.price}</p>
            </div> 
        </div>
      ))}
      </div>
      </Container>
    </div>
  )
}

export default New

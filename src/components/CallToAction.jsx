import React from 'react'
import Container from './Container';

const CallToAction = () => {
  return (
    <div className='bg-[rgba(0,253,0,0.46)] py-20'>
      <Container>
        <div className="">
            <h3 className='text-5xl text-center text-white'>Search You Needed</h3>
        </div>
        <div className="flex justify-center py-5">
            <input className='bg-white px-20 py-3.5 rounded-full' type="text" />
        </div>
        <div className="flex justify-center">
            <button className='bg-white px-20 py-3 rounded-full border border-white hover:bg-[#ffffff00] cursor-pointer text-green-500 hover:text-white text-xl '>Shop</button>
        </div>
      </Container>
    </div>
  )
}

export default CallToAction

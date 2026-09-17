import React from 'react'
import Container from './Container'
const Footer = () => {
  return (
    <div className='bg-primary border-b border-primary py-10'>
      <Container clasName="flex py-5">
        <div className="w-1/5 text-5xl text-secondary py-5">
            Nature
        </div>
        <div className="w-3/5 flex justify-center">
            <ul className='text-lg text-white'>
                <h3 className='text-3xl font-bold py-5'>Pages</h3>
                <li className='relative hover:text-primary hover:transition-all hover:duration-500 cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.5  after:w-0 after:bg-primary after:transition-all after:duration-500 hover:after:w-full'>Home</li>
                <li className='relative hover:text-primary hover:transition-all hover:duration-500 cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.5  after:w-0 after:bg-primary after:transition-all after:duration-500 hover:after:w-full'> Shop</li>
            </ul>
        </div>
        <div className="w-1/5 flex justify-center">
        <div className="">
        <div className="">
          <h3 className='text-3xl text-white font-bold py-5'>Contact</h3>
        </div>
        <div className=' rounded-3xl cursor-pointer text-left text-white text-lg'>
          <div className="">
            <p>hello@naturaorganics.com</p>
          </div>
          <div className="">
            <p>+1 (800) 482-9102</p>
            <p>742 Evergreen Terrace, Portland, OR</p>
          </div>
        </div>
        </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer

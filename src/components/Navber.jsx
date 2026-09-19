import React from 'react'
import Container from "./Container"
import Home  from '../pages/Home'
import Shop from "../pages/Shop"
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
    <div className='bg-white border-b border-primary shadow-[0_8px_20px_rgba(0,0,0,0.15)]'>
      <Container clasName="flex items-center py-5">
        <div className="w-1/5 text-5xl text-primary">
            Nature
        </div>
        <div className="w-3/5 ">
            <ul className='flex items-center justify-center gap-5 text-lg'>
                <li >
                  <Link className='relative hover:text-primary hover:transition-all hover:duration-500 cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.5  after:w-0 after:bg-primary after:transition-all after:duration-500 hover:after:w-full' to="/">Home</Link>
                </li>
                <li> 
                  <Link className='relative hover:text-primary hover:transition-all hover:duration-500 cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.5  after:w-0 after:bg-primary after:transition-all after:duration-500 hover:after:w-full' to="/shop">Shop</Link>
                </li>
            </ul>
        </div>
        <div className="w-1/5">
        <button className='bg-primary px-8 py-3 rounded-3xl cursor-pointer'>Contact Us</button>
        </div>
      </Container>
    </div>
  )
}

export default Navber

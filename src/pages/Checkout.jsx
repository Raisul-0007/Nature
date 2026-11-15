import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Chackout = () => {
  let dispatch = useDispatch()
  let cartData = useSelector((state)=> state.cart.cartItem)
  console.log(cartData);
  
  return (
    <div>
      Checkout
    </div>
  )
}

export default Chackout

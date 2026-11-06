import { configureStore } from '@reduxjs/toolkit'
import  cartSlice  from '../components/slice/Cartslice'

export const store = configureStore({
  reducer: {
    cart : cartSlice
  },
})
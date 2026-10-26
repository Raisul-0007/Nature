import { configureStore } from '@reduxjs/toolkit'
import  Cartslice  from '../components/slice/Cartslice'

export const store = configureStore({
  reducer: {
    cart : Cartslice
  },
})
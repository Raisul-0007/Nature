import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItem: []
}

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let index = state.cartItem.findIndex((item)=> item.id === action.payload.id)
      if(index !== -1){
        state.cartItem[index].qun++
      }else{
        state.cartItem = [...state.cartItem, action.payload]
      }
    },
    removeCart: (state, action)=>{
      let filterCart = state.cartItem.filter((item)=> item.id !=action.payload.id)
      state.cartItem = filterCart
    },
    increment: (state, action)=>{
      let index = state.cartItem.findIndex((item)=> item.id === action.payload.id)
      if(index !== -1){
        state.cartItem[index].qun++
      }
    },
    decrement: (state, action) => {
      let index = state.cartItem.findIndex((item)=> item.id === action.payload.id)
      if(index !== -1 && state.cartItem[index].qun > 1){
      state.cartItem[index].qun--
      }
    },
  }
})

export const { addToCart, removeCart, increment, decrement } = cartSlice.actions


export default cartSlice.reducer
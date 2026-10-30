import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItem: []
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let index = state.cartItem.findIndex((item)=> item.id == action.payload.id)
      if(index != -1){
        state.cartItem[index].qun++
      }else{
        state.cartItem = [...state.cartItem, action.payload]
      }
    },
    removeCart: (state, action)={
      let filterCart = state.cartItem.filter((item)=> item.id !=action.payload.id)
      state.cartItem = filterCart
    },
    decrement: state => {
      state.cartItem[index].qun--
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions


export default counterSlice.reducer
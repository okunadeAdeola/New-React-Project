import { createSlice } from "@reduxjs/toolkit";



export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    cart: []
  },
  reducers: {
    increment: (state, payload) => {
      
      let productItem = state.cart.find((item) => item.id === payload.payload )
     
      productItem.cartQuantity +=1
      
    },

    decrement: (state, action) =>{
        
        let productItem = state.cart.find((item) => item.id === action.payload )
        productItem.cartQuantity > 1 ? productItem.cartQuantity -=1 : 0
        
    },
    remove: (state, action)=> {
      state.cart.splice(action.payload, 1)
    },
    

    
    addToCart: (state, payload) =>{
      state.cart.push(payload.payload)
       
  },
  }
})

export const { increment, decrement, remove, addToCart } = counterSlice.actions
export default counterSlice.reducer








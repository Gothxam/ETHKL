import { createSlice } from '@reduxjs/toolkit'

const initialState = {isCartOpen:false} 


export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
    openCart: (state) => {
      state.isCartOpen = true;
    },
  },
  
})

// Action creators are generated for each case reducer function
export const { toggleCart, closeCart, openCart } = sidebarSlice.actions

export default sidebarSlice.reducer
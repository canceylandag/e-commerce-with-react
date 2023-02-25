import { createSlice } from '@reduxjs/toolkit'

const initial= {
    products:[],
    categories:[]
  }

export const productSlice = createSlice({
  name: 'products',
  initialState:initial,
  reducers: {
    addToProducts: (state, action) => {
        state.products = action.payload
      },
      addToCategories: (state, action) => {
        state.categories = action.payload
      },
    
  }
})

// Action creators are generated for each case reducer function
export const { addToProducts,addToCategories } = productSlice.actions

export default productSlice.reducer
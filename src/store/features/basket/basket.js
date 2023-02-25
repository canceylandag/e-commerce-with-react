import { createSlice } from '@reduxjs/toolkit'

const initial= {
    value: []
  }

export const basketSlice = createSlice({
  name: 'basket',
  initialState:initial,
  reducers: {
   
    
    addToBasket: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToBasket } = basketSlice.actions

export default basketSlice.reducer
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IBasket{
  value:string[]
}

const initial:IBasket= {
    value: []
  }

export const basketSlice = createSlice({
  name: 'basket',
  initialState:initial,
  reducers: {
   
    
    addToBasket: (state, action: PayloadAction<string[]>) => {
      state.value = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToBasket } = basketSlice.actions

export default basketSlice.reducer
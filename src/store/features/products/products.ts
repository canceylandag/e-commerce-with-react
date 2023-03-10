import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductList } from '../../../models/productModelDTO';


interface IProduct{
  products:ProductList,
  categories:Array<string>
}

const initial:IProduct= {} as IProduct

export const productSlice = createSlice({
  name: 'products',
  initialState:initial,
  reducers: {
    addToProducts: (state, action:PayloadAction<ProductList>) => {
        state.products = action.payload;
      },
      addToCategories: (state, action:PayloadAction<Array<string>>) => {
        state.categories = action.payload;
      },
    
  }
})

// Action creators are generated for each case reducer function
export const { addToProducts,addToCategories } = productSlice.actions

export default productSlice.reducer
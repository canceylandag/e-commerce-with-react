import { configureStore } from '@reduxjs/toolkit';
import basketReducer from "./features/basket/basket";
import filterReducer from "./features/filter/filter";
import productReducer from "./features/products/products"

export default configureStore({
  reducer: {
    filter:filterReducer,
    basket:basketReducer,
    products:productReducer
  }
})
import { configureStore } from '@reduxjs/toolkit';
import basketReducer from "./features/basket/basket";
import filterReducer from "./features/filter/filter";
import productReducer from "./features/products/products"

export const store= configureStore({
  reducer: {
    filter:filterReducer,
    basket:basketReducer,
    products:productReducer
  }
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
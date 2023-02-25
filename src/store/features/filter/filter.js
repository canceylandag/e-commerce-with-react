import { createSlice } from '@reduxjs/toolkit'

const initial= {
    selectedCategories:[],
    filteredCategories:"",
    selects:""
  }

export const filterSlice = createSlice({
  name: 'filters',
  initialState:initial,
  reducers: {
    addToSelectedCategories: (state, action) => {
        state.value = action.payload
      },
      addToFilteredCategories: (state, action) => {
        state.value = action.payload
      },
    addToSelects: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToSelectedCategories,addToFilteredCategories,addToSelects } = filterSlice.actions

export default filterSlice.reducer
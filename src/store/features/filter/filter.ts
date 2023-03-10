import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IFilter{
  selectedCategories:string[],
  filteredCategories:string,
  selects:string
}

const initial:IFilter= {
    selectedCategories:[],
    filteredCategories:"",
    selects:""
  }

export const filterSlice = createSlice({
  name: 'filters',
  initialState:initial,
  reducers: {
    addToSelectedCategories: (state, action:PayloadAction<string[]>) => {
        state.selectedCategories=action.payload;
      },
      addToFilteredCategories: (state, action:PayloadAction<string>) => {
        state.filteredCategories = action.payload;
      },
    addToSelects: (state, action:PayloadAction<string>) => {
      state.selects = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToSelectedCategories,addToFilteredCategories,addToSelects } = filterSlice.actions

export default filterSlice.reducer
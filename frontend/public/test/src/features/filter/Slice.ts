import { createSlice } from '@reduxjs/toolkit'

export interface FilterState {
  value: boolean
}

const initialState: FilterState = {
  value: false,
}

export const filterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    filterOpen: (state) => {
     state.value=true;
     const filterCon = document.querySelector(".filter-content");
     document.documentElement.classList.add("scrollbar-hidden");
     filterCon?.classList.add("blur-sm");
    },
    filterClose: (state) => {
      state.value =false;
      const filterCon = document.querySelector(".filter-content");
      document.documentElement.classList.remove("scrollbar-hidden");
      filterCon?.classList.remove("blur-sm");
    }

  },
})

export const { filterOpen, filterClose } = filterSlice.actions

export default filterSlice.reducer
import { createSlice } from "@reduxjs/toolkit"

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openNav: state => {
      state.isOpen = true
    },
    closeNav: state => {
      state.isOpen = false
    },
    toggleNav: state => {
      state.isOpen = !state.isOpen
    },
  },
})

export const { openNav, closeNav, toggleNav } = navigationSlice.actions

export default navigationSlice.reducer

import { createSlice } from "@reduxjs/toolkit"
import { GetTodos, CreateTodo } from "./../services"

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [GetTodos.fulfilled]: (state, action) => {
      state.todos = action.payload
    },
    [GetTodos.rejected]: (state, action) => {
      state.todos = []
    },
    [CreateTodo.fulfilled]: (state, action) => {
      state.todos.unshift(action.payload)
    },
  },
})

export default todoSlice.reducer

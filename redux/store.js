import { configureStore } from "@reduxjs/toolkit"
import navigationReducer from "./features/slices/navigation-slice"
import todoReducer from "./features/slices/todo-slice"

export default configureStore({
  reducer: {
    navigation: navigationReducer,
    todos: todoReducer,
  },
})

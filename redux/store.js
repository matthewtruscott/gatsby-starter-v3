import { configureStore } from "@reduxjs/toolkit"
import navigationReducer from "./features/navigation-slice"
import todoReducer from "./features/todo-slice"

export default configureStore({
  reducer: {
    navigation: navigationReducer,
    todos: todoReducer,
  },
})

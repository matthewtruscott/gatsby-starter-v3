import { configureStore } from "@reduxjs/toolkit"
import navigationReducer from "./features/navigation-slice"

export default configureStore({
  reducer: {
    navigation: navigationReducer,
  },
})

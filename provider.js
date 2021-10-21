import React, { useState } from "react"
import { Provider } from "react-redux"
import store from "./redux/store"
export const globalContext = React.createContext(null)

const GlobalProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const providerContext = {
    isNavOpen,
    setIsNavOpen,
  }

  return (
    <Provider store={store}>
      <globalContext.Provider value={providerContext}>
        {children}
      </globalContext.Provider>
    </Provider>
  )
}

const wrapper = ({ element }) => <GlobalProvider>{element}</GlobalProvider>

export default wrapper

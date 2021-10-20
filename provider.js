import React, { useState } from "react"

export const globalContext = React.createContext(null)

const GlobalProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const providerContext = {
    isNavOpen,
    setIsNavOpen,
  }

  return (
    <globalContext.Provider value={providerContext}>
      {children}
    </globalContext.Provider>
  )
}

const wrapper = ({ element }) => <GlobalProvider>{element}</GlobalProvider>

export default wrapper

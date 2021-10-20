import React, { useContext } from "react"
import { globalContext } from "../../provider"

const Navigation = () => {
  const { isNavOpen, setIsNavOpen } = useContext(globalContext)

  return (
    <div>
      <button className="p-4 border" onClick={() => setIsNavOpen(!isNavOpen)}>
        {isNavOpen ? "opened" : "closed"}
      </button>
    </div>
  )
}

export default Navigation

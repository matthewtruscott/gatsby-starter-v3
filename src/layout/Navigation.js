import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { toggleNav } from "../../redux/features/navigation-slice"

const Navigation = () => {
  const { isOpen } = useSelector(state => state.navigation)
  const send = useDispatch()
  return (
    <div>
      <button className="p-4 border" onClick={() => send(toggleNav())}>
        {isOpen ? "opened" : "closed"}
      </button>
    </div>
  )
}

export default Navigation

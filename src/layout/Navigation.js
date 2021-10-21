import React, { useContext } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { globalContext } from "../../provider"
import { openNav, toggleNav } from "../../redux/features/navigation-slice"

const Navigation = () => {
  //   const { isNavOpen, setIsNavOpen } = useContext(globalContext)
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

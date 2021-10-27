import { motion } from "framer-motion"
import { Link } from "gatsby"
import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { toggleNav } from "../../redux/features/slices/navigation-slice"

const Navigation = () => {
  const { isOpen } = useSelector(state => state.navigation)

  return (
    <>
      <MenuButton />
      {isOpen && (
        <div className="fixed top-0 left-0 z-50 h-screen p-16 bg-gray-100 w-96">
          <Link to="/" className="text-xl">
            Home
          </Link>
        </div>
      )}
    </>
  )
}

export default Navigation

const MenuButton = () => {
  const send = useDispatch()
  return (
    <div
      className="fixed top-0 right-0 z-50 px-3 py-3 mt-4 mr-4 border shadow-md cursor-pointer rounded-2xl"
      onClick={() => send(toggleNav())}
    >
      <div className="flex flex-col justify-between w-8 h-8 py-1.5">
        <div className="w-full h-0.5 bg-gray-800 rounded-sm"></div>
        <div className="w-full h-0.5 bg-gray-800"></div>
        <div className="w-full h-0.5 bg-gray-800"></div>
      </div>
    </div>
  )
}

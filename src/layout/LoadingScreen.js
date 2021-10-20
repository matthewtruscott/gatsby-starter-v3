import { AnimatePresence, motion } from "framer-motion"
import React, { useEffect } from "react"
import { useState } from "react"

const LoadingScreen = () => {
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setHasLoaded(true), 1000)
  }, [])

  return (
    <AnimatePresence>
      {!hasLoaded && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center space-y-40 bg-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <Loader />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen

const Loader = () => {
  return (
    <motion.div
      className="relative mb-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className="text-lg">Loading...</div>
    </motion.div>
  )
}

import { useEffect, useState } from "react"
import { useWindowSize } from "react-use"

const mediaQueries = {
  desktop: 2520,
  smdesktop: 1919,
  laptop: 1599,
  smlaptop: 1365,
  tablet: 1023,
  smtablet: 767,
  mobile: 479,
}

export const useMatchMedia = size => {
  const [isMatching, setIsMatching] = useState(false)
  const { width } = useWindowSize()

  useEffect(() => {
    if (!mediaQueries[size]) return false
    setIsMatching(mediaQueries[size] > window.innerWidth)
  }, [width, size])

  return isMatching
}

export const select = query => {
  return document.querySelector(query)
}
export const selectAll = query => {
  return document.querySelectorAll(query)
}

export const useLogStateOnUpdate = (label, state) => {
  useEffect(() => {
    console.log(label, state)
  }, [state, label])
}
